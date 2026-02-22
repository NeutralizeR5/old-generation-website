@echo off
setlocal enabledelayedexpansion

echo [LOG] Intelligence Synchronization Initiated...

:: Kimlik Bilgilerini Doğrula
git config --global user.email "trneutralizer@gmail.com"
git config --global user.name "NeutralizeR5"

:: Yerel depoyu kontrol et, yoksa kur
if not exist .git (
    echo [LOG] Initialising new tactical repository...
    git init
    git remote add origin https://github.com/NeutralizeR5/old-generation-website.git
) else (
    echo [LOG] Existing repository detected. Skipping initialisation.
    :: Uzak bağlantı değişmişse veya hata veriyorsa güncelle
    git remote set-url origin https://github.com/NeutralizeR5/old-generation-website.git
)

:: Değişiklikleri Sahneye Al
echo [LOG] Staging environmental assets...
git add .

:: Commit Oluştur (Dinamik Mesaj İle)
set /p commit_msg="Enter strategic update note (or press Enter for default): "
if "!commit_msg!"=="" set commit_msg="Strategic Portal Synchronisation"

echo [LOG] Formalising enlistment of code changes...
git commit -m "!commit_msg!"

:: Ana Branşa Gönder
echo [LOG] Commanding deployment to the Sovereign Mainframe...
git branch -M main
git push -u origin main

echo.
echo [SUCCESS] Operation Accomplished. The Old Generation Portal is online.
pause
