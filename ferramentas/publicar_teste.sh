#!/usr/bin/env bash
# Publica a branch `teste` no app de teste separado: https://orafaelcostaoficial.github.io/a-jornada-teste/
# O teste fica fora do endereço do oficial para o Android não tratar os dois como o mesmo app.
# Uso (na raiz do repositório a-jornada, depois de dar push na teste):
#   bash ferramentas/publicar_teste.sh [/caminho/do/clone/a-jornada-teste]
set -euo pipefail
DEST="${1:-../a-jornada-teste}"
RAIZ="$(git rev-parse --show-toplevel)"
[ -d "$DEST/.git" ] || git clone --depth 1 https://github.com/orafaelcostaoficial/a-jornada-teste "$DEST"
TMP="$(mktemp -d)"
git -C "$RAIZ" archive teste | tar -x -C "$TMP"
rm -rf "$TMP/.github"
python3 - "$TMP/manifest.webmanifest" <<'PY'
import json, sys
p = sys.argv[1]
m = json.load(open(p, encoding='utf-8'))
m.update(name='A Jornada · TESTE', short_name='Jornada TESTE', id='./', theme_color='#c8283a',
         related_applications=[{'platform': 'webapp', 'url': 'https://orafaelcostaoficial.github.io/a-jornada-teste/manifest.webmanifest'}])
for i in m['icons']:
    i['src'] = i['src'].replace('icon-', 'teste-')
json.dump(m, open(p, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
PY
touch "$TMP/.nojekyll"
cat > "$TMP/README.md" <<'MD'
# A Jornada — canal de teste

Cópia automática da branch `teste` do repositório [a-jornada](https://github.com/orafaelcostaoficial/a-jornada).
Não editar aqui: é sobrescrito por `ferramentas/publicar_teste.sh`.
MD
find "$DEST" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a "$TMP/." "$DEST/"
rm -rf "$TMP"
cd "$DEST"
git add -A
if git diff --cached --quiet; then echo "Nada novo para publicar."; exit 0; fi
git -c user.name="Rafael Costa" -c user.email="noreply@anthropic.com" commit -q -m "Publica teste: $(git -C "$RAIZ" log -1 --format='%h %s' teste)"
git -c push.negotiate=true push -q origin HEAD:main
echo "Publicado: https://orafaelcostaoficial.github.io/a-jornada-teste/"
