# =============================================
# Script de migration "annonce" -> "listing"
# =============================================

Write-Host "=== Migration annonce -> listing ===" -ForegroundColor Cyan

# 0) Préparer le dossier de sauvegarde
$backupDir = "backup_migration"
if (-Not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
    Write-Host "Backup: dossier cree -> $backupDir" -ForegroundColor Yellow
} else {
    Write-Host "Backup: dossier deja existant -> $backupDir" -ForegroundColor Yellow
}

# --- Fonction de sauvegarde ---
function Backup-File($filePath) {
    $relPath = (Resolve-Path $filePath).Path.Replace((Get-Location).Path, "").TrimStart("\","/")
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
    Write-Host "OK: fichier renomme _annonce_card -> _listing_card" -ForegroundColor Green
} else {
    Write-Host "Info: aucun fichier _annonce_card trouve, on continue..." -ForegroundColor Yellow
}

# 2) Remplacements dans les fichiers Twig
Get-ChildItem -Recurse templates -Include *.twig | ForEach-Object {
    Backup-File $_.FullName
    (Get-Content $_.FullName -Raw) `
    -replace [regex]::Escape("_annonce_card"), "_listing_card" `
    -replace [regex]::Escape("{% for annonce in"), "{% for listing in" `
    -replace [regex]::Escape("with { annonce:"), "with { listing:" `
    -replace [regex]::Escape("{{ annonce."), "{{ listing." `
    -replace [regex]::Escape("{% if annonce"), "{% if listing" `
    | Set-Content $_.FullName -Encoding UTF8
}

# 3) Remplacements dans les fichiers PHP
Get-ChildItem -Recurse src -Include *.php | ForEach-Object {
    Backup-File $_.FullName
    (Get-Content $_.FullName -Raw) `
    -replace [regex]::Escape("'annonce' =>"), "'listing' =>" `
    -replace [regex]::Escape("$annonce"), "$listing" `
    -replace [regex]::Escape("annonceId"), "listingId" `
    | Set-Content $_.FullName -Encoding UTF8
}

Write-Host "=== Migration terminee ===" -ForegroundColor Green
Write-Host "Tous les fichiers originaux ont ete copies dans $backupDir/" -ForegroundColor Yellow
Write-Host "Verifie les changements avec : git diff" -ForegroundColor Cyan
