// ERA 1 — Princípio e Patriarcas (Gênesis, Jó)
//
// REGRA DE CONTEÚDO (pedido do Rafael: "texto fiel, nada de achismos"):
// - Tudo o que é afirmado aqui sai do texto bíblico e traz a referência.
// - O que vem da tradição ou de estudiosos, e não do texto, é marcado como tal.
// - Nada é copiado da NAA nem da Bíblia de Estudo NAA: é paráfrase própria,
//   no formato de uma Bíblia de estudo (introdução, cenário, notas).
// - Datas que o texto não dá não são inventadas.

export const INTRODUCOES = {
  gn: {
    autor: 'O livro não nomeia o seu autor. A tradição judaica e cristã o atribui a Moisés, como parte da Lei (Torá).',
    data: 'Não informada no texto.',
    cenario: 'Vai da criação (Gn 1:1) até a morte de José no Egito (Gn 50:26).',
    tema: 'Deus cria tudo e o declara bom; o ser humano se rebela; Deus escolhe a família de Abraão para, por meio dela, abençoar todas as famílias da terra (Gn 12:3).',
    chave: 'Gn 12:3',
    estrutura: 'O próprio livro se divide com a frase "Esta é a história (ou: são as gerações) de…", que aparece em Gn 2:4; 5:1; 6:9; 10:1; 11:10; 11:27; 25:12; 25:19; 36:1 e 37:2.',
    esboco: [
      ['1–11', 'Origens: criação, queda, dilúvio, Babel'],
      ['12–25', 'Abraão'],
      ['25–36', 'Isaque e Jacó'],
      ['37–50', 'José e a ida de Israel para o Egito'],
    ],
  },
  jo: {
    autor: 'Não informado no texto.',
    data: 'Não informada. O texto não liga a história a nenhum rei ou evento datado. Alguns traços lembram a época dos patriarcas: a riqueza medida em rebanhos (Jó 1:3) e o próprio Jó oferecendo sacrifícios pela família (Jó 1:5). Por isso planos cronológicos, como o seu, o colocam logo após Gênesis.',
    cenario: 'A terra de Uz (Jó 1:1), cuja localização exata o texto não descreve.',
    tema: 'O sofrimento de um homem justo, as respostas erradas dos amigos e o encontro de Jó com o próprio Deus.',
    chave: 'Jó 42:5',
    estrutura: 'Começa e termina em prosa (caps. 1–2 e 42:7-17); o meio é poesia: diálogos com os amigos, o discurso de Eliú e os discursos de Deus.',
    esboco: [
      ['1–2', 'Prólogo: o teste de Jó'],
      ['3–31', 'Diálogos de Jó com Elifaz, Bildade e Zofar'],
      ['32–37', 'Discursos de Eliú'],
      ['38–42:6', 'Deus responde; Jó se rende'],
      ['42:7-17', 'Epílogo: restauração'],
    ],
  },
};

