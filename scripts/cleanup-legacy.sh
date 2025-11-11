#!/bin/bash

# AI创意工坊 - 遗留文件清理脚本
# Cleanup legacy files from the AI-workshop project

set -e

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Mode flag
DRY_RUN=false
EXECUTE=false

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --execute)
      EXECUTE=true
      shift
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      echo "Usage: $0 [--dry-run|--execute]"
      exit 1
      ;;
  esac
done

# Check if no flags provided
if [ "$DRY_RUN" = false ] && [ "$EXECUTE" = false ]; then
  echo -e "${RED}Error: Please specify either --dry-run or --execute${NC}"
  echo "Usage: $0 [--dry-run|--execute]"
  exit 1
fi

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}AI创意工坊 - 遗留文件清理${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

if [ "$DRY_RUN" = true ]; then
  echo -e "${YELLOW}🔍 DRY RUN MODE - 预览要删除的文件${NC}"
  echo ""
fi

# Array to store files to delete
declare -a FILES_TO_DELETE

# Log files
LOG_FILES=(
  "build.log"
  "build_final.log"
  "build-output.log"
  "dev.log"
  "dev-test.log"
  "server.log"
  "lint-output.log"
)

# Legacy components sections (not used anymore)
LEGACY_SECTIONS=(
  "components/sections/Hero.tsx"
  "components/sections/Hero.example.md"
  "components/sections/StatsGrid.tsx"
  "components/sections/StatsGrid.example.md"
  "components/sections/TestimonialCard.tsx"
  "components/sections/TestimonialCard.example.md"
)

# Components demo (internal testing only)
DEMO_FILES=(
  "app/components-demo/page.tsx"
  "app/components-demo/tabs-demo.tsx"
)

# Old cleanup script (will be replaced by this one)
OLD_SCRIPTS=(
  "cleanup.sh"
)

# Collect all files to delete
echo -e "${BLUE}📋 收集要删除的文件...${NC}"
echo ""

# Check log files
echo -e "${GREEN}1. 日志文件:${NC}"
for file in "${LOG_FILES[@]}"; do
  if [ -f "$file" ]; then
    FILES_TO_DELETE+=("$file")
    echo "   - $file"
  fi
done
echo ""

# Check legacy sections
echo -e "${GREEN}2. 遗留组件 (components/sections/):${NC}"
for file in "${LEGACY_SECTIONS[@]}"; do
  if [ -f "$file" ]; then
    FILES_TO_DELETE+=("$file")
    echo "   - $file"
  fi
done
echo ""

# Check demo files
echo -e "${GREEN}3. 演示页面 (app/components-demo/):${NC}"
for file in "${DEMO_FILES[@]}"; do
  if [ -f "$file" ]; then
    FILES_TO_DELETE+=("$file")
    echo "   - $file"
  fi
done
echo ""

# Check old scripts
echo -e "${GREEN}4. 旧清理脚本:${NC}"
for file in "${OLD_SCRIPTS[@]}"; do
  if [ -f "$file" ]; then
    FILES_TO_DELETE+=("$file")
    echo "   - $file"
  fi
done
echo ""

# Summary
echo -e "${BLUE}========================================${NC}"
echo -e "${YELLOW}📊 汇总: 找到 ${#FILES_TO_DELETE[@]} 个文件${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

if [ "$DRY_RUN" = true ]; then
  echo -e "${YELLOW}✅ 预览完成 - 使用 --execute 执行删除${NC}"
  echo ""
  echo "执行命令:"
  echo "  npm run cleanup:legacy -- --execute"
  echo "  或"
  echo "  ./scripts/cleanup-legacy.sh --execute"
  exit 0
fi

# Execute deletion
if [ "$EXECUTE" = true ]; then
  echo -e "${RED}⚠️  警告: 即将删除 ${#FILES_TO_DELETE[@]} 个文件${NC}"
  echo ""
  read -p "确认删除? (yes/no): " -r
  echo ""
  
  if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    echo -e "${YELLOW}❌ 取消操作${NC}"
    exit 0
  fi
  
  echo -e "${GREEN}🗑️  开始删除文件...${NC}"
  echo ""
  
  DELETED_COUNT=0
  for file in "${FILES_TO_DELETE[@]}"; do
    if [ -f "$file" ]; then
      rm -f "$file"
      echo "   ✅ 已删除: $file"
      ((DELETED_COUNT++))
    fi
  done
  
  # Remove empty directories
  echo ""
  echo -e "${GREEN}🗑️  清理空目录...${NC}"
  
  if [ -d "components/sections" ] && [ -z "$(ls -A components/sections)" ]; then
    rmdir components/sections
    echo "   ✅ 已删除空目录: components/sections"
  fi
  
  if [ -d "app/components-demo" ] && [ -z "$(ls -A app/components-demo)" ]; then
    rmdir app/components-demo
    echo "   ✅ 已删除空目录: app/components-demo"
  fi
  
  echo ""
  echo -e "${BLUE}========================================${NC}"
  echo -e "${GREEN}✅ 清理完成!${NC}"
  echo -e "${GREEN}   删除了 ${DELETED_COUNT} 个文件${NC}"
  echo -e "${BLUE}========================================${NC}"
  echo ""
  echo -e "${YELLOW}💡 提示:${NC}"
  echo "   - .gitignore 已更新，添加 *.log 模式"
  echo "   - 查看清理报告: docs/CLEANUP_REPORT.md"
  echo ""
fi
