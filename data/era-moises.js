// ERA 2 — Moisés (Êxodo, Levítico, Números, Deuteronômio)
//
// Mesma regra da era 1: texto fiel, nada de achismos. Tudo traz referência; o que vem da
// tradição ou de estudiosos é marcado como tal; nada copiado da NAA; datas não inventadas.
// Tamanho das sessões: opção C (CLAUDE.md) — 32 sessões para 137 capítulos.

export const INTRODUCOES = {
  ex: {
    autor: 'O livro não nomeia o seu autor, mas diz que Moisés escreveu partes dele (Êx 17:14; 24:4; 34:27). A tradição judaica e cristã atribui o livro a Moisés.',
    data: 'Não informada no texto. A data da saída do Egito é debatida: os estudiosos defendem principalmente c. 1446 a.C. ou c. 1260 a.C.',
    cenario: 'Começa no Egito, com Israel escravizado (Êx 1:8-14), e termina no deserto do Sinai, com o tabernáculo erguido (Êx 40:17,34).',
    tema: 'Deus ouve o clamor do seu povo, o liberta da escravidão, faz aliança com ele no Sinai e passa a habitar no meio dele.',
    chave: 'Êx 6:6-7',
    estrutura: 'Três grandes partes, ligadas pelo lugar onde o povo está: no Egito, a caminho do Sinai e ao pé do monte.',
    esboco: [
      ['1–15', 'No Egito: escravidão, chamado de Moisés, pragas, Páscoa e travessia do mar'],
      ['16–18', 'No deserto: maná, água, Amaleque e Jetro'],
      ['19–24', 'No Sinai: os Dez Mandamentos e a aliança'],
      ['25–40', 'O tabernáculo: instruções, o bezerro de ouro, construção e glória'],
    ],
  },
  lv: {
    autor: 'Não nomeado como autor, mas o livro se apresenta como palavras que o Senhor falou a Moisés (Lv 1:1; 27:34). A tradição o atribui a Moisés.',
    data: 'Não informada no texto.',
    cenario: 'Ao pé do monte Sinai, logo depois de o tabernáculo ser erguido (Lv 1:1; 27:34).',
    tema: 'Como um povo pecador pode viver perto de um Deus santo: ofertas, sacerdotes, pureza e santidade no dia a dia.',
    chave: 'Lv 19:2',
    estrutura: 'Leis dadas em blocos, com poucas narrativas (caps. 8–10 e 24:10-23).',
    esboco: [
      ['1–7', 'As ofertas'],
      ['8–10', 'Os sacerdotes consagrados'],
      ['11–15', 'Puro e impuro'],
      ['16', 'O Dia da Expiação'],
      ['17–27', 'Santidade na vida do povo; festas; jubileu'],
    ],
  },
  nm: {
    autor: 'Não nomeado como autor do livro. O texto diz que Moisés registrou as etapas da viagem (Nm 33:2). A tradição o atribui a Moisés.',
    data: 'Não informada no texto.',
    cenario: 'Do Sinai, no segundo ano depois da saída do Egito (Nm 1:1), até as planícies de Moabe, junto ao Jordão (Nm 36:13).',
    tema: 'A geração que saiu do Egito não confia em Deus e morre no deserto; a geração seguinte é preparada para entrar na terra.',
    chave: 'Nm 14:8-9',
    estrutura: 'Dois recenseamentos dividem o livro: o da geração que saiu do Egito (cap. 1) e o da nova geração (cap. 26).',
    esboco: [
      ['1–10', 'No Sinai: o povo é contado e organizado'],
      ['11–25', 'No deserto: queixas, rebelião e 40 anos'],
      ['26–36', 'Em Moabe: a nova geração se prepara'],
    ],
  },
  dt: {
    autor: 'O livro diz que são as palavras que Moisés falou a Israel (Dt 1:1) e que ele escreveu esta lei (Dt 31:9,24). O relato da morte de Moisés (Dt 34) foi escrito por outra pessoa, não nomeada.',
    data: 'Os discursos acontecem no 40º ano depois da saída do Egito (Dt 1:3). A data em que o livro foi escrito não é informada.',
    cenario: 'Nas planícies de Moabe, do outro lado do Jordão, pouco antes de o povo entrar em Canaã (Dt 1:1-5).',
    tema: 'Moisés relembra a jornada e renova a aliança com a nova geração: amar o Senhor de todo o coração e obedecer à sua palavra.',
    chave: 'Dt 6:4-5',
    estrutura: 'Três discursos de Moisés (caps. 1–4; 5–28; 29–30), seguidos da despedida e da morte de Moisés (caps. 31–34).',
    esboco: [
      ['1–4', 'Primeiro discurso: lembrar a jornada'],
      ['5–11', 'Segundo discurso: amar e obedecer'],
      ['12–26', 'As leis para a vida na terra'],
      ['27–30', 'Bênçãos, maldições e a escolha'],
      ['31–34', 'Josué, o cântico e a morte de Moisés'],
    ],
  },
};