// Sessões: uma por dia. caps = [inicial, final].
export const SESSOES = [
  // ───────────── GÊNESIS ─────────────
  { id: 'gn-01', livro: 'gn', caps: [1, 2], titulo: 'A criação',
    cenario: 'O princípio de tudo.',
    contexto: 'Gênesis abre com Deus criando os céus e a terra e ordenando tudo em seis dias. O capítulo 2 volta ao sexto dia e mostra de perto a formação do homem e da mulher e o jardim do Éden.',
    notas: [
      ['1:1', 'Antes de tudo, Deus já existe e cria. O texto não explica Deus; começa por ele.'],
      ['1:27', 'Homem e mulher são criados à imagem de Deus — os dois, igualmente.'],
      ['2:2-3', 'No sétimo dia Deus descansa da obra e abençoa e santifica esse dia.'],
      ['2:7', 'O homem é formado do pó da terra e recebe de Deus o fôlego de vida.'],
      ['2:15-17', 'O homem recebe trabalho (cultivar e guardar o jardim) e um único limite: não comer da árvore do conhecimento do bem e do mal.'],
    ],
    personagens: ['adao'], marco: 'criacao',
    pergunta: 'O que muda na forma como você se vê sabendo que foi feito à imagem de Deus?',
    quiz: [{ q: 'Em que dia Deus descansou da obra que tinha feito?', op: ['No sexto dia', 'No sétimo dia', 'No primeiro dia', 'No terceiro dia'], a: 1, ref: 'Gn 2:2' }] },

  { id: 'gn-02', livro: 'gn', caps: [3, 3], titulo: 'A queda',
    cenario: 'O jardim do Éden.',
    contexto: 'A serpente questiona a palavra de Deus, a mulher e o homem comem do fruto proibido e a relação com Deus, entre os dois e com a criação se quebra. Mesmo no juízo, Deus anuncia uma promessa.',
    notas: [
      ['3:1', 'A tentação começa com uma pergunta que distorce o que Deus disse.'],
      ['3:8-9', 'Eles se escondem; Deus é quem procura: "Onde você está?".'],
      ['3:15', 'Deus anuncia inimizade entre a serpente e a descendência da mulher, e que essa descendência ferirá a cabeça da serpente.'],
      ['3:20', 'Adão dá à mulher o nome Eva, porque ela seria a mãe de todos os que vivem.'],
      ['3:21-24', 'Deus os veste com roupas de pele e os tira do jardim; querubins guardam o caminho da árvore da vida.'],
    ],
    personagens: ['eva'], marco: 'queda',
    pergunta: 'Em que área da sua vida você tende a se esconder de Deus em vez de responder "estou aqui"?',
    quiz: [{ q: 'Quem Deus colocou ao leste do jardim para guardar o caminho da árvore da vida?', op: ['A serpente', 'Querubins', 'Adão', 'Os filhos de Adão'], a: 1, ref: 'Gn 3:24' }] },

  { id: 'gn-03', livro: 'gn', caps: [4, 5], titulo: 'Caim, Abel e a linhagem de Adão',
    cenario: 'Fora do Éden, na primeira família.',
    contexto: 'O pecado logo chega ao primeiro assassinato. Depois, a genealogia de Adão até Noé mostra a vida seguindo, geração após geração, com o refrão "e morreu".',
    notas: [
      ['4:7', 'Antes do crime, Deus avisa Caim: o pecado está à porta, e ele deve dominá-lo.'],
      ['4:9', 'Caim responde à pergunta de Deus com outra: se ele é responsável pelo irmão.'],
      ['4:15', 'Mesmo punido, Caim recebe de Deus um sinal de proteção.'],
      ['4:25-26', 'Nasce Sete; nesse tempo começam a invocar o nome do Senhor.'],
      ['5:24', 'Enoque andou com Deus e já não foi visto, porque Deus o levou — a única quebra no refrão "e morreu".'],
    ],
    personagens: ['caim', 'abel', 'sete', 'enoque', 'matusalem'],
    pergunta: 'Que "pecado à porta" você precisa dominar hoje, antes que ele entre?',
    quiz: [
      { q: 'Quem andou com Deus e já não foi visto, porque Deus o levou?', op: ['Matusalém', 'Sete', 'Enoque', 'Lameque'], a: 2, ref: 'Gn 5:24' },
      { q: 'Quantos anos viveu Matusalém?', op: ['930', '969', '950', '912'], a: 1, ref: 'Gn 5:27' }] },

  { id: 'gn-04', livro: 'gn', caps: [6, 7], titulo: 'Noé e o dilúvio',
    cenario: 'A terra antes do dilúvio.',
    contexto: 'A maldade humana se espalha e Deus decide trazer o dilúvio. Noé é a exceção: recebe a ordem de construir a arca e obedece.',
    notas: [
      ['6:5-6', 'Deus vê que a maldade é grande e que todo desígnio do coração humano é mau.'],
      ['6:8-9', 'Noé encontra favor diante do Senhor; é justo, íntegro e anda com Deus.'],
      ['6:15', 'Medidas da arca: 300 côvados de comprimento, 50 de largura e 30 de altura.'],
      ['6:22', 'Noé faz tudo conforme Deus ordenou.'],
      ['7:12; 7:24', 'Chove 40 dias e 40 noites; as águas prevalecem sobre a terra por 150 dias.'],
    ],
    personagens: ['noe', 'sem'], marco: 'diluvio',
    pergunta: 'Noé obedeceu sem ver a chuva. Onde Deus está pedindo obediência antes de você ver o resultado?',
    quiz: [{ q: 'Por quantos dias e noites choveu sobre a terra?', op: ['7', '40', '150', '12'], a: 1, ref: 'Gn 7:12' }] },

  { id: 'gn-05', livro: 'gn', caps: [8, 9], titulo: 'A aliança com Noé',
    cenario: 'Depois do dilúvio, nos montes de Ararate (Gn 8:4).',
    contexto: 'As águas baixam, Noé sai da arca e oferece sacrifícios. Deus faz uma aliança com toda a criação e dá o arco nas nuvens como sinal.',
    notas: [
      ['8:11', 'A pomba volta com uma folha de oliveira: as águas tinham baixado.'],
      ['8:20', 'O primeiro gesto de Noé fora da arca é construir um altar.'],
      ['9:6', 'A vida humana é protegida porque o ser humano foi feito à imagem de Deus.'],
      ['9:11-13', 'Deus promete não destruir mais a terra com dilúvio; o arco nas nuvens é o sinal.'],
      ['9:20-25', 'Noé se embriaga; Cam vê a nudez do pai e Noé amaldiçoa Canaã, filho de Cam.'],
    ],
    personagens: [],
    pergunta: 'Qual promessa de Deus você precisa lembrar quando "as nuvens" aparecem?',
    quiz: [{ q: 'Qual foi o sinal da aliança de Deus com Noé?', op: ['A circuncisão', 'O arco nas nuvens', 'Uma pomba', 'Um altar de pedras'], a: 1, ref: 'Gn 9:13' }] },

  { id: 'gn-06', livro: 'gn', caps: [10, 11], titulo: 'As nações e Babel',
    cenario: 'A terra de Sinar (Gn 11:2) e, no fim, Ur e Harã.',
    contexto: 'A lista das nações descende dos filhos de Noé. Em Babel, a humanidade se une para fazer um nome para si; Deus confunde a língua e a espalha. A genealogia de Sem leva até Terá e Abrão.',
    notas: [
      ['10:8-10', 'Ninrode, poderoso caçador, começa um reino que inclui Babel.'],
      ['11:4', 'O objetivo da torre: chegar ao céu, fazer um nome e não ser espalhados.'],
      ['11:9', 'O nome Babel vem de o Senhor ter confundido ali a língua de toda a terra.'],
      ['11:30', 'Sarai é estéril — detalhe que prepara toda a história de Abraão.'],
      ['11:31', 'Terá sai de Ur dos caldeus com Abrão, Sarai e Ló rumo a Canaã, mas param em Harã.'],
    ],
    personagens: ['ninrode', 'tera'], marco: 'babel',
    pergunta: 'Em que você tem tentado "fazer um nome para si" em vez de confiar no nome de Deus?',
    quiz: [{ q: 'Por que a cidade recebeu o nome de Babel?', op: ['Por causa da torre alta', 'Porque ali o Senhor confundiu a língua de toda a terra', 'Em homenagem a Ninrode', 'Porque ficava às margens de um rio'], a: 1, ref: 'Gn 11:9' }] },

  { id: 'gn-07', livro: 'gn', caps: [12, 13], titulo: 'O chamado de Abrão',
    cenario: 'De Harã para Canaã, passando pelo Egito.',
    contexto: 'Deus chama Abrão para deixar a terra e a família, com promessas de descendência, bênção e terra. Abrão obedece, mas no Egito mente sobre Sarai. Depois, ele e Ló se separam.',
    notas: [
      ['12:1-3', 'O chamado vem com promessa: grande nação, nome engrandecido e bênção para todas as famílias da terra.'],
      ['12:4', 'Abrão tinha 75 anos quando saiu de Harã.'],
      ['12:10-20', 'Com medo, Abrão diz no Egito que Sarai é sua irmã.'],
      ['13:8-11', 'Abrão deixa Ló escolher; Ló escolhe a planície do Jordão, perto de Sodoma.'],
      ['13:14-16', 'Deus promete a terra que Abrão vê e uma descendência como o pó da terra.'],
    ],
    personagens: ['abraao', 'sara', 'lo'], marco: 'chamado',
    pergunta: 'O que Deus pode estar pedindo para você deixar, confiando apenas na promessa?',
    quiz: [{ q: 'Que idade Abrão tinha quando saiu de Harã?', op: ['75 anos', '86 anos', '99 anos', '100 anos'], a: 0, ref: 'Gn 12:4' }] },

  { id: 'gn-08', livro: 'gn', caps: [14, 15], titulo: 'Melquisedeque e a aliança',
    cenario: 'Canaã: vale de Savé e arredores.',
    contexto: 'Abrão resgata Ló numa guerra entre reis e é abençoado por Melquisedeque. Depois, Deus reafirma a promessa e faz com ele uma aliança solene.',
    notas: [
      ['14:14', 'Abrão sai com 318 homens treinados, nascidos em sua casa.'],
      ['14:18-20', 'Melquisedeque, rei de Salém e sacerdote do Deus Altíssimo, traz pão e vinho e abençoa Abrão; Abrão lhe dá o dízimo de tudo.'],
      ['15:5', 'Deus manda Abrão contar as estrelas: assim será a sua descendência.'],
      ['15:6', 'Abrão creu no Senhor, e isso lhe foi atribuído como justiça.'],
      ['15:13', 'Deus anuncia que a descendência será estrangeira e oprimida por 400 anos.'],
    ],
    personagens: ['melquisedeque'], marco: 'alianca',
    pergunta: 'Abrão creu antes de ver. Que promessa você precisa voltar a crer hoje?',
    quiz: [{ q: 'O que aconteceu quando Abrão creu no Senhor?', op: ['Recebeu um filho no mesmo ano', 'Isso lhe foi atribuído como justiça', 'Ganhou a terra de Canaã', 'Foi chamado Israel'], a: 1, ref: 'Gn 15:6' }] },

  { id: 'gn-09', livro: 'gn', caps: [16, 17], titulo: 'Agar, Ismael e a circuncisão',
    cenario: 'Canaã e o deserto a caminho de Sur.',
    contexto: 'Cansada de esperar, Sarai dá sua serva Agar a Abrão, e nasce Ismael. Treze anos depois, Deus muda os nomes de Abrão e Sarai e dá a circuncisão como sinal da aliança.',
    notas: [
      ['16:13', 'Agar chama o Senhor de "o Deus que me vê".'],
      ['16:16', 'Abrão tinha 86 anos quando Ismael nasceu.'],
      ['17:1', 'Aos 99 anos, Deus se apresenta como o Deus Todo-Poderoso.'],
      ['17:5', 'Abrão passa a se chamar Abraão, porque seria pai de muitas nações.'],
      ['17:10-11; 17:19', 'A circuncisão é o sinal da aliança. Deus promete um filho de Sara: Isaque.'],
    ],
    personagens: ['agar', 'ismael'],
    pergunta: 'Onde você tem tentado "ajudar" Deus a cumprir uma promessa do seu jeito?',
    quiz: [{ q: 'Qual foi o sinal da aliança dado a Abraão em Gênesis 17?', op: ['O arco nas nuvens', 'A circuncisão', 'O sábado', 'Um altar em Betel'], a: 1, ref: 'Gn 17:11' }] },

  { id: 'gn-10', livro: 'gn', caps: [18, 19], titulo: 'A visita e Sodoma',
    cenario: 'Os carvalhos de Manre; depois, Sodoma.',
    contexto: 'Três visitantes anunciam que Sara terá um filho. Abraão intercede por Sodoma, mas a cidade é destruída; Ló e as filhas escapam.',
    notas: [
      ['18:12-14', 'Sara ri da promessa; o Senhor pergunta se existe algo difícil demais para ele.'],
      ['18:25', 'Abraão apela ao caráter de Deus: o Juiz de toda a terra fará o que é justo.'],
      ['18:32', 'A intercessão chega a dez justos.'],
      ['19:26', 'A mulher de Ló olha para trás e se torna uma estátua de sal.'],
      ['19:36-38', 'Das filhas de Ló vêm Moabe e Amom, povos que aparecerão mais tarde.'],
    ],
    personagens: [],
    pergunta: 'Por quem você tem intercedido? Quem precisa da sua oração esta semana?',
    quiz: [{ q: 'O que aconteceu com a mulher de Ló?', op: ['Ficou em Sodoma', 'Tornou-se uma estátua de sal', 'Fugiu para Zoar sozinha', 'Voltou para Harã'], a: 1, ref: 'Gn 19:26' }] },

  { id: 'gn-11', livro: 'gn', caps: [20, 21], titulo: 'O nascimento de Isaque',
    cenario: 'Gerar e Berseba.',
    contexto: 'Abraão repete a mentira sobre Sara, agora com Abimeleque. Deus cumpre a promessa: Isaque nasce. Agar e Ismael são despedidos, mas Deus cuida deles.',
    notas: [
      ['20:2', 'O mesmo medo do Egito volta: Abraão diz que Sara é sua irmã.'],
      ['21:1', 'O Senhor visita Sara e faz como tinha dito.'],
      ['21:5-6', 'Abraão tinha 100 anos. Sara diz que Deus a fez rir.'],
      ['21:17-18', 'Deus ouve a voz do menino Ismael e promete fazer dele uma grande nação.'],
      ['21:31-33', 'Em Berseba, Abraão faz aliança com Abimeleque e invoca o Deus Eterno.'],
    ],
    personagens: ['isaque', 'abimeleque'], marco: 'isaque',
    pergunta: 'Qual promessa de Deus já se cumpriu na sua vida e merece ser lembrada com gratidão?',
    quiz: [{ q: 'Que idade Abraão tinha quando Isaque nasceu?', op: ['75 anos', '86 anos', '99 anos', '100 anos'], a: 3, ref: 'Gn 21:5' }] },

  { id: 'gn-12', livro: 'gn', caps: [22, 22], titulo: 'O Senhor proverá',
    cenario: 'A terra de Moriá (Gn 22:2).',
    contexto: 'Deus prova Abraão pedindo Isaque em sacrifício. No último instante, o anjo o impede e Deus provê um carneiro.',
    notas: [
      ['22:1', 'O texto diz logo de início que se trata de uma prova.'],
      ['22:8', 'Abraão responde a Isaque que Deus proverá o cordeiro.'],
      ['22:12', 'O anjo declara: agora sei que você teme a Deus.'],
      ['22:13-14', 'Um carneiro preso pelos chifres; Abraão chama o lugar "O Senhor proverá".'],
      ['22:16-18', 'A promessa é confirmada com juramento, porque Abraão obedeceu.'],
    ],
    personagens: [],
    pergunta: 'O que é tão precioso para você que seria difícil entregar a Deus?',
    quiz: [{ q: 'O que Deus proveu no lugar de Isaque?', op: ['Um cordeiro trazido de casa', 'Um carneiro preso pelos chifres', 'Um novilho', 'Duas pombas'], a: 1, ref: 'Gn 22:13' }] },

  { id: 'gn-13', livro: 'gn', caps: [23, 24], titulo: 'Uma esposa para Isaque',
    cenario: 'Hebrom; depois, a cidade de Naor, na Mesopotâmia.',
    contexto: 'Sara morre e Abraão compra o primeiro pedaço de terra em Canaã: um túmulo. Depois, envia seu servo à sua parentela para buscar uma esposa para Isaque.',
    notas: [
      ['23:1-2', 'Sara morre aos 127 anos, em Hebrom.'],
      ['23:17-20', 'Abraão compra o campo e a caverna de Macpela.'],
      ['24:12-14', 'O servo ora e pede um sinal concreto.'],
      ['24:15; 24:29', 'Rebeca, neta de Naor e irmã de Labão, responde antes mesmo de ele terminar de orar.'],
      ['24:67', 'Isaque ama Rebeca e é consolado depois da morte da mãe.'],
    ],
    personagens: ['rebeca', 'labao'],
    pergunta: 'Que decisão importante você precisa colocar em oração antes de agir?',
    quiz: [{ q: 'Qual sinal o servo de Abraão pediu a Deus?', op: ['Que a moça estivesse junto ao poço com uma jarra de ouro', 'Que a moça lhe desse de beber e também aos camelos', 'Que chovesse naquele dia', 'Que Labão viesse ao seu encontro'], a: 1, ref: 'Gn 24:14' }] },

  { id: 'gn-14', livro: 'gn', caps: [25, 26], titulo: 'Esaú e Jacó',
    cenario: 'Canaã: Beer-Laai-Roi e Gerar.',
    contexto: 'Abraão morre. Isaque e Rebeca têm gêmeos: Esaú e Jacó. Esaú despreza a primogenitura. Isaque recebe as mesmas promessas do pai e repete o mesmo erro do pai.',
    notas: [
      ['25:7-9', 'Abraão morre aos 175 anos; Isaque e Ismael o sepultam em Macpela.'],
      ['25:21', 'Rebeca era estéril; Isaque ora e ela concebe.'],
      ['25:23', 'Antes do nascimento, Deus diz que o mais velho servirá ao mais novo.'],
      ['25:34', 'Esaú troca a primogenitura por pão e um ensopado de lentilhas: desprezou o direito.'],
      ['26:3-4; 26:7', 'Deus repete a Isaque a promessa feita a Abraão; Isaque também diz que a esposa é sua irmã.'],
    ],
    personagens: ['esau', 'jaco'],
    pergunta: 'O que de valor eterno você corre o risco de trocar por algo imediato?',
    quiz: [{ q: 'Pelo que Esaú vendeu a primogenitura?', op: ['Por um rebanho de ovelhas', 'Por pão e um ensopado de lentilhas', 'Por prata', 'Pela bênção do pai'], a: 1, ref: 'Gn 25:34' }] },

  { id: 'gn-15', livro: 'gn', caps: [27, 28], titulo: 'A bênção e a escada',
    cenario: 'Berseba; depois, Betel, a caminho de Harã.',
    contexto: 'Rebeca e Jacó enganam Isaque para obter a bênção. Jacó foge de Esaú e, em Betel, Deus lhe aparece em sonho e confirma a promessa.',
    notas: [
      ['27:16', 'Peles de cabrito nas mãos e no pescoço para parecer Esaú.'],
      ['27:41', 'Esaú decide matar Jacó depois da morte do pai.'],
      ['28:12', 'O sonho: uma escada da terra ao céu, com anjos subindo e descendo.'],
      ['28:15', 'Deus promete estar com Jacó, guardá-lo e trazê-lo de volta.'],
      ['28:19-22', 'Jacó chama o lugar de Betel ("casa de Deus") e promete dar o dízimo.'],
    ],
    personagens: [],
    pergunta: 'Jacó encontrou Deus fugindo. Onde Deus pode estar falando com você no meio de uma fuga?',
    quiz: [{ q: 'O que Jacó viu em sonho em Betel?', op: ['Uma sarça ardendo', 'Uma escada da terra ao céu com anjos', 'Sete vacas gordas', 'Estrelas se curvando diante dele'], a: 1, ref: 'Gn 28:12' }] },

  { id: 'gn-16', livro: 'gn', caps: [29, 30], titulo: 'Raquel, Lia e os filhos de Jacó',
    cenario: 'Harã, na casa de Labão.',
    contexto: 'O enganador é enganado: Jacó trabalha por Raquel e recebe Lia. A rivalidade entre as irmãs marca o nascimento dos filhos que darão nome às tribos de Israel.',
    notas: [
      ['29:20', 'Sete anos de trabalho por Raquel parecem poucos dias, pelo amor que tinha por ela.'],
      ['29:25-28', 'Labão entrega Lia; Jacó trabalha mais sete anos por Raquel.'],
      ['29:31-35', 'O Senhor vê que Lia é desprezada; nascem Rúben, Simeão, Levi e Judá.'],
      ['30:22-24', 'Deus se lembra de Raquel e nasce José.'],
    ],
    personagens: ['lia', 'raquel'],
    pergunta: 'Lia foi vista por Deus quando foi desprezada. Quem perto de você precisa ser visto?',
    quiz: [{ q: 'Quantos anos Jacó trabalhou inicialmente por Raquel?', op: ['3', '7', '14', '20'], a: 1, ref: 'Gn 29:20' }] },

  { id: 'gn-17', livro: 'gn', caps: [31, 32], titulo: 'Jacó se torna Israel',
    cenario: 'Saída de Harã; Galeede; Peniel, junto ao vau do Jaboque.',
    contexto: 'Deus manda Jacó voltar. Ele foge de Labão, faz as pazes com ele e, com medo de Esaú, ora. À noite, luta com um homem até o amanhecer e recebe um novo nome.',
    notas: [
      ['31:3', 'Deus manda voltar e promete estar com ele.'],
      ['31:19', 'Raquel leva escondidos os ídolos do pai.'],
      ['32:9-12', 'A oração de Jacó: reconhece que não merece e se apoia na promessa.'],
      ['32:28', 'Novo nome: Israel, porque lutou com Deus e com homens e prevaleceu.'],
      ['32:30-31', 'Jacó chama o lugar Peniel: viu Deus face a face. Sai mancando.'],
    ],
    personagens: [], marco: 'israel',
    pergunta: 'Com o que você está "lutando" com Deus? O que seria não soltar até receber a bênção?',
    quiz: [{ q: 'Que novo nome Jacó recebeu em Peniel?', op: ['Abraão', 'Israel', 'Edom', 'Betel'], a: 1, ref: 'Gn 32:28' }] },

  { id: 'gn-18', livro: 'gn', caps: [33, 34], titulo: 'O reencontro e Siquém',
    cenario: 'O caminho de volta; Siquém.',
    contexto: 'Esaú recebe Jacó com um abraço. Em Siquém, Diná é violentada, e Simeão e Levi respondem com uma vingança sangrenta que Jacó reprova.',
    notas: [
      ['33:4', 'Esaú corre, abraça e beija Jacó; os dois choram.'],
      ['33:20', 'Jacó levanta um altar e o chama El-Elohe-Israel.'],
      ['34:25-26', 'Simeão e Levi matam os homens da cidade.'],
      ['34:30', 'Jacó repreende os filhos pelo perigo em que os colocaram.'],
    ],
    personagens: ['dina'],
    pergunta: 'Existe alguém com quem você precisa de um reencontro como o de Jacó e Esaú?',
    quiz: [{ q: 'Como Esaú recebeu Jacó?', op: ['Com 400 homens armados para atacar', 'Correu, abraçou-o e beijou-o, e choraram', 'Exigiu a primogenitura de volta', 'Recusou-se a vê-lo'], a: 1, ref: 'Gn 33:4' }] },

  { id: 'gn-19', livro: 'gn', caps: [35, 36], titulo: 'De volta a Betel',
    cenario: 'Betel; caminho de Efrata (Belém); Hebrom.',
    contexto: 'Jacó purifica a casa e volta a Betel, onde Deus confirma o nome Israel. Raquel morre ao dar à luz Benjamim, e Isaque morre. O capítulo 36 registra os descendentes de Esaú, que é Edom.',
    notas: [
      ['35:2', 'Jacó manda tirar os deuses estranhos e se purificar.'],
      ['35:10-12', 'Deus confirma o nome Israel e a promessa de nação e terra.'],
      ['35:18-19', 'Raquel chama o filho de Benoni; Jacó o chama Benjamim. Ela é sepultada no caminho de Efrata, que é Belém.'],
      ['35:22-26', 'A lista dos doze filhos de Jacó.'],
      ['35:28-29', 'Isaque morre aos 180 anos; Esaú e Jacó o sepultam.'],
    ],
    personagens: ['benjamim'],
    pergunta: 'Que "deuses estranhos" você precisa tirar de casa para voltar ao seu Betel?',
    quiz: [{ q: 'Onde Raquel foi sepultada?', op: ['Na caverna de Macpela', 'No caminho de Efrata, que é Belém', 'Em Harã', 'Em Betel'], a: 1, ref: 'Gn 35:19' }] },

  { id: 'gn-20', livro: 'gn', caps: [37, 37], titulo: 'José é vendido',
    cenario: 'Canaã: Hebrom, Siquém e Dotã.',
    contexto: 'Começa a última grande história de Gênesis. José, o filho preferido, conta seus sonhos, desperta o ódio dos irmãos e é vendido como escravo.',
    notas: [
      ['37:2-3', 'José tem 17 anos; Jacó o ama mais e lhe dá uma túnica especial.'],
      ['37:7-9', 'Os sonhos: feixes que se curvam; sol, lua e onze estrelas que se curvam.'],
      ['37:21-22', 'Rúben tenta salvar José.'],
      ['37:26-28', 'Judá propõe vendê-lo; José é vendido por 20 peças de prata.'],
      ['37:36', 'No Egito, é vendido a Potifar, oficial de Faraó.'],
    ],
    personagens: ['jose', 'ruben'],
    pergunta: 'Onde a inveja ou o favoritismo têm causado feridas na sua família?',
    quiz: [{ q: 'Por quanto José foi vendido pelos irmãos?', op: ['10 peças de prata', '20 peças de prata', '30 peças de prata', '50 peças de ouro'], a: 1, ref: 'Gn 37:28' }] },

  { id: 'gn-21', livro: 'gn', caps: [38, 39], titulo: 'Judá e Tamar; José na casa de Potifar',
    cenario: 'Canaã (cap. 38) e o Egito (cap. 39).',
    contexto: 'A história de José é interrompida para mostrar Judá falhando com Tamar. Em contraste, José, no Egito, permanece fiel diante da tentação e acaba preso injustamente.',
    notas: [
      ['38:26', 'Judá reconhece: Tamar é mais justa do que ele.'],
      ['38:29-30', 'Nascem Perez e Zera.'],
      ['39:2-3', 'O Senhor está com José, e até Potifar percebe isso.'],
      ['39:9', 'José recusa a mulher de Potifar: seria pecar contra Deus.'],
      ['39:20-21', 'Preso injustamente — e o texto repete: o Senhor estava com José.'],
    ],
    personagens: ['juda', 'tamar', 'potifar'],
    pergunta: 'José viu o pecado como algo contra Deus. Isso muda como você enxerga uma tentação atual?',
    quiz: [{ q: 'Por que José recusou a mulher de Potifar?', op: ['Por medo de ser preso', 'Porque seria pecar contra Deus', 'Porque já era casado', 'Porque Potifar estava em casa'], a: 1, ref: 'Gn 39:9' }] },

  { id: 'gn-22', livro: 'gn', caps: [40, 41], titulo: 'De prisioneiro a governador',
    cenario: 'A prisão e o palácio de Faraó.',
    contexto: 'José interpreta os sonhos do copeiro e do padeiro, mas é esquecido. Dois anos depois, interpreta os sonhos de Faraó e é colocado sobre todo o Egito.',
    notas: [
      ['40:8', 'José afirma que as interpretações pertencem a Deus.'],
      ['40:23', 'O copeiro se esquece de José.'],
      ['41:25-30', 'Os sonhos de Faraó anunciam sete anos de fartura e sete de fome.'],
      ['41:40-41; 41:46', 'José é posto sobre todo o Egito, aos 30 anos.'],
      ['41:51-52', 'Os filhos: Manassés ("Deus me fez esquecer o sofrimento") e Efraim ("Deus me fez prosperar").'],
    ],
    personagens: ['farao-jose', 'manasses', 'efraim'], marco: 'jose',
    pergunta: 'José esperou dois anos esquecido. Como você lida com a espera quando parece que Deus esqueceu?',
    quiz: [{ q: 'O que significavam as sete vacas gordas do sonho de Faraó?', op: ['Sete reis', 'Sete anos de fartura', 'Sete dias de festa', 'Os sete irmãos de José'], a: 1, ref: 'Gn 41:26' }] },

  { id: 'gn-23', livro: 'gn', caps: [42, 43], titulo: 'Os irmãos no Egito',
    cenario: 'O Egito, durante a fome.',
    contexto: 'A fome leva os irmãos ao Egito. José os reconhece; eles não o reconhecem. Ele os testa e exige que tragam Benjamim.',
    notas: [
      ['42:8', 'José reconhece os irmãos, mas eles não o reconhecem.'],
      ['42:21', 'Os irmãos ligam o que estão passando ao que fizeram com José.'],
      ['42:24', 'Simeão fica preso como garantia.'],
      ['43:9', 'Judá se oferece como fiador de Benjamim.'],
      ['43:30', 'José se retira para chorar ao ver Benjamim.'],
    ],
    personagens: ['simeao'],
    pergunta: 'Que erro do passado volta à sua consciência? O que Deus pode estar querendo tratar?',
    quiz: [{ q: 'Qual irmão ficou preso no Egito como garantia?', op: ['Rúben', 'Simeão', 'Judá', 'Benjamim'], a: 1, ref: 'Gn 42:24' }] },

  { id: 'gn-24', livro: 'gn', caps: [44, 45], titulo: 'José se revela',
    cenario: 'O Egito.',
    contexto: 'O teste final: a taça na bagagem de Benjamim. Judá, o mesmo que propôs vender José, agora se oferece no lugar do irmão. José não se contém e se revela.',
    notas: [
      ['44:33', 'Judá pede para ficar como escravo no lugar de Benjamim.'],
      ['45:3', 'José se revela, e os irmãos ficam apavorados.'],
      ['45:5', 'José diz que Deus o enviou adiante deles para preservar vidas.'],
      ['45:8', 'Não foram eles que o enviaram, mas Deus.'],
    ],
    personagens: [],
    pergunta: 'Judá mudou. Que mudança Deus já fez em você e que precisa ser reconhecida?',
    quiz: [{ q: 'Quem se ofereceu para ficar como escravo no lugar de Benjamim?', op: ['Rúben', 'Simeão', 'Judá', 'Levi'], a: 2, ref: 'Gn 44:33' }] },

  { id: 'gn-25', livro: 'gn', caps: [46, 48], titulo: 'Israel desce ao Egito',
    cenario: 'De Berseba para Gósen, no Egito.',
    contexto: 'Deus autoriza Jacó a descer ao Egito e promete fazer dele uma grande nação ali. A família se instala em Gósen. Jacó abençoa os filhos de José.',
    notas: [
      ['46:3-4', 'Deus diz a Jacó que não tenha medo de descer ao Egito: ele irá junto e o fará voltar.'],
      ['46:27', 'A casa de Jacó que entra no Egito soma 70 pessoas.'],
      ['47:6; 47:9', 'Faraó dá a terra de Gósen. Jacó tem 130 anos.'],
      ['48:14; 48:19', 'Jacó cruza as mãos: a direita sobre Efraim, o mais novo, que seria maior.'],
    ],
    personagens: [], marco: 'egito',
    pergunta: 'Que mudança de "lugar" na sua vida pode estar no plano de Deus, mesmo assustando?',
    quiz: [
      { q: 'Em que região a família de Jacó se instalou no Egito?', op: ['Mênfis', 'Gósen', 'Tebas', 'Sur'], a: 1, ref: 'Gn 47:6' },
      { q: 'Sobre quem Jacó colocou a mão direita ao abençoar os filhos de José?', op: ['Manassés', 'Efraim', 'José', 'Benjamim'], a: 1, ref: 'Gn 48:14' }] },

  { id: 'gn-26', livro: 'gn', caps: [49, 50], titulo: 'As bênçãos de Jacó e a morte de José',
    cenario: 'O Egito; o sepultamento em Canaã.',
    contexto: 'Jacó abençoa os doze filhos e morre; é sepultado em Macpela. Os irmãos temem vingança, e José responde com uma das frases centrais do livro. Gênesis termina com José morrendo no Egito.',
    notas: [
      ['49:10', 'Sobre Judá: o cetro não se afastará dele.'],
      ['50:13', 'Jacó é sepultado na caverna de Macpela, com Abraão e Isaque.'],
      ['50:20', 'José: vocês planejaram o mal contra mim, mas Deus o transformou em bem.'],
      ['50:24-26', 'José morre aos 110 anos e pede que seus ossos sejam levados quando Deus os visitar.'],
    ],
    personagens: [], marco: 'morte-jose',
    pergunta: 'Que mal na sua história você já viu (ou precisa crer que verá) Deus transformar em bem?',
    quiz: [
      { q: 'Com quantos anos José morreu?', op: ['100', '110', '120', '130'], a: 1, ref: 'Gn 50:26' },
      { q: 'O que José disse aos irmãos em Gn 50:20?', op: ['Que nunca os perdoaria', 'Que eles planejaram o mal, mas Deus o transformou em bem', 'Que deveriam voltar para Canaã', 'Que Faraó decidiria o destino deles'], a: 1, ref: 'Gn 50:20' }] },

  // ───────────── JÓ ─────────────
  { id: 'jo-01', livro: 'jo', caps: [1, 2], titulo: 'O teste de Jó',
    cenario: 'A terra de Uz; e uma cena no céu.',
    contexto: 'Jó é íntegro e próspero. Numa cena no céu, Satanás acusa que Jó só teme a Deus por interesse. Jó perde bens, filhos e saúde, mas não peca com os lábios.',
    notas: [
      ['1:1', 'Jó: íntegro, reto, temente a Deus e afastado do mal.'],
      ['1:9', 'A acusação: Jó teme a Deus sem motivo, ou por causa do que recebe?'],
      ['1:20-22', 'Depois das perdas, Jó adora: o Senhor deu, o Senhor tomou, bendito seja o seu nome. Não pecou.'],
      ['2:9-10', 'A esposa sugere que ele amaldiçoe a Deus; Jó pergunta se aceitaremos só o bem de Deus, e não o mal.'],
      ['2:11-13', 'Três amigos vêm e ficam sete dias em silêncio diante da dor dele.'],
    ],
    personagens: ['jo', 'elifaz', 'bildade', 'zofar'], marco: 'jo',
    pergunta: 'Você ama a Deus pelo que ele é ou pelo que ele dá? Como saberia a diferença?',
    quiz: [{ q: 'Quantos dias os amigos ficaram em silêncio com Jó?', op: ['3', '7', '40', '1'], a: 1, ref: 'Jó 2:13' }] },

  { id: 'jo-02', livro: 'jo', caps: [3, 7], titulo: 'O lamento de Jó e Elifaz',
    cenario: 'Jó sentado em meio à cinza (Jó 2:8).',
    contexto: 'O silêncio acaba: Jó lamenta ter nascido. Elifaz responde com a ideia que vai dominar os amigos: quem sofre colhe o que plantou.',
    notas: [
      ['3:1-3', 'Jó amaldiçoa o dia em que nasceu — mas não amaldiçoa a Deus.'],
      ['4:7-8', 'Elifaz: inocentes não perecem; quem semeia o mal colhe o mal.'],
      ['5:17', 'Elifaz: feliz quem Deus corrige.'],
      ['7:11', 'Jó decide não se calar: vai falar na angústia do seu espírito.'],
    ],
    personagens: [],
    pergunta: 'Você tem liberdade de levar a Deus uma queixa honesta, como Jó?',
    quiz: [{ q: 'Qual a ideia central de Elifaz em Jó 4:7-8?', op: ['Que Deus não se importa com os homens', 'Que o sofrimento é colheita do mal que se plantou', 'Que Jó deveria amaldiçoar a Deus', 'Que os justos sofrem mais'], a: 1, ref: 'Jó 4:7-8' }] },

  { id: 'jo-03', livro: 'jo', caps: [8, 14], titulo: 'Bildade, Zofar e o desejo de um árbitro',
    cenario: 'O primeiro ciclo de diálogos continua.',
    contexto: 'Bildade e Zofar repetem a lógica de Elifaz com mais dureza. Jó insiste que é inocente e expressa o desejo de alguém que fique entre ele e Deus.',
    notas: [
      ['8:3-4', 'Bildade: Deus não perverte o direito; se seus filhos morreram, foi pelo pecado deles.'],
      ['9:2', 'Jó: como um homem pode ser justo diante de Deus?'],
      ['9:33', 'Jó lamenta não haver um árbitro entre ele e Deus.'],
      ['11:6', 'Zofar: Deus cobra de você menos do que a sua culpa merece.'],
      ['14:14', 'Jó pergunta: morrendo o homem, voltará a viver?'],
    ],
    personagens: [],
    pergunta: 'Que respostas prontas você já deu a alguém que sofria, e que talvez tenham ferido?',
    quiz: [{ q: 'O que Jó lamenta não existir em Jó 9:33?', op: ['Um filho herdeiro', 'Um árbitro entre ele e Deus', 'Um médico', 'Um amigo fiel'], a: 1, ref: 'Jó 9:33' }] },

  { id: 'jo-04', livro: 'jo', caps: [15, 21], titulo: '"Eu sei que o meu Redentor vive"',
    cenario: 'O segundo ciclo de diálogos.',
    contexto: 'Os amigos endurecem e falam do destino terrível do ímpio. No fundo do poço, Jó faz uma das maiores declarações de esperança da Bíblia.',
    notas: [
      ['16:2', 'Jó chama os amigos de consoladores que só trazem sofrimento.'],
      ['16:19', 'Mesmo assim, ele afirma ter uma testemunha no céu.'],
      ['19:25-26', 'Jó declara que o seu Redentor vive e que verá a Deus.'],
      ['21:7', 'Jó contesta os amigos: na vida real, os ímpios muitas vezes prosperam.'],
    ],
    personagens: [],
    pergunta: 'Em qual dor você precisa declarar, como Jó, "eu sei que o meu Redentor vive"?',
    quiz: [{ q: 'O que Jó afirma em Jó 19:25?', op: ['Que vai morrer em breve', 'Que o seu Redentor vive', 'Que os amigos têm razão', 'Que Deus o abandonou para sempre'], a: 1, ref: 'Jó 19:25' }] },

  { id: 'jo-05', livro: 'jo', caps: [22, 28], titulo: 'Onde se acha a sabedoria?',
    cenario: 'O terceiro e último ciclo de diálogos.',
    contexto: 'Elifaz chega a acusar Jó de pecados que ele não cometeu. Jó busca a Deus sem encontrá-lo, mas confia que sairá da prova como ouro. O capítulo 28 é um poema sobre onde encontrar a sabedoria.',
    notas: [
      ['22:5-9', 'Elifaz lista pecados que atribui a Jó, sem prova.'],
      ['23:3', 'Jó deseja saber onde encontrar a Deus.'],
      ['23:10', 'Deus conhece o caminho de Jó; provado, ele sairá como o ouro.'],
      ['28:12-28', 'A sabedoria não se compra nem se extrai da terra; o temor do Senhor é a sabedoria, e afastar-se do mal é o entendimento.'],
    ],
    personagens: [],
    pergunta: 'O que significaria, na prática desta semana, "temer ao Senhor" e "afastar-se do mal"?',
    quiz: [{ q: 'Segundo Jó 28:28, o que é a sabedoria?', op: ['O conhecimento dos antigos', 'O temor do Senhor', 'A riqueza bem administrada', 'A experiência dos anos'], a: 1, ref: 'Jó 28:28' }] },

  { id: 'jo-06', livro: 'jo', caps: [29, 31], titulo: 'A defesa final de Jó',
    cenario: 'Jó encerra a sua fala.',
    contexto: 'Jó relembra a vida que tinha, descreve a humilhação atual e faz um juramento de inocência, área por área da sua vida.',
    notas: [
      ['29:12-16', 'Jó lembra como socorria pobres, órfãos e viúvas.'],
      ['30:20', 'Ele clama a Deus e sente que não recebe resposta.'],
      ['31:1', 'Jó fez um pacto com os próprios olhos para não olhar com cobiça.'],
      ['31:40', 'O texto marca: aqui terminam as palavras de Jó.'],
    ],
    personagens: [],
    pergunta: 'Se você revisasse sua vida área por área como Jó em 31, onde precisaria de ajuste?',
    quiz: [{ q: 'O que Jó diz ter feito em Jó 31:1?', op: ['Um voto de silêncio', 'Um pacto com os próprios olhos', 'Um juramento de vingança', 'Um sacrifício pelos amigos'], a: 1, ref: 'Jó 31:1' }] },

  { id: 'jo-07', livro: 'jo', caps: [32, 37], titulo: 'Eliú',
    cenario: 'Um quarto personagem, até então calado, toma a palavra.',
    contexto: 'Eliú, o mais jovem, esperou todos falarem. Discorda de Jó e dos amigos e fala de Deus usando até o sofrimento para conduzir o ser humano, e da grandeza de Deus na criação.',
    notas: [
      ['32:2-3', 'Eliú se ira com Jó, por se justificar mais do que a Deus, e com os amigos, por condenarem Jó sem ter resposta.'],
      ['32:6', 'Ele esperou por ser o mais novo.'],
      ['33:14-19', 'Deus fala de várias formas — em sonhos e até pela dor — para afastar o homem da cova.'],
      ['37:14', 'Eliú convida Jó a parar e considerar as maravilhas de Deus.'],
    ],
    personagens: ['eliu'],
    pergunta: 'Que maravilha de Deus na criação você pode parar para considerar hoje?',
    quiz: [{ q: 'Por que Eliú se irou com os três amigos de Jó?', op: ['Porque falaram pouco', 'Porque condenaram Jó sem encontrar resposta', 'Porque eram mais velhos', 'Porque defenderam Jó'], a: 1, ref: 'Jó 32:3' }] },

  { id: 'jo-08', livro: 'jo', caps: [38, 39], titulo: 'Deus responde do meio da tempestade',
    cenario: 'O Senhor fala de dentro de um redemoinho (Jó 38:1).',
    contexto: 'Deus finalmente fala. Não explica o motivo do sofrimento: faz perguntas sobre a criação que mostram a Jó a grandeza e a sabedoria de quem governa tudo.',
    notas: [
      ['38:1', 'O Senhor responde do meio de um redemoinho.'],
      ['38:4', 'Onde você estava quando eu lancei os fundamentos da terra?'],
      ['38:31', 'Perguntas sobre as constelações, como as Plêiades e o Órion.'],
      ['39', 'Deus mostra seu cuidado com animais que o ser humano não controla.'],
    ],
    personagens: [],
    pergunta: 'Deus não deu a Jó um "porquê", deu a si mesmo. Isso basta para você hoje?',
    quiz: [{ q: 'De onde o Senhor respondeu a Jó?', op: ['De uma sarça ardente', 'Do meio de um redemoinho', 'Em sonho à noite', 'Pela boca de Eliú'], a: 1, ref: 'Jó 38:1' }] },

  { id: 'jo-09', livro: 'jo', caps: [40, 42], titulo: 'Agora os meus olhos te veem',
    cenario: 'A resposta final e o epílogo.',
    contexto: 'Jó se cala diante de Deus, que fala do beemote e do leviatã. Jó se arrepende e declara que agora vê a Deus. Deus repreende os amigos, Jó ora por eles e é restaurado.',
    notas: [
      ['40:4', 'Jó põe a mão sobre a boca.'],
      ['42:2', 'Jó reconhece que Deus pode tudo e nenhum plano seu pode ser frustrado.'],
      ['42:5', 'Antes Jó conhecia a Deus de ouvir falar; agora os seus olhos o veem.'],
      ['42:7', 'Deus diz aos amigos que não falaram dele o que era certo, como Jó falou.'],
      ['42:10; 42:16', 'O Senhor restaura Jó quando ele ora pelos amigos e lhe dá o dobro. Jó vive mais 140 anos.'],
    ],
    personagens: [],
    pergunta: 'Você conhece Deus "de ouvir falar" ou "de ver"? O que levaria você ao segundo?',
    quiz: [{ q: 'Quando o Senhor restaurou a sorte de Jó?', op: ['Quando os amigos se arrependeram', 'Quando Jó orou pelos amigos', 'Quando Eliú terminou de falar', 'Depois de sete anos'], a: 1, ref: 'Jó 42:10' }] },
];

