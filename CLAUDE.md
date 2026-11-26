# A Jornada — estudo bíblico cronológico gamificado

Projeto pessoal do Rafael, usado em casa com as crianças e com famílias amigas.
PWA estático (HTML/CSS/JS puro, **sem build**), publicado no GitHub Pages e instalado no celular.
**As evoluções são pedidas pelo celular**: o Claude clona, edita, testa sozinho e publica no canal de teste.
**Comece pelo `ROADMAP.md`**: onde estamos, o que está pendente e as próximas frentes. Atualize-o ao fim de cada frente.

## Arquivos fora do código (Drive)
Originais das imagens, prompts, documentos e backups ficam no Google Drive em **Projetos/A_Jornada**
(pasta id `1PErWB2Sjs_gOhi6wfgJnVGuJ4COTy9L7`): `01_Imagens/{Avatares,Cartas,Selos,Outras}`, `02_Prompts`, `03_Documentos`,
`04_Backups` e o doc `00_LEIA-ME`. Para encaixar imagens: baixar daí, `ferramentas/recortar.py`, listar em
`data/avatares.js` / `data/imagens.js`, testar e subir para `teste`.

Os prompts (um por imagem) são gerados por `python3 ferramentas/gerar_prompts.py` → `PROMPTS-*.md`;
ao mudar personagens/cartas/selos, atualizar a lista ali, gerar de novo e subir os docs para `02_Prompts`.

## Fluxo de trabalho (obrigatório)
1. Trabalhar sempre na branch `teste`. Ela vira um app separado em `https://orafaelcostaoficial.github.io/a-jornada-teste/`
   (repositório `orafaelcostaoficial/a-jornada-teste`, anexar com add_repo/push): depois do push na `teste`, rodar
   `bash ferramentas/publicar_teste.sh` (copia a branch para lá, com nome "Jornada TESTE" e ícone vermelho).
2. Antes de subir, testar localmente: `python3 -m http.server 8765` na raiz e rodar um roteiro Playwright
   (Chromium, viewport 390×844) que percorre as telas mexidas; zero erro no console. Mandar prints ao Rafael.
3. Subir para `teste` e avisar o link para ele testar no celular.
4. **Só fazer merge em `main` (produção) quando o Rafael disser "pode publicar" / "sim, publica".**
5. Ao mudar arquivos que o app usa offline, subir a versão em `versao.js` (única fonte: sw.js e rodapé do Perfil leem dali) e incluir arquivos novos em `ARQUIVOS` do `sw.js`.
O canal de teste usa dados locais separados (`ajornada.teste.v2`) e não sincroniza com a nuvem
(a não ser com `?nuvem=1`), para nunca bagunçar os dados reais da família.

## Método
Uma sessão por dia: Antes de ler (cenário, gancho, repare) → Leitura (Bíblia Livre dentro do app,
NAA no site da SBB) → Entendi (por trás do texto + o que entendi) → Viver (conversa, para fazer, tempo com Deus).
O "para fazer" volta em 3 dias ("como foi?"), mostrando a pergunta, a resposta e o passo combinado.
**Todo texto de sessão segue a skill `jornada-escrita`** (campos `gancho`, `repare`, `portras`, `conversa`, `fazer`,
`oracao`). Sessões ainda sem `gancho` usam o formato antigo (`contexto`, `notas`, `pergunta`) e continuam funcionando.
Desde a v62: as eras 1 a 3 inteiras (78 sessões) estão no formato novo. Validar referências com `node` lendo `data/biblia/blivre` (todas as refs de `repare`, `portras`, `conversa` e `fazer` devem existir).
Revisão em quiz com repetição espaçada (Leitner). Meta semanal 5 de 7 dias (sem streak que zera).

## Regras de conteúdo — inegociáveis
- "Texto fiel, nada de achismos": toda afirmação sai do texto bíblico e traz referência.
- Tradição/estudiosos (não o texto) são marcados como tal. Datas não informadas não são inventadas.
- Não pressupor que a pessoa tenha Bíblia de Estudo (nem todos têm). NAA e Bíblia de Estudo NAA têm direitos da SBB: **nunca copiar** para o app. Conteúdo é paráfrase própria.
  NAA abre em `https://www.bibliaonline.com.br/naa/{slug}/{cap}` — conferir o slug no site antes (Jó=`jó`, João=`jo`).
- Texto dentro do app: Bíblia Livre (BLIVRE), CC BY 4.0 BR, em `data/biblia/blivre/<n>.json` (n = ordem canônica,
  formato `{cap: {verso: texto}}`). O crédito aparece no leitor — manter sempre.