export const SESSOES = [
  // ───────────── ÊXODO ─────────────
  { id: 'ex-01', livro: 'ex', caps: [1, 2], titulo: 'Escravos no Egito',
    cenario: 'O Egito, muitos anos depois da morte de José.',
    contexto: 'A família de Jacó cresce muito no Egito. Um novo rei, que não tinha conhecido José, escraviza Israel e manda matar os meninos hebreus. Nesse tempo nasce Moisés.',
    notas: [
      ['1:8', 'Um novo rei, que não conhecia José, passa a ver Israel como ameaça.'],
      ['1:17', 'As parteiras Sifrá e Puá temem a Deus e não matam os meninos.'],
      ['2:3', 'A mãe de Moisés o esconde num cesto calafetado, entre os juncos do Nilo.'],
      ['2:10', 'A filha de Faraó o adota e o chama Moisés, porque o tirou das águas.'],
      ['2:15', 'Depois de matar um egípcio, Moisés foge para Midiã.'],
      ['2:23-25', 'Os israelitas clamam; Deus ouve, lembra-se da aliança com Abraão, Isaque e Jacó, e atenta para eles.'],
    ],
    personagens: ['joquebede', 'filha-farao', 'moises', 'zipora'], marco: 'escravidao',
    pergunta: 'Deus ouviu o clamor do povo antes de qualquer resposta aparecer. O que você tem clamado a Deus?',
    quiz: [
      { q: 'Por que as parteiras não mataram os meninos hebreus?', op: ['Porque Faraó mudou de ideia', 'Porque temiam a Deus', 'Porque não havia meninos', 'Porque fugiram do Egito'], a: 1, ref: 'Êx 1:17' },
      { q: 'Para onde Moisés fugiu?', op: ['Canaã', 'Midiã', 'Babilônia', 'Moabe'], a: 1, ref: 'Êx 2:15' }] },

  { id: 'ex-02', livro: 'ex', caps: [3, 4], titulo: 'A sarça ardente',
    cenario: 'O monte de Deus, Horebe, no deserto.',
    contexto: 'Moisés pastoreia o rebanho do sogro quando vê uma sarça que queima sem se consumir. Deus o chama para tirar Israel do Egito. Moisés levanta objeções, e Deus responde a cada uma.',
    notas: [
      ['3:2', 'A sarça arde no fogo, mas não se consome.'],
      ['3:5', 'Moisés deve tirar as sandálias: o lugar onde está é terra santa.'],
      ['3:7-8', 'Deus viu a aflição, ouviu o clamor, conhece o sofrimento e desceu para libertar.'],
      ['3:14', 'Deus revela seu nome: EU SOU O QUE SOU.'],
      ['4:2-4', 'O cajado de Moisés vira serpente e volta a ser cajado.'],
      ['4:14-16', 'Arão, irmão de Moisés, falará por ele ao povo.'],
    ],
    personagens: ['arao'], marco: 'chamado-moises',
    pergunta: 'Moisés deu desculpas para não ir. Em que área você tem dito a Deus "manda outro"?',
    quiz: [
      { q: 'O que Deus disse a Moisés para fazer diante da sarça?', op: ['Fugir', 'Tirar as sandálias', 'Apagar o fogo', 'Chamar Arão'], a: 1, ref: 'Êx 3:5' },
      { q: 'Quem Deus disse que falaria por Moisés?', op: ['Josué', 'Jetro', 'Arão', 'Miriã'], a: 2, ref: 'Êx 4:14-16' }] },

  { id: 'ex-03', livro: 'ex', caps: [5, 7], titulo: 'Deixe o meu povo ir',
    cenario: 'O palácio de Faraó.',
    contexto: 'Moisés e Arão pedem a Faraó que deixe o povo ir. Faraó recusa e aumenta o trabalho dos escravos. Deus renova sua promessa, e começa a primeira praga: as águas viram sangue.',
    notas: [
      ['5:2', 'Faraó: quem é o Senhor, para que eu o obedeça? Não conheço o Senhor.'],
      ['5:7-9', 'Os escravos passam a buscar a própria palha e manter a mesma produção de tijolos.'],
      ['6:6-7', 'Deus promete: vou tirar vocês, livrar, resgatar, tomar como meu povo e ser o seu Deus.'],
      ['7:7', 'Moisés tinha 80 anos e Arão, 83, quando falaram com Faraó.'],
      ['7:19-20', 'Por ordem de Deus, a vara é estendida sobre as águas e o rio vira sangue diante de Faraó.'],
    ],
    personagens: ['farao-exodo'],
    pergunta: 'Depois do primeiro passo de obediência as coisas pioraram para o povo. Como você reage quando obedecer custa caro?',
    quiz: [
      { q: 'Quantos anos tinha Moisés quando falou com Faraó?', op: ['40', '60', '80', '120'], a: 2, ref: 'Êx 7:7' },
      { q: 'Qual foi a primeira praga?', op: ['Rãs', 'Água em sangue', 'Gafanhotos', 'Trevas'], a: 1, ref: 'Êx 7:20' }] },

  { id: 'ex-04', livro: 'ex', caps: [8, 10], titulo: 'As pragas',
    cenario: 'O Egito sob as pragas.',
    contexto: 'Seguem as pragas: rãs, piolhos, moscas, peste nos animais, úlceras, granizo, gafanhotos e trevas. Faraó promete deixar o povo ir e volta atrás várias vezes.',
    notas: [
      ['8:19', 'Os magos do Egito reconhecem: isto é o dedo de Deus.'],
      ['8:22-23', 'Deus separa a terra de Gósen, onde Israel vive: lá não há moscas.'],
      ['9:16', 'Deus diz que Faraó foi mantido para mostrar o seu poder e para o seu nome ser anunciado em toda a terra.'],
      ['9:34-35', 'Quando a chuva e o granizo cessam, Faraó endurece o coração de novo.'],
      ['10:23', 'Três dias de trevas no Egito; nas casas dos israelitas havia luz.'],
    ],
    personagens: [],
    pergunta: 'Faraó prometia mudar quando a dor apertava e esquecia quando ela passava. Isso já aconteceu com você?',
    quiz: [
      { q: 'O que os magos disseram na praga dos piolhos?', op: ['Que eles também conseguiam fazer', 'Que era o dedo de Deus', 'Que Moisés era um mago', 'Que a praga ia passar sozinha'], a: 1, ref: 'Êx 8:19' },
      { q: 'Durante as trevas, como estavam as casas dos israelitas?', op: ['Também no escuro', 'Com luz', 'Vazias', 'Cheias de gafanhotos'], a: 1, ref: 'Êx 10:23' }] },

  { id: 'ex-05', livro: 'ex', caps: [11, 13], titulo: 'A Páscoa e a saída',
    cenario: 'A última noite no Egito.',
    contexto: 'Deus anuncia a última praga: a morte dos primogênitos. Cada família de Israel sacrifica um cordeiro, passa o sangue nos batentes da porta e come a refeição pronta para partir. Naquela noite, Israel sai do Egito.',
    notas: [
      ['12:5', 'O cordeiro: sem defeito, macho, de um ano.'],
      ['12:13', 'O sangue é sinal: vendo o sangue, o Senhor passa por cima daquela casa.'],
      ['12:14', 'Aquele dia seria memorial, celebrado como festa por todas as gerações.'],
      ['12:40-41', 'Israel viveu 430 anos no Egito; no fim desses anos, no mesmo dia, saiu.'],
      ['13:21-22', 'O Senhor ia à frente do povo: de dia numa coluna de nuvem, de noite numa coluna de fogo.'],
    ],
    personagens: [], marco: 'pascoa',
    pergunta: 'A Páscoa era para ser lembrada todo ano. O que Deus já fez por você que merece ser lembrado sempre?',
    quiz: [
      { q: 'Onde as famílias deviam passar o sangue do cordeiro?', op: ['No rosto', 'Nos batentes da porta', 'No altar', 'Nas roupas'], a: 1, ref: 'Êx 12:7,13' },
      { q: 'Quantos anos Israel viveu no Egito?', op: ['40', '210', '400', '430'], a: 3, ref: 'Êx 12:40' }] },

  { id: 'ex-06', livro: 'ex', caps: [14, 15], titulo: 'O mar se abre',
    cenario: 'A margem do mar, com o exército egípcio atrás.',
    contexto: 'Faraó se arrepende e persegue Israel. Encurralado entre o exército e o mar, o povo se desespera. Moisés estende a mão, o mar se abre e Israel passa a pé enxuto. Do outro lado, o povo canta.',
    notas: [
      ['14:13-14', 'Moisés: não tenham medo; fiquem firmes e vejam o livramento. O Senhor lutará por vocês.'],
      ['14:16', 'Deus manda Moisés levantar a vara e estender a mão sobre o mar.'],
      ['14:21-22', 'Um vento oriental forte sopra a noite toda; as águas se dividem e Israel passa em terra seca.'],
      ['14:31', 'O povo teme o Senhor e crê nele e em Moisés, seu servo.'],
      ['15:20-21', 'Miriã, a profetisa, irmã de Arão, pega o tamborim e as mulheres a seguem com danças.'],
    ],
    personagens: ['miria'], marco: 'mar',
    pergunta: '"O Senhor lutará por vocês; fiquem tranquilos." Que situação você precisa entregar assim hoje?',
    quiz: [
      { q: 'O que dividiu as águas do mar durante a noite?', op: ['Um terremoto', 'Um vento oriental forte', 'O fogo da coluna', 'Os anjos'], a: 1, ref: 'Êx 14:21' },
      { q: 'Quem pegou o tamborim e liderou as mulheres?', op: ['Zípora', 'Joquebede', 'Miriã', 'A filha de Faraó'], a: 2, ref: 'Êx 15:20' }] },

  { id: 'ex-07', livro: 'ex', caps: [16, 18], titulo: 'Maná, água e conselho',
    cenario: 'O deserto entre o mar e o Sinai.',
    contexto: 'No deserto o povo reclama de fome e de sede. Deus manda o maná todas as manhãs e água da rocha. Israel vence Amaleque enquanto Moisés mantém as mãos levantadas, e Jetro aconselha Moisés a dividir o trabalho.',
    notas: [
      ['16:4', 'Deus manda pão do céu; cada um junta a porção de cada dia.'],
      ['16:31', 'O povo chama o pão de maná: parecia semente de coentro, branco, com gosto de bolo com mel.'],
      ['17:6', 'Moisés fere a rocha em Horebe e sai água para o povo beber.'],
      ['17:11-12', 'Enquanto Moisés mantinha as mãos erguidas, Israel vencia; Arão e Hur sustentaram as mãos dele.'],
      ['18:17-18', 'Jetro: o que você está fazendo não é bom; vai se esgotar. Moisés escolhe homens capazes para ajudar a julgar.'],
    ],
    personagens: ['jetro', 'josue'],
    pergunta: 'Moisés precisou de Arão e Hur para sustentar suas mãos. Quem sustenta você? E quem você pode sustentar?',
    quiz: [
      { q: 'Com que o maná parecia, segundo o texto?', op: ['Pedras', 'Semente de coentro, com gosto de bolo com mel', 'Folhas de oliveira', 'Pão de cevada'], a: 1, ref: 'Êx 16:31' },
      { q: 'Quem sustentou as mãos de Moisés?', op: ['Josué e Calebe', 'Arão e Hur', 'Jetro e Arão', 'Nadabe e Abiú'], a: 1, ref: 'Êx 17:12' }] },

  { id: 'ex-08', livro: 'ex', caps: [19, 20], titulo: 'Os Dez Mandamentos',
    cenario: 'O deserto do Sinai, ao pé do monte.',
    contexto: 'No terceiro mês depois da saída do Egito, o povo chega ao Sinai. Deus desce ao monte com trovões, fogo e som de trombeta e fala os Dez Mandamentos.',
    notas: [
      ['19:4-6', 'Deus os carregou como sobre asas de águia; se obedecerem, serão propriedade dele, reino de sacerdotes e nação santa.'],
      ['19:18', 'O monte fumega, porque o Senhor desceu sobre ele em fogo.'],
      ['20:2-3', 'Os mandamentos começam com quem Deus é: o Senhor que os tirou da escravidão. Não terão outros deuses.'],
      ['20:8', 'Lembrar-se do dia de sábado, para santificá-lo.'],
      ['20:12', 'Honrar pai e mãe.'],
      ['20:20', 'Moisés: não temam; Deus veio para prová-los e para que o temor dele os guarde de pecar.'],
    ],
    personagens: [], marco: 'sinai',
    pergunta: 'Os mandamentos começam com o que Deus já fez ("eu te tirei do Egito"). Por que isso muda o jeito de obedecer?',
    quiz: [
      { q: 'Em que mês depois da saída do Egito o povo chegou ao Sinai?', op: ['No primeiro', 'No terceiro', 'No sétimo', 'No décimo segundo'], a: 1, ref: 'Êx 19:1' },
      { q: 'Qual mandamento fala de pai e mãe?', op: ['Não matarás', 'Honra teu pai e tua mãe', 'Não furtarás', 'Lembra-te do sábado'], a: 1, ref: 'Êx 20:12' }] },

  { id: 'ex-09', livro: 'ex', caps: [21, 24], titulo: 'A aliança confirmada',
    cenario: 'Ao pé do Sinai.',
    contexto: 'Deus dá leis para a vida do povo: servos, danos, justiça, cuidado com o pobre e o estrangeiro, festas. O povo promete obedecer e a aliança é confirmada com sangue. Moisés sobe ao monte e fica lá 40 dias.',
    notas: [
      ['22:21', 'Não maltratar o estrangeiro: vocês foram estrangeiros no Egito.'],
      ['23:4-5', 'Se encontrar o boi ou o jumento perdido do seu inimigo, devolva; ajude até o animal de quem te odeia.'],
      ['24:3', 'O povo responde a uma só voz: faremos tudo o que o Senhor falou.'],
      ['24:4', 'Moisés escreve todas as palavras do Senhor.'],
      ['24:18', 'Moisés fica no monte 40 dias e 40 noites.'],
    ],
    personagens: [],
    pergunta: 'A lei mandava ajudar até o animal do inimigo. Quem é difícil para você ajudar? O que seria "devolver o jumento" hoje?',
    quiz: [
      { q: 'Por que Israel não devia maltratar o estrangeiro?', op: ['Porque eram poucos', 'Porque eles também foram estrangeiros no Egito', 'Porque Faraó mandou', 'Porque o estrangeiro era rico'], a: 1, ref: 'Êx 22:21' },
      { q: 'Quanto tempo Moisés ficou no monte?', op: ['7 dias', '12 dias', '40 dias e 40 noites', '1 ano'], a: 2, ref: 'Êx 24:18' }] },

  { id: 'ex-10', livro: 'ex', caps: [25, 31], titulo: 'O modelo do tabernáculo',
    cenario: 'No alto do Sinai, Deus mostra o modelo a Moisés.',
    contexto: 'Deus dá as instruções para o tabernáculo, a tenda onde ele habitaria no meio do povo: a arca, a mesa, o candelabro, o altar, as roupas e a consagração dos sacerdotes. Bezalel recebe sabedoria para fazer a obra.',
    notas: [
      ['25:8', 'Façam um santuário, para que eu habite no meio deles.'],
      ['25:9', 'Tudo deveria ser feito segundo o modelo que Deus mostrou.'],
      ['25:22', 'Sobre a tampa da arca, entre os querubins, Deus se encontraria com Moisés.'],
      ['28:1', 'Arão e seus filhos são separados para o sacerdócio.'],
      ['31:2-3', 'Bezalel é chamado pelo nome e cheio do Espírito de Deus, de sabedoria e habilidade para os trabalhos.'],
      ['31:18', 'Deus entrega a Moisés as duas tábuas do testemunho, escritas pelo dedo de Deus.'],
    ],
    personagens: ['bezalel'],
    pergunta: 'Bezalel foi cheio do Espírito para fazer arte e trabalho manual. Que habilidade sua pode ser usada para Deus?',
    quiz: [
      { q: 'Para que serviria o santuário?', op: ['Para guardar o ouro', 'Para Deus habitar no meio do povo', 'Para os reis morarem', 'Para guardar o maná'], a: 1, ref: 'Êx 25:8' },
      { q: 'Quem foi cheio do Espírito para fazer os trabalhos do tabernáculo?', op: ['Arão', 'Josué', 'Bezalel', 'Jetro'], a: 2, ref: 'Êx 31:2-3' }] },

  { id: 'ex-11', livro: 'ex', caps: [32, 34], titulo: 'O bezerro de ouro',
    cenario: 'O acampamento ao pé do monte, enquanto Moisés está no alto.',
    contexto: 'Cansado de esperar Moisés, o povo pede a Arão um deus e faz um bezerro de ouro. Moisés intercede pelo povo, quebra as tábuas e pede para ver a glória de Deus. Deus renova a aliança, e o rosto de Moisés passa a brilhar.',
    notas: [
      ['32:1', 'O povo vê que Moisés demora e pede a Arão deuses que fossem à frente deles.'],
      ['32:11-14', 'Moisés intercede, lembrando a Deus a promessa a Abraão, Isaque e Israel.'],
      ['32:19', 'Ao ver o bezerro e as danças, Moisés quebra as tábuas ao pé do monte.'],
      ['33:11', 'O Senhor falava com Moisés face a face, como quem fala com um amigo.'],
      ['34:6-7', 'Deus proclama quem ele é: compassivo, misericordioso, lento para irar-se, cheio de amor e fidelidade.'],
      ['34:29', 'Moisés desce com as novas tábuas sem saber que o seu rosto resplandecia.'],
    ],
    personagens: [], marco: 'bezerro',
    pergunta: 'O povo não aguentou esperar e fez um deus que pudesse ver. O que você costuma colocar no lugar de Deus quando a espera aperta?',
    quiz: [
      { q: 'Por que o povo pediu um deus a Arão?', op: ['Porque estava com fome', 'Porque Moisés demorava a descer', 'Porque Faraó os perseguia', 'Porque o maná acabou'], a: 1, ref: 'Êx 32:1' },
      { q: 'O que aconteceu com o rosto de Moisés quando desceu do monte?', op: ['Ficou triste', 'Resplandecia', 'Ficou ferido', 'Ficou coberto de cinza'], a: 1, ref: 'Êx 34:29' }] },

  { id: 'ex-12', livro: 'ex', caps: [35, 40], titulo: 'A glória enche o tabernáculo',
    cenario: 'O acampamento no Sinai.',
    contexto: 'O povo traz ofertas com o coração disposto, tanto que é preciso mandar parar. Bezalel e os artesãos fazem tudo conforme Deus ordenou. O tabernáculo é erguido, e a glória do Senhor o enche.',
    notas: [
      ['35:21', 'Trazem ofertas todos aqueles cujo coração os moveu.'],
      ['36:5-7', 'O povo traz mais do que o necessário, e Moisés manda parar as ofertas.'],
      ['39:43', 'Moisés vê que tudo foi feito como o Senhor ordenou e abençoa o povo.'],
      ['40:17', 'O tabernáculo é erguido no primeiro dia do primeiro mês do segundo ano.'],
      ['40:34', 'A nuvem cobre a tenda e a glória do Senhor enche o tabernáculo.'],
      ['40:36-38', 'Quando a nuvem se levantava, o povo partia; quando ficava, eles ficavam.'],
    ],
    personagens: [], marco: 'tabernaculo',
    pergunta: 'O povo deu tanto que precisou ser parado. O que move você a dar: obrigação ou coração disposto?',
    quiz: [
      { q: 'Por que Moisés mandou o povo parar de trazer ofertas?', op: ['Porque estavam trazendo coisas erradas', 'Porque havia mais do que o necessário', 'Porque Deus estava irado', 'Porque o ouro acabou'], a: 1, ref: 'Êx 36:5-7' },
      { q: 'O que enchia o tabernáculo depois de erguido?', op: ['Fumaça de incenso', 'A glória do Senhor', 'Água', 'O maná'], a: 1, ref: 'Êx 40:34' }] },

  // ───────────── LEVÍTICO ─────────────
  { id: 'lv-01', livro: 'lv', caps: [1, 7], titulo: 'As ofertas',
    cenario: 'O tabernáculo recém-erguido, no Sinai.',
    contexto: 'Do tabernáculo, Deus ensina a Moisés como o povo deve se aproximar dele: holocaustos, ofertas de cereais, ofertas de paz, ofertas pelo pecado e pela culpa. São capítulos de instruções; leia buscando a ideia central: o pecado custa uma vida, e Deus providencia um caminho de volta.',
    notas: [
      ['1:1', 'Deus chama Moisés e fala com ele da tenda do encontro.'],
      ['1:4', 'Quem oferece põe a mão sobre a cabeça do animal, e ele é aceito em seu favor, para fazer expiação.'],
      ['2:13', 'Toda oferta de cereal levava sal: o sal da aliança de Deus.'],
      ['5:5', 'Quem pecou deve confessar o pecado que cometeu.'],
      ['6:13', 'O fogo do altar deve arder sempre; não pode se apagar.'],
    ],
    personagens: [],
    pergunta: 'Na oferta, a pessoa punha a mão sobre o animal: alguém tomava o lugar dela. O que isso mostra sobre o perdão?',
    quiz: [
      { q: 'O que acontecia com o fogo do altar?', op: ['Era aceso só no sábado', 'Devia arder sempre, sem se apagar', 'Era apagado à noite', 'Só Moisés podia acender'], a: 1, ref: 'Lv 6:13' }] },

  { id: 'lv-02', livro: 'lv', caps: [8, 10], titulo: 'Os sacerdotes',
    cenario: 'A entrada da tenda do encontro.',
    contexto: 'Moisés consagra Arão e seus filhos como sacerdotes, durante sete dias. No oitavo dia, a glória do Senhor aparece e um fogo vindo de Deus consome a oferta. Logo depois, Nadabe e Abiú oferecem um fogo que Deus não tinha ordenado.',
    notas: [
      ['8:12', 'Moisés derrama o azeite da unção sobre a cabeça de Arão.'],
      ['8:33', 'A consagração dura sete dias, sem sair da entrada da tenda.'],
      ['9:23-24', 'A glória do Senhor aparece; sai fogo de diante dele e consome o holocausto. O povo louva e se prostra.'],
      ['10:1-2', 'Nadabe e Abiú oferecem fogo estranho, que Deus não ordenou, e morrem diante do Senhor.'],
      ['10:10', 'Os sacerdotes devem distinguir o santo do comum, o impuro do puro.'],
    ],
    personagens: ['nadabe', 'eleazar'], marco: 'sacerdotes',
    pergunta: 'Nadabe e Abiú fizeram do jeito deles, não do jeito que Deus pediu. Onde você adora "do seu jeito"?',
    quiz: [
      { q: 'O que aconteceu no oitavo dia da consagração?', op: ['Choveu maná', 'Saiu fogo de diante do Senhor e consumiu a oferta', 'Moisés subiu ao monte', 'O povo partiu do Sinai'], a: 1, ref: 'Lv 9:24' },
      { q: 'Qual foi o erro de Nadabe e Abiú?', op: ['Não foram ao tabernáculo', 'Ofereceram fogo que Deus não tinha ordenado', 'Fizeram um bezerro de ouro', 'Comeram o maná do dia seguinte'], a: 1, ref: 'Lv 10:1' }] },

  { id: 'lv-03', livro: 'lv', caps: [11, 15], titulo: 'Puro e impuro',
    cenario: 'O acampamento de Israel.',
    contexto: 'Leis sobre animais que se podem comer, parto, doenças de pele, mofo nas casas e fluxos do corpo. O texto não explica cada regra; repete o motivo: Deus é santo, e o povo que vive perto dele deve ser santo também.',
    notas: [
      ['11:44-45', 'Sejam santos, porque eu sou santo. Eu sou o Senhor que os tirou do Egito para ser o seu Deus.'],
      ['13:45-46', 'Quem tinha doença de pele contagiosa vivia fora do acampamento.'],
      ['14:2-4', 'Havia um ritual para a pessoa curada voltar ao convívio: o sacerdote a examinava fora do acampamento.'],
      ['15:31', 'As regras de pureza protegiam o povo de contaminar o tabernáculo, onde Deus habitava no meio deles.'],
    ],
    personagens: [],
    pergunta: 'Santidade não era só para o culto: chegava à mesa, à casa e ao corpo. Que área da sua rotina você separa de Deus?',
    quiz: [
      { q: 'Qual o motivo que Deus repete para as leis de pureza?', op: ['Saúde do povo', 'Sejam santos, porque eu sou santo', 'Para separar os ricos dos pobres', 'Para agradar os egípcios'], a: 1, ref: 'Lv 11:44-45' }] },

  { id: 'lv-04', livro: 'lv', caps: [16, 20], titulo: 'Expiação e amor ao próximo',
    cenario: 'O tabernáculo e a vida diária do povo.',
    contexto: 'Uma vez por ano, no Dia da Expiação, o sumo sacerdote entra no Lugar Santíssimo e os pecados do povo são levados por um bode para o deserto. Em seguida vêm leis de santidade para o dia a dia, incluindo o mandamento de amar o próximo.',
    notas: [
      ['16:21-22', 'Arão confessa os pecados do povo sobre o bode vivo, que é levado ao deserto carregando-os.'],
      ['16:29-30', 'No dia 10 do sétimo mês, expiação por todo o povo, para purificá-los de todos os pecados.'],
      ['17:11', 'A vida da carne está no sangue; Deus o deu sobre o altar para fazer expiação.'],
      ['19:9-10', 'Não colher até os cantos da lavoura nem recolher o que caiu: deixe para o pobre e o estrangeiro.'],
      ['19:18', 'Não se vingue nem guarde rancor; ame o seu próximo como a si mesmo.'],
      ['19:34', 'O estrangeiro deve ser amado como a si mesmo, porque vocês foram estrangeiros no Egito.'],
    ],
    personagens: [], marco: 'expiacao',
    pergunta: '"Amar o próximo como a si mesmo" está no meio de leis bem práticas, como deixar os cantos da lavoura. Que "canto" seu pode ficar para alguém?',
    quiz: [
      { q: 'Onde está o mandamento "ame o seu próximo como a si mesmo"?', op: ['Êxodo 20', 'Levítico 19:18', 'Números 6', 'Gênesis 1'], a: 1, ref: 'Lv 19:18' },
      { q: 'O que o bode vivo levava para o deserto?', op: ['Comida para o povo', 'Os pecados do povo, confessados sobre ele', 'As tábuas da Lei', 'O maná'], a: 1, ref: 'Lv 16:21-22' }] },

  { id: 'lv-05', livro: 'lv', caps: [21, 27], titulo: 'As festas e o jubileu',
    cenario: 'O calendário de Israel.',
    contexto: 'Deus estabelece as festas do ano: sábado, Páscoa, Pães sem Fermento, Primícias, Pentecostes, Trombetas, Dia da Expiação e Tabernáculos. Depois vêm o ano sabático e o jubileu, as bênçãos da obediência e as consequências da desobediência.',
    notas: [
      ['23:4', 'As festas são encontros santos marcados pelo Senhor, em datas definidas.'],
      ['23:42-43', 'Na Festa dos Tabernáculos o povo morava em tendas, para lembrar que Deus os fez morar em tendas ao sair do Egito.'],
      ['25:4', 'No sétimo ano a terra descansava.'],
      ['25:10', 'No 50º ano, o jubileu: liberdade na terra; cada um volta à sua propriedade e à sua família.'],
      ['26:12', 'Andarei no meio de vocês; serei o seu Deus e vocês serão o meu povo.'],
    ],
    personagens: [],
    pergunta: 'O calendário de Israel girava em torno de lembrar o que Deus fez. Como o seu calendário mostra o que é importante para você?',
    quiz: [
      { q: 'O que acontecia no ano do jubileu?', op: ['Uma guerra', 'Liberdade na terra e volta à propriedade da família', 'A construção do templo', 'Um novo recenseamento'], a: 1, ref: 'Lv 25:10' },
      { q: 'Por que o povo morava em tendas na Festa dos Tabernáculos?', op: ['Para lembrar a vida em tendas depois da saída do Egito', 'Porque não havia casas', 'Para receber estrangeiros', 'Por causa da chuva'], a: 0, ref: 'Lv 23:42-43' }] },

  // ───────────── NÚMEROS ─────────────
  { id: 'nm-01', livro: 'nm', caps: [1, 4], titulo: 'O povo contado',
    cenario: 'O deserto do Sinai, no segundo ano depois da saída.',
    contexto: 'Deus manda contar os homens de 20 anos para cima, prontos para a guerra, tribo por tribo, e organiza o acampamento em volta do tabernáculo. Os levitas não entram nessa contagem: são separados para cuidar do tabernáculo.',
    notas: [
      ['1:1-3', 'No primeiro dia do segundo mês do segundo ano, Deus manda contar os homens de 20 anos para cima.'],
      ['1:46', 'O total dos contados: 603.550.'],
      ['2:2', 'Cada tribo acampa junto à sua bandeira, ao redor do tabernáculo.'],
      ['3:12', 'Deus toma os levitas no lugar dos primogênitos de Israel.'],
    ],
    personagens: [],
    pergunta: 'Deus estava no centro do acampamento, e cada tribo tinha o seu lugar ao redor. O que está no centro da sua vida?',
    quiz: [
      { q: 'O que ficava no centro do acampamento?', op: ['A tenda de Moisés', 'O tabernáculo', 'Um poço', 'A tribo de Judá'], a: 1, ref: 'Nm 2:2' }] },

  { id: 'nm-02', livro: 'nm', caps: [5, 10], titulo: 'A bênção e a partida',
    cenario: 'O Sinai, pouco antes da partida.',
    contexto: 'Leis sobre pureza no acampamento, o voto de nazireu e a bênção que os sacerdotes deviam dizer sobre o povo. As tribos trazem ofertas, a Páscoa é celebrada e, quando a nuvem se levanta, Israel parte do Sinai.',
    notas: [
      ['6:2-5', 'O voto de nazireu: não beber vinho, não cortar o cabelo, viver separado para o Senhor.'],
      ['6:24-26', 'A bênção: o Senhor te abençoe e te guarde; faça resplandecer o rosto sobre ti; te dê a paz.'],
      ['9:15-17', 'A nuvem cobre o tabernáculo; quando ela se levanta, o povo parte; onde para, o povo acampa.'],
      ['10:2', 'Duas trombetas de prata batida servem para reunir o povo e dar o sinal de partida.'],
      ['10:11', 'No dia 20 do segundo mês do segundo ano, a nuvem se levanta e Israel parte.'],
    ],
    personagens: [], marco: 'partida-sinai',
    pergunta: 'O povo só andava quando a nuvem andava. Como você costuma esperar a direção de Deus antes de se mover?',
    quiz: [
      { q: 'Quem devia dizer a bênção "O Senhor te abençoe e te guarde"?', op: ['Os reis', 'Arão e seus filhos, os sacerdotes', 'Os profetas', 'Os pais de família'], a: 1, ref: 'Nm 6:23-26' },
      { q: 'Para que serviam as duas trombetas de prata?', op: ['Para as festas de casamento', 'Para reunir o povo e dar o sinal de partida', 'Para anunciar a chuva', 'Para chamar os animais'], a: 1, ref: 'Nm 10:2' }] },

  { id: 'nm-03', livro: 'nm', caps: [11, 12], titulo: 'Queixas no deserto',
    cenario: 'O caminho do Sinai em direção a Canaã.',
    contexto: 'O povo reclama do maná e chora com saudade da comida do Egito. Moisés, sobrecarregado, recebe 70 anciãos para dividir o peso. Depois, Miriã e Arão falam contra Moisés, e Deus defende o seu servo.',
    notas: [
      ['11:4-6', 'Saudade do Egito: lembramos do peixe, dos pepinos, dos melões… agora só vemos maná.'],
      ['11:16-17', 'Deus põe do seu Espírito sobre 70 anciãos, para levarem o peso do povo com Moisés.'],
      ['11:23', 'Deus a Moisés: será que a mão do Senhor ficou curta?'],
      ['12:3', 'Moisés era o homem mais manso da terra.'],
      ['12:10,13', 'Miriã fica leprosa; Moisés clama: ó Deus, cura-a.'],
    ],
    personagens: [],
    pergunta: 'O povo tinha saudade da comida do Egito e esquecia a escravidão. Do que você sente "saudade" que na verdade te prendia?',
    quiz: [
      { q: 'Do que o povo tinha saudade no Egito?', op: ['Das pirâmides', 'Da comida: peixe, pepinos, melões', 'Dos templos', 'Do rio Nilo'], a: 1, ref: 'Nm 11:5' },
      { q: 'Como o texto descreve Moisés em Nm 12:3?', op: ['O mais forte', 'O mais manso da terra', 'O mais rico', 'O mais velho'], a: 1, ref: 'Nm 12:3' }] },

  { id: 'nm-04', livro: 'nm', caps: [13, 14], titulo: 'Os doze espias',
    cenario: 'Cades, na fronteira da terra prometida.',
    contexto: 'Doze homens espionam Canaã por 40 dias. Todos confirmam que a terra é boa, mas dez dizem que é impossível conquistá-la. Só Calebe e Josué confiam em Deus. O povo se rebela, e Deus decide que aquela geração vagará 40 anos no deserto.',
    notas: [
      ['13:23', 'Trazem um cacho de uvas tão grande que dois homens o carregam numa vara.'],
      ['13:27-28', 'A terra mana leite e mel, mas o povo é forte e as cidades são fortificadas.'],
      ['13:30', 'Calebe: vamos subir e tomar posse; certamente venceremos.'],
      ['14:8-9', 'Josué e Calebe: se o Senhor se agradar de nós, nos levará; não temam, o Senhor está conosco.'],
      ['14:24', 'Calebe tinha outro espírito e seguiu o Senhor de todo o coração.'],
      ['14:33-34', 'Um ano para cada dia de espionagem: 40 anos no deserto.'],
    ],
    personagens: ['calebe'], marco: 'espias',
    pergunta: 'Os doze viram a mesma terra; dez viram gigantes, dois viram Deus. O que você tem olhado mais: o tamanho do problema ou o tamanho de Deus?',
    quiz: [
      { q: 'Quais espias confiaram em Deus?', op: ['Arão e Hur', 'Calebe e Josué', 'Nadabe e Abiú', 'Corá e Datã'], a: 1, ref: 'Nm 14:6-9' },
      { q: 'Por quanto tempo o povo vagaria no deserto?', op: ['7 anos', '12 anos', '40 anos', '70 anos'], a: 2, ref: 'Nm 14:33-34' }] },

  { id: 'nm-05', livro: 'nm', caps: [15, 19], titulo: 'Corá e a vara que floresceu',
    cenario: 'O acampamento no deserto.',
    contexto: 'Corá e outros líderes se revoltam contra Moisés e Arão. A terra se abre e os engole. Para encerrar as queixas sobre quem Deus escolheu, a vara de Arão floresce durante a noite.',
    notas: [
      ['15:38-39', 'Franjas nas roupas, para lembrar os mandamentos ao olhar para elas.'],
      ['16:3', 'Corá e seu grupo: todos são santos; por que vocês se colocam acima da congregação?'],
      ['16:31-32', 'A terra se abre e engole os revoltosos com suas casas.'],
      ['17:8', 'A vara de Arão brota, floresce e produz amêndoas em uma noite.'],
      ['18:20', 'Arão não teria herança na terra: o próprio Senhor seria a sua parte e a sua herança.'],
    ],
    personagens: ['core'],
    pergunta: 'Corá queria o lugar de outro. Onde a comparação com alguém tem gerado inveja em você?',
    quiz: [
      { q: 'O que brotou da vara de Arão?', op: ['Uvas', 'Flores e amêndoas', 'Figos', 'Espinhos'], a: 1, ref: 'Nm 17:8' }] },

  { id: 'nm-06', livro: 'nm', caps: [20, 25], titulo: 'A rocha, a serpente e Balaão',
    cenario: 'De Cades até as planícies de Moabe.',
    contexto: 'Miriã morre. Moisés fere a rocha em vez de falar com ela, e por isso não entrará na terra. Arão morre no monte Hor. Mordidos por serpentes, os que olham para a serpente de bronze vivem. O rei de Moabe contrata Balaão para amaldiçoar Israel, mas ele só consegue abençoar.',
    notas: [
      ['20:1', 'Miriã morre e é sepultada em Cades.'],
      ['20:8,11-12', 'Deus mandou falar à rocha; Moisés a fere duas vezes. A água sai, mas Moisés e Arão não entrariam na terra.'],
      ['20:28', 'Arão morre no alto do monte Hor; suas vestes passam para Eleazar.'],
      ['21:8-9', 'Quem fosse mordido e olhasse para a serpente de bronze na haste vivia.'],
      ['22:28', 'Deus abre a boca da jumenta de Balaão.'],
      ['23:19', 'Balaão: Deus não é homem para mentir; o que ele promete, cumpre.'],
    ],
    personagens: ['balaao', 'fineias'],
    pergunta: 'Bastava olhar para a serpente para viver. O que Deus já ofereceu a você que só pede um olhar de fé?',
    quiz: [
      { q: 'O que Deus mandou Moisés fazer com a rocha em Nm 20?', op: ['Ferir com a vara', 'Falar à rocha', 'Quebrar a rocha', 'Ungir a rocha'], a: 1, ref: 'Nm 20:8' },
      { q: 'Quem falou com Balaão no caminho?', op: ['Um profeta', 'A sua jumenta', 'O rei de Moabe', 'Arão'], a: 1, ref: 'Nm 22:28' }] },

  { id: 'nm-07', livro: 'nm', caps: [26, 30], titulo: 'A nova geração',
    cenario: 'As planícies de Moabe, junto ao Jordão.',
    contexto: 'Um novo recenseamento mostra que, da geração que saiu do Egito, só restam Calebe e Josué. As filhas de Zelofeade pedem a herança do pai, e Deus lhes dá razão. Josué é escolhido para suceder Moisés.',
    notas: [
      ['26:64-65', 'Dos contados no Sinai, ninguém restou, a não ser Calebe e Josué.'],
      ['27:1', 'As filhas de Zelofeade: Maalá, Noa, Hogla, Milca e Tirza.'],
      ['27:7', 'Deus: as filhas de Zelofeade têm razão; deem-lhes a herança do pai.'],
      ['27:18', 'Josué, homem em quem há o Espírito, recebe a imposição das mãos de Moisés.'],
      ['30:2', 'Quem faz um voto ao Senhor deve cumprir o que disse.'],
    ],
    personagens: ['filhas-zelofeade'], marco: 'nova-geracao',
    pergunta: 'As filhas de Zelofeade pediram com coragem algo que ninguém tinha pedido, e Deus lhes deu razão. O que você tem deixado de pedir a Deus?',
    quiz: [
      { q: 'Quem restou da geração contada no Sinai?', op: ['Moisés e Arão', 'Calebe e Josué', 'Eleazar e Fineias', 'Ninguém'], a: 1, ref: 'Nm 26:65' },
      { q: 'O que Deus respondeu às filhas de Zelofeade?', op: ['Que deviam esperar', 'Que tinham razão e receberiam a herança', 'Que só os homens herdam', 'Que deviam casar primeiro'], a: 1, ref: 'Nm 27:7' }] },

  { id: 'nm-08', livro: 'nm', caps: [31, 36], titulo: 'A terra dividida',
    cenario: 'As planícies de Moabe, diante de Jericó.',
    contexto: 'Rúben, Gade e metade de Manassés pedem terra do lado leste do Jordão. Moisés registra as etapas da viagem, Deus define as fronteiras de Canaã e manda separar cidades de refúgio.',
    notas: [
      ['32:23', 'Moisés: se não cumprirem o combinado, estarão pecando, e o pecado de vocês os alcançará.'],
      ['33:2', 'Moisés registra por escrito as etapas da viagem, por ordem do Senhor.'],
      ['33:38', 'Arão morre no monte Hor no 40º ano depois da saída do Egito.'],
      ['35:11', 'Cidades de refúgio: para onde fugia quem matasse alguém sem querer.'],
      ['36:13', 'Estas leis foram dadas nas planícies de Moabe, junto ao Jordão, diante de Jericó.'],
    ],
    personagens: [],
    pergunta: 'As cidades de refúgio protegiam quem errou sem querer. Para quem você pode ser "refúgio" hoje?',
    quiz: [
      { q: 'Para que serviam as cidades de refúgio?', op: ['Para os reis', 'Para quem matasse alguém sem querer', 'Para guardar o tesouro', 'Para os sacerdotes descansarem'], a: 1, ref: 'Nm 35:11' }] },

  // ───────────── DEUTERONÔMIO ─────────────
  { id: 'dt-01', livro: 'dt', caps: [1, 4], titulo: 'Lembrar o caminho',
    cenario: 'As planícies de Moabe, no 40º ano.',
    contexto: 'Diante da nova geração, Moisés relembra os 40 anos: o Sinai, a falta de fé em Cades, a caminhada pelo deserto e as primeiras vitórias. Ele insiste: não se esqueçam do que viram, e ensinem aos filhos.',
    notas: [
      ['1:3', 'No 40º ano, no primeiro dia do 11º mês, Moisés fala a Israel tudo o que o Senhor mandou.'],
      ['1:30-31', 'O Senhor lutou por vocês e os carregou no deserto como um pai carrega o filho.'],
      ['2:7', 'Nestes 40 anos o Senhor esteve com vocês, e nada lhes faltou.'],
      ['4:9', 'Cuidado para não esquecer o que seus olhos viram; ensinem aos filhos e aos netos.'],
      ['4:29', 'Se buscarem o Senhor de todo o coração e de toda a alma, o encontrarão.'],
    ],
    personagens: [], marco: 'moabe',
    pergunta: '"Nada lhes faltou" em 40 anos de deserto. Olhando para trás, onde você vê que Deus não deixou faltar?',
    quiz: [
      { q: 'Como Moisés descreve o cuidado de Deus no deserto?', op: ['Como um rei com seus soldados', 'Como um pai que carrega o filho', 'Como um pastor distante', 'Como um juiz severo'], a: 1, ref: 'Dt 1:31' },
      { q: 'O que faltou ao povo nos 40 anos, segundo Dt 2:7?', op: ['Água', 'Comida', 'Nada', 'Roupas'], a: 2, ref: 'Dt 2:7' }] },

  { id: 'dt-02', livro: 'dt', caps: [5, 7], titulo: 'Ouça, Israel',
    cenario: 'Moabe; Moisés repete a aliança.',
    contexto: 'Moisés repete os Dez Mandamentos para a nova geração e resume tudo numa frase que os judeus recitam até hoje: o Senhor é um só; ame-o de todo o coração. Deus escolheu Israel não por ser grande, mas por amor.',
    notas: [
      ['5:6-7', 'Os mandamentos de novo, começando por quem Deus é: o que os tirou da escravidão.'],
      ['6:4-5', 'Ouça, Israel: o Senhor nosso Deus é o único Senhor. Ame-o de todo o coração, alma e força.'],
      ['6:6-7', 'Estas palavras no coração; ensinadas aos filhos em casa, no caminho, ao deitar e ao levantar.'],
      ['7:7-8', 'Deus não os escolheu por serem muitos — eram o menor dos povos —, mas porque os amou.'],
    ],
    personagens: [],
    pergunta: 'A fé era ensinada "em casa, no caminho, ao deitar e ao levantar". Em que momento comum do seu dia a Palavra pode entrar?',
    quiz: [
      { q: 'Onde as palavras de Deus deviam ser ensinadas aos filhos?', op: ['Só no tabernáculo', 'Em casa, no caminho, ao deitar e ao levantar', 'Só no sábado', 'Só pelos sacerdotes'], a: 1, ref: 'Dt 6:7' },
      { q: 'Por que Deus escolheu Israel?', op: ['Por ser o maior povo', 'Porque os amou', 'Por serem fortes na guerra', 'Por serem ricos'], a: 1, ref: 'Dt 7:7-8' }] },

  { id: 'dt-03', livro: 'dt', caps: [8, 11], titulo: 'Não se esqueça',
    cenario: 'Moabe, olhando para a terra prometida.',
    contexto: 'Moisés avisa: o perigo do deserto era a fome; o perigo da terra boa será esquecer de Deus na fartura. Ele lembra o bezerro de ouro e resume o que Deus pede: temer, andar nos seus caminhos, amar e servir.',
    notas: [
      ['8:2-3', 'O deserto ensinou que o ser humano não vive só de pão, mas de tudo o que sai da boca do Senhor.'],
      ['8:17-18', 'Cuidado para não dizer "minha força me deu esta riqueza": é Deus quem dá a força.'],
      ['10:12', 'O que o Senhor pede: temê-lo, andar nos seus caminhos, amá-lo e servi-lo de todo o coração.'],
      ['10:18-19', 'Deus defende o órfão e a viúva e ama o estrangeiro; amem também o estrangeiro.'],
      ['11:18-19', 'Guardem estas palavras no coração e ensinem aos filhos.'],
    ],
    personagens: [],
    pergunta: 'O maior perigo da fartura é esquecer quem deu. Em que área da sua vida está tudo bem — e Deus está meio esquecido?',
    quiz: [
      { q: 'De que o ser humano vive, segundo Dt 8:3?', op: ['Só de pão', 'De tudo o que sai da boca do Senhor', 'Do seu trabalho', 'Da sua força'], a: 1, ref: 'Dt 8:3' }] },

  { id: 'dt-04', livro: 'dt', caps: [12, 18], titulo: 'A vida na terra',
    cenario: 'Moabe; leis para quando chegarem a Canaã.',
    contexto: 'Leis para a vida na terra: um só lugar escolhido por Deus para os sacrifícios, o dízimo, o cuidado com o pobre, o perdão das dívidas, as três festas anuais, juízes justos, o rei e o profeta.',
    notas: [
      ['12:5', 'Adorar no lugar que o Senhor escolher para pôr ali o seu nome.'],
      ['15:11', 'Sempre haverá pobres na terra; por isso abra a mão para o seu irmão necessitado.'],
      ['16:16', 'Três vezes por ano todos os homens se apresentam ao Senhor, e ninguém vem de mãos vazias.'],
      ['17:18-19', 'O futuro rei deveria copiar esta lei e lê-la todos os dias da sua vida.'],
      ['18:15', 'Deus levantaria um profeta como Moisés, do meio do povo; a ele deviam ouvir.'],
    ],
    personagens: [],
    pergunta: 'Até o rei devia ler a Palavra todos os dias. O que acontece com quem lidera sem se deixar liderar por Deus?',
    quiz: [
      { q: 'O que o rei devia fazer com a lei?', op: ['Guardá-la no palácio', 'Copiá-la e lê-la todos os dias', 'Mudá-la quando quisesse', 'Entregá-la aos sacerdotes e esquecer'], a: 1, ref: 'Dt 17:18-19' }] },

  { id: 'dt-05', livro: 'dt', caps: [19, 26], titulo: 'Justiça e cuidado',
    cenario: 'Moabe; leis do dia a dia.',
    contexto: 'Leis sobre cidades de refúgio, testemunhas, guerra, família, trabalho, empréstimos e colheita. Muitas protegem os mais frágeis: o estrangeiro, o órfão e a viúva. O bloco termina com a oferta das primícias e uma confissão de fé.',
    notas: [
      ['20:1', 'Na guerra, diante de um exército maior, não tenham medo: o Senhor que os tirou do Egito está com vocês.'],
      ['22:8', 'Quem construir casa nova deve fazer um parapeito no terraço, para ninguém cair.'],
      ['24:19', 'O feixe esquecido no campo fica para o estrangeiro, o órfão e a viúva.'],
      ['26:5', 'Ao levar as primícias, o israelita lembrava: meu pai era um arameu errante, desceu ao Egito com poucos e lá se tornou uma nação.'],
    ],
    personagens: [],
    pergunta: 'Até a construção da casa tinha uma lei para proteger o outro. Que "parapeito" você pode colocar para cuidar de quem está perto?',
    quiz: [
      { q: 'Para quem ficava o feixe esquecido no campo?', op: ['Para o dono', 'Para o estrangeiro, o órfão e a viúva', 'Para os sacerdotes', 'Para os animais'], a: 1, ref: 'Dt 24:19' }] },

  { id: 'dt-06', livro: 'dt', caps: [27, 30], titulo: 'Escolha a vida',
    cenario: 'Moabe; a renovação da aliança.',
    contexto: 'Moisés manda escrever a lei em pedras quando entrarem na terra e apresenta as bênçãos da obediência e as maldições da desobediência. A aliança é renovada, e Moisés coloca o povo diante de uma escolha.',
    notas: [
      ['27:2-3', 'Ao atravessar o Jordão, escrever as palavras da lei em pedras grandes caiadas.'],
      ['28:2', 'Todas estas bênçãos virão sobre você se ouvir a voz do Senhor.'],
      ['29:29', 'As coisas encobertas pertencem a Deus; as reveladas são nossas e dos nossos filhos, para as cumprirmos.'],
      ['30:11,14', 'Este mandamento não é difícil nem distante: a palavra está perto, na sua boca e no seu coração.'],
      ['30:19-20', 'Ponho diante de vocês a vida e a morte, a bênção e a maldição. Escolham a vida: amem o Senhor, ouçam a sua voz.'],
    ],
    personagens: [], marco: 'escolha',
    pergunta: '"Escolha a vida." Que escolha concreta pela vida você pode fazer esta semana?',
    quiz: [
      { q: 'O que Moisés pede que o povo escolha?', op: ['A riqueza', 'A vida', 'Um rei', 'Voltar ao Egito'], a: 1, ref: 'Dt 30:19' },
      { q: 'Onde está a palavra, segundo Dt 30:14?', op: ['No céu', 'Do outro lado do mar', 'Na sua boca e no seu coração', 'Só no tabernáculo'], a: 2, ref: 'Dt 30:14' }] },

  { id: 'dt-07', livro: 'dt', caps: [31, 34], titulo: 'A despedida de Moisés',
    cenario: 'O monte Nebo, de frente para Jericó.',
    contexto: 'Moisés passa a liderança a Josué, entrega a lei escrita aos sacerdotes, ensina um cântico ao povo e abençoa as tribos. Do alto do monte Nebo, Deus lhe mostra a terra prometida. Moisés morre aos 120 anos.',
    notas: [
      ['31:6', 'Sejam fortes e corajosos; o Senhor vai com vocês, não os deixará nem os abandonará.'],
      ['31:9', 'Moisés escreve esta lei e a entrega aos sacerdotes e aos anciãos.'],
      ['32:4', 'Ele é a Rocha; suas obras são perfeitas; Deus fiel, justo e reto.'],
      ['33:27', 'O Deus eterno é o seu refúgio, e por baixo estão os braços eternos.'],
      ['34:1,4', 'Do monte Nebo, Deus mostra a Moisés toda a terra prometida.'],
      ['34:7', 'Moisés morre com 120 anos; seus olhos não tinham escurecido nem o vigor diminuído.'],
      ['34:10', 'Nunca mais se levantou em Israel profeta como Moisés, a quem o Senhor conheceu face a face.'],
    ],
    personagens: [], marco: 'morte-moises',
    pergunta: 'Moisés viu a terra mas não entrou, e passou o bastão a Josué. O que você está preparando para deixar a quem vem depois?',
    quiz: [
      { q: 'De qual monte Moisés viu a terra prometida?', op: ['Sinai', 'Hor', 'Nebo', 'Carmelo'], a: 2, ref: 'Dt 34:1' },
      { q: 'Com quantos anos Moisés morreu?', op: ['80', '100', '110', '120'], a: 3, ref: 'Dt 34:7' }] },
];

