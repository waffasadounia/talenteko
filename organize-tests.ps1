Write-Host "=== Organisation des tests PHPUnit ===" -ForegroundColor Cyan

# 1) Créer la nouvelle arborescence
$unitDirs = @("tests/Unit/Entity")
$functionalDirs = @("tests/Functional/Controller", "tests/Functional/MessageHandler")

foreach ($dir in $unitDirs + $functionalDirs) {
    if (-Not (Test-Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
        Write-Host "📁 Dossier créé : $dir" -ForegroundColor Green
    }
}

# 2) Déplacer les tests d'entité → Unit/Entity
Get-ChildItem -Path "tests" -Recurse -Include "*Test.php" | ForEach-Object {
    if ($_ -match "UserTest|ProfileTest|ListingTest|CategoryTest|ExchangeTest") {
        Move-Item $_.FullName "tests/Unit/Entity/" -Force
        Write-Host "➡ Déplacé vers Unit/Entity : $($_.Name)" -ForegroundColor Yellow
    }
    elseif ($_ -match "Controller") {
        Move-Item $_.FullName "tests/Functional/Controller/" -Force
        Write-Host "➡ Déplacé vers Functional/Controller : $($_.Name)" -ForegroundColor Yellow
    }
    elseif ($_ -match "Handler") {
        Move-Item $_.FullName "tests/Functional/MessageHandler/" -Force
        Write-Host "➡ Déplacé vers Functional/MessageHandler : $($_.Name)" -ForegroundColor Yellow
    }
    else {
        Write-Host "ℹ Conservé : $($_.FullName)" -ForegroundColor Gray
    }
}

Write-Host "Organisation terminée ! Vérifie avec : composer exec phpunit -- --testsuite=unit" -ForegroundColor Cyan
