import { ElMessageBox } from 'element-plus'

export default function(){
    function alertCC(){
    ElMessageBox.alert(
    // 第1个参数：message（HTML内容）
    `
    <div class="cc-content">
        <style>
        /* 控制模态框背景和弹窗样式 */
        .cc-dialog {
            --el-modal-background-color: rgba(10, 12, 16, 0.85) !important;
            backdrop-filter: blur(4px);
        }
        .cc-dialog .el-message-box {
            box-shadow: 0 8px 24px rgba(255,255,255,0.15) !important;
            background: #2c3038 !important;
            border-radius: 8px !important;
        }
        /* 内容样式 */
        .cc-content {
            padding: 20px; 
            color: #ffffff; 
            font-family: 'Microsoft YaHei', sans-serif; 
            transition: all 0.35s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .cc-content:hover { 
            transform: scale(1.02); 
        }
        .cc-title {
            margin: 0 0 16px; 
            font-size: 20px; 
            font-weight: 600; 
            color: #4fc3f7; 
            border-bottom: 1px solid rgba(255,255,255,0.1); 
            padding-bottom: 8px;
        }
        .cc-list {
            list-style: none; 
            padding: 0; 
            margin: 0;
        }
        .cc-list li {
            padding-left: 28px; 
            margin-bottom: 12px; 
            line-height: 1.6; 
            position: relative;
        }
        .cc-list li span {
            position: absolute; 
            left: 0; 
            top: 2px; 
            color: #4fc3f7; 
            font-weight: bold;
        }
        .cc-note {
            margin-top: 16px; 
            padding-top: 16px; 
            border-top: 1px solid rgba(255,255,255,0.1); 
            font-size: 14px; 
            color: #ccc; 
            line-height: 1.4;
        }
        </style>

        <h3 class="cc-title" style="text-align: center;">知识共享许可协议 (CC-BY-NC-SA)</h3>
        <ul class="cc-list" style="color: #000000ff; text-align: justify;">
        <li><span>❶</span>您可以转载、修改，但请注明出处，并在RBlog留言处留言或联系博主</li>
        <li><span>❷</span>RBlog文章不得用于商业用途</li>
        <li><span>❸</span>新作品及其衍生物须遵循相同协议</li>
        </ul>
        <div class="cc-note">
        本协议遵循 Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
        </div>
    </div>
    `,
    // 第2个参数：title（标题字符串，必须显式传入）
    '版权声明',
    // 第3个参数：options（严格匹配ElMessageBoxOptions类型）
    {
        confirmButtonText: '我知道了',
        dangerouslyUseHTMLString: true,
        customClass: 'cc-dialog', // 用于样式穿透的自定义类
        center: true, // 关键修正：根据错误提示，用center替代centered
        closeOnClickModal: true,
        showClose: true,
    }
    )
        }
    return { alertCC }
}