export const PERSONAGENS = {
  joquebede: { nome: 'Joquebede', quem: 'Mãe de Moisés, Arão e Miriã, da tribo de Levi.', vida: 'Escondeu o filho por três meses e depois o colocou num cesto à beira do Nilo. Foi chamada para amamentá-lo para a filha de Faraó.', refs: 'Êx 2:1-9; 6:20; Nm 26:59' },
  'filha-farao': { nome: 'Filha de Faraó', quem: 'Princesa do Egito; o texto não diz o seu nome.', vida: 'Encontrou o menino no cesto, teve compaixão, adotou-o e deu-lhe o nome de Moisés.', refs: 'Êx 2:5-10' },
  moises: { nome: 'Moisés', quem: 'Hebreu da tribo de Levi, criado no palácio do Egito; profeta e líder de Israel.', vida: 'Foi chamado na sarça ardente, tirou Israel do Egito, recebeu a Lei no Sinai e guiou o povo por 40 anos. Viu a terra prometida do monte Nebo e morreu aos 120 anos.', refs: 'Êx 2:10; 3:10; 19–20; Dt 34:1-10' },
  zipora: { nome: 'Zípora', quem: 'Filha de Jetro, sacerdote de Midiã; esposa de Moisés.', vida: 'Casou-se com Moisés em Midiã e lhe deu dois filhos, Gérson e Eliézer.', refs: 'Êx 2:21-22; 18:2-4' },
  arao: { nome: 'Arão', quem: 'Irmão mais velho de Moisés, da tribo de Levi; o primeiro sumo sacerdote.', vida: 'Falou por Moisés diante de Faraó. Fez o bezerro de ouro quando o povo pediu. Foi consagrado sacerdote, e sua vara floresceu. Morreu no monte Hor aos 123 anos.', refs: 'Êx 4:14-16; 7:7; 32:1-5; Lv 8; Nm 17:8; 33:38-39' },
  'farao-exodo': { nome: 'Faraó do Êxodo', quem: 'O rei do Egito no tempo de Moisés; o texto não diz o seu nome.', vida: 'Recusou deixar Israel ir, endureceu o coração diante das pragas e perseguiu o povo até o mar.', refs: 'Êx 5:2; 7–14' },
  miria: { nome: 'Miriã', quem: 'Irmã de Moisés e Arão; o texto a chama de profetisa.', vida: 'Liderou as mulheres com tamborim e cântico depois da travessia do mar. Falou contra Moisés e ficou leprosa, sendo curada depois de sete dias. Morreu em Cades.', refs: 'Êx 15:20-21; Nm 12:1-15; 20:1' },
  jetro: { nome: 'Jetro', quem: 'Sacerdote de Midiã, sogro de Moisés (também chamado Reuel).', vida: 'Recebeu Moisés quando ele fugiu do Egito. Depois visitou o acampamento e o aconselhou a dividir o trabalho de julgar o povo.', refs: 'Êx 2:16-21; 3:1; 18:1-27' },
  josue: { nome: 'Josué', quem: 'Filho de Num, da tribo de Efraim; auxiliar de Moisés.', vida: 'Comandou a batalha contra Amaleque, acompanhou Moisés ao monte, foi um dos dois espias fiéis e foi escolhido para suceder Moisés.', refs: 'Êx 17:9-13; 24:13; 33:11; Nm 13:8,16; 14:6-9; 27:18-23' },
  bezalel: { nome: 'Bezalel', quem: 'Filho de Uri, da tribo de Judá.', vida: 'Deus o chamou pelo nome e o encheu do seu Espírito, com sabedoria e habilidade para fazer o tabernáculo e seus objetos.', refs: 'Êx 31:1-5; 35:30-35; 37:1' },
  nadabe: { nome: 'Nadabe e Abiú', quem: 'Os dois filhos mais velhos de Arão, sacerdotes.', vida: 'Subiram ao monte com Moisés e os anciãos. Depois ofereceram diante do Senhor um fogo que ele não tinha ordenado e morreram.', refs: 'Êx 24:1,9; Lv 10:1-2' },
  eleazar: { nome: 'Eleazar', quem: 'Filho de Arão, sacerdote.', vida: 'Recebeu as vestes de sumo sacerdote quando Arão morreu e ficou ao lado de Moisés e depois de Josué.', refs: 'Nm 20:25-28; 27:21-22' },
  calebe: { nome: 'Calebe', quem: 'Filho de Jefoné, da tribo de Judá; um dos doze espias.', vida: 'Disse que o povo podia conquistar a terra. Deus disse que ele tinha outro espírito e o seguia de todo o coração, e prometeu-lhe entrar na terra.', refs: 'Nm 13:6,30; 14:24' },
  core: { nome: 'Corá', quem: 'Levita, da família de Coate.', vida: 'Liderou uma revolta contra Moisés e Arão. A terra se abriu e engoliu os revoltosos.', refs: 'Nm 16:1-3,31-33' },
  balaao: { nome: 'Balaão', quem: 'Adivinho contratado por Balaque, rei de Moabe.', vida: 'Foi chamado para amaldiçoar Israel. No caminho, a sua jumenta falou. Diante do povo, só conseguiu proferir bênçãos.', refs: 'Nm 22:5-6,28; 23:7-12; 24:1-9' },
  fineias: { nome: 'Fineias', quem: 'Filho de Eleazar e neto de Arão, sacerdote.', vida: 'Com zelo por Deus, deteve a praga em Baal-Peor. Deus fez com ele uma aliança de paz.', refs: 'Nm 25:7-13' },
  'filhas-zelofeade': { nome: 'Filhas de Zelofeade', quem: 'Maalá, Noa, Hogla, Milca e Tirza, da tribo de Manassés.', vida: 'O pai morreu sem filhos homens. Elas pediram a Moisés a herança do pai, e Deus disse que tinham razão.', refs: 'Nm 27:1-7; 36:10-12' },
};

