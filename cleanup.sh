#!/bin/bash

# AI创意工坊 - 项目清理脚本
# 用于清理大文件，减小项目体积

echo "🧹 开始清理项目..."
echo ""

# 1. 清理构建缓存
echo "1. 清理 .next 构建缓存..."
rm -rf .next
echo "   ✅ 已清理 .next 文件夹"

# 2. 清理npm缓存
echo ""
echo "2. 清理 npm 缓存..."
npm cache clean --force
echo "   ✅ 已清理 npm 缓存"

# 3. 可选：清理node_modules并重新安装
echo ""
read -p "3. 是否重新安装依赖包？(y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "   正在删除 node_modules..."
    rm -rf node_modules
    echo "   ✅ 已删除 node_modules"
    
    echo "   正在删除 package-lock.json..."
    rm -f package-lock.json
    echo "   ✅ 已删除 package-lock.json"
    
    echo "   正在重新安装依赖..."
    npm install
    echo "   ✅ 依赖安装完成"
fi

echo ""
echo "🎉 清理完成！"
echo ""
echo "📊 清理后的文件大小："
du -sh .
echo ""
echo "💡 提示："
echo "   - 清理后重新运行 'npm run dev' 启动开发服务器"
echo "   - .next 和 node_modules 已被 .gitignore 忽略，不会提交到 Git"
echo ""