// Personagens. "refs" = onde conferir no texto.
export const PERSONAGENS = {
  adao: { nome: 'Adão', quem: 'O primeiro homem, formado por Deus do pó da terra.', vida: 'Colocado no Éden para cultivá-lo e guardá-lo; comeu do fruto proibido junto com Eva e foi expulso do jardim. Pai de Caim, Abel e Sete. Viveu 930 anos.', refs: 'Gn 2:7,15; 3:6,23; 4:1-2,25; 5:5' },
  eva: { nome: 'Eva', quem: 'A primeira mulher, formada por Deus a partir do homem.', vida: 'Enganada pela serpente, comeu do fruto e deu ao marido. Adão a chamou Eva por ser a mãe de todos os que vivem.', refs: 'Gn 2:21-23; 3:6,13,20; 4:1' },
  caim: { nome: 'Caim', quem: 'Primeiro filho de Adão e Eva, agricultor.', vida: 'Irou-se porque Deus não se agradou da sua oferta e matou o irmão Abel. Foi punido, mas recebeu de Deus um sinal de proteção.', refs: 'Gn 4:1-16' },
  abel: { nome: 'Abel', quem: 'Segundo filho de Adão e Eva, pastor de ovelhas.', vida: 'Deus se agradou dele e da sua oferta. Foi morto pelo irmão Caim.', refs: 'Gn 4:2-8' },
  sete: { nome: 'Sete', quem: 'Filho de Adão e Eva nascido depois da morte de Abel.', vida: 'Pela sua linhagem vem Noé. No tempo de seu filho Enos, começou-se a invocar o nome do Senhor.', refs: 'Gn 4:25-26; 5:3-8' },
  enoque: { nome: 'Enoque', quem: 'Descendente de Sete, pai de Matusalém.', vida: 'Andou com Deus e já não foi visto, porque Deus o levou.', refs: 'Gn 5:18-24' },
  matusalem: { nome: 'Matusalém', quem: 'Filho de Enoque e avô de Noé.', vida: 'A pessoa de vida mais longa registrada na Bíblia: 969 anos.', refs: 'Gn 5:21-27' },
  noe: { nome: 'Noé', quem: 'Homem justo e íntegro, que andava com Deus.', vida: 'Construiu a arca por ordem de Deus e foi preservado do dilúvio com a família. Recebeu a aliança do arco nas nuvens.', refs: 'Gn 6:8-22; 7:1; 9:1-17' },
  sem: { nome: 'Sem', quem: 'Um dos três filhos de Noé, ao lado de Cam e Jafé.', vida: 'Entrou na arca com o pai. Da sua linhagem vem Terá e Abrão.', refs: 'Gn 6:10; 7:13; 11:10-26' },
  ninrode: { nome: 'Ninrode', quem: 'Descendente de Cam, chamado de poderoso caçador diante do Senhor.', vida: 'Começou um reino em Sinar, que incluía Babel.', refs: 'Gn 10:8-10' },
  tera: { nome: 'Terá', quem: 'Pai de Abrão, Naor e Harã.', vida: 'Saiu de Ur dos caldeus rumo a Canaã com Abrão, Sarai e Ló, mas se fixou em Harã, onde morreu.', refs: 'Gn 11:26-32' },
  abraao: { nome: 'Abraão (Abrão)', quem: 'Filho de Terá, chamado por Deus para sair de sua terra.', vida: 'Recebeu as promessas de descendência, terra e bênção para todas as famílias da terra. Creu, e isso lhe foi atribuído como justiça. Pai de Ismael e de Isaque. Deus mudou seu nome para Abraão, "pai de muitas nações". Morreu aos 175 anos.', refs: 'Gn 12:1-4; 15:6; 17:5; 21:2-5; 22; 25:7' },
  sara: { nome: 'Sara (Sarai)', quem: 'Esposa de Abraão.', vida: 'Era estéril. Riu ao ouvir a promessa, e Deus lhe deu Isaque na velhice. Deus mudou seu nome de Sarai para Sara. Morreu aos 127 anos, em Hebrom.', refs: 'Gn 11:30; 17:15-16; 18:12; 21:1-2; 23:1-2' },
  lo: { nome: 'Ló', quem: 'Sobrinho de Abraão, filho de Harã.', vida: 'Acompanhou Abraão e escolheu viver perto de Sodoma. Foi resgatado por Abraão e, depois, tirado de Sodoma antes da destruição.', refs: 'Gn 11:27,31; 13:10-12; 14:12-16; 19' },
  melquisedeque: { nome: 'Melquisedeque', quem: 'Rei de Salém e sacerdote do Deus Altíssimo.', vida: 'Trouxe pão e vinho e abençoou Abrão, que lhe deu o dízimo de tudo.', refs: 'Gn 14:18-20' },
  agar: { nome: 'Agar', quem: 'Serva egípcia de Sarai.', vida: 'Mãe de Ismael. No deserto, chamou o Senhor de "o Deus que me vê". Deus a socorreu duas vezes.', refs: 'Gn 16:1-16; 21:9-21' },
  ismael: { nome: 'Ismael', quem: 'Filho de Abraão com Agar.', vida: 'Deus ouviu sua voz no deserto e prometeu fazer dele uma grande nação. Ajudou Isaque a sepultar Abraão.', refs: 'Gn 16:11-16; 17:20; 21:17-21; 25:9' },
  isaque: { nome: 'Isaque', quem: 'O filho da promessa, nascido de Abraão e Sara na velhice.', vida: 'Foi levado a Moriá e poupado. Casou com Rebeca, foi pai de Esaú e Jacó e recebeu as mesmas promessas de Abraão. Morreu aos 180 anos.', refs: 'Gn 21:1-5; 22; 24:67; 25:21-26; 26:3-4; 35:28-29' },
  abimeleque: { nome: 'Abimeleque', quem: 'Rei de Gerar.', vida: 'Tomou Sara, achando que era irmã de Abraão, e foi advertido por Deus em sonho. Depois fez aliança com Abraão em Berseba. Um Abimeleque também aparece com Isaque (Gn 26); o texto não diz se é o mesmo.', refs: 'Gn 20; 21:22-32; 26:1-11' },
  rebeca: { nome: 'Rebeca', quem: 'Esposa de Isaque, irmã de Labão.', vida: 'Foi a resposta à oração do servo de Abraão. Mãe de Esaú e Jacó, ajudou Jacó a obter a bênção do pai.', refs: 'Gn 24:15-67; 25:21-28; 27:5-17' },
  labao: { nome: 'Labão', quem: 'Irmão de Rebeca, pai de Lia e Raquel.', vida: 'Recebeu Jacó em Harã, deu-lhe Lia no lugar de Raquel e mudou seu salário várias vezes. Fez aliança com Jacó em Galeede.', refs: 'Gn 24:29; 29:15-30; 31:7,44-55' },
  esau: { nome: 'Esaú', quem: 'Filho mais velho de Isaque, gêmeo de Jacó; também chamado Edom.', vida: 'Caçador. Desprezou a primogenitura e perdeu a bênção. Anos depois recebeu Jacó com um abraço. Pai dos edomitas.', refs: 'Gn 25:25-34; 27:30-41; 33:4; 36:1' },
  jaco: { nome: 'Jacó (Israel)', quem: 'Filho mais novo de Isaque, gêmeo de Esaú.', vida: 'Obteve a primogenitura e a bênção. Encontrou Deus em Betel, trabalhou para Labão, lutou em Peniel e recebeu o nome Israel. Pai dos doze filhos que dão nome às tribos. Morreu no Egito e foi sepultado em Macpela.', refs: 'Gn 25:26; 28:10-22; 32:28; 35:22-26; 49:33; 50:13' },
  lia: { nome: 'Lia', quem: 'Filha mais velha de Labão, primeira esposa de Jacó.', vida: 'Entregue a Jacó no lugar de Raquel e menos amada, mas Deus a viu. Mãe de Rúben, Simeão, Levi, Judá, Issacar, Zebulom e Diná.', refs: 'Gn 29:23-35; 30:17-21' },
  raquel: { nome: 'Raquel', quem: 'Filha mais nova de Labão, esposa amada de Jacó.', vida: 'Foi estéril por muito tempo; Deus se lembrou dela e ela teve José. Morreu ao dar à luz Benjamim, no caminho de Belém.', refs: 'Gn 29:16-30; 30:22-24; 35:16-19' },
  dina: { nome: 'Diná', quem: 'Filha de Jacó e Lia.', vida: 'Foi violentada por Siquém; seus irmãos Simeão e Levi se vingaram matando os homens da cidade.', refs: 'Gn 30:21; 34' },
  benjamim: { nome: 'Benjamim', quem: 'O filho mais novo de Jacó, o segundo de Raquel.', vida: 'Raquel o chamou Benoni ao morrer; Jacó o chamou Benjamim. Foi o centro do teste final de José com os irmãos.', refs: 'Gn 35:16-18; 42:4; 44:12' },
  jose: { nome: 'José', quem: 'Filho de Jacó e Raquel, o preferido do pai.', vida: 'Vendido pelos irmãos, foi escravo e prisioneiro no Egito, mas o Senhor estava com ele. Interpretou os sonhos de Faraó e se tornou governador. Salvou a família da fome e perdoou os irmãos. Morreu aos 110 anos.', refs: 'Gn 37:3,28; 39:2,21; 41:39-46; 45:4-8; 50:20,26' },
  ruben: { nome: 'Rúben', quem: 'O primogênito de Jacó, filho de Lia.', vida: 'Tentou livrar José da morte, planejando devolvê-lo ao pai.', refs: 'Gn 29:32; 37:21-22,29-30; 42:22' },
  juda: { nome: 'Judá', quem: 'Quarto filho de Jacó e Lia.', vida: 'Propôs vender José. Falhou com Tamar e reconheceu que ela era mais justa. Mais tarde, ofereceu-se como escravo no lugar de Benjamim. Jacó profetizou que o cetro não se afastaria dele.', refs: 'Gn 29:35; 37:26-27; 38:26; 44:18-34; 49:8-10' },
  tamar: { nome: 'Tamar', quem: 'Nora de Judá.', vida: 'Viúva, foi tratada injustamente por Judá e agiu para garantir descendência. Judá reconheceu que ela era mais justa do que ele. Mãe de Perez e Zera.', refs: 'Gn 38' },
  potifar: { nome: 'Potifar', quem: 'Oficial de Faraó, capitão da guarda.', vida: 'Comprou José e o pôs sobre toda a sua casa. Mandou prendê-lo depois da acusação da esposa.', refs: 'Gn 37:36; 39:1-20' },
  'farao-jose': { nome: 'Faraó (tempo de José)', quem: 'O rei do Egito nos dias de José. O texto não diz o seu nome.', vida: 'Teve os sonhos das vacas e das espigas. Colocou José sobre todo o Egito e deu Gósen à família de Jacó.', refs: 'Gn 41; 47:1-10' },
  manasses: { nome: 'Manassés', quem: 'Filho mais velho de José, nascido no Egito.', vida: 'O nome se liga a "Deus me fez esquecer todo o meu sofrimento". Abençoado por Jacó com a mão esquerda.', refs: 'Gn 41:51; 48:13-20' },
  efraim: { nome: 'Efraim', quem: 'Filho mais novo de José, nascido no Egito.', vida: 'O nome se liga a "Deus me fez prosperar". Jacó pôs a mão direita sobre ele e disse que seria maior que o irmão.', refs: 'Gn 41:52; 48:14,19' },
  simeao: { nome: 'Simeão', quem: 'Segundo filho de Jacó e Lia.', vida: 'Com Levi, vingou Diná em Siquém. No Egito, ficou preso como garantia até os irmãos voltarem com Benjamim.', refs: 'Gn 29:33; 34:25; 42:24' },
  jo: { nome: 'Jó', quem: 'Homem da terra de Uz, íntegro, reto e temente a Deus.', vida: 'Perdeu bens, filhos e saúde sem pecar com os lábios. Discutiu com os amigos, encontrou-se com Deus e foi restaurado em dobro depois de orar pelos amigos.', refs: 'Jó 1:1-22; 2:10; 42:5,10-17' },
  elifaz: { nome: 'Elifaz', quem: 'Amigo de Jó, de Temã.', vida: 'O primeiro a falar: defendeu que o sofrimento é colheita do pecado. Deus disse que ele e os outros não falaram dele o que era certo.', refs: 'Jó 2:11; 4–5; 15; 22; 42:7' },
  bildade: { nome: 'Bildade', quem: 'Amigo de Jó, suíta.', vida: 'Disse que os filhos de Jó morreram por causa do pecado deles. Foi repreendido por Deus junto com os outros.', refs: 'Jó 2:11; 8; 18; 25; 42:9' },
  zofar: { nome: 'Zofar', quem: 'Amigo de Jó, naamatita.', vida: 'Disse que Deus cobrava de Jó menos do que a sua culpa merecia. Foi repreendido por Deus junto com os outros.', refs: 'Jó 2:11; 11; 20; 42:9' },
  eliu: { nome: 'Eliú', quem: 'Filho de Baraquel, o buzita; o mais jovem a falar.', vida: 'Esperou os mais velhos falarem e depois discordou de Jó e dos três amigos. Falou de Deus usando até a dor para conduzir o ser humano.', refs: 'Jó 32:2-6; 33:14-19' },
};

