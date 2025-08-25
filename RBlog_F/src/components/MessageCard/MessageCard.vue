<template>
  <div class="message-card">
    <!-- 写留言区域 -->
    <div class="message-input-area">
      <h4 class="input-title">发表留言</h4>
      <el-form :model="messageForm" :rules="messageRules" ref="messageFormRef" label-width="60px">
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="messageForm.nickname" placeholder="请输入您的昵称" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="messageForm.email" placeholder="请输入您的邮箱" />
        </el-form-item>
        <el-form-item label="留言" prop="content">
          <el-input
            v-model="messageForm.content"
            type="textarea"
            :rows="4"
            placeholder="写下你的留言..."
          />
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item label="验证码" prop="captcha">
          <div class="captcha-container">
            <el-input
              v-model="messageForm.captcha"
              placeholder="请输入验证码"
              class="captcha-input"
            />
            <div class="captcha-code" @click="generateCaptcha">
              {{ captchaCode }}
            </div>
            <el-icon class="captcha-refresh" @click="generateCaptcha">
              <Refresh />
            </el-icon>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitMessage"
            :loading="isSubmitting"
          >
            提交留言
          </el-button>
          <p class="comment-note">留言提交后将进入审核，审核通过后显示</p>
        </el-form-item>
      </el-form>
    </div>

    <!-- 评论列表 -->
    <div class="message-comments">
      <h4 class="comments-title">留言</h4>
      <div v-if="messages.length === 0" class="no-messages">
        暂无留言，快来抢沙发吧~
      </div>
      
      <!-- 一级评论 -->
      <div class="comment-item lv1" v-for="(message, index) in messages" :key="index">
        <div class="comment-header">
          <span class="comment-author">{{ message.nickname }}</span>
          <span class="comment-date">{{ message.date }}</span>
        </div>
        <p class="comment-content">{{ message.comment }}</p>
        
        <!-- 回复按钮 -->
        <button class="reply-btn" @click="toggleReply(index, message.nickname)">
          {{ activeReplyIndex === index && currentRespondent === message.nickname ? '取消回复' : '回复' }}
        </button>
        
        <!-- 回复输入区域 -->
        <div class="reply-input-area" v-if="activeReplyIndex === index">
          <el-form :model="replyForm" :rules="replyRules" :ref="(el) => setReplyFormRef(el, index)" label-width="60px">
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="replyForm.nickname" placeholder="请输入您的昵称" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="replyForm.email" placeholder="请输入您的邮箱" />
            </el-form-item>
            <el-form-item label="回复" prop="content">
              <el-input
                v-model="replyForm.content"
                type="textarea"
                :rows="2"
                :placeholder="`回复@${message.nickname}...`"
              />
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item label="验证码" prop="captcha">
              <div class="captcha-container">
                <el-input
                  v-model="replyForm.captcha"
                  placeholder="请输入验证码"
                  class="captcha-input"
                />
                <div class="captcha-code" @click="generateCaptcha">
                  {{ captchaCode }}
                </div>
                <el-icon class="captcha-refresh" @click="generateCaptcha">
                  <Refresh />
                </el-icon>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="submitReply"
                :loading="isSubmitting"
              >
                提交回复
              </el-button>
              <p class="comment-note">回复提交后将进入审核，审核通过后显示</p>
            </el-form-item>
          </el-form>
        </div>
        
        <!-- 二级评论列表 -->
        <div class="lv2-comments" v-if="message.children && message.children.length > 0">
          <div class="comment-item lv2" v-for="(child, childIndex) in message.children" :key="childIndex">
            <div class="comment-header">
              <span class="comment-author">{{ child.nickname }}</span>
              <span class="reply-to">回复 @{{ child.respondent }}</span>
              <!-- 二级评论回复按钮 -->
              <button class="reply-btn lv2-reply-btn" @click="toggleReply(index, child.nickname)">
                回复
              </button>
              <span class="comment-date">{{ child.date }}</span>
            </div>
            <p class="comment-content">{{ child.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    export default {
        name: 'MessageCard'
    }
</script>

<script lang="ts" setup>
    import { Star, Comment, Refresh } from '@element-plus/icons-vue';
    import { ElSkeleton, ElButton, ElIcon, ElInput, ElForm, ElFormItem } from 'element-plus';
    import useMessageCard from '../../hooks/useMessageCard/useMessageCard';

    const {
        messages,
        isSubmitting,
        messageFormRef,
        replyFormRefs,
        activeReplyIndex,
        captchaCode,
        messageForm,
        replyForm,
        generateCaptcha,
        messageRules,
        replyRules,
        fetchMessages,
        submitMessage,
        submitReply,
        toggleReply,
        setReplyFormRef,
        currentRespondent,
    } = useMessageCard();
</script>

<style scoped>
    @import "../../styles/message-card/message-card.css";
</style>