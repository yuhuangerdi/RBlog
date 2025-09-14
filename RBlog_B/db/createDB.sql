CREATE DATABASE IF NOT EXISTS rblog
DEFAULT CHARACTER SET utf8;
USE rblog;

CREATE TABLE IF NOT EXISTS info (
    id INT PRIMARY KEY,
    avatar_url VARCHAR(255) DEFAULT "",
    nickname VARCHAR(50) NOT NULL,
    personal_signature VARCHAR(500) DEFAULT "",
    article_count INT DEFAULT 0,
    category_count INT DEFAULT 2,
    tag_count INT GENERATED ALWAYS AS (category_count - 2) STORED,
    filing VARCHAR(100) DEFAULT ""
);

CREATE TABLE IF NOT EXISTS article (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    comment_count INT DEFAULT 0,
    view_count INT DEFAULT 0,
    summary VARCHAR(500) NOT NULL,
    author VARCHAR(50) NOT NULL,
    tag VARCHAR(100) NOT NULL,
    pub_date DATE NOT NULL,
    date_number INT GENERATED ALWAYS AS (YEAR(pub_date)*12+MONTH(pub_date)) STORED,
    category_id int NOT NULL
);

CREATE TABLE IF NOT EXISTS feeling (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    comment_count INT DEFAULT 0,
    star_count INT DEFAULT 0,
    pub_date DATE NOT NULL,
    author VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS about (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    pub_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS home_article (
    id INT PRIMARY KEY AUTO_INCREMENT,
    article_id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS droplist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(500) NOT NULL,
    belong VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS side_card (
    id INT PRIMARY KEY AUTO_INCREMENT,
    visitor_count INT DEFAULT 0,
    reading_count INT GENERATED ALWAYS AS (ROUND(visitor_count * 1.545)) STORED
);

CREATE TABLE IF NOT EXISTS side_card_saying (
    id INT PRIMARY KEY AUTO_INCREMENT,
    saying VARCHAR(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS page_banner_content (
    id INT PRIMARY KEY AUTO_INCREMENT,
    belong_page VARCHAR(100) NOT NULL,
    CN VARCHAR(500) NOT NULL,
    EN VARCHAR(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_path VARCHAR(255) NOT NULL,
    tag_name VARCHAR(100) NOT NULL,
    tag_description VARCHAR(500) NOT NULL
);

INSERT INTO info (
    id, avatar_url, nickname, personal_signature, 
    article_count, category_count, filing
) VALUES (
    1, NULL, "Ryan", NULL, 0, 0, NULL
);

DELIMITER //

CREATE TRIGGER article_insert AFTER INSERT ON article FOR EACH ROW
BEGIN
    UPDATE info SET article_count = article_count + 1 WHERE id = 1;
END //

CREATE TRIGGER feeling_insert AFTER INSERT ON feeling FOR EACH ROW
BEGIN
    UPDATE info SET article_count = article_count + 1 WHERE id = 1;
END //

CREATE TRIGGER article_delete AFTER DELETE ON article FOR EACH ROW
BEGIN
    UPDATE info SET article_count = article_count - 1 WHERE id = 1;
END //

CREATE TRIGGER feeling_delete AFTER DELETE ON feeling FOR EACH ROW
BEGIN
    UPDATE info SET article_count = article_count - 1 WHERE id = 1;
END //

DELIMITER ;

