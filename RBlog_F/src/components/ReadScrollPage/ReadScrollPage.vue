<template>
  <div class="read-scroll-page">
    <article class="article-content" v-html="compiledMarkdown"></article>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, nextTick } from 'vue';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

export default defineComponent({
  name: 'ReadScrollPage',
  props: {
    articleContent: {
      type: String,
      required: true
    }
  },
  emits: ['headingsUpdated'],
  setup(props, { emit }) {
    const compiledMarkdown = ref<string>('');
    
    const md:any = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            const code = hljs.highlight(str, { 
              language: lang, 
              ignoreIllegals: true 
            }).value;
            
            return `<div class="code-block">
                      <div class="code-header">
                        <span class="language-label">${lang}</span>
                        <button class="copy-button" onclick="copyCode(this)">复制</button>
                      </div>
                      <pre><code class="hljs ${lang}">${code}</code></pre>
                    </div>`;
          } catch (__) {}
        }

        return `<div class="code-block">
                  <div class="code-header">
                    <span class="language-label">plaintext</span>
                    <button class="copy-button" onclick="copyCode(this)">复制</button>
                  </div>
                  <pre><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>
                </div>`;
      }
    });

    const compileMarkdown = () => {
      if (props.articleContent) {
        compiledMarkdown.value = md.render(props.articleContent);
        
        nextTick(() => {
          extractHeadings();
        });
      }
    };

    const extractHeadings = () => {
      const headingElements = document.querySelectorAll('h1, h2, h3, h4');
      const headings = Array.from(headingElements).map((el, index) => {
        const id = el.id || `heading-${index}`;
        if (!el.id) el.id = id;
        
        return {
          id,
          text: el.textContent?.replace('#', '').trim() || '',
          level: parseInt(el.tagName.substring(1))
        };
      });
      
      emit('headingsUpdated', headings);
    };

    onMounted(() => {
      // @ts-ignore
      window.copyCode = function(button: HTMLButtonElement) {
        const codeBlock = button.closest('.code-block');
        const codeElement = codeBlock?.querySelector('code');
        if (!codeElement) return;
        
        const text = codeElement.textContent || '';
        navigator.clipboard.writeText(text).then(() => {
          const originalText = button.textContent;
          button.textContent = '已复制!';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        });
      };
    });

    watch(() => props.articleContent, compileMarkdown, { immediate: true });

    return {
      compiledMarkdown
    };
  }
});
</script>

<style>
    @import "../../styles/read-scroll-page/read-scroll-page.css";
</style>