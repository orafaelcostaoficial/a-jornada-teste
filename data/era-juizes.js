// ERA 3 — Josué e Juízes (Josué, Juízes, Rute)
//
// Mesma regra das eras 1 e 2: texto fiel, nada de achismos. Tudo traz referência; o que vem da
// tradição ou de estudiosos é marcado como tal; nada copiado da NAA; datas não inventadas.
// Tamanho das sessões: opção C (CLAUDE.md) — 11 sessões para 49 capítulos (decidido em 21/11/2026):
// Js 1–5 | 6–8 | 9–12 | 13–19 | 20–24 · Jz 1–5 | 6–8 | 9–12 | 13–16 | 17–21 · Rt 1–4.
// Juízes 19–21 tem um crime violento: as notas e as perguntas citam o fato sem detalhar.

export const INTRODUCOES = {
  js: {
    autor: 'O livro não nomeia o seu autor. Diz que Josué escreveu as palavras da aliança de Siquém no livro da lei de Deus (Js 24:26). A tradição judaica atribui o livro a Josué; o relato da sua morte (Js 24:29-33) foi escrito por outra pessoa.',
    data: 'Não informada no texto.',
    cenario: 'Começa junto ao Jordão, logo depois da morte de Moisés (Js 1:1-2), e termina em Siquém, com a aliança renovada e a morte de Josué (Js 24:1,29).',
    tema: 'Deus cumpre o que prometeu e dá a terra a Israel. O povo é chamado a ser forte, obedecer à lei e servir somente ao Senhor.',
    chave: 'Js 21:45',
    estrutura: 'Quatro partes: entrar na terra, conquistá-la, reparti-la entre as tribos e escolher servir ao Senhor nela.',
    esboco: [
      ['1–5', 'Entrar: Raabe, a travessia do Jordão e Gilgal'],
      ['6–12', 'Conquistar: Jericó, Ai, Gibeom e as campanhas do sul e do norte'],
      ['13–21', 'Repartir: a herança de cada tribo, as cidades de refúgio e as dos levitas'],
      ['22–24', 'Servir: o altar junto ao Jordão, a despedida de Josué e a aliança em Siquém'],
    ],
  },
  jz: {
    autor: 'Não nomeado no texto. A tradição judaica atribui o livro a Samuel.',
    data: 'Não informada. O texto repete que "naqueles dias não havia rei em Israel" (Jz 17:6; 21:25); por isso estudiosos entendem que foi escrito já no tempo dos reis.',
    cenario: 'A terra de Canaã depois da morte de Josué (Jz 1:1; 2:8-10), com as tribos espalhadas e cercadas de povos que não foram expulsos.',
    tema: 'Uma geração que não conheceu o Senhor (Jz 2:10) entra num ciclo: abandona a Deus, é oprimida, clama, e Deus levanta juízes que a livram. Mas, a cada volta, o povo se afasta mais.',
    chave: 'Jz 2:16; 21:25',
    estrutura: 'Uma introdução mostra a conquista incompleta e o ciclo (1:1–3:6); depois vêm os juízes, um a um (3:7–16:31); dois relatos finais mostram como o povo estava (17–21).',
    esboco: [
      ['1:1–3:6', 'A conquista incompleta e o ciclo'],
      ['3:7–5:31', 'Otniel, Eúde, Sangar, Débora e Baraque'],
      ['6–9', 'Gideão e seu filho Abimeleque'],
      ['10–12', 'Tola, Jair, Jefté, Ibsã, Elom e Abdom'],
      ['13–16', 'Sansão'],
      ['17–21', 'Sem rei: o ídolo de Mica, a tribo de Dã e a guerra contra Benjamim'],
    ],
  },
  rt: {
    autor: 'Não nomeado no texto. A tradição judaica atribui o livro a Samuel.',
    data: 'Não informada. A história se passa no tempo dos juízes (Rt 1:1), e a genealogia termina em Davi (Rt 4:22): o livro foi escrito no tempo de Davi ou depois.',
    cenario: 'Moabe e Belém de Judá, nos dias em que os juízes julgavam (Rt 1:1-2).',
    tema: 'Num tempo de fome e de perdas, a lealdade de Rute e a bondade de Boaz mostram o cuidado de Deus, que restaura Noemi e prepara a família de Davi.',
    chave: 'Rt 1:16',
    estrutura: 'Quatro capítulos, cada um com uma cena: Moabe e a volta; o campo; a eira; a porta da cidade.',
    esboco: [
      ['1', 'Perdas em Moabe e a volta a Belém'],
      ['2', 'No campo de Boaz'],
      ['3', 'Na eira'],
      ['4', 'O resgate e o nascimento de Obede'],
    ],
  },
};

