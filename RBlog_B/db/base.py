from peewee import Model, DateTimeField
from datetime import datetime
from db.connection import db  # 关联数据库连接实例

class BaseModel(Model):
    # 基础模型：所有Peewee业务模型必须继承此类
    # 公共字段：所有表都包含“创建时间”和“更新时间”
    created_at = DateTimeField(default=datetime.now, verbose_name="创建时间")
    updated_at = DateTimeField(default=datetime.now, verbose_name="更新时间")

    def save(self, *args, **kwargs):
        """重写save方法：每次保存时自动更新updated_at"""
        self.updated_at = datetime.now()  # 覆盖更新时间
        return super().save(*args, **kwargs)  # 调用父类save方法

    class Meta:
        database = db  # 绑定数据库连接（所有子类自动继承此配置）
        timestamps = False  # 禁用Peewee自带的timestamps功能（用自定义逻辑）