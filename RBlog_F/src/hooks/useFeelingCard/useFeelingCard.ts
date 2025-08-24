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
        let feelingCatalogueResult = await axios.get(`http://127.0.0.1:4523/m1/5985264-5673651-default/api/FeelingContent?id=${id}`)
        // 这里可以根据实际API返回结构进行调整
        return {
            title: feelingCatalogueResult.data.title || "现代前端开发中的组件设计原则",
            author: feelingCatalogueResult.data.author || "张开发",
            content: feelingCatalogueResult.data.content || "在现代前端开发中，组件化已经成为主流的开发模式...",
            date: feelingCatalogueResult.data.date || "2023-10-15",
            likeCount: feelingCatalogueResult.data.likeCount || 245,
            commentCount: feelingCatalogueResult.data.commentCount || 4,
            comments: feelingCatalogueResult.data.comments || [
                "非常赞同作者的观点，单一职责原则确实很重要",
                "请问如何平衡组件的可复用性和业务特异性呢？",
                "写得很全面，学习了",
                "期待后续关于组件测试的详细讲解"
            ]
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
                    // 从API获取数据并存储到feelingCatalogueResult变量
                    const response = await fetch('http://127.0.0.1:4523/m1/5985264-5673651-default/api/FeelingCatalogue');
                    
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    
                    // 存储获取到的数据
                    const feelingCatalogueResult = await response.json();
                    console.log('获取到的目录数据:', feelingCatalogueResult);
                    
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