export const SESSOES = [
  // ───────────── JOSUÉ ─────────────
  { id: 'js-01', livro: 'js', caps: [1, 5], titulo: 'Forte e corajoso',
    cenario: 'As margens do Jordão, de frente para Jericó.',
    contexto: 'Moisés morreu, e Deus manda Josué atravessar o Jordão com o povo. Em Jericó, Raabe esconde os dois espias. As águas do Jordão param, Israel passa em terra seca e levanta doze pedras como memorial. Em Gilgal, o povo é circuncidado, celebra a Páscoa, e o maná cessa.',
    notas: [
      ['1:8', 'O livro da lei não deve sair da boca de Josué: meditar nele de dia e de noite, para cumprir tudo o que está escrito.'],
      ['1:9', 'Seja forte e corajoso; não tenha medo, porque o Senhor, seu Deus, está com você por onde você andar.'],
      ['2:11', 'Raabe aos espias: o Senhor, o Deus de vocês, é Deus em cima nos céus e embaixo na terra.'],
      ['2:18', 'O sinal combinado: um cordão de fio vermelho amarrado na janela da casa de Raabe.'],
      ['3:15-16', 'Era tempo de colheita e o Jordão transbordava. Quando os pés dos sacerdotes que levavam a arca tocaram a água, o rio parou de correr.'],
      ['4:6-7', 'As doze pedras: quando os filhos perguntarem o que elas significam, contem que as águas do Jordão pararam diante da arca.'],
      ['5:12', 'No dia seguinte àquele em que comeram do fruto da terra, o maná cessou.'],
      ['5:14-15', 'O comandante do exército do Senhor manda Josué tirar as sandálias, porque o lugar é santo.'],
    ],
    personagens: ['raabe'], marco: 'jordao',
    pergunta: 'Deus mandou Josué ser forte porque Ele estaria junto, não porque a tarefa era fácil. Em que situação você precisa dessa coragem hoje?',
    quiz: [
      { q: 'O que Raabe amarrou na janela como sinal?', op: ['Um pano branco', 'Um cordão de fio vermelho', 'Uma lâmpada acesa', 'Um ramo de oliveira'], a: 1, ref: 'Js 2:18,21' },
      { q: 'Quando o Jordão parou de correr?', op: ['Quando Josué levantou a vara', 'Quando os pés dos sacerdotes que levavam a arca tocaram a água', 'Quando soprou um vento forte', 'Quando o povo gritou'], a: 1, ref: 'Js 3:15-16' },
      { q: 'Quantas pedras foram tiradas do Jordão para o memorial?', op: ['Sete', 'Dez', 'Doze', 'Quarenta'], a: 2, ref: 'Js 4:3,8' }] },

  { id: 'js-02', livro: 'js', caps: [6, 8], titulo: 'Jericó e Ai',
    cenario: 'Jericó, a cidade fechada, e depois a cidade de Ai.',
    contexto: 'Durante seis dias o povo dá uma volta por dia ao redor de Jericó, com os sacerdotes tocando as trombetas. No sétimo dia são sete voltas e um grande grito, e o muro cai. Raabe e a família dela são poupadas. Mas Acã guarda para si coisas condenadas, e Israel é derrotado em Ai. Depois de o pecado ser tratado, Ai é tomada, e Josué lê a lei diante de todo o povo.',
    notas: [
      ['6:3-4', 'Seis dias, uma volta por dia; no sétimo, sete voltas, com sete sacerdotes tocando trombetas de chifre de carneiro diante da arca.'],
      ['6:20', 'O povo grita ao som das trombetas, e o muro desaba.'],
      ['6:25', 'Josué poupa Raabe e toda a família dela, e ela passa a morar no meio de Israel.'],
      ['7:1', 'Acã, da tribo de Judá, pega das coisas condenadas, e a ira do Senhor se acende contra Israel.'],
      ['7:21', 'Acã confessa: vi, cobicei, peguei e escondi na minha tenda uma capa babilônica, prata e uma barra de ouro.'],
      ['8:1', 'Depois disso Deus diz a Josué: não tenha medo nem desanime; eu entreguei Ai nas suas mãos.'],
      ['8:34-35', 'Josué lê todas as palavras da lei diante de todo o povo, com as mulheres, as crianças e os estrangeiros.'],
    ],
    personagens: ['aca'], marco: 'jerico',
    pergunta: 'Acã viu, cobiçou, pegou e escondeu. Em que ponto dessa sequência é mais fácil parar? Há algo que você tem guardado "escondido na tenda"?',
    quiz: [
      { q: 'Quantas voltas o povo deu ao redor de Jericó no sétimo dia?', op: ['Uma', 'Três', 'Sete', 'Doze'], a: 2, ref: 'Js 6:4,15' },
      { q: 'Onde Acã escondeu o que pegou?', op: ['No rio', 'Na sua tenda', 'Em Ai', 'Debaixo do altar'], a: 1, ref: 'Js 7:21' },
      { q: 'Quem ouviu Josué ler a lei?', op: ['Só os sacerdotes', 'Só os homens', 'Todo o povo, com mulheres, crianças e estrangeiros', 'Só os anciãos'], a: 2, ref: 'Js 8:35' }] },

  { id: 'js-03', livro: 'js', caps: [9, 12], titulo: 'O dia em que o sol parou',
    cenario: 'Gibeom e as cidades do sul e do norte de Canaã.',
    contexto: 'Os gibeonitas enganam Israel fingindo vir de uma terra distante, e os líderes fazem aliança com eles sem consultar o Senhor. Cinco reis atacam Gibeom; Israel sai em socorro, e o sol para no meio do céu. Josué vence os reis do sul e depois os do norte. O capítulo 12 lista os reis vencidos.',
    notas: [
      ['9:14', 'Os homens de Israel examinaram as provisões dos gibeonitas, mas não consultaram o Senhor.'],
      ['9:19', 'Mesmo enganados, os líderes mantêm o juramento que tinham feito em nome do Senhor.'],
      ['10:12-13', 'Josué fala ao Senhor, e o sol para sobre Gibeom e a lua sobre o vale de Aijalom.'],
      ['10:14', 'Não houve dia como aquele, nem antes nem depois, em que o Senhor atendeu à voz de um homem; o Senhor lutava por Israel.'],
      ['11:15', 'Josué não deixou de fazer nada do que o Senhor tinha ordenado a Moisés.'],
      ['11:23', 'Josué toma a terra e a dá por herança a Israel, conforme as tribos; e a terra descansa da guerra.'],
    ],
    personagens: [], marco: 'sol',
    pergunta: 'Os líderes olharam o pão velho, mas não perguntaram a Deus. Que decisão sua precisa de oração antes de ser tomada?',
    quiz: [
      { q: 'O que os líderes de Israel deixaram de fazer antes da aliança com os gibeonitas?', op: ['Examinar as provisões', 'Consultar o Senhor', 'Fazer um juramento', 'Contar o povo'], a: 1, ref: 'Js 9:14' },
      { q: 'Sobre que cidade o sol parou?', op: ['Jericó', 'Gibeom', 'Ai', 'Siló'], a: 1, ref: 'Js 10:12' }] },

  { id: 'js-04', livro: 'js', caps: [13, 19], titulo: 'A terra repartida',
    cenario: 'Gilgal e depois Siló, onde a terra é sorteada entre as tribos.',
    contexto: 'Josué está velho e ainda resta terra para conquistar. A terra é repartida por sorteio entre as tribos; boa parte destes capítulos são listas de fronteiras e cidades. Calebe, aos 85 anos, pede o monte que Deus lhe prometera. Em Siló a tenda do encontro é armada e as últimas tribos recebem a sua parte. Por último, Josué recebe a sua cidade.',
    notas: [
      ['13:1', 'Josué está velho, e ainda resta muita terra para tomar.'],
      ['13:33', 'À tribo de Levi Moisés não deu terra por herança: o Senhor, o Deus de Israel, é a herança deles.'],
      ['14:10-12', 'Calebe, com 85 anos: estou tão forte hoje como no dia em que Moisés me enviou; dê-me este monte.'],
      ['15:16-17', 'Calebe promete a filha, Acsa, a quem tomar Quiriate-Sefer; Otniel, filho de Quenaz, irmão de Calebe, a toma.'],
      ['15:18-19', 'Acsa pede ao pai uma bênção: terra com água. Calebe lhe dá as fontes de cima e as de baixo.'],
      ['17:3-4', 'As filhas de Zelofeade recebem a herança, como o Senhor tinha mandado a Moisés.'],
      ['18:1', 'Toda a congregação se reúne em Siló e ali arma a tenda do encontro.'],
      ['18:3', 'Josué: até quando vocês vão adiar a posse da terra que o Senhor lhes deu?'],
      ['19:49-50', 'Por último, os israelitas dão a Josué a cidade que ele pediu, no monte de Efraim, e ele a reconstrói.'],
    ],
    personagens: ['acsa'], marco: 'partilha',
    pergunta: 'Calebe esperou 45 anos pela promessa e, aos 85, pediu o monte. Que promessa de Deus você continua esperando com fé?',
    quiz: [
      { q: 'Quantos anos Calebe tinha quando pediu o monte?', op: ['40', '65', '85', '120'], a: 2, ref: 'Js 14:10' },
      { q: 'Qual era a herança da tribo de Levi?', op: ['O monte de Hebrom', 'O próprio Senhor', 'A cidade de Jericó', 'A terra além do Jordão'], a: 1, ref: 'Js 13:33' },
      { q: 'Onde a tenda do encontro foi armada?', op: ['Em Gilgal', 'Em Siló', 'Em Jericó', 'Em Siquém'], a: 1, ref: 'Js 18:1' }] },

  { id: 'js-05', livro: 'js', caps: [20, 24], titulo: 'Eu e a minha casa',
    cenario: 'Siquém, onde Josué reúne as tribos pela última vez.',
    contexto: 'São separadas as cidades de refúgio e as cidades dos levitas. As tribos do outro lado do Jordão voltam para casa e levantam um altar que quase provoca uma guerra. Já velho, Josué se despede, conta a história desde Abraão e chama o povo a escolher a quem vai servir. A aliança é renovada, e Josué morre com 110 anos.',
    notas: [
      ['20:2-3', 'As cidades de refúgio: quem matasse alguém sem querer podia fugir para lá e ficar protegido do vingador.'],
      ['21:45', 'Nenhuma de todas as boas promessas que o Senhor fez à casa de Israel falhou; todas se cumpriram.'],
      ['22:26-27', 'O altar junto ao Jordão não era para sacrifícios: era testemunha de que as tribos do leste também serviam ao Senhor.'],
      ['23:14', 'Josué: vou pelo caminho de toda a terra; nenhuma das boas palavras do Senhor falhou.'],
      ['24:15', 'Escolham hoje a quem vão servir. Eu e a minha casa serviremos ao Senhor.'],
      ['24:26-27', 'Josué escreve estas palavras no livro da lei de Deus e levanta uma grande pedra debaixo do carvalho, como testemunha.'],
      ['24:29', 'Josué, filho de Num, servo do Senhor, morre com 110 anos.'],
      ['24:32', 'Os ossos de José, trazidos do Egito, são enterrados em Siquém.'],
    ],
    personagens: [], marco: 'siquem',
    pergunta: '"Eu e a minha casa serviremos ao Senhor." O que isso pode significar na prática na sua casa, esta semana?',
    quiz: [
      { q: 'O que Josué disse que ele e a sua casa fariam?', op: ['Voltariam ao Egito', 'Serviriam ao Senhor', 'Construiriam uma cidade', 'Morariam em Siló'], a: 1, ref: 'Js 24:15' },
      { q: 'Com quantos anos Josué morreu?', op: ['85', '100', '110', '120'], a: 2, ref: 'Js 24:29' },
      { q: 'O que foi enterrado em Siquém no fim do livro?', op: ['A arca', 'As tábuas da lei', 'Os ossos de José', 'As doze pedras'], a: 2, ref: 'Js 24:32' }] },

  // ───────────── JUÍZES ─────────────
  { id: 'jz-01', livro: 'jz', caps: [1, 5], titulo: 'O ciclo e os primeiros juízes',
    cenario: 'Canaã depois de Josué; o monte Tabor e o ribeiro de Quisom.',
    contexto: 'As tribos não expulsam por completo os povos da terra. A geração de Josué morre, e surge outra que não conhecia o Senhor. Começa um ciclo: o povo serve a outros deuses, é oprimido, clama, e Deus levanta juízes. Otniel, Eúde e Sangar livram Israel. Depois a profetisa Débora chama Baraque, e o comandante inimigo, Sísera, morre pelas mãos de Jael.',
    notas: [
      ['2:10', 'Surgiu outra geração, que não conhecia o Senhor nem o que ele tinha feito por Israel.'],
      ['2:16', 'O Senhor levantava juízes, que os livravam das mãos dos que os saqueavam.'],
      ['2:19', 'Quando o juiz morria, o povo voltava a se corromper, ainda mais que os seus pais.'],
      ['3:9-10', 'Os israelitas clamam, e o Senhor levanta Otniel; o Espírito do Senhor vem sobre ele.'],
      ['3:15', 'Eúde, um homem canhoto da tribo de Benjamim, é o libertador contra Eglom, rei de Moabe.'],
      ['3:31', 'Sangar fere 600 filisteus com uma aguilhada de bois.'],
      ['4:4-5', 'Débora, profetisa, julgava Israel sentada debaixo da palmeira de Débora.'],
      ['4:9', 'Débora a Baraque: irei com você, mas a honra não será sua, porque o Senhor entregará Sísera nas mãos de uma mulher.'],
      ['4:21', 'Jael, mulher de Héber, mata Sísera enquanto ele dorme na tenda dela.'],
      ['5:31', 'Fim do cântico: os que amam o Senhor sejam como o sol quando nasce com força. E a terra descansou 40 anos.'],
    ],
    personagens: ['otniel', 'eude', 'debora', 'baraque', 'jael'], marco: 'juizes',
    pergunta: 'Uma geração cresceu sem conhecer o que Deus tinha feito. O que você pode fazer para que as crianças da sua casa conheçam as obras de Deus?',
    quiz: [
      { q: 'Como era a geração que surgiu depois da de Josué?', op: ['Conquistou toda a terra', 'Não conhecia o Senhor', 'Voltou para o Egito', 'Construiu o templo'], a: 1, ref: 'Jz 2:10' },
      { q: 'Onde Débora se sentava para julgar Israel?', op: ['Na porta da cidade', 'Debaixo da palmeira de Débora', 'No tabernáculo em Siló', 'No alto do monte Tabor'], a: 1, ref: 'Jz 4:5' },
      { q: 'Com o que Sangar feriu 600 filisteus?', op: ['Uma espada', 'Uma queixada de jumento', 'Uma aguilhada de bois', 'Uma funda'], a: 2, ref: 'Jz 3:31' }] },

  { id: 'jz-02', livro: 'jz', caps: [6, 8], titulo: 'Gideão e os 300',
    cenario: 'O vale de Jezreel, invadido pelos midianitas.',
    contexto: 'Os midianitas devastam Israel ano após ano. O anjo do Senhor encontra Gideão malhando trigo escondido num lagar e o chama de valente guerreiro. Gideão derruba o altar de Baal, pede sinais com a lã, e Deus reduz o exército a 300 homens. Com trombetas, cântaros e tochas, Midiã é vencido. Depois Gideão faz um éfode de ouro, que se torna uma armadilha.',
    notas: [
      ['6:11-12', 'Gideão malhava trigo no lagar, para escondê-lo dos midianitas. O anjo: o Senhor está com você, valente guerreiro.'],
      ['6:15', 'Gideão: a minha família é pobre em Manassés, e eu sou o menor na casa do meu pai.'],
      ['6:37-40', 'O sinal da lã: primeiro molhada com o chão seco, depois seca com o chão molhado. Deus atende as duas vezes.'],
      ['7:2', 'O povo é numeroso demais: Israel poderia se gloriar, dizendo que se livrou pela própria força.'],
      ['7:7', 'Com os 300 que lamberam a água, o Senhor diz que livrará Israel.'],
      ['7:20', 'Os 300 quebram os cântaros, levantam as tochas, tocam as trombetas e gritam: espada pelo Senhor e por Gideão!'],
      ['8:23', 'Gideão recusa ser rei: o Senhor governará sobre vocês.'],
      ['8:27', 'Com o ouro, Gideão faz um éfode, que se torna uma armadilha para ele e para a sua casa.'],
    ],
    personagens: ['gideao'], marco: 'gideao',
    pergunta: 'Deus chamou de "valente" um homem escondido e com medo. Como Deus vê você, além do seu medo?',
    quiz: [
      { q: 'Onde Gideão estava malhando o trigo?', op: ['Na eira', 'No lagar, onde se pisavam uvas', 'No campo aberto', 'Dentro da tenda'], a: 1, ref: 'Jz 6:11' },
      { q: 'Com quantos homens Gideão venceu Midiã?', op: ['32 mil', '10 mil', '300', '12'], a: 2, ref: 'Jz 7:7' },
      { q: 'O que os 300 levavam nas mãos?', op: ['Espadas e escudos', 'Trombetas, cântaros e tochas', 'Arcos e flechas', 'Lanças e fundas'], a: 1, ref: 'Jz 7:16' }] },

  { id: 'jz-03', livro: 'jz', caps: [9, 12], titulo: 'O espinheiro e o voto',
    cenario: 'Siquém e a terra de Gileade, do outro lado do Jordão.',
    contexto: 'Abimeleque, filho de Gideão, mata os irmãos para reinar em Siquém; só Jotão escapa e conta a parábola das árvores. Abimeleque acaba recebendo o mal que fez. Depois de outros juízes, os amonitas oprimem Israel. Jefté, expulso pelos irmãos, é chamado para liderar e faz um voto precipitado, que atinge a sua única filha.',
    notas: [
      ['9:5', 'Abimeleque mata os seus setenta irmãos sobre uma pedra; só Jotão, o mais novo, escapa escondido.'],
      ['9:14-15', 'Na parábola de Jotão, as árvores querem um rei, e o espinheiro aceita: venham se abrigar na minha sombra, senão sairá fogo de mim.'],
      ['9:56', 'Assim Deus fez voltar sobre Abimeleque o mal que ele tinha feito ao pai, matando os setenta irmãos.'],
      ['10:16', 'O povo tira os deuses estranhos e serve ao Senhor; e o Senhor se angustiou com o sofrimento de Israel.'],
      ['11:1-2', 'Jefté, valente guerreiro de Gileade, filho de uma prostituta, é expulso de casa pelos irmãos.'],
      ['11:26', 'Jefté diz ao rei de Amom que Israel já morava havia 300 anos naquelas cidades.'],
      ['11:30-31', 'O voto de Jefté: se vencer, oferecerá ao Senhor o que primeiro sair da sua casa ao seu encontro.'],
      ['11:34-35', 'Quem sai ao encontro dele é a filha, a única, dançando com tamborins. Jefté rasga as roupas.'],
      ['11:39', 'O texto diz que ele cumpriu o voto; os estudiosos discordam sobre o que isso significou.'],
    ],
    personagens: ['abimeleque-jz', 'jotao', 'jefte', 'filha-jefte'], marco: 'jefte',
    pergunta: 'Jefté prometeu sem pensar e pagou caro. Você costuma falar ou prometer antes de pensar? O que pode ajudar?',
    quiz: [
      { q: 'Na parábola de Jotão, qual planta aceitou ser rei das árvores?', op: ['A oliveira', 'A figueira', 'A videira', 'O espinheiro'], a: 3, ref: 'Jz 9:14-15' },
      { q: 'Quem saiu primeiro da casa de Jefté ao encontro dele?', op: ['Um carneiro', 'A mulher dele', 'A filha única dele', 'Um servo'], a: 2, ref: 'Jz 11:34' }] },

  { id: 'jz-04', livro: 'jz', caps: [13, 16], titulo: 'Sansão',
    cenario: 'A fronteira com os filisteus: Zorá, Timna e Gaza.',
    contexto: 'O anjo do Senhor anuncia a uma mulher estéril, da tribo de Dã, que ela terá um filho nazireu, separado para Deus desde o ventre. Sansão cresce, e o Espírito do Senhor lhe dá uma força enorme. Mas ele vive pelos próprios desejos: casa-se com uma filisteia, vinga-se e, por fim, revela a Dalila o segredo do seu cabelo. Preso e cego, clama a Deus uma última vez.',
    notas: [
      ['13:5', 'O menino será nazireu desde o ventre; navalha não passará na cabeça dele, e ele começará a livrar Israel dos filisteus.'],
      ['13:20', 'Quando a chama sobe do altar, o anjo do Senhor sobe nela, à vista de Manoá e da sua mulher.'],
      ['14:5-6', 'O Espírito do Senhor vem sobre Sansão, e ele despedaça um leão com as mãos.'],
      ['14:14', 'O enigma: do que come saiu comida, e do forte saiu doçura.'],
      ['15:15', 'Com uma queixada de jumento, Sansão mata mil homens.'],
      ['16:17', 'Sansão conta a Dalila todo o seu coração: se o cabelo for raspado, a força o deixará.'],
      ['16:20', 'Ele não sabia que o Senhor tinha se retirado dele.'],
      ['16:28', 'Sansão clama: Senhor, lembra-te de mim e fortalece-me só esta vez.'],
      ['16:31', 'Sansão julgou Israel 20 anos.'],
    ],
    personagens: ['manoa', 'sansao', 'dalila'], marco: 'sansao',
    pergunta: 'Sansão tinha um dom enorme e brincava com ele. Que dom Deus lhe deu que você precisa levar a sério?',
    quiz: [
      { q: 'O que nunca podia passar na cabeça de Sansão?', op: ['Óleo', 'Navalha', 'Coroa', 'Cinza'], a: 1, ref: 'Jz 13:5' },
      { q: 'Que animal Sansão despedaçou com as mãos?', op: ['Um urso', 'Um lobo', 'Um leão', 'Um touro'], a: 2, ref: 'Jz 14:5-6' },
      { q: 'O que Sansão não sabia quando acordou sem o cabelo?', op: ['Que era noite', 'Que o Senhor tinha se retirado dele', 'Que Dalila tinha fugido', 'Que estava em Gaza'], a: 1, ref: 'Jz 16:20' }] },

  { id: 'jz-05', livro: 'jz', caps: [17, 21], titulo: 'Cada um fazia o que achava certo',
    cenario: 'Os montes de Efraim, a tribo de Dã e Gibeá de Benjamim, sem rei em Israel.',
    contexto: 'Dois relatos mostram como o povo estava. Mica faz um ídolo em casa e contrata um levita como sacerdote; a tribo de Dã leva o ídolo e o levita e toma a cidade de Laís. Depois, um crime terrível contra uma mulher em Gibeá, cidade de Benjamim, leva as outras tribos a uma guerra que quase acaba com Benjamim. O livro termina dizendo que cada um fazia o que achava certo.',
    notas: [
      ['17:6', 'Naqueles dias não havia rei em Israel; cada um fazia o que parecia certo aos seus olhos.'],
      ['17:13', 'Mica: agora sei que o Senhor me fará bem, porque tenho um levita como sacerdote.'],
      ['18:31', 'A imagem de Mica fica com os de Dã todo o tempo em que a casa de Deus esteve em Siló.'],
      ['19:30', 'Quem soube do crime dizia: nunca se fez nem se viu coisa assim desde que Israel saiu do Egito. Pensem nisso, aconselhem-se e falem.'],
      ['20:1', 'Todo Israel, de Dã a Berseba, se reúne como um só homem diante do Senhor em Mispá.'],
      ['20:26-28', 'O povo chora e jejua diante do Senhor em Betel; ali estava a arca, e Fineias, neto de Arão, servia diante dela.'],
      ['21:3', 'O povo pergunta ao Senhor: por que falta hoje uma tribo em Israel?'],
      ['21:25', 'Naqueles dias não havia rei em Israel; cada um fazia o que achava certo.'],
    ],
    personagens: ['mica'], marco: 'sem-rei',
    pergunta: '"Cada um fazia o que achava certo." Em que área você é tentado a decidir só pelo que acha, sem perguntar o que Deus diz?',
    quiz: [
      { q: 'Como o livro de Juízes termina descrevendo aqueles dias?', op: ['Todos obedeciam a Deus', 'Cada um fazia o que achava certo', 'O rei governava bem', 'Havia paz em toda a terra'], a: 1, ref: 'Jz 21:25' },
      { q: 'Qual tribo quase desapareceu na guerra?', op: ['Judá', 'Dã', 'Benjamim', 'Levi'], a: 2, ref: 'Jz 20:46-48; 21:3' }] },

  // ───────────── RUTE ─────────────
  { id: 'rt-01', livro: 'rt', caps: [1, 4], titulo: 'Rute e Boaz',
    cenario: 'Moabe e Belém de Judá, no tempo dos juízes.',
    contexto: 'Numa fome, Elimeleque leva a família de Belém para Moabe. Ele e os dois filhos morrem. Noemi volta para Belém, e a nora moabita Rute decide ir com ela. Rute colhe espigas no campo de Boaz, parente de Elimeleque, que a trata com bondade. Boaz resgata a herança da família e se casa com Rute. Nasce Obede, avô de Davi.',
    notas: [
      ['1:1', 'Nos dias em que os juízes julgavam, houve fome na terra.'],
      ['1:16', 'Rute a Noemi: aonde você for, irei; o seu povo será o meu povo, e o seu Deus será o meu Deus.'],
      ['1:20', 'Noemi: não me chamem Noemi; chamem-me Mara, porque o Todo-Poderoso me deu muita amargura.'],
      ['2:3', 'Rute vai colher espigas e chega justamente à parte do campo de Boaz, da família de Elimeleque.'],
      ['2:12', 'Boaz: o Senhor, o Deus de Israel, debaixo de cujas asas você veio se abrigar, lhe dê a recompensa.'],
      ['3:9', 'Na eira, Rute pede a Boaz que estenda a capa sobre ela, porque ele é resgatador.'],
      ['4:9-10', 'Diante dos anciãos, na porta da cidade, Boaz compra a herança de Elimeleque e toma Rute por esposa.'],
      ['4:14', 'As mulheres a Noemi: bendito seja o Senhor, que hoje não a deixou sem resgatador.'],
      ['4:17', 'O menino se chama Obede; ele é o pai de Jessé, pai de Davi.'],
    ],
    personagens: ['noemi', 'rute', 'boaz'], marco: 'rute',
    pergunta: 'Rute ficou com Noemi quando seria mais fácil ir embora. Quem precisa da sua lealdade e da sua bondade agora?',
    quiz: [
      { q: 'O que Rute disse a Noemi?', op: ['Volte comigo para Moabe', 'O seu Deus será o meu Deus', 'Vou procurar outro marido', 'Fique em Belém sozinha'], a: 1, ref: 'Rt 1:16' },
      { q: 'No campo de quem Rute foi colher?', op: ['De Elimeleque', 'De Boaz', 'De Noemi', 'Do rei'], a: 1, ref: 'Rt 2:3' },
      { q: 'Como se chamou o filho de Rute e Boaz?', op: ['Davi', 'Jessé', 'Obede', 'Salmom'], a: 2, ref: 'Rt 4:13,17' }] },
];

