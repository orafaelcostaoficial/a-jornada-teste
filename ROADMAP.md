# A Jornada — Roadmap

Atualizado em 21/11/2026. É o ponto de partida de cada conversa nova: onde estamos e o que vem a seguir.
As decisões de produto e o desenho das funções ficam no `PLANO.md`. As regras de trabalho e de conteúdo ficam no `CLAUDE.md`.

---

## 1. Onde estamos

| Canal | Versão | Link |
|---|---|---|
| Oficial (família) | **v31** (branch `main`) | https://orafaelcostaoficial.github.io/a-jornada/ |
| Teste | branch `teste`, app separado "Jornada TESTE" | https://orafaelcostaoficial.github.io/a-jornada-teste/ |

### Já está no ar
- **Conteúdo:**
  - **Era 1, Princípio e Patriarcas:** Gênesis e Jó, 35 sessões.
  - **Era 2, Moisés:** Êxodo a Deuteronômio, 32 sessões.
  - **Era 3, Josué e Juízes:** Josué, Juízes e Rute, 11 sessões (v35, **só no teste** até o "pode publicar"). 20 cartas e 11 selos novos, ainda sem imagem; prompts já em `PROMPTS-CARTAS.md` e `PROMPTS-SELOS.md`.
  - Leitura na Bíblia Livre dentro do app.
- **Método:** Contexto → Leitura → O que entendi → Aplicação, com o "como foi?" voltando em 3 dias. Revisão em quiz (Leitner). Meta semanal de 5 dias.
- **Personagem:**
  - Pó da terra (nível 0) e fôlego de vida na 1ª sessão.
  - 10 personagens, com fundos em cores vivas por estágio.
  - Painel do XP: quanto falta, de onde veio, últimos ganhos.
- **Mapa (Jornada):**
  - Paisagens em camadas por cenário e caminho ligando as sessões.
  - Mostra só as eras já alcançadas.
  - Ponto atual com o personagem dentro e a etiqueta "Começar".
  - Linha do tempo com datas aproximadas.
- **Álbum:**
  - Cartas de pessoas: 58 cartas, **ainda sem imagem**. Desde a v35 a carta é **conquistada por questionário** (3 perguntas sobre o personagem; banco de 375 perguntas das eras 1 e 2).
  - Selos da Palavra: 24, todos com imagem.
  - Aba Eventos com os selos especiais.
- **Conquistas:**
  - Medalhas de bronze, prata e ouro.
  - Grandes marcos: uma medalha por era, com ícone próprio.
  - Estante com os livros concluídos.
  - Animações ao receber.
- **Desafios sazonais:** ciclo de 5 anos. O **ciclo 1 está todo escrito**, com os 9 selos especiais desenhados.

  | Desafio | Começa em |
  |---|---|
  | Natal | 14/12/2026 |
  | Ano novo | 1/1/2027 |
  | Purim | 16/3/2027 |
  | Páscoa | 21/3/2027 |
  | Mães | 5/5/2027 |
  | Pentecostes | 10/5/2027 |
  | Pais | 4/8/2027 |
  | Crianças | 8/10/2027 |
  | Tabernáculos | 16/10/2027 |

  Cada desafio aparece sozinho na data.
- **Família e nuvem:** perfis no aparelho, "Estudaram junto", família e amigos via Supabase, ranking da semana.
- **Modo escuro:** revisado tela por tela em 20/11/2026.

---

## 2. Pendente agora (pequeno)

1. **Teste separado do oficial (feito, 21/11/2026; v32 no oficial).** O teste virou outro app, em outro endereço: o repositório `a-jornada-teste`, publicado por `ferramentas/publicar_teste.sh`. O conteúdo já foi enviado.
   - **Falta:** (a) ligar o Pages no `a-jornada-teste` (Settings → Pages → Deploy from a branch → `main` / root), o que o Rafael faz pelo celular; (b) com o "pode publicar", levar a v32 da `teste` para a `main`, com o redirecionamento de `/a-jornada/teste/`, o link do rodapé e o cartão "já instalado".
   - **No celular:** desinstalar o teste antigo, se ainda existir, e instalar o novo pelo botão.
2. ~~Conferir os slugs da NAA~~: feito em 21/11/2026 (`ex`, `lv`, `nm`, `dt` conferidos no site; o botão NAA da era 2 passou a aparecer na v33).

---

## 3. Próximas frentes (em ordem)

| # | Frente | O que é | Esforço |
|---|---|---|---|
| 1 | **Imagens das cartas** | 58 cartas do Álbum, hoje só com ícone. Os prompts estão em `PROMPTS-CARTAS.md`: o Rafael gera no Gemini, o Claude revisa, recorta, instala em `img/cartas/` e lista em `COM_IMAGEM`. Começar pelas 8 lendárias. | Médio, aos poucos |
| 2 | **Objetos ilustrados do mapa** | Trocar os desenhos simples ao lado do caminho (tenda, poço, palmeira…) por ilustrações do Gemini, cerca de 30 nas eras 1 e 2. | Médio |
| 3 | **Fase 1 do PLANO** | Trava de leitura (fim do texto + tempo mínimo), quadros Constância e XP da semana, teto de 3 sessões por dia no ranking, regra da graça. Ver PLANO §2–4. | Médio, só app |
| 4 | ~~Era 3: Josué e Juízes~~ | Escrita em 21/11/2026 (`data/era-juizes.js`, 11 sessões), com o banco de perguntas das cartas (`data/quiz-cartas-juizes.js`). Falta: imagens das 20 cartas e 11 selos; publicar no oficial. Próxima era: **O Reino Unido** (67 sessões), já com o banco de perguntas. | — |
| 5 | **Reencontro dos desafios** | No ciclo 2 (2031), mostrar o que a pessoa escreveu no mesmo desafio 5 anos antes. Depende da sincronização na nuvem estar firme. | Médio |

---

## 4. Depois (backlog)

- **Conteúdo:**
  - Eras 3 a 10: cerca de 190 sessões.

    | Era | Sessões (alvo) |
    |---|---|
    | Josué/Juízes | 11 |
    | Reino Unido | 67 |
    | Reino Dividido | 49 |
    | Exílio | 14 |
    | Depois do Exílio | 12 |
    | Jesus | 19 |
    | Igreja | 31 |
    | Fim do Século I | 6 |

  - Ciclos 2 a 5 de cada desafio sazonal.
  - Cenários do mapa (`js/cenario.js`) e ícone da era (`ICONE_ERA` em `js/jogo.js`, desenho em `js/icones.js`) para cada era nova.
- **Fase 2 do PLANO:** grupos (igreja, célula, turma), com líder, convite e meta coletiva.
- **Fase 3 do PLANO:** lembrete diário por push, ligas (Cevada → Trigo → Oliveira → Videira → Cedro), marcos com cerimônia.

---

## 5. Como retomar numa conversa nova

Diga algo como: *"Projeto A Jornada: leia o ROADMAP.md e vamos para a frente X"*.
O Claude clona o repositório `orafaelcostaoficial/a-jornada` (e anexa o `a-jornada-teste` para publicar o teste) e trabalha na branch `teste`. Ele testa com Playwright a 390×844, nos modos claro e escuro. Depois sobe para o teste e só publica no oficial com o "pode publicar".
Os originais das imagens e os prompts ficam no Drive, em **Projetos/A_Jornada**.

Ao terminar uma frente, atualize este arquivo (seções 1 a 3).
