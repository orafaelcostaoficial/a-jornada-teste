"""Prepara as imagens do Gemini para o app.

Uso:  python3 ferramentas/recortar.py <entrada.png> <saida.webp> [--manter-fundo]

- Remove o fundo liso (branco ou de uma cor só) a partir das bordas, por preenchimento,
  sem apagar áreas da mesma cor dentro do desenho.
- Recorta para quadrado, redimensiona para 512x512 e salva em WebP com transparência.
- --manter-fundo: só recorta e redimensiona (para as cartas, que usam a cena inteira).
- --furos: também apaga áreas brancas grandes fechadas dentro do desenho (ex.: vidros de janela),
  mantendo as pequenas (brilho dos olhos, dentes).
"""
import sys
from collections import deque
from PIL import Image

def remover_fundo(im, tolerancia=38):
    im = im.convert('RGBA')
    w, h = im.size
    px = im.load()
    # cor de fundo = a mais comum na borda (os cantos podem estar cobertos pelo desenho)
    from collections import Counter
    borda = [px[x, y] for x in range(0, w, 4) for y in (0, h - 1)] + [px[x, y] for y in range(0, h, 4) for x in (0, w - 1)]
    brancos = sum(1 for c in borda if c[0] + c[1] + c[2] >= 735)
    if brancos >= len(borda) * 0.15:  # o Gemini entrega fundo branco: se há branco na borda, é ele
        ref = (255, 255, 255)
    else:
        ref = Counter((c[0] // 8 * 8 + 4, c[1] // 8 * 8 + 4, c[2] // 8 * 8 + 4) for c in borda).most_common(1)[0][0]
    perto = lambda c: sum(abs(c[i] - ref[i]) for i in range(3)) <= tolerancia
    visto = bytearray(w * h)
    fila = deque([(x, y) for x in range(w) for y in (0, h - 1)] + [(x, y) for y in range(h) for x in (0, w - 1)])
    while fila:
        x, y = fila.popleft()
        i = y * w + x
        if visto[i] or not perto(px[x, y]):
            continue
        visto[i] = 1
        px[x, y] = (0, 0, 0, 0)
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not visto[ny * w + nx]:
                fila.append((nx, ny))
    return im

def remover_furos(im, area_min=15000, tolerancia=38):
    w, h = im.size
    px = im.load()
    perto = lambda c: c[3] > 0 and (765 - c[0] - c[1] - c[2]) <= tolerancia
    visto = bytearray(w * h)
    for y0 in range(h):
        for x0 in range(w):
            if visto[y0 * w + x0] or not perto(px[x0, y0]):
                continue
            regiao, fila = [], deque([(x0, y0)])
            visto[y0 * w + x0] = 1
            while fila:
                x, y = fila.popleft()
                regiao.append((x, y))
                for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                    if 0 <= nx < w and 0 <= ny < h and not visto[ny * w + nx] and perto(px[nx, ny]):
                        visto[ny * w + nx] = 1
                        fila.append((nx, ny))
            if len(regiao) >= area_min:
                for x, y in regiao:
                    px[x, y] = (0, 0, 0, 0)
    return im

def quadrado(im):
    w, h = im.size
    lado = min(w, h)
    # retrato: mantém a parte de baixo (ombros) e centraliza na horizontal
    return im.crop(((w - lado) // 2, h - lado, (w - lado) // 2 + lado, h))

if __name__ == '__main__':
    entrada, saida = sys.argv[1], sys.argv[2]
    im = Image.open(entrada)
    if '--manter-fundo' not in sys.argv:
        im = remover_fundo(im)
        if '--furos' in sys.argv:
            im = remover_furos(im)
    im = quadrado(im).resize((512, 512), Image.LANCZOS)
    im.save(saida, 'WEBP', quality=86, method=6)
    print('ok', saida)