// Marcos da linha do tempo desta era, na ordem. "quando" só traz o que o texto informa.
export const MARCOS = [
  { id: 'criacao', titulo: 'A criação', quando: 'No princípio (Gn 1:1).' },
  { id: 'queda', titulo: 'A queda e a saída do Éden', quando: 'O texto não informa quanto tempo depois da criação.' },
  { id: 'diluvio', titulo: 'O dilúvio', quando: 'No ano 600 da vida de Noé (Gn 7:6,11).' },
  { id: 'babel', titulo: 'Babel e a dispersão das nações', quando: 'Depois do dilúvio; o texto não dá a data.' },
  { id: 'chamado', titulo: 'O chamado de Abrão', quando: 'Abrão tinha 75 anos (Gn 12:4).' },
  { id: 'alianca', titulo: 'A aliança com Abrão', quando: 'Antes do nascimento de Ismael (Gn 15–16).' },
  { id: 'isaque', titulo: 'Nasce Isaque', quando: 'Abraão tinha 100 anos (Gn 21:5).' },
  { id: 'israel', titulo: 'Jacó recebe o nome Israel', quando: 'Na volta de Harã, em Peniel (Gn 32:28-30).' },
  { id: 'jose', titulo: 'José, governador do Egito', quando: 'José tinha 30 anos (Gn 41:46).' },
  { id: 'egito', titulo: 'Israel desce ao Egito', quando: 'Jacó tinha 130 anos (Gn 47:9).' },
  { id: 'morte-jose', titulo: 'Morte de José', quando: 'José tinha 110 anos (Gn 50:26).' },
  { id: 'jo', titulo: 'Jó em Uz', quando: 'Data não informada no texto. Seu plano cronológico o coloca após Gênesis.' },
];