export const PERSONAGENS = {
  raabe: { nome: 'Raabe', quem: 'Mulher de Jericó; o texto a chama de prostituta.', vida: 'Escondeu os espias de Israel, confessou que o Senhor é Deus nos céus e na terra e pediu que poupassem a sua família. Amarrou o cordão vermelho na janela e foi salva com os seus quando Jericó caiu.', refs: 'Js 2:1-21; 6:22-25' },
  aca: { nome: 'Acã', quem: 'Filho de Carmi, da tribo de Judá.', vida: 'Em Jericó, pegou das coisas condenadas e as escondeu na sua tenda. Por causa disso Israel perdeu em Ai. Descoberto, confessou e foi morto no vale de Acor.', refs: 'Js 7:1,18-26' },
  acsa: { nome: 'Acsa', quem: 'Filha de Calebe; esposa de Otniel.', vida: 'Foi dada a Otniel, que tomou Quiriate-Sefer. Pediu ao pai uma terra com água e recebeu as fontes de cima e as de baixo.', refs: 'Js 15:16-19; Jz 1:12-15' },
  otniel: { nome: 'Otniel', quem: 'Filho de Quenaz, irmão mais novo de Calebe; da tribo de Judá.', vida: 'Tomou Quiriate-Sefer e casou-se com Acsa. O Espírito do Senhor veio sobre ele, e ele livrou Israel de Cusã-Risataim, rei da Síria. A terra descansou 40 anos.', refs: 'Js 15:17; Jz 3:8-11' },
  eude: { nome: 'Eúde', quem: 'Filho de Gera, da tribo de Benjamim; homem canhoto.', vida: 'Levou o tributo a Eglom, rei de Moabe, e o matou. Depois chamou Israel à luta. A terra descansou 80 anos.', refs: 'Jz 3:15-30' },
  debora: { nome: 'Débora', quem: 'Profetisa, mulher de Lapidote; julgava Israel.', vida: 'Sentava-se debaixo da palmeira de Débora, e o povo a procurava para ser julgado. Chamou Baraque para a batalha contra Sísera, foi com ele e cantou a vitória. A terra descansou 40 anos.', refs: 'Jz 4:4-14; 5:1-31' },
  baraque: { nome: 'Baraque', quem: 'Filho de Abinoão, de Quedes de Naftali.', vida: 'Chamado por Débora, só aceitou ir se ela fosse junto. Desceu do monte Tabor com dez mil homens e venceu o exército de Sísera.', refs: 'Jz 4:6-16; 5:1' },
  jael: { nome: 'Jael', quem: 'Mulher de Héber, o queneu.', vida: 'Recebeu Sísera na sua tenda quando ele fugia da batalha e o matou enquanto ele dormia. O cântico de Débora a chama de bendita entre as mulheres que vivem em tendas.', refs: 'Jz 4:17-22; 5:24-27' },
  gideao: { nome: 'Gideão', quem: 'Filho de Joás, de Ofra, da tribo de Manassés; também chamado Jerubaal.', vida: 'Chamado pelo anjo enquanto malhava trigo escondido, derrubou o altar de Baal e, com 300 homens, venceu Midiã. Recusou ser rei, mas fez um éfode de ouro que se tornou uma armadilha.', refs: 'Jz 6:11-32; 7:1-25; 8:22-27' },
  'abimeleque-jz': { nome: 'Abimeleque, filho de Gideão', quem: 'Filho de Gideão com uma concubina de Siquém.', vida: 'Matou os setenta irmãos para reinar em Siquém. Três anos depois, Siquém se voltou contra ele. Uma mulher jogou uma pedra de moinho da torre de Tebes e o feriu de morte.', refs: 'Jz 8:31; 9:1-6,22-23,53-56' },
  jotao: { nome: 'Jotão', quem: 'O filho mais novo de Gideão.', vida: 'Foi o único que escapou quando Abimeleque matou os irmãos. Do alto do monte Gerizim contou a parábola das árvores e do espinheiro, e depois fugiu.', refs: 'Jz 9:5,7-21' },
  jefte: { nome: 'Jefté', quem: 'Gileadita, valente guerreiro, filho de uma prostituta.', vida: 'Expulso pelos irmãos, foi chamado de volta para lutar contra os amonitas. Fez um voto precipitado antes da batalha. Venceu e julgou Israel seis anos.', refs: 'Jz 11:1-11,29-40; 12:7' },
  'filha-jefte': { nome: 'Filha de Jefté', quem: 'A única filha de Jefté; o texto não diz o seu nome.', vida: 'Saiu ao encontro do pai com tamborins e danças. Ao saber do voto, pediu dois meses para chorar com as amigas nos montes. As moças de Israel a lembravam quatro dias por ano.', refs: 'Jz 11:34-40' },
  manoa: { nome: 'Manoá e sua mulher', quem: 'Pais de Sansão, de Zorá, da tribo de Dã. O texto não diz o nome dela.', vida: 'O anjo do Senhor anunciou a ela, que era estéril, o nascimento de um filho nazireu. Manoá pediu instruções a Deus, e os dois viram o anjo subir na chama do altar.', refs: 'Jz 13:2-24' },
  sansao: { nome: 'Sansão', quem: 'Filho de Manoá, da tribo de Dã; nazireu desde o ventre.', vida: 'O Espírito do Senhor lhe dava força: despedaçou um leão e venceu os filisteus muitas vezes. Contou a Dalila o segredo do cabelo e foi preso e cegado. No fim, derrubou o templo de Dagom. Julgou Israel 20 anos.', refs: 'Jz 13:24-25; 14:6; 15:15,20; 16:17-31' },
  dalila: { nome: 'Dalila', quem: 'Mulher do vale de Soreque.', vida: 'Os chefes dos filisteus lhe ofereceram prata para descobrir o segredo da força de Sansão. Insistiu dia após dia até ele contar, e o entregou.', refs: 'Jz 16:4-21' },
  mica: { nome: 'Mica', quem: 'Homem dos montes de Efraim.', vida: 'Fez uma imagem com a prata da mãe, montou um santuário em casa e contratou um levita como sacerdote. A tribo de Dã levou a imagem e o levita.', refs: 'Jz 17:1-13; 18:14-26' },
  noemi: { nome: 'Noemi', quem: 'Mulher de Elimeleque, de Belém de Judá.', vida: 'Perdeu o marido e os dois filhos em Moabe e voltou para Belém pedindo para ser chamada Mara (amarga). Orientou Rute, e no fim recebeu no colo o neto Obede.', refs: 'Rt 1:1-5,19-21; 3:1-4; 4:14-17' },
  rute: { nome: 'Rute', quem: 'Moabita, nora de Noemi.', vida: 'Viúva, não abandonou a sogra: foi com ela para Belém e escolheu o Deus de Noemi. Colheu espigas no campo de Boaz, casou-se com ele e foi mãe de Obede, avô de Davi.', refs: 'Rt 1:4,14-18; 2:2-3; 4:13,17' },
  boaz: { nome: 'Boaz', quem: 'Homem de Belém, rico, da família de Elimeleque.', vida: 'Tratou Rute com bondade no seu campo. Diante dos anciãos, resgatou a herança de Elimeleque e casou-se com Rute. Foi pai de Obede.', refs: 'Rt 2:1,8-16; 4:1-13,21' },
};

