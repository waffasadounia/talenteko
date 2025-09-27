Write-Host "=== Scan et suppression du BOM UTF-8 ===" -ForegroundColor Cyan

# Extensions à traiter
$extensions = @("*.php", "*.twig", "*.yaml", "*.yml", "*.json")

# Fonction : supprimer BOM si présent
function Remove-Bom($file) {
    $bytes = [System.IO.File]::ReadAllBytes($file)

    # Vérifie si le fichier commence par EF BB BF
    if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
        $newBytes = $bytes[3..($bytes.Length-1)]   # on enlève les 3 premiers octets
        [System.IO.File]::WriteAllBytes($file, $newBytes)
        Write-Host "✅ BOM supprimé : $file" -ForegroundColor Green
    }
}

# Parcours récursif
foreach ($ext in $extensions) {
    Get-ChildItem -Recurse -Include $ext | ForEach-Object {
        Remove-Bom $_.FullName
    }
}

Write-Host "=== Vérification terminée ===" -ForegroundColor Cyan