## Tamanho das sessões (decidido: opção C)
Meta: a Bíblia inteira em ~260 sessões = 1 ano no ritmo da meta (5 dias/semana); 7/sem ≈ 9 meses; 2–3/sem ≈ 2 anos.
Média 4–5 capítulos por sessão, variando pelo tipo de texto (narrativa densa 2–3; Salmos de 5 em 5; Provérbios 3–4;
listas/paralelos em blocos maiores); nenhuma sessão passa de ~25–30 min. A era 1 fica com 35 sessões (entrada leve).
Alvo por era: Moisés 30 · Josué/Juízes 11 · Reino Unido 67 · Reino Dividido 49 · Exílio 14 · Depois do Exílio 12 ·
Jesus 19 · Igreja 31 · Fim do Século I 6.

## Ordem e conteúdo
Cronológica por livro (imagem @abibliadoprincipioaofim): 66 livros em 10 eras (`data/plano.js`).
Conteúdo escrito: era 1 (Gênesis + Jó) em `data/era-principio.js` — INTRODUCOES, SESSOES, PERSONAGENS,
MARCOS, CARTAS (símbolo, raridade, título), CRIANCAS (pergunta por sessão).
Nova era: criar `data/era-<id>.js` no mesmo formato, importar em `js/jogo.js`, marcar `conteudo: true` em
`plano.js`, conferir e preencher os `slug` dos livros, adicionar cenas em `js/cenario.js` e incluir no `sw.js`.

## Jogo
- Perfis da família (adulto/criança) no aparelho; "Estudaram junto" conclui a sessão para vários.
- Viajante: escolhe 1 de 10 personagens bíblicos (`data/avatares.js`, imagens em `img/avatares/<id>.webp` geradas de
  `PROMPTS-AVATARES.md`, listadas em `AVATARES_COM_IMAGEM`) Sempre renderizar com `avatarHTML` (`js/avatar.js`). Todo viajante começa como
  pó da terra (Gn 2:7, `poHTML`) e escolhe o personagem no "fôlego de vida", ao concluir a 1ª sessão. Três imagens por
  personagem: `<id>` (níveis 1–7), `<id>-meio` (8–19), `<id>-final` (20+), sobre cenário que muda por estágio (`FUNDOS`).
  Imagens do Gemini vêm com fundo branco: `python3 ferramentas/recortar.py entrada.png img/avatares/<id>.webp`.
- Ritmo (v57): 1ª e 2ª sessão do dia valem XP cheio (sessão + aplicação); 3ª vale ½; 4ª em diante ¼, nunca zero (`FATOR_DIA` em jogo.js). Cartas, livros e eras não mudam.
- XP para subir do nível n ao n+1 = 40 + 10·n^1,5 (50, 68, 92 … 356 no nível 10 … 934 no 20).
- Cartas: imagens do Gemini (prompts em `PROMPTS-CARTAS.md`) em `img/cartas/<id>.webp` (600×800, original em JPG q95 no Drive), listadas em `data/imagens.js`.
  Moldura v42 (placas, joias, cantos; estilo A, raridade na cena). Carta a conquistar mostra "???" no nome.
  No canal de teste, `avancarTeste` (jogo.js) avança o perfil ativo até a última carta com imagem e entrega essas cartas.
- **Cartas por questionário** (decidido em 21/11/2026): ler a sessão só *apresenta* o personagem; a carta é ganha respondendo
  3 perguntas sorteadas do banco `data/quiz-cartas-<era>.js` (criança acerta 2, adulto 3; 3 tentativas; falhou → volta em 7 dias
  com perguntas novas; +5 XP). Banco por raridade: comum 5, rara 6, épica 8, lendária 9, só com o que já foi lido até a sessão
  do personagem, com referência e na redação da Bíblia Livre. Cartas ganhas antes da regra foram mantidas (`modo: 'leitura'`).
  **Nova era: escrever o banco de perguntas junto com os personagens** (sem banco, a carta entra direto, como antes).
  **Uma carta por sessão** (22/11/2026, v40): ao concluir a sessão sai para conquistar o 1º personagem novo dela ("o da vez");
  + 1 da fila (o mais antigo); os outros novos vão para a fila; sessão sem personagem novo solta 1 da fila; a fila não aparece para o usuário (`fila()` em `jogo.js`, calculado das sessões concluídas).
  No questionário, "Abrir a Bíblia para pesquisar" abre o texto da sessão por cima (`abrirBiblia`). A sincronização não
  redesenha telas de quiz (`sessao`, `conquistar`, `revisao`, `dsessao`) nem com janela aberta: era o que fazia a tela piscar.