export const MARCOS = [
  { id: 'jordao', titulo: 'A travessia do Jordão', quando: 'No dia 10 do 1º mês, ao fim dos 40 anos no deserto (Js 4:19; 5:6).' },
  { id: 'jerico', titulo: 'A queda de Jericó', quando: 'Logo depois da Páscoa em Gilgal (Js 5:10; 6).' },
  { id: 'sol', titulo: 'O dia em que o sol parou', quando: 'Na batalha por Gibeom; o texto não dá a data (Js 10:12-14).' },
  { id: 'partilha', titulo: 'A terra repartida entre as tribos', quando: 'Josué já estava velho; Calebe tinha 85 anos (Js 13:1; 14:10).' },
  { id: 'siquem', titulo: 'A aliança em Siquém e a morte de Josué', quando: 'Josué morre com 110 anos (Js 24:29).' },
  { id: 'juizes', titulo: 'Começa o tempo dos juízes', quando: 'Depois da morte de Josué e dos anciãos da sua geração (Jz 2:7-10).' },
  { id: 'gideao', titulo: 'Gideão vence Midiã', quando: 'Depois de 7 anos de opressão dos midianitas (Jz 6:1).' },
  { id: 'jefte', titulo: 'Jefté contra os amonitas', quando: 'Jefté diz que Israel já estava havia 300 anos naquelas cidades (Jz 11:26).' },
  { id: 'sansao', titulo: 'Sansão julga Israel', quando: 'Por 20 anos, no tempo dos filisteus (Jz 15:20; 16:31).' },
  { id: 'sem-rei', titulo: 'Sem rei em Israel', quando: 'O texto não diz quando; Fineias, neto de Arão, ainda servia diante da arca (Jz 20:28).' },
  { id: 'rute', titulo: 'Rute em Belém', quando: 'Nos dias em que os juízes julgavam (Rt 1:1).' },
];