// Cartas: [símbolo, raridade, título]. Símbolo e título vêm de algo que o texto diz
// sobre a pessoa (ref ao lado). Raridade é só mecânica do jogo, não juízo sobre a pessoa.
export const CARTAS = {
  adao: ['sprout', 'lendaria', 'O primeiro homem'],              // Gn 2:7,15
  eva: ['tree-deciduous', 'epica', 'Mãe de todos os que vivem'],  // Gn 3:20
  caim: ['wheat', 'comum', 'O lavrador'],                         // Gn 4:2
  abel: ['flame', 'rara', 'O pastor de ovelhas'],                 // Gn 4:2,4
  sete: ['route', 'rara', 'Dado no lugar de Abel'],               // Gn 4:25
  enoque: ['footprints', 'epica', 'Andou com Deus'],              // Gn 5:24
  matusalem: ['hourglass', 'rara', '969 anos'],                   // Gn 5:27
  noe: ['ship', 'lendaria', 'Achou favor diante do Senhor'],      // Gn 6:8
  sem: ['scroll-text', 'comum', 'Filho de Noé'],                  // Gn 6:10
  ninrode: ['target', 'comum', 'Poderoso caçador'],               // Gn 10:9
  tera: ['map', 'comum', 'Saiu de Ur dos caldeus'],               // Gn 11:31
  abraao: ['stars', 'lendaria', 'Pai de muitas nações'],          // Gn 15:5; 17:5
  sara: ['baby', 'epica', 'Mãe de nações'],                       // Gn 17:16
  lo: ['signpost', 'rara', 'Escolheu a planície do Jordão'],      // Gn 13:11
  melquisedeque: ['grape', 'epica', 'Rei de Salém e sacerdote'],  // Gn 14:18
  agar: ['eye', 'rara', 'Viu o Deus que a vê'],                   // Gn 16:13
  ismael: ['bow-arrow', 'rara', 'Flecheiro no deserto'],          // Gn 21:20
  isaque: ['flame-kindling', 'lendaria', 'O filho da promessa'],  // Gn 17:19; 22:6
  abimeleque: ['handshake', 'comum', 'Rei de Gerar'],             // Gn 20:2; 21:27
  rebeca: ['amphora', 'epica', 'A resposta da oração'],           // Gn 24:15
  labao: ['scale', 'comum', 'Mudou o salário dez vezes'],         // Gn 31:7
  esau: ['soup', 'rara', 'Edom'],                                 // Gn 25:30
  jaco: ['escada', 'lendaria', 'Israel'],                         // Gn 28:12; 32:28
  lia: ['heart', 'rara', 'Vista pelo Senhor'],                    // Gn 29:31
  raquel: ['droplets', 'rara', 'Pastora junto ao poço'],          // Gn 29:9-10
  dina: ['flower-2', 'comum', 'Filha de Jacó e Lia'],             // Gn 30:21
  benjamim: ['wine', 'rara', 'A taça na bagagem'],                // Gn 44:12
  jose: ['shirt', 'lendaria', 'O Senhor estava com ele'],         // Gn 37:3; 39:2
  ruben: ['hand-helping', 'comum', 'O primogênito'],              // Gn 37:21-22
  juda: ['crown', 'epica', 'O cetro não se afastará'],            // Gn 49:10
  tamar: ['stamp', 'rara', 'Mais justa do que eu'],               // Gn 38:18,26
  potifar: ['shield', 'comum', 'Capitão da guarda'],              // Gn 39:1
  'farao-jose': ['pyramid', 'rara', 'Rei do Egito'],              // Gn 41
  manasses: ['sunrise', 'comum', 'Deus me fez esquecer'],         // Gn 41:51
  efraim: ['leafy-green', 'comum', 'Deus me fez prosperar'],      // Gn 41:52
  simeao: ['lock', 'comum', 'Preso como garantia'],               // Gn 42:24
  jo: ['shield-check', 'lendaria', 'Íntegro e reto'],             // Jó 1:1
  elifaz: ['moon-star', 'comum', 'O temanita'],                   // Jó 2:11; 4:13
  bildade: ['messages-square', 'comum', 'O suíta'],               // Jó 2:11
  zofar: ['gavel', 'comum', 'O naamatita'],                       // Jó 2:11
  eliu: ['cloud-lightning', 'rara', 'O mais jovem'],              // Jó 32:6; 37
};

