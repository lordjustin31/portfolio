# Security Check Script for Portfolio
# Run this before committing or deploying

Write-Host "🔒 Running Security Checks..." -ForegroundColor Cyan
Write-Host ""

$hasIssues = $false

# Check 1: .env.local not in git
Write-Host "✓ Checking .env.local protection..." -ForegroundColor Yellow
if (Test-Path ".env.local") {
    $gitCheck = git check-ignore .env.local 2>&1
    if ($gitCheck -match ".env.local") {
        Write-Host "  ✅ .env.local is properly ignored by git" -ForegroundColor Green
    } else {
        Write-Host "  ❌ WARNING: .env.local might not be ignored!" -ForegroundColor Red
        $hasIssues = $true
    }
} else {
    Write-Host "  ⚠️  .env.local not found (copy from .env.example)" -ForegroundColor Yellow
}

# Check 2: Search for exposed secrets
Write-Host ""
Write-Host "✓ Checking for exposed secrets in code..." -ForegroundColor Yellow
$secretPatterns = @("API_KEY", "SECRET", "PASSWORD", "TOKEN")
$foundSecrets = $false
foreach ($pattern in $secretPatterns) {
    $results = Get-ChildItem -Path app,components -Recurse -Include *.tsx,*.ts,*.js 2>$null | 
               Select-String -Pattern "$pattern\s*=\s*['""][^'""]+['""]" -SimpleMatch:$false
    if ($results) {
        Write-Host "  ⚠️  Found potential hardcoded secret: $pattern" -ForegroundColor Yellow
        $foundSecrets = $true
    }
}
if (-not $foundSecrets) {
    Write-Host "  ✅ No hardcoded secrets found" -ForegroundColor Green
}

# Check 3: npm audit
Write-Host ""
Write-Host "✓ Running npm audit..." -ForegroundColor Yellow
$auditOutput = npm audit --omit=dev 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✅ No vulnerabilities found" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  Vulnerabilities detected:" -ForegroundColor Yellow
    Write-Host $auditOutput
    $hasIssues = $true
}

# Check 4: Verify security files exist
Write-Host ""
Write-Host "✓ Checking security configuration..." -ForegroundColor Yellow
$requiredFiles = @("middleware.ts", ".env.example", ".gitignore", "SECURITY.md")
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file exists" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file missing" -ForegroundColor Red
        $hasIssues = $true
    }
}

# Check 5: Verify .gitignore includes .env
Write-Host ""
Write-Host "✓ Checking .gitignore coverage..." -ForegroundColor Yellow
$gitignoreContent = Get-Content .gitignore -Raw
if ($gitignoreContent -match "\.env\.local") {
    Write-Host "  ✅ .env.local in .gitignore" -ForegroundColor Green
} else {
    Write-Host "  ❌ .env.local not in .gitignore!" -ForegroundColor Red
    $hasIssues = $true
}

# Summary
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
if ($hasIssues) {
    Write-Host "❌ SECURITY CHECK FAILED" -ForegroundColor Red
    Write-Host "Please fix the issues above before committing or deploying." -ForegroundColor Red
    exit 1
} else {
    Write-Host "✅ ALL SECURITY CHECKS PASSED" -ForegroundColor Green
    Write-Host "Safe to commit and deploy!" -ForegroundColor Green
    exit 0
}
