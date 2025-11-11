#!/bin/bash

# Image Optimization Script for AI创意工坊
# This script optimizes PNG images in the public/images directory
# Note: Images are already handled by next/image which provides:
# - Automatic format conversion (AVIF/WebP)
# - Responsive sizing
# - Lazy loading
# - Blur placeholders

echo "Image optimization is handled by next/image at runtime"
echo "Current configuration:"
echo "  - Formats: AVIF, WebP (with fallbacks)"
echo "  - Device sizes: 640, 750, 828, 1080, 1200, 1920, 2048, 3840"
echo "  - Image sizes: 16, 32, 48, 64, 96, 128, 256, 384"
echo "  - Cache TTL: 1 year"
echo ""
echo "Large source images detected:"
find public/images -type f \( -name "*.png" -o -name "*.jpg" \) -size +1M -exec ls -lh {} \;
echo ""
echo "These will be automatically optimized by Next.js image optimization at runtime."
echo "Consider converting large PNGs to JPG for source images if they don't need transparency."