// Pergunta para as crianças em cada sessão (estudo em família).
export const CRIANCAS = {
  'gn-01': 'Deus fez tudo e viu que era bom. Cite três coisas que Deus criou de que você gosta.',
  'gn-02': 'O que Adão e Eva fizeram depois de desobedecer? E o que Deus fez?',
  'gn-03': 'Deus avisou Caim antes de ele errar. O que fazer quando ficamos com muita raiva?',
  'gn-04': 'Noé obedeceu antes de ver a chuva. Em que você pode obedecer hoje?',
  'gn-05': 'Quando você vir um arco-íris, que promessa de Deus ele lembra?',
  'gn-06': 'Por que Deus misturou as línguas em Babel?',
  'gn-07': 'Abrão saiu de casa confiando em Deus. Você já fez algo novo com medo?',
  'gn-08': 'Hoje à noite, tente contar as estrelas. O que Deus prometeu a Abrão com elas?',
  'gn-09': 'Agar chamou Deus de "o Deus que me vê". Como é saber que Deus vê você?',
  'gn-10': 'Existe alguma coisa difícil demais para Deus?',
  'gn-11': 'Sara disse que Deus a fez rir. Que coisa boa de Deus faz você sorrir?',
  'gn-12': 'O que Deus colocou no lugar de Isaque?',
  'gn-13': 'O servo orou antes de escolher. Sobre o que podemos orar antes de decidir algo?',
  'gn-14': 'Esaú trocou algo muito valioso por um prato de comida. O que é valioso para você?',
  'gn-15': 'Deus prometeu a Jacó: "estou com você". Onde você precisa lembrar disso?',
  'gn-16': 'Sete anos pareceram poucos dias para Jacó. Por quê?',
  'gn-17': 'Qual foi o novo nome que Deus deu a Jacó?',
  'gn-18': 'Esaú abraçou o irmão. Com quem você precisa fazer as pazes?',
  'gn-19': 'Jacó mandou tirar os ídolos de casa. O que pode tomar o lugar de Deus no coração?',
  'gn-20': 'Os irmãos de José ficaram com ciúmes. O que fazer quando sentimos ciúmes?',
  'gn-21': 'José disse não ao que era errado. Como dizer não quando alguém nos chama para errar?',
  'gn-22': 'José ficou esperando na prisão e foi esquecido. Como é ter que esperar?',
  'gn-23': 'Os irmãos lembraram do mal que fizeram. O que fazer quando erramos com alguém?',
  'gn-24': 'José perdoou os irmãos. Tem alguém que você precisa perdoar?',
  'gn-25': 'Deus disse a Jacó: "não tenha medo". Do que você tem medo?',
  'gn-26': 'Deus transformou em bem o mal que fizeram a José. Você lembra de algo ruim que virou bom?',
  'jo-01': 'Jó perdeu muita coisa e mesmo assim adorou a Deus. Por que amamos a Deus?',
  'jo-02': 'Jó contou para Deus toda a tristeza dele. Você sabia que pode falar tudo com Deus?',
  'jo-03': 'Os amigos de Jó ficaram sete dias em silêncio com ele. Como ajudar um amigo triste?',
  'jo-04': 'Mesmo sofrendo, Jó disse: "o meu Redentor vive". O que nos dá esperança?',
  'jo-05': 'Jó disse que sairia da prova como o ouro. O que você acha que isso quer dizer?',
  'jo-06': 'Jó ajudava os pobres, os órfãos e as viúvas. Quem nós podemos ajudar?',
  'jo-07': 'Eliú esperou os mais velhos falarem. Por que é bom saber ouvir?',
  'jo-08': 'Deus perguntou a Jó sobre o mar, as estrelas e os animais. O que na criação mostra que Deus é grande?',
  'jo-09': 'Jó orou pelos amigos que o magoaram. Por quem você pode orar hoje?',
};