// Cartas: [símbolo, raridade, título] — ver regra na era 1.
export const CARTAS = {
  raabe: ['ribbon', 'epica', 'O cordão vermelho na janela'],      // Js 2:18,21
  aca: ['tent', 'comum', 'Escondido na tenda'],                   // Js 7:21
  acsa: ['droplets', 'rara', 'As fontes de cima e de baixo'],     // Js 15:19
  otniel: ['shield', 'rara', 'O primeiro libertador'],            // Jz 3:9
  eude: ['sword', 'rara', 'O libertador canhoto'],                // Jz 3:15
  debora: ['tree-palm', 'lendaria', 'Profetisa debaixo da palmeira'], // Jz 4:4-5
  baraque: ['mountain', 'comum', 'Desceu do monte Tabor'],        // Jz 4:14
  jael: ['tent', 'epica', 'Bendita entre as mulheres das tendas'], // Jz 5:24
  gideao: ['amphora', 'lendaria', 'Valente guerreiro'],           // Jz 6:12
  'abimeleque-jz': ['crown', 'comum', 'O rei espinheiro'],        // Jz 9:6,14-15
  jotao: ['tree-deciduous', 'rara', 'A parábola das árvores'],    // Jz 9:7-15
  jefte: ['scroll-text', 'rara', 'O voto precipitado'],           // Jz 11:30-31
  'filha-jefte': ['music', 'rara', 'Saiu dançando com tamborins'], // Jz 11:34
  manoa: ['flame', 'comum', 'O anjo subiu na chama'],             // Jz 13:20
  sansao: ['hand-fist', 'epica', 'A força do nazireu'],           // Jz 13:5; 16:17
  dalila: ['scissors', 'comum', 'O segredo vendido por prata'],   // Jz 16:5,18
  mica: ['house', 'comum', 'O ídolo de casa'],                    // Jz 17:5
  noemi: ['hand-heart', 'epica', 'De Mara a avó de Obede'],       // Rt 1:20; 4:16-17
  rute: ['wheat', 'lendaria', 'O seu Deus será o meu Deus'],      // Rt 1:16
  boaz: ['handshake', 'epica', 'O resgatador'],                   // Rt 4:9-10
};

