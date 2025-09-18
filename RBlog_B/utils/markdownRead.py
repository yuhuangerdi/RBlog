def readMdFile(filePath: str) -> str:
    try:
        # 使用utf-8编码打开文件，确保中文等特殊字符能正确读取
        with open(filePath, 'r', encoding='utf-8') as file:
            content = file.read()
        return content
    except FileNotFoundError:
        raise FileNotFoundError(f"指定的Markdown文件不存在: {filePath}")
    except Exception as e:
        raise IOError(f"读取文件时发生错误: {str(e)}")