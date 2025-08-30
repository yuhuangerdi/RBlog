import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus/es/components/form';
import type { CommentFormInter } from '../../types';

export default function() {
    // 响应式变量定义
    const isSubmitting = ref(false);
    const messageFormRef = ref<FormInstance | null>(null);
    const replyFormRefs = ref<FormInstance[]>([]);
    const activeReplyIndex = ref<number | null>(null);
    const currentRespondent = ref<string>(''); // 当前回复的对象
    const captchaCode = ref(''); // 验证码内容

    // 留言表单数据
    const messageForm = reactive<CommentFormInter>({
        nickname: '',
        email: '',
        content: '',
        captcha: '' // 验证码输入
    });

    // 回复表单数据
    const replyForm = reactive<CommentFormInter>({
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
        messageForm.captcha = ''; // 清空输入
        replyForm.captcha = ''; // 清空回复输入
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

    // 留言表单验证规则
    const messageRules = reactive<FormRules>({
        nickname: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 2, max: 16, message: '昵称长度在 2 到 16 个字符', trigger: 'blur' }
        ],
        email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] }
        ],
        content: [
            { required: true, message: '请输入留言内容', trigger: 'blur' },
            { min: 5, max: 500, message: '留言长度在 5 到 500 个字符', trigger: 'blur' }
        ],
        captcha: [
            { required: true, validator: validateCaptcha, trigger: 'blur' }
        ]
    });

    // 回复表单验证规则
    const replyRules = reactive<FormRules>({
        nickname: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 2, max: 16, message: '昵称长度在 2 到 16 个字符', trigger: 'blur' }
        ],
        email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] }
        ],
        content: [
            { required: true, message: '请输入回复内容', trigger: 'blur' },
            { min: 5, max: 300, message: '回复长度在 5 到 300 个字符', trigger: 'blur' }
        ],
        captcha: [
            { required: true, validator: validateCaptcha, trigger: 'blur' }
        ]
    });


    // 提交留言
    const submitMessage = async () => {
        if (!messageFormRef.value) return;
        
        // 表单验证
        await messageFormRef.value.validate(async (valid) => {
            if (valid) {
                isSubmitting.value = true;
                
                try {
                    // 准备发送到后端的留言数据
                    const messageData = {
                        ...messageForm,
                        type: 'message' // 标识为留言
                    };
                    
                    // 这里可以添加实际提交留言的API调用
                    // 例如: await submitMessageToAPI(messageData);                    
                    // 留言成功处理
                    messageFormRef.value?.resetFields();
                    generateCaptcha(); // 刷新验证码
                    
                    // 提示用户留言已提交待审核
                    ElMessage.success('留言已提交，等待审核通过后显示');
                } catch (err) {
                    console.error('提交留言失败:', err);
                    ElMessage.error('提交留言失败，请稍后再试');
                } finally {
                    isSubmitting.value = false;
                }
            }
        });
    };

    // 设置回复表单引用
    const setReplyFormRef = (el: any, index: number) => {
        if (el) {
            replyFormRefs.value[index] = el;
        }
    };

    // 提交回复
    const submitReply = async () => {
        if (activeReplyIndex.value === null) return;
        const formInstance = replyFormRefs.value[activeReplyIndex.value];
        if (!formInstance) return;
        
        // 表单验证
        await formInstance.validate(async (valid) => {
            if (valid) {
                isSubmitting.value = true;
                
                try {
                    // 准备发送到后端的回复数据
                    const replyData = {
                        ...replyForm,
                        respondent: currentRespondent.value, // 回复的对象
                        type: 'reply' // 标识为回复
                    };
                    
                    // 这里可以添加实际提交回复的API调用
                    // 例如: await submitReplyToAPI(replyData);                    
                    // 回复成功处理
                    formInstance.resetFields();
                    activeReplyIndex.value = null; // 关闭回复区域
                    generateCaptcha(); // 刷新验证码
                    
                    // 提示用户回复已提交待审核
                    ElMessage.success('回复已提交，等待审核通过后显示');
                } catch (err) {
                    console.error('提交回复失败:', err);
                    ElMessage.error('提交回复失败，请稍后再试');
                } finally {
                    isSubmitting.value = false;
                }
            }
        });
    };

    // 切换回复区域显示并设置回复对象
    const toggleReply = (index: number, respondent: string = '') => {
        if (activeReplyIndex.value === index) {
            activeReplyIndex.value = null;
            currentRespondent.value = '';
        } else {
            activeReplyIndex.value = index;
            currentRespondent.value = respondent;
            // 清空回复表单
            const formInstance = replyFormRefs.value[index];
            if (formInstance) {
                formInstance.resetFields();
            }
        }
    };

    // 组件挂载时生成初始验证码
    generateCaptcha(); // 生成初始验证码

    return{
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
        submitMessage,
        submitReply,
        toggleReply,
        setReplyFormRef,
        currentRespondent,
    };
}