export const CRIANCAS = {
  'js-01': 'Deus mandou Josué ser forte e corajoso. Por que ele não precisava ter medo?',
  'js-02': 'O que aconteceu com o muro de Jericó quando o povo gritou? Quem foi salvo lá dentro?',
  'js-03': 'Os gibeonitas enganaram Israel com pão velho. O que os líderes esqueceram de fazer antes de decidir?',
  'js-04': 'Calebe tinha 85 anos e ainda estava forte. O que ele pediu a Josué?',
  'js-05': 'Josué disse: "eu e a minha casa serviremos ao Senhor". Como a sua família pode servir a Deus?',
  'jz-01': 'Débora ajudava o povo a resolver os problemas. Onde ela se sentava para julgar?',
  'jz-02': 'Gideão estava com medo, mas Deus o chamou de valente. O que os 300 levavam nas mãos?',
  'jz-03': 'Jefté fez uma promessa sem pensar. Por que é importante pensar antes de prometer?',
  'jz-04': 'De onde vinha a força de Sansão? O que aconteceu quando ele contou o segredo?',
  'jz-05': 'O livro diz que cada um fazia o que achava certo. Como a gente sabe o que é certo de verdade?',
  'rt-01': 'Rute não abandonou a sogra. Como você pode cuidar de alguém da sua família?',
};

