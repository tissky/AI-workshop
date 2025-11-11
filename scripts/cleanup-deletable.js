#!/usr/bin/env node

/**
 * AI创意工坊 - Deletable Files Cleanup Script
 * 
 * This script safely deletes files identified in the deletable files audit.
 * It supports dry-run mode, force mode, and provides detailed logging.
 * 
 * Usage:
 *   node scripts/cleanup-deletable.js [options]
 * 
 * Options:
 *   --dry-run    Preview what will be deleted without actually deleting
 *   --force      Execute deletion without confirmation prompts
 *   --list       List all deletable files by category
 *   --help       Show this help message
 * 
 * Examples:
 *   npm run cleanup:dry-run     # Preview deletions
 *   npm run cleanup:list        # List all deletable files
 *   npm run cleanup:execute     # Execute with prompts
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const isForce = args.includes('--force');
const isList = args.includes('--list');
const isHelp = args.includes('--help') || args.includes('-h');

// Project root directory
const projectRoot = path.resolve(__dirname, '..');

// Audit trail log file
const logFile = path.join(projectRoot, 'cleanup-audit.log');

// Deletable file patterns by category
const deletableFiles = {
  buildArtifacts: {
    name: 'Build Artifacts',
    safety: 'safe',
    patterns: [
      { type: 'dir', path: '.next', reason: 'Next.js build output' },
      { type: 'dir', path: 'out', reason: 'Next.js static export' },
      { type: 'dir', path: '.vercel', reason: 'Vercel deployment cache' },
      { type: 'file', pattern: '*.tsbuildinfo', reason: 'TypeScript build info' },
    ]
  },
  
  logFiles: {
    name: 'Log Files',
    safety: 'safe',
    patterns: [
      { type: 'file', path: 'build-output.log', reason: 'Build output log' },
      { type: 'file', path: 'build.log', reason: 'Build log' },
      { type: 'file', path: 'build_final.log', reason: 'Final build log' },
      { type: 'file', path: 'dev.log', reason: 'Development log' },
      { type: 'file', path: 'dev-test.log', reason: 'Development test log' },
      { type: 'file', path: 'lint-output.log', reason: 'Lint output log' },
      { type: 'file', path: 'server.log', reason: 'Server log' },
      { type: 'file', pattern: '*.log', reason: 'All log files' },
      { type: 'file', pattern: '*.log.*', reason: 'Rotated log files' },
      { type: 'file', pattern: 'npm-debug.log*', reason: 'NPM debug logs' },
      { type: 'file', pattern: 'yarn-debug.log*', reason: 'Yarn debug logs' },
      { type: 'file', pattern: 'yarn-error.log*', reason: 'Yarn error logs' },
      { type: 'file', pattern: '.pnpm-debug.log*', reason: 'PNPM debug logs' },
    ]
  },
  
  osFiles: {
    name: 'OS-Specific Files',
    safety: 'safe',
    patterns: [
      { type: 'file', pattern: '.DS_Store', reason: 'macOS folder metadata' },
      { type: 'file', pattern: 'Thumbs.db', reason: 'Windows thumbnail cache' },
      { type: 'file', pattern: 'desktop.ini', reason: 'Windows folder config' },
      { type: 'file', pattern: '._*', reason: 'macOS resource fork files' },
      { type: 'file', pattern: '*.swp', reason: 'Vim swap files' },
      { type: 'file', pattern: '*.swo', reason: 'Vim swap files' },
      { type: 'file', pattern: '*~', reason: 'Editor backup files' },
    ]
  },
  
  cacheDirectories: {
    name: 'Cache and Temporary Directories',
    safety: 'safe',
    patterns: [
      { type: 'dir', path: '.cache', reason: 'Generic cache directory' },
      { type: 'dir', path: '.parcel-cache', reason: 'Parcel bundler cache' },
      { type: 'file', path: '.eslintcache', reason: 'ESLint cache' },
      { type: 'file', path: '.stylelintcache', reason: 'Stylelint cache' },
      { type: 'dir', path: '.vscode/cache', reason: 'VS Code cache' },
      { type: 'dir', path: 'coverage', reason: 'Test coverage reports' },
      { type: 'dir', path: '.nyc_output', reason: 'NYC coverage output' },
    ]
  },
  
  backupFiles: {
    name: 'Backup and Temporary Files',
    safety: 'safe',
    patterns: [
      { type: 'file', pattern: '*.bak', reason: 'Backup files' },
      { type: 'file', pattern: '*.backup', reason: 'Backup files' },
      { type: 'file', pattern: '*.old', reason: 'Old versions' },
      { type: 'file', pattern: 'old_*', reason: 'Old versions' },
      { type: 'file', pattern: '*.orig', reason: 'Merge conflict originals' },
      { type: 'file', pattern: '*.rej', reason: 'Rejected patches' },
    ]
  },
  
  environmentFiles: {
    name: 'Environment Files',
    safety: 'review-needed',
    patterns: [
      { type: 'file', path: '.env.local', reason: 'Local environment variables' },
      { type: 'file', path: '.env.development.local', reason: 'Development env overrides' },
      { type: 'file', path: '.env.production.local', reason: 'Production env overrides' },
      { type: 'file', path: '.env.test.local', reason: 'Test env overrides' },
    ]
  },
  
  historicalDocs: {
    name: 'Historical Documentation',
    safety: 'review-needed',
    patterns: [
      { type: 'file', path: 'ACCESSIBILITY_IMPROVEMENTS.md', reason: 'Historical task doc' },
      { type: 'file', path: 'APPLE_DESIGN_REPORT.md', reason: 'Historical design doc' },
      { type: 'file', path: 'ARIA_IMPROVEMENTS.md', reason: 'Historical task doc' },
      { type: 'file', path: 'BEFORE_AFTER_COMPARISON.md', reason: 'Historical comparison' },
      { type: 'file', path: 'CODE_SPLITTING_IMPLEMENTATION.md', reason: 'Historical task doc' },
      { type: 'file', path: 'CODE_SPLITTING_REPORT.md', reason: 'Historical report' },
      { type: 'file', path: 'CONTENT_BLOCKS_REFRESH.md', reason: 'Historical task doc' },
      { type: 'file', path: 'HERO_REDESIGN_SUMMARY.md', reason: 'Historical task doc' },
      { type: 'file', path: 'IMAGE_OPTIMIZATION_STATUS.md', reason: 'Historical status' },
      { type: 'file', path: 'IMAGE_OPTIMIZATION_SUMMARY.md', reason: 'Historical summary' },
      { type: 'file', path: 'IMPLEMENTATION_SUMMARY.md', reason: 'Historical summary' },
      { type: 'file', path: 'INTERACTION_STATES.md', reason: 'Historical doc' },
      { type: 'file', path: 'ISR_IMPLEMENTATION.md', reason: 'Historical task doc' },
      { type: 'file', path: 'LOADING_SKELETONS.md', reason: 'Historical task doc' },
      { type: 'file', path: 'MERGE_RESOLUTION_NOTES.md', reason: 'Historical merge notes' },
      { type: 'file', path: 'METADATA_IMPLEMENTATION.md', reason: 'Historical task doc' },
      { type: 'file', path: 'MOBILE_IMAGE_OPTIMIZATION_SUMMARY.md', reason: 'Historical summary' },
      { type: 'file', path: 'PR3_CONFLICT_RESOLUTION.md', reason: 'Historical PR notes' },
      { type: 'file', path: 'PRODUCT_REPORT.md', reason: 'Historical report' },
      { type: 'file', path: 'PR_NOTES.md', reason: 'Historical PR notes' },
      { type: 'file', path: 'REFACTORING_SUMMARY.md', reason: 'Historical summary' },
      { type: 'file', path: 'RESPONSIVE_OPTIMIZATION.md', reason: 'Historical task doc' },
      { type: 'file', path: 'SEMANTIC_TOKENS_IMPLEMENTATION.md', reason: 'Historical task doc' },
      { type: 'file', path: 'SETUP_IMPLEMENTATION_SUMMARY.md', reason: 'Historical summary' },
      { type: 'file', path: 'STRUCTURED_DATA_VALIDATION.md', reason: 'Historical validation' },
      { type: 'file', path: 'TAILWIND_THEME_IMPLEMENTATION.md', reason: 'Historical task doc' },
      { type: 'file', path: 'TESTING_CHECKLIST.md', reason: 'Historical checklist' },
      { type: 'file', path: 'TOOLS_PAGE_REDESIGN.md', reason: 'Historical task doc' },
      { type: 'file', path: 'VERIFICATION_REPORT.md', reason: 'Historical verification' },
    ]
  },
  
  legacyScripts: {
    name: 'Legacy Scripts',
    safety: 'review-needed',
    patterns: [
      { type: 'file', path: 'cleanup.sh', reason: 'Legacy cleanup script' },
    ]
  }
};

// Utility functions
function log(message, color = 'reset') {
  const timestamp = new Date().toISOString();
  const colorCode = colors[color] || colors.reset;
  console.log(`${colorCode}${message}${colors.reset}`);
  
  // Append to audit log (without colors)
  fs.appendFileSync(logFile, `[${timestamp}] ${message}\n`, 'utf8');
}

function logError(message) {
  log(`❌ ERROR: ${message}`, 'red');
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

function showHelp() {
  console.log(`
${colors.bright}AI创意工坊 - Deletable Files Cleanup Script${colors.reset}

${colors.bright}Usage:${colors.reset}
  node scripts/cleanup-deletable.js [options]

${colors.bright}Options:${colors.reset}
  --dry-run    Preview what will be deleted without actually deleting
  --force      Execute deletion without confirmation prompts
  --list       List all deletable files by category
  --help, -h   Show this help message

${colors.bright}Examples:${colors.reset}
  ${colors.cyan}npm run cleanup:dry-run${colors.reset}     # Preview deletions
  ${colors.cyan}npm run cleanup:list${colors.reset}        # List all deletable files
  ${colors.cyan}npm run cleanup:execute${colors.reset}     # Execute with prompts

${colors.bright}Safety Levels:${colors.reset}
  ${colors.green}safe${colors.reset}           - Can be deleted without risk
  ${colors.yellow}review-needed${colors.reset}  - Should be reviewed before deletion
  ${colors.red}dangerous${colors.reset}      - Should never be deleted

${colors.bright}Note:${colors.reset}
  By default, only files marked as "safe" are deleted.
  Files marked as "review-needed" require explicit confirmation.
`);
}

function findFiles(pattern, basePath = projectRoot) {
  const results = [];
  
  // Handle glob patterns
  if (pattern.includes('*')) {
    const regex = new RegExp('^' + pattern.replace(/\./g, '\\.').replace(/\*/g, '.*') + '$');
    
    function searchDir(dir) {
      try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        
        for (const entry of entries) {
          // Skip node_modules, .git, and other large directories
          if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') {
            continue;
          }
          
          const fullPath = path.join(dir, entry.name);
          const relativePath = path.relative(projectRoot, fullPath);
          
          if (entry.isDirectory()) {
            searchDir(fullPath);
          } else if (entry.isFile() && regex.test(entry.name)) {
            results.push(relativePath);
          }
        }
      } catch (err) {
        // Silently skip directories we can't read
      }
    }
    
    searchDir(basePath);
  } else {
    // Exact path match
    const fullPath = path.join(basePath, pattern);
    if (fs.existsSync(fullPath)) {
      results.push(pattern);
    }
  }
  
  return results;
}

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(path.join(projectRoot, filePath));
    if (stats.isDirectory()) {
      // For directories, calculate total size recursively
      let totalSize = 0;
      function calcSize(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            calcSize(fullPath);
          } else {
            totalSize += fs.statSync(fullPath).size;
          }
        }
      }
      calcSize(path.join(projectRoot, filePath));
      return totalSize;
    }
    return stats.size;
  } catch (err) {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function deleteFile(filePath) {
  try {
    const fullPath = path.join(projectRoot, filePath);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(fullPath);
    }
    
    return true;
  } catch (err) {
    logError(`Failed to delete ${filePath}: ${err.message}`);
    return false;
  }
}

