<template>
  <div class="feeling-detail-card">
    <!-- 文章内容 -->
    <div class="feeling-content-wrapper">
      <!-- 卡片头部：标题、作者、日期 -->
      <div class="feeling-detail-header">
        <h3 class="feeling-detail-title">{{ feeling?.title }}</h3>
        <div class="feeling-detail-meta">
          <span class="feeling-detail-author">{{ feeling?.author }}</span>
          <span class="feeling-detail-date">{{ feeling?.date }}</span>
        </div>
      </div>

      <!-- 卡片内容：可折叠的文章内容 -->
      <div class="feeling-detail-content">
        <p class="feeling-content-text">
          {{ isExpanded ? feeling?.content : `${feeling?.content.slice(0, 150)}...` }}
        </p>
        <span 
          v-if="feeling?.content.length > 150"
          class="feeling-content-toggle" 
          @click="toggleExpand"
        >
          {{ isExpanded ? '收起' : '展开' }}
        </span>
      </div>

      <!-- 互动区：点赞、评论数 -->
      <div class="feeling-detail-actions">
        <span 
          class="feeling-like-count" 
          @click="handleLike"
          :class="{ 'has-liked': hasLiked }"
        >
          <el-icon><Star /></el-icon>{{ feeling?.likeCount }}
        </span>
        <span 
          class="feeling-comment-count"
          @click="showCommentArea = !showCommentArea"
        >
          <el-icon><Comment /></el-icon>{{ feeling?.commentCount }}
          <span class="comment-toggle-text">{{ showCommentArea ? '收起评论' : '写评论' }}</span>
        </span>
      </div>

      <!-- 写评论区域 - 点击评论按钮才显示 -->
      <div class="comment-input-area" v-if="showCommentArea">
        <el-form :model="commentForm" :rules="commentRules" ref="commentFormRef" label-width="60px">
          <el-form-item label="昵称" prop="nickname">
            <el-input v-model="commentForm.nickname" placeholder="请输入您的昵称" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="commentForm.email" placeholder="请输入您的邮箱" />
          </el-form-item>
          <el-form-item label="评论" prop="content">
            <el-input
              v-model="commentForm.content"
              type="textarea"
              :rows="3"
              placeholder="写下你的评论..."
            />
          </el-form-item>
          <!-- 新增验证码 -->
          <el-form-item label="验证码" prop="captcha">
            <div class="captcha-container">
              <el-input 
                v-model="commentForm.captcha" 
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
              @click="submitComment"
              :loading="isSubmitting"
            >
              提交评论
            </el-button>
            <p class="comment-note">评论提交后将进入审核，审核通过后显示</p>
          </el-form-item>
        </el-form>
      </div>

      <!-- 评论列表 -->
      <div class="feeling-comments">
        <h4 class="comments-title">评论</h4>
        <div v-if="feeling?.comments.length === 0" class="no-comments">
          暂无评论，快来抢沙发吧~
        </div>
        <div class="comment-item" v-for="(comment, index) in feeling?.comments" :key="index">
          <p class="comment-content">{{ comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    export default {
        name: 'FeelingCard'
    }
</script>

<script lang="ts" setup>
    import { Star, Comment, Refresh } from '@element-plus/icons-vue';
    import { ElSkeleton, ElButton, ElIcon, ElInput, ElForm, ElFormItem } from 'element-plus';
    import useFeelingCard from '../../hooks/useFeelingCard/useFeelingCard';

    let props = defineProps(['feelingId']);
    const {
        feeling,
        isExpanded,
        hasLiked,
        isSubmitting,
        commentFormRef,
        showCommentArea,
        captchaCode,
        commentForm,
        generateCaptcha,
        commentRules,
        fetchFeeling,
        handleLike,
        submitComment,
        toggleExpand,
    } = useFeelingCard(props.feelingId);
</script>

<style scoped>
    @import "../../styles/feeling-card/feeling-card.css";
</style>