export const SELOS = {
  cordao:     { nome: 'Cordão vermelho', icone: 'ribbon', sessao: 'js-01', ref: 'Js 2:18,21', texto: 'Raabe o amarrou na janela; a casa com o cordão seria poupada.' },
  pedras:     { nome: 'Doze pedras', icone: 'pedras', sessao: 'js-01', ref: 'Js 4:3-8,20-24', texto: 'Tiradas do meio do Jordão, uma por tribo, para os filhos perguntarem e os pais contarem.' },
  muralha:    { nome: 'Muro de Jericó', icone: 'brick-wall', sessao: 'js-02', ref: 'Js 6:20', texto: 'O povo gritou ao som das trombetas, e o muro desabou.' },
  sol:        { nome: 'Sol parado', icone: 'sun', sessao: 'js-03', ref: 'Js 10:12-14', texto: 'O sol parou sobre Gibeom, e a lua sobre o vale de Aijalom.' },
  hebrom:     { nome: 'Monte de Calebe', icone: 'mountain', sessao: 'js-04', ref: 'Js 14:10-14', texto: 'Aos 85 anos, Calebe pediu o monte que Deus lhe prometera, e Josué lhe deu Hebrom.' },
  testemunho: { nome: 'Pedra do testemunho', icone: 'stone', sessao: 'js-05', ref: 'Js 24:26-27', texto: 'Josué a levantou debaixo do carvalho, em Siquém, como testemunha da aliança.' },
  palmeira:   { nome: 'Palmeira de Débora', icone: 'tree-palm', sessao: 'jz-01', ref: 'Jz 4:4-5', texto: 'Debaixo dela Débora se sentava, e o povo subia até lá para ser julgado.' },
  la:         { nome: 'Lã de Gideão', icone: 'droplets', sessao: 'jz-02', ref: 'Jz 6:36-40', texto: 'Uma noite molhada com o chão seco; na outra, seca com o chão molhado.' },
  cantaro:    { nome: 'Cântaro e tocha', icone: 'amphora', sessao: 'jz-02', ref: 'Jz 7:16-20', texto: 'Os 300 quebraram os cântaros, ergueram as tochas e tocaram as trombetas.' },
  favo:       { nome: 'Mel no leão', icone: 'hexagon', sessao: 'jz-04', ref: 'Jz 14:8-9,14', texto: 'Sansão achou um enxame e mel no corpo do leão: do forte saiu doçura.' },
  cevada:     { nome: 'Cevada de Boaz', icone: 'wheat', sessao: 'rt-01', ref: 'Rt 2:15-17; 3:15', texto: 'Boaz mandou deixar espigas para Rute e depois lhe deu seis medidas de cevada.' },
};
