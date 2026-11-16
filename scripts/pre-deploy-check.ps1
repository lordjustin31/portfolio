# Pre-Deployment Security Check
Write-Host "🔒 PRE-DEPLOYMENT SECURITY CHECK" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

$errors = 0
$warnings = 0

# Check 1: Verify .env.local is ignored
Write-Host "1. Checking .env.local protection..." -ForegroundColor Yellow
if (Test-Path ".env.local") {
    $ignored = git check-ignore .env.local 2>&1
    if ($ignored -match ".env.local") {
        Write-Host "   ✅ .env.local is properly ignored" -ForegroundColor Green
    } else {
        Write-Host "   ❌ ERROR: .env.local is NOT ignored by git!" -ForegroundColor Red
        $errors++
    }
} else {
    Write-Host "   ⚠️  .env.local not found" -ForegroundColor Yellow
    $warnings++
}

# Check 2: Verify .env.local is not tracked
Write-Host ""
Write-Host "2. Checking if .env.local is tracked..." -ForegroundColor Yellow
$tracked = git ls-files | Select-String "\.env\.local"
if ($tracked) {
    Write-Host "   ❌ ERROR: .env.local is tracked by git!" -ForegroundColor Red
    Write-Host "   Run: git rm --cached .env.local" -ForegroundColor Red
    $errors++
} else {
    Write-Host "   ✅ .env.local is not tracked" -ForegroundColor Green
}

# Check 3: Check for exposed secrets in staged files
Write-Host ""
Write-Host "3. Scanning for exposed secrets..." -ForegroundColor Yellow
$secrets = git diff --cached 2>$null | Select-String -Pattern "vjdktpidktmyphwx|password.*=.*['\"].*['\"]" -CaseSensitive
if ($secrets) {
    Write-Host "   ❌ ERROR: Found potential secrets in staged files!" -ForegroundColor Red
    $errors++
} else {
    Write-Host "   ✅ No secrets found in staged files" -ForegroundColor Green
}

# Check 4: Verify production build works
Write-Host ""
Write-Host "4. Testing production build..." -ForegroundColor Yellow
$buildOutput = npm run build 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✅ Production build successful" -ForegroundColor Green
} else {
    Write-Host "   ❌ ERROR: Production build failed!" -ForegroundColor Red
    $errors++
}

# Check 5: Verify required files exist
Write-Host ""
Write-Host "5. Checking required files..." -ForegroundColor Yellow
$requiredFiles = @("proxy.ts", ".env.example", ".gitignore", "package.json", "next.config.ts")
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "   ✅ $file" -ForegroundColor Green
    } else {
        Write-Host "   ❌ $file missing" -ForegroundColor Red
        $errors++
    }
}

# Check 6: Verify git is initialized
Write-Host ""
Write-Host "6. Checking git initialization..." -ForegroundColor Yellow
if (Test-Path ".git") {
    Write-Host "   ✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Git not initialized. Run: git init" -ForegroundColor Yellow
    $warnings++
}

# Summary
Write-Host ""
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "📊 SUMMARY" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

if ($errors -eq 0 -and $warnings -eq 0) {
    Write-Host "✅ ALL CHECKS PASSED!" -ForegroundColor Green
    Write-Host ""
    Write-Host "⚠️  BEFORE DEPLOYING:" -ForegroundColor Yellow
    Write-Host "   1. Reset your Gmail App Password (exposed in chat)" -ForegroundColor Yellow
    Write-Host "   2. Update .env.local with NEW password" -ForegroundColor Yellow
    Write-Host "   3. Use NEW password in Vercel environment variables" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Ready to:" -ForegroundColor Green
    Write-Host "   git add ." -ForegroundColor Cyan
    Write-Host "   git commit -m 'Initial commit'" -ForegroundColor Cyan
    Write-Host "   git push" -ForegroundColor Cyan
    exit 0
} else {
    Write-Host "❌ DEPLOYMENT BLOCKED" -ForegroundColor Red
    Write-Host ""
    Write-Host "Errors: $errors" -ForegroundColor Red
    Write-Host "Warnings: $warnings" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Fix the errors above before deploying!" -ForegroundColor Red
    exit 1
}
