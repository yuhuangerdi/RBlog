import { ElMessageBox } from 'element-plus'

export default function(){
    function alertCC(){
        ElMessageBox.alert(
            `
            <div class="cc-content">
                <h3 class="cc-title">知识共享许可协议 (CC-BY-NC-SA)</h3>
                <ul class="cc-list">
                    <li>1、您可以转载、修改，但请注明出处，并在RBlog留言处留言或联系博主</li>
                    <li>2、RBlog文章不得用于商业用途</li>
                    <li>3、新作品及其衍生物须遵循相同协议</li>
                </ul>
                <div class="cc-note">
                    本协议遵循 Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                </div>
            </div>
            `,
            '版权声明', // 第二个参数明确为标题
            {
                confirmButtonText: '我知道了',
                dangerouslyUseHTMLString: true,
                customClass: 'cc-dialog',
                center: true, // 修正属性名：centered → center
                closeOnClickModal: true,
                showClose: true
            }
        )
    }
    return { alertCC }
}