function listAllDeletableFiles() {
  log('\n' + '='.repeat(80), 'bright');
  log('DELETABLE FILES BY CATEGORY', 'bright');
  log('='.repeat(80) + '\n', 'bright');
  
  let totalFiles = 0;
  let totalCategories = 0;
  
  for (const [categoryKey, category] of Object.entries(deletableFiles)) {
    totalCategories++;
    const safetyColor = category.safety === 'safe' ? 'green' : 'yellow';
    
    log(`\n${category.name}`, 'bright');
    log(`Safety Level: ${category.safety}`, safetyColor);
    log('-'.repeat(80));
    
    for (const pattern of category.patterns) {
      const files = findFiles(pattern.path || pattern.pattern);
      
      if (files.length > 0) {
        totalFiles += files.length;
        log(`\n  Pattern: ${pattern.path || pattern.pattern}`, 'cyan');
        log(`  Reason: ${pattern.reason}`);
        log(`  Found ${files.length} file(s):`);
        
        files.forEach(file => {
          const size = getFileSize(file);
          log(`    - ${file} (${formatBytes(size)})`);
        });
      }
    }
  }
  
  log('\n' + '='.repeat(80), 'bright');
  log(`SUMMARY`, 'bright');
  log('='.repeat(80), 'bright');
  log(`Total Categories: ${totalCategories}`, 'cyan');
  log(`Total Deletable Files Found: ${totalFiles}`, 'cyan');
  log('='.repeat(80) + '\n', 'bright');
}

