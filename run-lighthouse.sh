#!/bin/bash

ROUTES=("/" "/products" "/tools" "/tools/background-replace" "/models" "/company" "/technology")
BASE_URL="http://localhost:3000"

echo "Running Lighthouse audits..."
for route in "${ROUTES[@]}"; do
  name=$(echo "$route" | sed 's/\//_/g' | sed 's/^_//')
  if [ -z "$name" ]; then
    name="home"
  fi
  echo "Auditing: $BASE_URL$route -> $name.json"
  lighthouse "$BASE_URL$route" \
    --output=json \
    --output-path="./docs/lighthouse-reports/$name.json" \
    --chrome-flags="--headless --no-sandbox --disable-gpu" \
    --only-categories=performance,accessibility,seo \
    --quiet 2>&1 | grep -E "Performance|Accessibility|SEO|Error" || true
done

echo "All audits complete!"