export const MARCOS = [
  { id: 'escravidao', titulo: 'Israel escravizado no Egito', quando: 'Depois da morte de José; o texto não dá a data (Êx 1:6-8).' },
  { id: 'chamado-moises', titulo: 'O chamado de Moisés na sarça', quando: 'Moisés tinha cerca de 80 anos ao falar com Faraó (Êx 7:7).' },
  { id: 'pascoa', titulo: 'A Páscoa e a saída do Egito', quando: 'Ao fim de 430 anos no Egito (Êx 12:40-41). Estudiosos defendem c. 1446 a.C. ou c. 1260 a.C.' },
  { id: 'mar', titulo: 'A travessia do mar', quando: 'Logo depois da saída do Egito (Êx 14).' },
  { id: 'sinai', titulo: 'A Lei no Sinai', quando: 'No terceiro mês depois da saída (Êx 19:1).' },
  { id: 'bezerro', titulo: 'O bezerro de ouro', quando: 'Enquanto Moisés estava 40 dias no monte (Êx 24:18; 32:1).' },
  { id: 'tabernaculo', titulo: 'O tabernáculo erguido', quando: 'No 1º dia do 1º mês do 2º ano (Êx 40:17).' },
  { id: 'sacerdotes', titulo: 'Os sacerdotes consagrados', quando: 'Logo depois de o tabernáculo ser erguido (Lv 8–9).' },
  { id: 'expiacao', titulo: 'O Dia da Expiação instituído', quando: 'Ainda no Sinai (Lv 16; 27:34).' },
  { id: 'partida-sinai', titulo: 'A partida do Sinai', quando: 'No dia 20 do 2º mês do 2º ano (Nm 10:11).' },
  { id: 'espias', titulo: 'Os espias e os 40 anos', quando: 'Em Cades, depois da partida do Sinai (Nm 13–14).' },
  { id: 'nova-geracao', titulo: 'A nova geração em Moabe', quando: 'No fim dos 40 anos (Nm 26; 33:38).' },
  { id: 'moabe', titulo: 'Moisés fala em Moabe', quando: 'No 1º dia do 11º mês do 40º ano (Dt 1:3).' },
  { id: 'escolha', titulo: 'A aliança renovada', quando: 'Nas planícies de Moabe (Dt 29:1).' },
  { id: 'morte-moises', titulo: 'Morte de Moisés', quando: 'Moisés tinha 120 anos (Dt 34:7).' },
];

