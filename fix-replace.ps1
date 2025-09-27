# ============================================
# Script PowerShell de correction encodage UTF-8
# Applique tous les remplacements de replacements.txt
# ============================================

Write-Host "=== Correction des séquences UTF-8 corrompues ===" -ForegroundColor Cyan

# Charger les remplacements
$replacements = @{}
Get-Content ".\replacements.txt" | ForEach-Object {
    if ($_ -match "^(.*?)=(.*)$") {
        $replacements[$matches[1]] = $matches[2]
    }
}

# Parcourir tous les fichiers Twig
Get-ChildItem -Recurse templates -Include *.twig | ForEach-Object {
    $file = $_.FullName
    $content = Get-Content $file -Raw

    foreach ($bad in $replacements.Keys) {
        $content = $content -replace [regex]::Escape($bad), $replacements[$bad]
    }

    Set-Content -Encoding UTF8 $file $content
    Write-Host "Corrigé : $file" -ForegroundColor Green
}

Write-Host "=== Nettoyage terminé ✅ Vérifie avec : grep -r 'Ã' templates ===" -ForegroundColor Cyan
