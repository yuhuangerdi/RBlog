from playhouse.pool import PooledMySQLDatabase #type:ignore

from core.config import settings

db = PooledMySQLDatabase(
    database = settings.DB_NAME,
    host = settings.DB_HOST,
    port = settings.DB_PORT,
    user = settings.DB_USER,
    password = settings.DB_PASSWORD,
    charset = "utf8mb4",
    stale_timeout = 300
)