// Cartas: [símbolo, raridade, título] — ver regra na era 1.
export const CARTAS = {
  joquebede: ['baby', 'rara', 'A mãe que escondeu o filho'],         // Êx 2:2-3
  'filha-farao': ['waves', 'rara', 'Tirou-o das águas'],             // Êx 2:10
  moises: ['flame-kindling', 'lendaria', 'Face a face com Deus'],    // Êx 33:11; Dt 34:10
  zipora: ['tent', 'comum', 'A esposa de Midiã'],                    // Êx 2:21
  arao: ['sprout', 'epica', 'O primeiro sumo sacerdote'],            // Lv 8:12; Nm 17:8
  'farao-exodo': ['pyramid', 'rara', 'O coração endurecido'],        // Êx 7:13
  miria: ['music', 'epica', 'A profetisa do tamborim'],              // Êx 15:20
  jetro: ['messages-square', 'rara', 'O conselho do sogro'],         // Êx 18:17-23
  josue: ['shield', 'epica', 'O auxiliar de Moisés'],                // Êx 33:11; Nm 27:18
  bezalel: ['gem', 'rara', 'Cheio do Espírito para a obra'],         // Êx 31:3
  nadabe: ['flame', 'comum', 'O fogo estranho'],                     // Lv 10:1
  eleazar: ['shirt', 'comum', 'As vestes do pai'],                   // Nm 20:28
  calebe: ['grape', 'epica', 'Outro espírito'],                      // Nm 14:24
  core: ['users-round', 'comum', 'A revolta'],                       // Nm 16:3
  balaao: ['messages-square', 'rara', 'A jumenta que falou'],        // Nm 22:28
  fineias: ['shield-check', 'rara', 'A aliança de paz'],             // Nm 25:12
  'filhas-zelofeade': ['scale', 'epica', 'Elas tinham razão'],       // Nm 27:7
};

