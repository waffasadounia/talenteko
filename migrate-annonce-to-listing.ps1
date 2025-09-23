# =============================================
# Script de migration annonce -> listing
# Avec sauvegarde automatique
# =============================================

Write-Host "=== Migration annonce -> listing ===" -ForegroundColor Cyan

# 0) Préparer le dossier de sauvegarde
$backupDir = "backup_migration"
if (-Not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
    Write-Host "Backup: dossier créé -> $backupDir" -ForegroundColor Yellow
} else {
    Write-Host "Backup: dossier déjà existant -> $backupDir" -ForegroundColor Yellow
}

# Fonction de sauvegarde (copie fichier + arborescence)
function Backup-File($filePath) {
    $relPath = Resolve-Path $filePath -Relative
    $destPath = Join-Path $backupDir $relPath
    $destDir = Split-Path $destPath
    if (-Not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    Copy-Item $filePath $destPath -Force
}

# 1) Renommer le fichier partiel si présent
$old = "templates/partials/_annonce_card.html.twig"
$new = "templates/partials/_listing_card.html.twig"

if (Test-Path $old) {
    Backup-File $old
    git mv $old $new
    Write-Host "OK: fichier renommé _annonce_card -> _listing_card" -ForegroundColor Green
} else {
    Write-Host "Info: aucun fichier _annonce_card trouvé, on continue..." -ForegroundColor Yellow
}

# 2) Remplacements dans les fichiers Twig
Get-ChildItem -Recurse templates -Include *.twig | ForEach-Object {
    Backup-File $_.FullName
    (Get-Content $_.FullName) `
    -replace "_annonce_card", "_listing_card" `
    -replace "{% for annonce in", "{% for listing in" `
    -replace "with { annonce:", "with { listing:" `
    | Set-Content $_.FullName -Encoding UTF8
}

# 3) Remplacements dans les contrôleurs PHP
Get-ChildItem -Recurse src -Include *.php | ForEach-Object {
    Backup-File $_.FullName
    (Get-Content $_.FullName) `
    -replace "'annonce' =>", "'listing' =>" `
    | Set-Content $_.FullName -Encoding UTF8
}

Write-Host "=== Migration terminée ===" -ForegroundColor Green
Write-Host "Tous les fichiers originaux ont été copiés dans $backupDir/" -ForegroundColor Yellow
Write-Host "Vérifie les changements avec : git diff" -ForegroundColor Cyan