async function promptUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase().trim());
    });
  });
}

async function cleanupFiles() {
  // Initialize audit log
  const timestamp = new Date().toISOString();
  fs.writeFileSync(logFile, `=== Cleanup Session Started: ${timestamp} ===\n`, 'utf8');
  
  if (isDryRun) {
    log('\n🔍 DRY RUN MODE - No files will be deleted\n', 'yellow');
  } else {
    log('\n🧹 CLEANUP MODE - Files will be deleted\n', 'red');
  }
  
  let totalDeleted = 0;
  let totalSize = 0;
  let totalSkipped = 0;
  
  for (const [categoryKey, category] of Object.entries(deletableFiles)) {
    // Skip review-needed categories unless force mode
    if (category.safety === 'review-needed' && !isForce && !isDryRun) {
      logWarning(`Skipping category "${category.name}" (review-needed)`);
      logInfo('Use --force to include review-needed files\n');
      continue;
    }
    
    log(`\n${'='.repeat(80)}`, 'bright');
    log(`Processing: ${category.name}`, 'bright');
    log(`Safety Level: ${category.safety}`, category.safety === 'safe' ? 'green' : 'yellow');
    log('='.repeat(80));
    
    const filesToDelete = [];
    const seenFiles = new Set();
    
    // Find all files matching patterns (deduplicate)
    for (const pattern of category.patterns) {
      const files = findFiles(pattern.path || pattern.pattern);
      for (const file of files) {
        if (!seenFiles.has(file)) {
          seenFiles.add(file);
          filesToDelete.push({ file, reason: pattern.reason });
        }
      }
    }
    
    if (filesToDelete.length === 0) {
      logInfo('No files found in this category');
      continue;
    }
    
    log(`\nFound ${filesToDelete.length} file(s) to delete:`);
    filesToDelete.forEach(({ file, reason }) => {
      const size = getFileSize(file);
      log(`  - ${file} (${formatBytes(size)}) - ${reason}`, 'cyan');
    });
    
    // Calculate total size
    const categorySize = filesToDelete.reduce((sum, { file }) => sum + getFileSize(file), 0);
    log(`\nTotal size: ${formatBytes(categorySize)}`, 'magenta');
    
    // Prompt for confirmation if not force mode and not dry run
    if (!isForce && !isDryRun && category.safety === 'review-needed') {
      const answer = await promptUser(`\n⚠️  This category requires review. Delete these files? (y/n): `);
      if (answer !== 'y' && answer !== 'yes') {
        logInfo('Skipped by user');
        totalSkipped += filesToDelete.length;
        continue;
      }
    }
    
    // Delete files
    if (!isDryRun) {
      let deletedCount = 0;
      for (const { file, reason } of filesToDelete) {
        if (deleteFile(file)) {
          logSuccess(`Deleted: ${file}`);
          deletedCount++;
          totalSize += getFileSize(file);
        }
      }
      totalDeleted += deletedCount;
      log(`\nDeleted ${deletedCount} file(s) from this category`, 'green');
    } else {
      log(`\n[DRY RUN] Would delete ${filesToDelete.length} file(s)`, 'yellow');
      totalDeleted += filesToDelete.length;
      totalSize += categorySize;
    }
  }
  
  // Summary
  log('\n' + '='.repeat(80), 'bright');
  log('CLEANUP SUMMARY', 'bright');
  log('='.repeat(80), 'bright');
  
  if (isDryRun) {
    log(`Files that would be deleted: ${totalDeleted}`, 'cyan');
    log(`Total size that would be freed: ${formatBytes(totalSize)}`, 'cyan');
  } else {
    log(`Files deleted: ${totalDeleted}`, 'green');
    log(`Files skipped: ${totalSkipped}`, 'yellow');
    log(`Total size freed: ${formatBytes(totalSize)}`, 'green');
    log(`\nAudit log saved to: ${path.relative(projectRoot, logFile)}`, 'blue');
  }
  
  log('='.repeat(80) + '\n', 'bright');
  
  // Exit code
  process.exit(0);
}

// Main execution
(async function main() {
  if (isHelp) {
    showHelp();
    process.exit(0);
  }
  
  if (isList) {
    listAllDeletableFiles();
    process.exit(0);
  }
  
  await cleanupFiles();
})();
