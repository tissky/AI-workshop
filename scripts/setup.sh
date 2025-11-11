#!/bin/bash

# AI创意工坊 - 自动化设置脚本
# 此脚本自动化项目配置、依赖安装和部署准备流程

set -e  # 遇到错误立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_header() {
    echo ""
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
}

# 欢迎消息
clear
echo -e "${BLUE}"
cat << "EOF"
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║           🚀 AI创意工坊 - 项目设置向导 🚀                  ║
║                                                           ║
║   自动化配置、依赖安装和部署准备流程                         ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
EOF
echo -e "${NC}"
sleep 1

# =============================================================================
# 第一步: 验证Node.js和npm版本
# =============================================================================
print_header "第一步: 验证环境"

print_info "检查Node.js版本..."
if ! command -v node &> /dev/null; then
    print_error "未检测到Node.js！请安装Node.js 18.0或更高版本"
    exit 1
fi

NODE_VERSION=$(node -v | sed 's/v//')
REQUIRED_NODE_VERSION="18.0.0"

print_info "当前Node.js版本: v${NODE_VERSION}"

# 简单版本比较（仅比较主版本）
NODE_MAJOR=$(echo $NODE_VERSION | cut -d. -f1)
REQUIRED_MAJOR=$(echo $REQUIRED_NODE_VERSION | cut -d. -f1)

if [ "$NODE_MAJOR" -lt "$REQUIRED_MAJOR" ]; then
    print_error "Node.js版本过低！需要 >= ${REQUIRED_NODE_VERSION}，当前版本: ${NODE_VERSION}"
    exit 1
fi

print_success "Node.js版本符合要求 (>= ${REQUIRED_NODE_VERSION})"

print_info "检查npm版本..."
if ! command -v npm &> /dev/null; then
    print_error "未检测到npm！请安装npm"
    exit 1
fi

NPM_VERSION=$(npm -v)
print_info "当前npm版本: ${NPM_VERSION}"
print_success "npm已安装"

# =============================================================================
# 第二步: 安装项目依赖
# =============================================================================
print_header "第二步: 安装依赖"

print_info "正在安装npm依赖包..."
print_warning "这可能需要几分钟时间，请耐心等待..."

if npm install; then
    print_success "依赖安装成功！"
else
    print_error "依赖安装失败！请检查错误信息"
    exit 1
fi

# =============================================================================
# 第三步: 检查Vercel CLI
# =============================================================================
print_header "第三步: 检查Vercel CLI"

if command -v vercel &> /dev/null; then
    VERCEL_VERSION=$(vercel --version)
    print_success "Vercel CLI已安装 (版本: ${VERCEL_VERSION})"
else
    print_warning "未检测到Vercel CLI"
    echo ""
    read -p "是否安装Vercel CLI？这将允许你使用命令行部署项目 [y/N]: " install_vercel
    
    if [[ $install_vercel =~ ^[Yy]$ ]]; then
        print_info "正在全局安装Vercel CLI..."
        if npm install -g vercel; then
            print_success "Vercel CLI安装成功！"
        else
            print_warning "Vercel CLI安装失败。你仍可以使用GitHub集成方式部署"
        fi
    else
        print_info "跳过Vercel CLI安装"
        print_info "你可以稍后使用以下命令安装: npm install -g vercel"
    fi
fi

# =============================================================================
# 第四步: 配置环境变量
# =============================================================================
print_header "第四步: 配置环境变量"

if [ -f ".env.local" ]; then
    print_warning ".env.local文件已存在"
    read -p "是否覆盖现有配置？[y/N]: " overwrite_env
    
    if [[ ! $overwrite_env =~ ^[Yy]$ ]]; then
        print_info "保留现有.env.local配置"
    else
        # 备份现有文件
        BACKUP_FILE=".env.local.backup.$(date +%Y%m%d_%H%M%S)"
        mv .env.local "$BACKUP_FILE"
        print_success "已备份现有配置到: ${BACKUP_FILE}"
        cp .env.example .env.local
        print_success "已创建新的.env.local文件"
    fi
else
    cp .env.example .env.local
    print_success "已从.env.example创建.env.local文件"
fi

# 交互式配置NEXT_PUBLIC_SITE_URL
echo ""
print_info "配置网站URL（用于生成sitemap、SEO等）"
print_info "开发环境: http://localhost:3000"
print_info "生产环境: https://your-domain.vercel.app"
echo ""
read -p "请输入网站URL（留空使用localhost:3000）: " site_url

if [ -z "$site_url" ]; then
    site_url="http://localhost:3000"
fi