// Selos da Palavra: objetos e palavras-chave do texto, ganhos na sessão em que aparecem.
// texto = o que a passagem diz (paráfrase), sempre com referência.
export const SELOS = {
  luz:        { nome: 'Luz', icone: 'sun', sessao: 'gn-01', ref: 'Gn 1:3-4', texto: 'Deus disse que houvesse luz, e houve luz. E viu que a luz era boa.' },
  arvore:     { nome: 'Árvore da vida', icone: 'tree-deciduous', sessao: 'gn-02', ref: 'Gn 2:9; 3:24', texto: 'Estava no meio do jardim. Depois da queda, querubins guardaram o caminho até ela.' },
  arca:       { nome: 'Arca', icone: 'ship', sessao: 'gn-04', ref: 'Gn 6:14-16', texto: 'Noé a construiu como Deus mandou, com as medidas que Deus deu.' },
  arcoiris:   { nome: 'Arco nas nuvens', icone: 'rainbow', sessao: 'gn-05', ref: 'Gn 9:13-15', texto: 'Sinal da aliança: Deus se lembraria e as águas não destruiriam mais a terra.' },
  estrelas:   { nome: 'Estrelas', icone: 'stars', sessao: 'gn-08', ref: 'Gn 15:5', texto: 'Deus mandou Abrão contar as estrelas: assim seria a sua descendência.' },
  carneiro:   { nome: 'Carneiro', icone: 'carneiro', sessao: 'gn-12', ref: 'Gn 22:13-14', texto: 'Preso pelos chifres, foi oferecido no lugar de Isaque. "O Senhor proverá."' },
  poco:       { nome: 'Poço', icone: 'droplets', sessao: 'gn-13', ref: 'Gn 24:11-20', texto: 'Junto ao poço, Rebeca deu de beber ao servo e aos camelos: a resposta da oração.' },
  escada:     { nome: 'Escada', icone: 'escada', sessao: 'gn-15', ref: 'Gn 28:12-15', texto: 'Em sonho, Jacó viu uma escada até o céu, e Deus prometeu estar com ele.' },
  tunica:     { nome: 'Túnica', icone: 'shirt', sessao: 'gn-20', ref: 'Gn 37:3', texto: 'Jacó a deu a José, o filho que ele mais amava.' },
  espiga:     { nome: 'Espigas', icone: 'wheat', sessao: 'gn-22', ref: 'Gn 41:5-7,26', texto: 'No sonho de Faraó, sete espigas boas eram sete anos de fartura.' },
  ouro:       { nome: 'Ouro provado', icone: 'gem', sessao: 'jo-05', ref: 'Jó 23:10', texto: 'Deus conhece o caminho de Jó: provado, ele sairia como o ouro.' },
  redemoinho: { nome: 'Redemoinho', icone: 'tornado', sessao: 'jo-08', ref: 'Jó 38:1', texto: 'Do meio do redemoinho, o Senhor respondeu a Jó.' },
};

