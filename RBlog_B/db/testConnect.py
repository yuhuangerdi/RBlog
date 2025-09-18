from db.connection import db  # 导入你的数据库连接实例（PooledMySQLDatabase）


def test_db_connection():
    try:
        # 尝试连接数据库
        db.connect()
        print("✅ 数据库连接成功！")

        # 可选：执行一个简单查询（如查询数据库版本）验证可用性
        if db.is_connection_usable():
            cursor = db.execute_sql("SELECT VERSION()")
            version = cursor.fetchone()[0]
            print(f"📌 数据库版本：{version}")

    except Exception as e:
        print(f"❌ 数据库连接失败：{str(e)}")
    finally:
        # 测试完成后关闭连接（避免占用连接池）
        if not db.is_closed():
            db.close()
            print("🔌 连接已关闭")


if __name__ == "__main__":
    test_db_connection()