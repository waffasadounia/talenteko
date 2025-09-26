# =============================================
# Script de normalisation TalentÉkô
# =============================================

$utf8NoBom = New-Object System.Text.UTF8Encoding $false

# LF (texte projet)
$lfExt = @("*.php","*.twig","*.yaml","*.yml","*.json","*.js","*.css","*.scss","*.md",".editorconfig")

# CRLF (scripts Windows uniquement)
$crlfExt = @("*.bat","*.cmd","*.ps1")

# Binaires à ignorer
$binExt = @(".png",".jpg",".jpeg",".gif",".ico",".pdf",".zip",".woff",".woff2",".ttf",".eot",".mp4",".mov")

function Normalize-FileLF($filePath) {
    $content = Get-Content $filePath -Raw
    $content = $content -replace "`r`n", "`n"
    [System.IO.File]::WriteAllText($filePath, $content, $utf8NoBom)
    Write-Host "✔ LF : $filePath" -ForegroundColor Green
}

function Normalize-FileCRLF($filePath) {
    $content = Get-Content $filePath -Raw
    $content = $content -replace "`r?`n", "`r`n"
    [System.IO.File]::WriteAllText($filePath, $content, $utf8NoBom)
    Write-Host "✔ CRLF : $filePath" -ForegroundColor Yellow
}

# --- LF files ---
foreach ($pattern in $lfExt) {
    Get-ChildItem -Recurse -Include $pattern | ForEach-Object {
        if ($binExt -notcontains $_.Extension.ToLower()) {
            Normalize-FileLF $_.FullName
        }
    }
}

# --- CRLF files ---
foreach ($pattern in $crlfExt) {
    Get-ChildItem -Recurse -Include $pattern | ForEach-Object {
        Normalize-FileCRLF $_.FullName
    }
}

Write-Host "=== Normalisation terminée ===" -ForegroundColor Cyan
