@echo off
echo ========================================
echo PRE-DEPLOYMENT SECURITY CHECK
echo ========================================
echo.

set ERRORS=0
set WARNINGS=0

echo [1/6] Checking .env.local protection...
if exist .env.local (
    git check-ignore .env.local >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        echo   [OK] .env.local is properly ignored
    ) else (
        echo   [ERROR] .env.local is NOT ignored by git!
        set /a ERRORS+=1
    )
) else (
    echo   [WARNING] .env.local not found
    set /a WARNINGS+=1
)

echo.
echo [2/6] Checking if .env.local is tracked...
git ls-files 2>nul | findstr "\.env\.local" >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo   [ERROR] .env.local is tracked by git!
    echo   Run: git rm --cached .env.local
    set /a ERRORS+=1
) else (
    echo   [OK] .env.local is not tracked
)

echo.
echo [3/6] Checking git initialization...
if exist .git (
    echo   [OK] Git repository initialized
) else (
    echo   [WARNING] Git not initialized. Run: git init
    set /a WARNINGS+=1
)

echo.
echo [4/6] Checking required files...
set FILES_OK=1
if not exist proxy.ts (
    echo   [ERROR] proxy.ts missing
    set /a ERRORS+=1
    set FILES_OK=0
)
if not exist .env.example (
    echo   [ERROR] .env.example missing
    set /a ERRORS+=1
    set FILES_OK=0
)
if not exist .gitignore (
    echo   [ERROR] .gitignore missing
    set /a ERRORS+=1
    set FILES_OK=0
)
if not exist package.json (
    echo   [ERROR] package.json missing
    set /a ERRORS+=1
    set FILES_OK=0
)
if not exist next.config.ts (
    echo   [ERROR] next.config.ts missing
    set /a ERRORS+=1
    set FILES_OK=0
)
if %FILES_OK% EQU 1 (
    echo   [OK] All required files present
)

echo.
echo [5/6] Testing production build...
echo   Building... (this may take a moment)
call npm run build >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo   [OK] Production build successful
) else (
    echo   [ERROR] Production build failed!
    set /a ERRORS+=1
)

echo.
echo [6/6] Checking for common issues...
if exist node_modules (
    echo   [OK] Dependencies installed
) else (
    echo   [WARNING] node_modules missing. Run: npm install
    set /a WARNINGS+=1
)

echo.
echo ========================================
echo SUMMARY
echo ========================================
echo.
echo Errors:   %ERRORS%
echo Warnings: %WARNINGS%
echo.

if %ERRORS% EQU 0 (
    if %WARNINGS% EQU 0 (
        echo [SUCCESS] ALL CHECKS PASSED!
        echo.
        echo IMPORTANT: Before deploying:
        echo   1. Reset your Gmail App Password ^(exposed in chat^)
        echo   2. Update .env.local with NEW password
        echo   3. Use NEW password in Vercel environment variables
        echo.
        echo Ready to deploy:
        echo   git add .
        echo   git commit -m "Initial commit"
        echo   git push
        exit /b 0
    ) else (
        echo [WARNING] Checks passed with warnings
        echo Fix warnings before deploying.
        exit /b 0
    )
) else (
    echo [FAILED] Deployment blocked - fix errors above!
    exit /b 1
)
