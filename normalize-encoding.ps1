Write-Host "=== Normalisation encodage (UTF-8 sans BOM + LF) ===" -ForegroundColor Cyan

# Extensions à traiter
$extensions = @("*.php", "*.twig", "*.yaml", "*.yml", "*.json")

# Encoder UTF-8 sans BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

foreach ($ext in $extensions) {
    Get-ChildItem -Recurse -Include $ext | ForEach-Object {
        $file = $_.FullName
        $content = Get-Content $file -Raw

        # Conversion en LF (supprime les CRLF Windows)
        $content = $content -replace "`r`n", "`n"

        # Réécriture du fichier en UTF-8 sans BOM
        [System.IO.File]::WriteAllText($file, $content, $utf8NoBom)

        Write-Host "✅ Normalisé : $file" -ForegroundColor Green
    }
}

Write-Host "=== Tous les fichiers normalisés en UTF-8 sans BOM + LF ===" -ForegroundColor Cyan