// Para as crianças, na Aplicação: uma atitude concreta ligada ao texto (volta em 3 dias no "como foi?").
// CRIANCAS continua sendo a pergunta para conversar.
export const CRIANCAS_FAZER = {
  'gn-01': 'Deus fez tudo com cuidado e viu que era bom (Gn 1:31). Hoje, cuide de alguma coisa que Deus criou: regue uma planta, dê comida a um bichinho ou junte um lixo do chão.',
  'gn-02': 'Adão e Eva se esconderam depois de errar (Gn 3:8). Esta semana, quando você fizer algo errado, não esconda: conte para seu pai ou sua mãe e peça perdão.',
  'gn-03': 'Deus disse a Caim que ele devia dominar a raiva (Gn 4:7). Na próxima vez que ficar com muita raiva, pare, respire fundo três vezes e só depois fale.',
  'gn-04': 'Noé fez tudo o que Deus mandou (Gn 6:22). Escolha uma coisa que seus pais pedem sempre e faça hoje logo na primeira vez, sem reclamar.',
  'gn-05': 'Deus colocou o arco nas nuvens como sinal da promessa (Gn 9:13). Desenhe um arco-íris e escreva embaixo uma promessa de Deus. Cole num lugar onde você veja todo dia.',
  'gn-06': 'Em Babel, o povo quis fazer um nome para si (Gn 11:4). Esta semana, quando fizer algo bom, em vez de se exibir, agradeça a Deus por ter conseguido.',
  'gn-07': 'Abrão obedeceu e saiu, confiando em Deus (Gn 12:4). Faça esta semana uma coisa nova que dá um pouco de medo (falar com um colega novo, tentar algo diferente) e ore antes.',
  'gn-08': 'Abrão olhou para as estrelas e creu em Deus (Gn 15:5-6). Hoje à noite, olhe o céu com alguém da família e agradeça a Deus por uma promessa dele.',
  'gn-09': 'Agar descobriu que Deus a via (Gn 16:13). Esta semana, repare em alguém que está sozinho ou triste e faça algo para essa pessoa se sentir vista.',
  'gn-10': 'Abraão orou pelas pessoas de Sodoma (Gn 18:23-32). Escolha uma pessoa e ore por ela todos os dias desta semana.',
  'gn-11': 'Deus cumpriu a promessa e Sara riu de alegria (Gn 21:1-6). Conte para alguém da família uma coisa boa que Deus fez por você.',
  'gn-12': 'Abraão confiou que Deus proveria (Gn 22:8,14). Antes de dormir, agradeça a Deus por três coisas que ele já deu a você.',
  'gn-13': 'O servo orou antes de escolher (Gn 24:12). Antes de uma escolha desta semana (uma brincadeira, um presente, uma atividade), pare e ore primeiro.',
  'gn-14': 'Esaú trocou algo valioso por um prato de comida (Gn 25:33-34). Esta semana, quando quiser uma coisa na hora (doce, tela, brinquedo), espere e escolha o que é melhor.',
  'gn-15': 'Deus disse a Jacó: "eu estou com você" (Gn 28:15). Escreva essa frase num papel e leve na mochila. Leia quando sentir medo.',
  'gn-16': 'Deus viu Lia quando ela se sentia deixada de lado (Gn 29:31). Convide para brincar ou sentar com você alguém que costuma ficar de fora.',
  'gn-17': 'Jacó não desistiu e pediu a bênção de Deus (Gn 32:26). Escolha uma coisa difícil (uma lição, um treino) e não desista: tente de novo três vezes esta semana.',
  'gn-18': 'Esaú correu e abraçou o irmão (Gn 33:4). Se você brigou com alguém, vá fazer as pazes esta semana: peça desculpas ou dê um abraço.',
  'gn-19': 'Jacó tirou os ídolos de casa para voltar a Deus (Gn 35:2-3). Escolha uma coisa que está tomando o lugar de Deus (jogo, tela) e troque um pouco desse tempo por oração ou leitura com a família.',
  'gn-20': 'Os irmãos de José tiveram inveja dele (Gn 37:4,11). Quando sentir ciúmes de alguém esta semana, diga para essa pessoa uma coisa boa sobre ela.',
  'gn-21': 'José disse não ao que era errado (Gn 39:9). Combine com seus pais uma frase para dizer quando alguém chamar você para fazer algo errado, e use quando precisar.',
  'gn-22': 'José esperou muito tempo e Deus estava com ele (Gn 39:21; 41:1). Quando tiver que esperar esta semana (na fila, pela sua vez), espere sem reclamar.',
  'gn-23': 'Os irmãos lembraram do mal que fizeram a José (Gn 42:21). Se você magoou alguém, vá até essa pessoa, peça perdão e tente consertar.',
  'gn-24': 'José perdoou os irmãos e os abraçou (Gn 45:4-15). Pense em alguém que magoou você, ore por essa pessoa e decida perdoar.',
  'gn-25': 'Deus disse a Jacó: "não tenha medo" (Gn 46:3). Conte para seus pais um medo que você tem e orem juntos sobre ele.',
  'gn-26': 'Deus transformou o mal em bem na vida de José (Gn 50:20). Quando algo der errado esta semana, ore e peça a Deus para tirar algo bom daquilo.',
  'jo-01': 'Jó adorou a Deus mesmo perdendo muita coisa (Jó 1:20-21). Esta semana, agradeça a Deus por quem ele é, e não só pelo que você ganhou.',
  'jo-02': 'Jó falou com Deus sobre toda a tristeza dele (Jó 3; 7:11). Quando ficar triste esta semana, conte para Deus numa oração, com as suas palavras.',
  'jo-03': 'Os amigos de Jó ficaram sete dias em silêncio com ele (Jó 2:13). Quando um amigo estiver triste, fique perto dele e escute antes de falar.',
  'jo-04': 'Jó disse: "eu sei que o meu Redentor vive" (Jó 19:25). Decore essa frase e fale para si mesmo quando estiver com medo ou triste.',
  'jo-05': 'Temer ao Senhor é sabedoria e afastar-se do mal é entendimento (Jó 28:28). Escolha uma coisa errada que você costuma fazer e afaste-se dela esta semana.',
  'jo-06': 'Jó ajudava os pobres, os órfãos e as viúvas (Jó 29:12-16). Com sua família, separe um brinquedo, uma roupa ou um alimento para doar a quem precisa.',
  'jo-07': 'Eliú esperou os mais velhos falarem primeiro (Jó 32:4,6). Esta semana, quando um adulto estiver falando, espere ele terminar antes de falar.',
  'jo-08': 'Deus mostrou a Jó o mar, as estrelas e os animais (Jó 38-39). Saia com alguém da família, observe a natureza e conte três coisas que mostram que Deus é grande.',
  'jo-09': 'Jó orou pelos amigos que o magoaram (Jó 42:10). Ore hoje por alguém que foi chato ou magoou você.',
};