# 更新.env.local文件
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s|NEXT_PUBLIC_SITE_URL=|NEXT_PUBLIC_SITE_URL=${site_url}|" .env.local
else
    # Linux
    sed -i "s|NEXT_PUBLIC_SITE_URL=|NEXT_PUBLIC_SITE_URL=${site_url}|" .env.local
fi

print_success "网站URL已设置为: ${site_url}"

# 询问是否启用Bundle分析器
echo ""
read -p "是否启用Bundle分析器（用于优化包大小）？[y/N]: " enable_analyze

if [[ $enable_analyze =~ ^[Yy]$ ]]; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "s|ANALYZE=false|ANALYZE=true|" .env.local
    else
        sed -i "s|ANALYZE=false|ANALYZE=true|" .env.local
    fi
    print_success "Bundle分析器已启用"
    print_info "运行 'npm run build:analyze' 查看分析结果"
else
    print_info "Bundle分析器保持禁用状态"
fi

print_success "环境变量配置完成！"

# =============================================================================
# 第五步: 运行构建测试
# =============================================================================
print_header "第五步: 验证构建"

echo ""
read -p "是否运行构建测试以验证配置？[Y/n]: " run_build

if [[ ! $run_build =~ ^[Nn]$ ]]; then
    print_info "正在运行生产构建..."
    print_warning "这可能需要几分钟时间..."
    
    if npm run build; then
        print_success "构建成功！项目配置正确"
    else
        print_error "构建失败！请检查错误信息并修复问题"
        exit 1
    fi
else
    print_info "跳过构建测试"
fi

# =============================================================================
# 第六步: Vercel部署选项
# =============================================================================
print_header "第六步: 部署选项"

if command -v vercel &> /dev/null; then
    echo ""
    print_info "检测到Vercel CLI，可选择部署方式："
    echo ""
    echo "  1) 立即部署到Vercel预览环境"
    echo "  2) 立即部署到Vercel生产环境"
    echo "  3) 跳过，稍后手动部署"
    echo ""
    read -p "请选择 [1-3]: " deploy_choice
    
    case $deploy_choice in
        1)
            print_info "正在部署到Vercel预览环境..."
            if vercel; then
                print_success "部署成功！"
            else
                print_warning "部署失败或被取消"
            fi
            ;;
        2)
            print_info "正在部署到Vercel生产环境..."
            print_warning "这将更新你的生产站点！"
            read -p "确认部署到生产环境？[y/N]: " confirm_prod
            
            if [[ $confirm_prod =~ ^[Yy]$ ]]; then
                if vercel --prod; then
                    print_success "生产部署成功！"
                else
                    print_warning "部署失败或被取消"
                fi
            else
                print_info "已取消生产部署"
            fi
            ;;
        3)
            print_info "跳过部署步骤"
            ;;
        *)
            print_warning "无效选择，跳过部署"
            ;;
    esac
else
    print_info "未安装Vercel CLI，跳过部署选项"
    print_info "你可以通过以下方式部署："
    echo ""
    echo "  • GitHub + Vercel集成（推荐）"
    echo "  • 安装Vercel CLI后运行: vercel"
    echo "  • 访问 https://vercel.com 手动导入项目"
fi

# =============================================================================
# 完成总结
# =============================================================================
print_header "✨ 设置完成！"

echo ""
print_success "项目已成功配置！"
echo ""
print_info "下一步操作："
echo ""
echo "  📝 开发环境:"
echo "     npm run dev         # 启动开发服务器 (http://localhost:3000)"
echo ""
echo "  🏗️  生产构建:"
echo "     npm run build       # 构建生产版本"
echo "     npm start           # 启动生产服务器"
echo ""
echo "  🚀 部署到Vercel:"
echo "     vercel              # 部署预览环境"
echo "     vercel --prod       # 部署生产环境"
echo ""
echo "  🔍 Bundle分析:"
echo "     npm run build:analyze   # 分析包大小（需启用ANALYZE）"
echo ""
echo "  📚 更多信息:"
echo "     查看 docs/deployment/vercel.md 了解详细部署指南"
echo "     查看 README.md 了解项目文档"
echo ""
print_info "如需帮助，请访问项目文档或联系技术支持"
echo ""

# 显示配置摘要
print_header "配置摘要"
echo ""
echo "  Node.js版本:     v${NODE_VERSION}"
echo "  npm版本:         ${NPM_VERSION}"
echo "  网站URL:         ${site_url}"
echo "  Vercel CLI:      $(command -v vercel &> /dev/null && echo '✓ 已安装' || echo '✗ 未安装')"
echo "  环境配置:        .env.local"
echo ""

print_success "🎉 祝你开发愉快！"
echo ""
