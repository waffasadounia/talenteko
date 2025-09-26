#!/bin/bash
echo "=== Normalisation encodage UTF-8 (config, src, templates) ==="

find config src templates -type f \( -name "*.php" -o -name "*.twig" -o -name "*.yaml" -o -name "*.yml" -o -name "*.xml" -o -name "*.txt" \) \
  -exec sh -c '
    for f do
      echo "🔧 Conversion $f"
      iconv -f utf-8 -t utf-8 "$f" -o "$f.tmp" && mv "$f.tmp" "$f"
    done
  ' sh {} +

echo "✅ Encodage normalisé (UTF-8 sans BOM)"
