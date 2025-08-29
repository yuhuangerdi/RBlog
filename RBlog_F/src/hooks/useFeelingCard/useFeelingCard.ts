import { ref, onMounted, reactive, computed } from 'vue';
import { ElMessage, } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus/es/components/form';
import type { FeelingInter, CommentFormInter } from '../../types';
import axios from 'axios';

export default function(id:number) {
    // 响应式变量定义
    const feeling = ref<FeelingInter>({
        title: '',
        author: '',
        content: '',
        date: '',
        likeCount: 0,
        commentCount: 0,
        comments: []
    });
    const isExpanded = ref(false);
    const isLoading = ref(true);
    const error = ref<string | null>(null);
    const hasLiked = ref(false);
    const isSubmitting = ref(false);
    const commentFormRef = ref<FormInstance | null>(null);
    const showCommentArea = ref(false);
    const captchaCode = ref(''); // 验证码内容

    // 评论表单数据
    const commentForm = reactive<CommentFormInter>({
        nickname: '',
        email: '',
        content: '',
        captcha: '' // 验证码输入
    });

    // 生成随机验证码
    const generateCaptcha = () => {
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let code = '';
        for (let i = 0; i < 4; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        captchaCode.value = code;
        commentForm.captcha = ''; // 清空输入
    };

    // 验证码验证规则
    const validateCaptcha = (rule: any, value: string, callback: any) => {
        if (!value) {
            return callback(new Error('请输入验证码'));
        }
        if (value.toUpperCase() !== captchaCode.value) {
            return callback(new Error('验证码不正确'));
        }
        callback();
    };

    // 评论表单验证规则
    const commentRules = reactive<FormRules>({
        nickname: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 2, max: 16, message: '昵称长度在 2 到 16 个字符', trigger: 'blur' }
        ],
        email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] }
        ],
        content: [
            { required: true, message: '请输入评论内容', trigger: 'blur' },
            { min: 5, max: 500, message: '评论长度在 5 到 500 个字符', trigger: 'blur' }
        ],
        captcha: [
            { required: true, validator: validateCaptcha, trigger: 'blur' }
        ]
    });

    // 从API获取数据
    async function fetchFeeling() {
        let feelingCatalogueResult = await axios.get(`/api/feeling/content/1`)
        // 这里可以根据实际API返回结构进行调整
        return {
            title: feelingCatalogueResult.data.title,
            author: feelingCatalogueResult.data.author,
            content: feelingCatalogueResult.data.content,
            date: feelingCatalogueResult.data.date,
            likeCount: feelingCatalogueResult.data.likeCount,
            commentCount: feelingCatalogueResult.data.commentCount,
            comments: feelingCatalogueResult.data.comments
        };
    };

    // 处理点赞功能
    const handleLike = () => {
        if (feeling.value && !hasLiked.value) {
            feeling.value.likeCount++;
            hasLiked.value = true;
        }
    };

    // 提交评论 - 增加验证码验证
    const submitComment = async () => {
        if (!commentFormRef.value) return;
        
        // 表单验证
        await commentFormRef.value.validate(async (valid) => {
            if (valid) {
                isSubmitting.value = true;    
                try {
                    // 准备发送到后端的评论数据
                    const commentData = {
                        ...commentForm,
                        feelingId: feeling.value?.title // 实际项目中应使用文章ID
                    };
                    
                    // 这里可以添加实际提交评论的API调用
                    // 例如: await submitCommentToAPI(commentData);
                    
                    // 评论成功处理
                    commentFormRef.value?.resetFields();
                    showCommentArea.value = false;
                    generateCaptcha(); // 刷新验证码
                    
                    // 提示用户评论已提交待审核
                    ElMessage.success('评论已提交，等待审核通过后显示');
                } catch (err) {
                    console.error('操作失败:', err);
                    ElMessage.error('操作失败，请稍后再试');
                } finally {
                    isSubmitting.value = false;
                }
            }
        });
    };

    // 组件挂载时获取数据并生成初始验证码
    onMounted(async () => {
        generateCaptcha(); // 生成初始验证码
        
        try {
            isLoading.value = true;
            const data = await fetchFeeling();
            feeling.value = data;
            error.value = null;
        } catch (err) {
            error.value = err instanceof Error ? err.message : "加载数据时发生错误";
            console.error("数据获取失败:", err);
        } finally {
            isLoading.value = false;
        }
    });

    // 切换内容展开/折叠状态
    const toggleExpand = () => {
        isExpanded.value = !isExpanded.value;
    };

    return{
        feeling,
        isExpanded,
        isLoading,
        error,
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
    };
}
