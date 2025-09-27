# ================================================
# check-encoding.ps1 — TalentEko
# Verifie les encodages dans le projet
# - Detecte les BOM UTF-8
# - Verifie si les fichiers sont valides UTF-8
# ================================================

param(
    [string]$Path = "."
)

Write-Host "Scan encodage des fichiers dans $Path ..." -ForegroundColor Cyan

# Fonction pour tester si un fichier est en UTF-8 valide
function Test-UTF8 {
    param([string]$FilePath)

    try {
        $null = Get-Content -Path $FilePath -Encoding UTF8 -ErrorAction Stop
        return $true
    } catch {
        return $false
    }
}

# Parcours des fichiers source
$files = Get-ChildItem -Path $Path -Recurse -Include *.php,*.twig,*.yaml,*.yml,*.json,*.md

foreach ($f in $files) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)

    # Verifie BOM
    $hasBom = $false
    if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
        $hasBom = $true
    }

    # Verifie UTF-8 valide
    $isUtf8 = Test-UTF8 $f.FullName

    if ($hasBom -and $isUtf8) {
        Write-Host "⚠️  BOM trouve : $($f.FullName)" -ForegroundColor Yellow
    } elseif (-not $isUtf8) {
        Write-Host "❌ Encodage invalide : $($f.FullName)" -ForegroundColor Red
    } else {
        Write-Host "✅ OK : $($f.FullName)" -ForegroundColor Green
    }
}

Write-Host "=== Verification terminee ===" -ForegroundColor Cyan