export const CRIANCAS = {
  'ex-01': 'A mãe de Moisés escondeu o bebê num cesto no rio. Quem cuidou dele depois?',
  'ex-02': 'O que tinha de diferente naquela sarça? O que Deus disse para Moisés tirar?',
  'ex-03': 'Faraó disse "não conheço o Senhor". Como alguém pode conhecer a Deus?',
  'ex-04': 'Durante as trevas no Egito, como estavam as casas dos israelitas?',
  'ex-05': 'Onde as famílias passaram o sangue do cordeiro? Por que isso as protegeu?',
  'ex-06': 'Como o povo atravessou o mar? O que Miriã fez do outro lado?',
  'ex-07': 'Quem ajudou Moisés a manter as mãos levantadas? Você pode ajudar alguém assim?',
  'ex-08': 'Qual mandamento fala sobre pai e mãe? Como você pode obedecer a ele hoje?',
  'ex-09': 'A lei mandava devolver até o animal do inimigo. Por que isso é difícil?',
  'ex-10': 'Bezalel usou as mãos para fazer coisas lindas para Deus. O que você sabe fazer bem?',
  'ex-11': 'Por que o povo fez um bezerro de ouro? É fácil esperar?',
  'ex-12': 'O povo trouxe tanta oferta que Moisés mandou parar! Como você pode doar com alegria?',
  'lv-01': 'O fogo do altar nunca podia se apagar. O que isso nos ensina sobre buscar a Deus?',
  'lv-02': 'Nadabe e Abiú fizeram do jeito deles. Por que é importante fazer do jeito que Deus pediu?',
  'lv-03': 'Deus disse: "sejam santos, porque eu sou santo". O que você acha que isso quer dizer?',
  'lv-04': 'O que significa amar o próximo como a si mesmo? Dê um exemplo.',
  'lv-05': 'No jubileu, as famílias voltavam para a sua terra. Por que Deus queria isso?',
  'nm-01': 'O que ficava bem no meio do acampamento? Por quê?',
  'nm-02': 'Repita a bênção: "O Senhor te abençoe e te guarde". Para quem você quer dizer isso?',
  'nm-03': 'O povo reclamava do maná. Do que você costuma reclamar? Pelo que pode agradecer?',
  'nm-04': 'Dez espias tiveram medo, dois confiaram em Deus. Quais eram os dois?',
  'nm-05': 'O que nasceu na vara de Arão em uma só noite?',
  'nm-06': 'Que animal falou com Balaão? O que ele disse?',
  'nm-07': 'As filhas de Zelofeade pediram com coragem. O que Deus respondeu?',
  'nm-08': 'As cidades de refúgio protegiam quem errou sem querer. Como você pode ajudar quem errou?',
  'dt-01': 'Em 40 anos no deserto, o que faltou ao povo?',
  'dt-02': 'Onde os pais deviam ensinar a Palavra aos filhos? Onde vocês podem conversar sobre Deus?',
  'dt-03': 'Do que o ser humano vive, além do pão?',
  'dt-04': 'O rei devia ler a Palavra todo dia. Por que isso é bom para todos nós?',
  'dt-05': 'O feixe esquecido no campo ficava para quem precisava. Como você pode repartir algo?',
  'dt-06': 'Moisés disse: "escolha a vida". Que boa escolha você pode fazer hoje?',
  'dt-07': 'De que monte Moisés viu a terra prometida? Quem ficou no lugar dele?',
};

