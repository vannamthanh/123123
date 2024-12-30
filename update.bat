@echo off
set "file=\app\config\data.ts"

start notepad "%~dp0%file%"

:wait_for_notepad
tasklist /FI "IMAGENAME eq notepad.exe" 2>NUL | find /I "notepad.exe">NUL
if "%ERRORLEVEL%"=="0" (
    timeout /t 1 >nul
    goto wait_for_notepad
)

cd "%~dp0"
git add -A
git commit -m "Auto commit after editing data.ts"
git push origin main --force

echo Đã cập nhật thành công
pause
