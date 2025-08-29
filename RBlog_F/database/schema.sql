-- MySQL 8.0 数据库建表语句
-- 使用InnoDB引擎和utf8mb4字符集支持中文及表情符号

/* 文章表 */
CREATE TABLE `articles` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '文章ID',
  `title` VARCHAR(120) NOT NULL COMMENT '文章标题',
  `summary` VARCHAR(300) NOT NULL COMMENT '摘要',
  `md_path` VARCHAR(255) NOT NULL COMMENT 'MD文件存储路径',
  `category_id` INT UNSIGNED NOT NULL COMMENT '分类ID',
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `status` ENUM('draft', 'published') NOT NULL DEFAULT 'draft' COMMENT '状态',
  `cover` VARCHAR(255) COMMENT '封面图路径',
  `views` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '阅读量',
  KEY `idx_category` (`category_id`),
  KEY `idx_status` (`status`),
  CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/* 分类表 */
CREATE TABLE `categories` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(30) NOT NULL UNIQUE COMMENT '分类名称',
  `sort` TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '排序权重',
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/* 标签表 */
CREATE TABLE `tags` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(20) NOT NULL UNIQUE COMMENT '标签名称',
  `create_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/* 文章-标签关系表 */
CREATE TABLE `article_tag_relation` (
  `article_id` INT UNSIGNED NOT NULL,
  `tag_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`article_id`, `tag_id`),
  KEY `idx_tag` (`tag_id`),
  FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/* 文件存储表 */
CREATE TABLE `files` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `original_name` VARCHAR(255) NOT NULL COMMENT '原始文件名',
  `storage_path` VARCHAR(255) NOT NULL UNIQUE COMMENT '存储路径',
  `file_type` ENUM('md', 'image', 'video', 'other') NOT NULL,
  `upload_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `idx_filetype` (`file_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;