export const SELOS = {
  sarca:      { nome: 'Sarça ardente', icone: 'flame-kindling', sessao: 'ex-02', ref: 'Êx 3:2-5', texto: 'A sarça ardia no fogo e não se consumia. Ali Deus chamou Moisés.' },
  pao:        { nome: 'Pão sem fermento', icone: 'pao', sessao: 'ex-05', ref: 'Êx 12:8,15', texto: 'Comido na noite da Páscoa e nos sete dias de festa que a lembravam.' },
  coluna:     { nome: 'Coluna de nuvem e fogo', icone: 'coluna', sessao: 'ex-05', ref: 'Êx 13:21-22', texto: 'O Senhor ia à frente do povo: de dia na nuvem, de noite no fogo.' },
  cajado:     { nome: 'Cajado erguido', icone: 'cajado', sessao: 'ex-06', ref: 'Êx 14:16,21', texto: 'Moisés levantou a vara e estendeu a mão; o mar se dividiu.' },
  mana:       { nome: 'Maná', icone: 'mana', sessao: 'ex-07', ref: 'Êx 16:14-15,31', texto: 'Pão do céu que vinha toda manhã: branco, com gosto de bolo com mel.' },
  arcaalianca:{ nome: 'Arca da aliança', icone: 'arcaalianca', sessao: 'ex-10', ref: 'Êx 25:10-22', texto: 'Caixa de madeira coberta de ouro; sobre ela, entre os querubins, Deus falaria com Moisés.' },
  tabuas:     { nome: 'Tábuas da Lei', icone: 'tabuas', sessao: 'ex-11', ref: 'Êx 31:18; 34:1,28', texto: 'Duas tábuas de pedra com as palavras da aliança, os Dez Mandamentos.' },
  trombetas:  { nome: 'Trombetas de prata', icone: 'trombeta', sessao: 'nm-02', ref: 'Nm 10:1-10', texto: 'Duas trombetas de prata batida, para reunir o povo e dar o sinal de partida.' },
  uvas:       { nome: 'Cacho de Escol', icone: 'grape', sessao: 'nm-04', ref: 'Nm 13:23', texto: 'Um cacho tão grande que dois homens o carregaram numa vara.' },
  vara:       { nome: 'Vara que floresceu', icone: 'sprout', sessao: 'nm-05', ref: 'Nm 17:8', texto: 'Em uma noite, a vara de Arão brotou, floresceu e deu amêndoas.' },
  serpente:   { nome: 'Serpente de bronze', icone: 'serpente', sessao: 'nm-06', ref: 'Nm 21:8-9', texto: 'Quem era mordido e olhava para ela, vivia.' },
  nebo:       { nome: 'Monte Nebo', icone: 'mountain', sessao: 'dt-07', ref: 'Dt 34:1-4', texto: 'Do alto do monte, Deus mostrou a Moisés toda a terra prometida.' },
};
