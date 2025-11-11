const fs = require('fs');
const path = require('path');

const reportsDir = './docs/lighthouse-reports';
const files = fs.readdirSync(reportsDir).filter(f => f.endsWith('.json'));

console.log('# Lighthouse Scores Summary\n');
console.log('| Route | Performance | Accessibility | SEO |');
console.log('|-------|-------------|---------------|-----|');

files.sort().forEach(file => {
  const filePath = path.join(reportsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  const routeName = file.replace('.json', '').replace(/_/g, '/');
  const performance = Math.round(data.categories.performance.score * 100);
  const accessibility = Math.round(data.categories.accessibility.score * 100);
  const seo = Math.round(data.categories.seo.score * 100);
  
  console.log(`| /${routeName === 'home' ? '' : routeName} | ${performance} | ${accessibility} | ${seo} |`);
});
