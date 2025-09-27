# Corrige tous les fichiers .twig mal encodés (latin1 -> UTF-8 sans BOM)
$files = Get-ChildItem -Recurse templates -Include *.twig

foreach ($file in $files) {
    # Lire les octets bruts
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)

    # Décoder en supposant que le fichier était en CP1252/Latin1
    $text = [System.Text.Encoding]::GetEncoding(1252).GetString($bytes)

    # Réécrire proprement en UTF-8 (sans BOM)
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($file.FullName, $text, $utf8NoBom)

    Write-Host "Corrigé : $($file.FullName)" -ForegroundColor Green
}

Write-Host "=== Nettoyage terminé ✅ Vérifie avec : grep -r 'Ã' templates ===" -ForegroundColor Cyan

