@echo off
echo Git bilgileri ayarlanıyor...
git config --global user.email "trneutralizer@gmail.com"
git config --global user.name "NeutralizeR5"

echo Depo başlatılıyor...
git init

echo Dosyalar ekleniyor...
git add .

echo Commit oluşturuluyor...
git commit -m "İlk gönderim"

echo Branch adı 'main' olarak ayarlanıyor...
git branch -M main

echo Uzak repo bağlantısı ekleniyor...
git remote add origin https://github.com/NeutralizeR5/old-generation-website.git

echo Dosyalar GitHub'a gönderiliyor...
git push -u origin main

pause