- Mapa estilo Duolingo com cenários por trecho (`js/cenario.js`) e amigos/família no ponto onde estão.
- Selos da Palavra (`SELOS` na era): objetos/palavras-chave ganhos na sessão em que aparecem; Álbum tem abas Pessoas/Selos.
- Desafios sazonais (`data/desafios.js`): ciclo de 5 anos por época (`serie` + `ciclo`), trilha escolhida pelo ano do
  calendário, selo novo por ano; ver PLANO.md §7.
- Cronologia: `quando` em cada era (`plano.js`) e cena (`cenario.js`), sempre "aproximado"; sem data onde o texto não permite
  (origens, Jó, Apocalipse). Divisor a.C./d.C. antes da era Jesus.

## Nuvem (Supabase)
- `supabase/schema.sql` (idempotente; testado em Postgres 16 com stub de `auth.uid()`): famílias, membros
  (login anônimo por aparelho), perfis (progresso completo em `dados`), amizades. Amigos só veem dados
  públicos do jogo pela função `amigos()` — nunca as anotações.
- `js/config.js`: `SUPABASE_URL` e a chave pública (anon/publishable). Nunca a service_role.
- `js/nuvem.js`: criar/entrar na casa (convite secreto), sincronizar (mescla com `mesclarPerfil` em
  `js/store.js`, sem perder progresso), família por código de 6 letras, ranking geral.
- **Casa × Família** (decidido em 22/11/2026, v38): **casa** = tabela `familias` (celulares de quem mora junto, convite secreto,
  dados e anotações). **Família** = grupo de casas (`grupos` + `grupo_casas`), entra pelo código da família; por enquanto
  uma família por casa (regra nas funções, para abrir várias depois, ex.: grupos de estudo). Código de amigo antigo de uma
  casa ainda funciona em `entrar_grupo`. As `amizades` antigas viraram famílias na migração; `amigos()` fica só para apps v37.
- **Só apelido** (v58): o viajante tem um campo só, `apelido` (até 20); nada de nome no app nem no banco (`perfis.nome` sempre nulo, gatilho `perfis_sem_nome`). Mostrar sempre com `nomePublico(p)` (apelido → personagem → "Pó da terra"). Perfis antigos passam por `normalizarPerfil` (store.js). Grupos tem "Apagar meus dados da nuvem" (`apagar_minha_casa()`, só o celular responsável: `sou_responsavel()`) e, nos outros celulares, "Tirar este celular da nuvem" (`sair_da_casa()`); os dois mantêm o progresso no celular. Responsável = quem criou a casa (`familias.responsavel`) ou, se saiu, o celular mais antigo (`responsavel_da_casa`).
- **Rankings** (aba Grupos): Família = semanal, apelidos, casas da família (`ranking_familia()`). Geral = todos do app,
  **só apelido + personagem** (nunca nome real nem casa), duas abas: XP do mês (zera dia 1º) e Progresso (capítulos lidos),
  top 50 + os da minha casa (`ranking_geral(mes, ordem)`). Apelido (`apelido`, até 20, obrigatório) no Editar viajante. `resumo()` em `app.js` manda `xp_mes`, `mes` e `capitulos` na sincronização.
- **Convites por link** (v39): `#/entrar/casa/<convite>` e `#/entrar/familia/<código>` → tela `telaEntrar` (guarda em `ajornada.convite`); campos aceitam a mensagem colada (`extrairConvite`, `extrairCodigoFamilia`).
- **Mudou o banco? Rafael roda o `schema.sql` inteiro no SQL Editor ANTES de publicar o app no oficial.**
- Requer no painel: Authentication → "Allow anonymous sign-ins" ligado.

## Estrutura
- `js/store.js` — dados locais (localStorage) e backup JSON; migra a v1.
- `js/jogo.js` — regras: progresso, XP, níveis, conquistas, quiz.
- `js/app.js` — telas (roteamento por hash: hoje, jornada, linha, sessao, livro, cartas, carta, amigos, perfil…).
- `sw.js` — offline, rede primeiro; caches separados por canal.
- `.github/workflows/publicar.yml` — publica `main` (Pages com fonte "GitHub Actions"); `/a-jornada/teste/` só redireciona.
- `ferramentas/publicar_teste.sh` — publica a branch `teste` no repositório `a-jornada-teste` (Pages pela branch `main`).
