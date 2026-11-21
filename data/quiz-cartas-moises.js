// Banco de perguntas das cartas — era 2 (Êxodo a Deuteronômio).
// Mesma regra da era 1: só o que já foi lido até a sessão do personagem, com referência (Bíblia Livre).
// Tamanho do banco pela raridade: comum 5, rara 6, épica 8, lendária 9.
const Q = (q, op, a, ref) => ({ q, op, a, ref });

export const QUIZ_CARTAS = {
  // ── Êxodo 1–2 ──
  joquebede: [
    Q('De que família era a mãe de Moisés?', ['Era filha de Judá', 'Era filha de Levi', 'Era filha de Faraó', 'Era de Midiã'], 1, 'Êx 2:1'),
    Q('Por que a mãe escondeu o menino?', ['Porque ele estava doente', 'Porque ele chorava muito', 'Porque viu que ele era belo', 'Porque o pai mandou'], 2, 'Êx 2:2'),
    Q('Por quanto tempo ela escondeu o menino?', ['Uma semana', 'Um ano', 'Sete dias', 'Três meses'], 3, 'Êx 2:2'),
    Q('Com o que ela vedou a cesta de juncos?', ['Com piche e betume', 'Com ouro', 'Com lã', 'Com folhas de palmeira'], 0, 'Êx 2:3'),
    Q('Quem ficou de longe para ver o que aconteceria com o menino?', ['O pai', 'A irmã dele', 'Uma vizinha', 'Arão'], 1, 'Êx 2:4'),
    Q('O que a filha de Faraó pediu à mãe do menino?', ['Que fosse embora do Egito', 'Que trabalhasse no palácio', 'Que o criasse para ela, e ela pagaria por isso', 'Que nunca mais o visse'], 2, 'Êx 2:9'),
  ],
  'filha-farao': [
    Q('O que a filha de Faraó foi fazer no rio?', ['Lavar roupa', 'Pescar', 'Buscar água', 'Lavar-se'], 3, 'Êx 2:5'),
    Q('Quem ela mandou buscar a cesta?', ['Uma criada', 'Um soldado', 'O próprio pai', 'A irmã do menino'], 0, 'Êx 2:5'),
    Q('O que ela sentiu ao ver o menino chorando?', ['Medo', 'Compaixão', 'Raiva', 'Nada'], 1, 'Êx 2:6'),
    Q('O que ela disse ao ver o menino?', ['"É filho de um rei"', '"É um anjo"', '"É dos meninos dos hebreus"', '"É um egípcio"'], 2, 'Êx 2:6'),
    Q('Quem ela pagou para criar o menino?', ['Uma egípcia', 'Uma criada do palácio', 'Ninguém', 'A mãe do menino, que a irmã dele foi chamar'], 3, 'Êx 2:7-9'),
    Q('Que nome ela deu ao menino, e por quê?', ['Moisés, porque o tirou das águas', 'Arão, porque era forte', 'José, porque era bonito', 'Moisés, porque significa "rei"'], 0, 'Êx 2:10'),
  ],
  moises: [
    Q('O que Faraó tinha mandado fazer com os meninos hebreus?', ['Mandá-los para a escola', 'Lançá-los no rio', 'Dar-lhes casa', 'Fazê-los soldados'], 1, 'Êx 1:22'),
    Q('Por quanto tempo a mãe escondeu Moisés depois que ele nasceu?', ['Sete dias', 'Um ano', 'Três meses', 'Quarenta dias'], 2, 'Êx 2:2'),
    Q('Onde a mãe colocou o menino?', ['Numa caverna', 'Num barco grande', 'No palácio', 'Numa cesta de juncos, entre os juncos à beira do rio'], 3, 'Êx 2:3'),
    Q('Quem encontrou o menino no rio?', ['A filha de Faraó', 'Um pescador', 'Arão', 'Um soldado'], 0, 'Êx 2:5-6'),
    Q('Quem criou o menino depois que ele foi encontrado?', ['Uma egípcia', 'A própria mãe dele', 'A filha de Faraó', 'A irmã'], 1, 'Êx 2:8-9'),
    Q('Por que o nome Moisés?', ['Porque significa "príncipe"', 'Porque era o nome do avô', 'Porque das águas o tirei', 'Porque nasceu no Egito'], 2, 'Êx 2:10'),
    Q('Já adulto, o que Moisés fez ao ver um egípcio batendo num hebreu?', ['Chamou os guardas', 'Fugiu na hora', 'Contou a Faraó', 'Matou o egípcio e o escondeu na areia'], 3, 'Êx 2:11-12'),
    Q('Para onde Moisés fugiu de Faraó?', ['Para a terra de Midiã', 'Para Canaã', 'Para o mar', 'Para Babel'], 0, 'Êx 2:15'),
    Q('O que Moisés fez junto ao poço, em Midiã?', ['Pediu comida', 'Defendeu as filhas do sacerdote e deu de beber ao rebanho delas', 'Construiu uma casa', 'Ficou escondido'], 1, 'Êx 2:16-17'),
  ],
  zipora: [
    Q('Quem era o pai de Zípora?', ['Faraó', 'Um sacerdote de Midiã', 'Arão', 'Um soldado'], 1, 'Êx 2:16,21'),
    Q('Quantas filhas tinha o sacerdote de Midiã?', ['Duas', 'Doze', 'Sete', 'Três'], 2, 'Êx 2:16'),
    Q('O que as filhas foram fazer no poço?', ['Lavar roupa', 'Brincar', 'Encontrar Moisés', 'Tirar água para o rebanho do pai'], 3, 'Êx 2:16'),
    Q('Com quem Zípora se casou?', ['Com Moisés', 'Com Arão', 'Com Faraó', 'Com Josué'], 0, 'Êx 2:21'),
    Q('Como se chamou o filho de Zípora e Moisés, em Êxodo 2?', ['Josué', 'Gérson', 'Eleazar', 'Arão'], 1, 'Êx 2:22'),
  ],
  // ── Êxodo 3–4 ──
  arao: [
    Q('Arão era o quê de Moisés?', ['Primo', 'Irmão', 'Filho', 'Servo'], 1, 'Êx 4:14'),
    Q('O que Deus disse que Arão sabia fazer bem?', ['Lutar', 'Construir', 'Falar', 'Plantar'], 2, 'Êx 4:14'),
    Q('Qual seria o papel de Arão junto a Moisés?', ['Seria rei', 'Seria soldado', 'Cuidaria das ovelhas', 'Falaria ao povo por Moisés'], 3, 'Êx 4:16'),
    Q('Como Arão ficaria ao ver Moisés, segundo Deus?', ['Ele se alegraria no coração', 'Ficaria com raiva', 'Teria medo', 'Não o reconheceria'], 0, 'Êx 4:14'),
    Q('Onde Arão encontrou Moisés?', ['No Egito', 'No monte de Deus', 'Em Midiã', 'No rio Nilo'], 1, 'Êx 4:27'),
    Q('O que Arão fez quando encontrou Moisés?', ['Brigou com ele', 'Fugiu', 'Beijou-o', 'Não falou nada'], 2, 'Êx 4:27'),
    Q('O que Arão fez diante dos anciãos de Israel?', ['Fez uma festa', 'Cobrou impostos', 'Chamou Faraó', 'Disse as palavras do Senhor e fez os sinais'], 3, 'Êx 4:29-30'),
    Q('Como o povo reagiu ao que Arão falou e mostrou?', ['Creu, inclinou-se e adorou', 'Riu deles', 'Foi embora', 'Ficou com medo e fugiu'], 0, 'Êx 4:31'),
  ],
  // ── Êxodo 5–7 ──
  'farao-exodo': [
    Q('O que Faraó respondeu quando Moisés pediu para deixar o povo ir?', ['"Podem ir"', '"Quem é o Senhor, para que eu ouça a sua voz?"', '"Vou pensar"', '"Só os homens"'], 1, 'Êx 5:1-2'),
    Q('O que Faraó mandou tirar dos israelitas para fazer tijolos?', ['A água', 'As ferramentas', 'A palha', 'O barro'], 2, 'Êx 5:7'),
    Q('E quantos tijolos o povo ainda tinha de fazer?', ['Metade', 'Nenhum', 'O dobro', 'A mesma quantidade de antes'], 3, 'Êx 5:8'),
    Q('O que aconteceu com a vara de Arão diante de Faraó?', ['Virou cobra e devorou as varas dos encantadores', 'Quebrou', 'Floresceu', 'Pegou fogo'], 0, 'Êx 7:10-12'),
    Q('Como o coração de Faraó ficou depois do sinal da vara?', ['Alegre', 'Endurecido, e ele não os ouviu', 'Arrependido', 'Com medo'], 1, 'Êx 7:13'),
    Q('Qual foi o primeiro sinal no rio, em Êxodo 7?', ['Rãs', 'Granizo', 'As águas viraram sangue', 'Escuridão'], 2, 'Êx 7:20'),
  ],
  // ── Êxodo 14–15 ──
  miria: [
    Q('Como Miriã é chamada em Êxodo 15?', ['Rainha', 'Pastora', 'Juíza', 'Profetisa'], 3, 'Êx 15:20'),
    Q('Miriã é chamada de irmã de quem?', ['De Arão', 'De Josué', 'De Faraó', 'De Jetro'], 0, 'Êx 15:20'),
    Q('O que Miriã tomou na mão?', ['Uma espada', 'Um pandeiro', 'Uma harpa', 'Uma tocha'], 1, 'Êx 15:20'),
    Q('Quem saiu atrás de Miriã?', ['Os soldados', 'Os anciãos', 'Todas as mulheres', 'As crianças'], 2, 'Êx 15:20'),
    Q('Como as mulheres acompanhavam Miriã?', ['Em silêncio', 'Chorando', 'Correndo', 'Com pandeiros e danças'], 3, 'Êx 15:20'),
    Q('O que Miriã cantava?', ['"Cantai ao Senhor, porque em extremo se engrandeceu"', '"Vamos voltar ao Egito"', '"O deserto é grande"', '"Faraó é forte"'], 0, 'Êx 15:21'),
    Q('Segundo o cântico, o que o Senhor lançou no mar?', ['As pedras', 'O cavalo e quem nele montava', 'O ouro do Egito', 'Os barcos'], 1, 'Êx 15:21'),
    Q('Quando Miriã cantou com as mulheres?', ['Antes de sair do Egito', 'No monte Sinai', 'Depois que Israel passou o mar em seco', 'Na entrada de Canaã'], 2, 'Êx 15:19-20'),
  ],
  // ── Êxodo 16–18 ──
  jetro: [
    Q('Jetro era sacerdote de onde?', ['Do Egito', 'De Midiã', 'De Canaã', 'De Babel'], 1, 'Êx 3:1; 18:1'),
    Q('Jetro era o quê de Moisés?', ['Irmão', 'Tio', 'Sogro', 'Filho'], 2, 'Êx 18:1'),
    Q('Quem Jetro trouxe consigo ao visitar Moisés no deserto?', ['Soldados', 'Faraó', 'Os anciãos do Egito', 'Zípora e os dois filhos de Moisés'], 3, 'Êx 18:2-5'),
    Q('O que Jetro disse ao ouvir tudo o que Deus tinha feito?', ['"Agora conheço que o Senhor é maior que todos os deuses"', '"Voltem para o Egito"', '"Não acredito"', '"Moisés é o maior"'], 0, 'Êx 18:11'),
    Q('O que Jetro viu de errado no trabalho de Moisés?', ['Que ele dormia muito', 'Que ele julgava o povo sozinho, desde a manhã até a tarde', 'Que ele não orava', 'Que ele era rico'], 1, 'Êx 18:13-14,17-18'),
    Q('Qual foi o conselho de Jetro?', ['Voltar para Midiã', 'Desistir do povo', 'Escolher homens capazes para julgar as causas menores', 'Construir um palácio'], 2, 'Êx 18:21-22'),
  ],
  josue: [
    Q('Contra quem Josué foi lutar em Êxodo 17?', ['Contra Faraó', 'Contra os midianitas', 'Contra os filisteus', 'Contra Amaleque'], 3, 'Êx 17:8-9'),
    Q('Quem mandou Josué escolher homens para a batalha?', ['Moisés', 'Arão', 'Jetro', 'Hur'], 0, 'Êx 17:9'),
    Q('Onde Moisés ficou durante a batalha?', ['No acampamento', 'No alto do morro, com a vara de Deus na mão', 'Junto com os soldados', 'No Egito'], 1, 'Êx 17:9-10'),
    Q('O que acontecia quando Moisés levantava a mão?', ['Chovia', 'Amaleque vencia', 'Israel prevalecia', 'Nada'], 2, 'Êx 17:11'),
    Q('Quem sustentou as mãos de Moisés até o pôr do sol?', ['Josué e Calebe', 'Jetro e Zípora', 'Os anciãos', 'Arão e Hur'], 3, 'Êx 17:12'),
    Q('Como terminou a batalha?', ['Josué venceu Amaleque e o seu povo', 'Amaleque venceu', 'Ninguém venceu', 'Israel fugiu'], 0, 'Êx 17:13'),
    Q('O que Deus mandou fazer depois da batalha, por causa de Josué?', ['Construir uma cidade', 'Escrever num livro para lembrança e dizer aos ouvidos de Josué', 'Fazer uma festa', 'Voltar ao Egito'], 1, 'Êx 17:14'),
    Q('Que nome Moisés deu ao altar que construiu depois da vitória?', ['"Deus que me vê"', '"Betel"', '"O Senhor é minha bandeira"', '"Ebenézer"'], 2, 'Êx 17:15'),
  ],
  // ── Êxodo 25–31 ──
  bezalel: [
    Q('Bezalel era de qual tribo?', ['Levi', 'Dã', 'Rúben', 'Judá'], 3, 'Êx 31:2'),
    Q('De quem Deus encheu Bezalel?', ['Do seu Espírito', 'De ouro', 'De medo', 'De força para a guerra'], 0, 'Êx 31:3'),
    Q('Com o que Deus encheu Bezalel, além do seu Espírito?', ['Com riquezas', 'Com sabedoria, inteligência e conhecimento', 'Com fama', 'Com soldados'], 1, 'Êx 31:3'),
    Q('Com quais materiais Bezalel ia trabalhar?', ['Só com barro', 'Com papel', 'Com ouro, prata, bronze, pedras e madeira', 'Com lã de ovelha'], 2, 'Êx 31:4-5'),
    Q('Quem Deus deu para ajudar Bezalel?', ['Josué', 'Arão', 'Hur', 'Aoliabe, da tribo de Dã'], 3, 'Êx 31:6'),
    Q('Como Deus chamou Bezalel para a obra?', ['Pelo nome', 'Por sorteio', 'Por um anjo', 'Por uma voz no mar'], 0, 'Êx 31:2'),
  ],
  // ── Levítico 8–10 ──
  nadabe: [
    Q('Nadabe e Abiú eram filhos de quem?', ['De Moisés', 'De Arão', 'De Josué', 'De Calebe'], 1, 'Lv 10:1'),
    Q('O que Nadabe e Abiú puseram nos seus incensários?', ['Água', 'Ouro', 'Fogo e incenso', 'Sangue'], 2, 'Lv 10:1'),
    Q('Qual foi o erro de Nadabe e Abiú?', ['Dormiram no tabernáculo', 'Não foram à festa', 'Roubaram o ouro', 'Ofereceram um fogo que o Senhor não tinha ordenado'], 3, 'Lv 10:1'),
    Q('O que aconteceu com eles?', ['Saiu fogo de diante do Senhor, que os queimou', 'Foram expulsos', 'Ficaram doentes', 'Nada'], 0, 'Lv 10:2'),
    Q('Antes disso, para onde Nadabe e Abiú tinham subido com Moisés e os anciãos?', ['Para o Egito', 'Para o monte, diante do Senhor', 'Para Midiã', 'Para o mar'], 1, 'Êx 24:1,9'),
  ],
  eleazar: [
    Q('Eleazar era filho de quem?', ['De Moisés', 'De Calebe', 'De Arão', 'De Josué'], 2, 'Lv 10:6,12'),
    Q('Qual era o irmão de Eleazar que ficou com ele depois da morte de Nadabe e Abiú?', ['Gérson', 'Fineias', 'Hur', 'Itamar'], 3, 'Lv 10:6,12'),
    Q('O que Moisés disse a Arão, Eleazar e Itamar depois da morte de Nadabe e Abiú?', ['Que não descobrissem a cabeça nem rasgassem as roupas', 'Que fossem embora', 'Que fizessem uma festa', 'Que voltassem ao Egito'], 0, 'Lv 10:6'),
    Q('Por que Moisés se irou com Eleazar e Itamar?', ['Porque dormiram', 'Porque o bode da oferta pelo pecado foi queimado em vez de ser comido', 'Porque saíram do tabernáculo', 'Porque brigaram'], 1, 'Lv 10:16-17'),
    Q('Para qual serviço Eleazar foi consagrado com o pai e os irmãos?', ['Para ser rei', 'Para ser soldado', 'Para servir como sacerdote', 'Para cuidar do rebanho'], 2, 'Lv 8:2,13,30'),
  ],
  // ── Números 13–14 ──
  calebe: [
    Q('Calebe era de qual tribo?', ['Levi', 'Judá', 'Efraim', 'Dã'], 1, 'Nm 13:6'),
    Q('Quantos homens foram espiar a terra de Canaã?', ['Dois', 'Sete', 'Doze', 'Quarenta'], 2, 'Nm 13:2-16'),
    Q('Por quantos dias os espias andaram pela terra?', ['Sete dias', 'Três dias', 'Um ano', 'Quarenta dias'], 3, 'Nm 13:25'),
    Q('O que Calebe disse ao povo quando os outros espias tiveram medo?', ['"Subamos logo e tomemos posse dela, porque com certeza podemos prevalecer"', '"Vamos voltar ao Egito"', '"Os gigantes são fortes demais"', '"Vamos esperar"'], 0, 'Nm 13:30'),
    Q('Quem estava junto com Calebe, falando a favor de entrar na terra?', ['Arão', 'Josué', 'Corá', 'Eleazar'], 1, 'Nm 14:6-9'),
    Q('Como Calebe e Josué descreveram a terra?', ['Seca e perigosa', 'Pequena e pobre', 'Muito boa, terra que flui leite e mel', 'Cheia de neve'], 2, 'Nm 14:7-8'),
    Q('O que o povo quis fazer com Calebe e Josué?', ['Fazê-los reis', 'Dar-lhes presentes', 'Mandá-los de volta', 'Apedrejá-los'], 3, 'Nm 14:10'),
    Q('O que Deus disse sobre Calebe?', ['Que nele havia outro espírito, que o seguiu completamente e entraria na terra', 'Que era fraco', 'Que voltaria ao Egito', 'Que seria sacerdote'], 0, 'Nm 14:24'),
  ],
  // ── Números 15–19 ──
  core: [
    Q('Corá (no texto, Coré) era de qual tribo?', ['Judá', 'Levi', 'Rúben', 'Dã'], 1, 'Nm 16:1'),
    Q('Contra quem Corá se levantou?', ['Contra Faraó', 'Contra Josué', 'Contra Moisés e Arão', 'Contra Calebe'], 2, 'Nm 16:1-3'),
    Q('Quantos líderes se juntaram a Corá?', ['Doze', 'Setenta', 'Mil', 'Duzentos e cinquenta'], 3, 'Nm 16:2'),
    Q('O que aconteceu com Corá e os que estavam com ele?', ['A terra abriu a sua boca e os tragou', 'Foram para o Egito', 'Ficaram ricos', 'Foram perdoados'], 0, 'Nm 16:31-33'),
    Q('O que aconteceu com os duzentos e cinquenta homens que ofereciam incenso?', ['Voltaram para casa', 'Saiu fogo do Senhor e os consumiu', 'Viraram sacerdotes', 'Fugiram'], 1, 'Nm 16:35'),
  ],
  // ── Números 20–25 ──
  balaao: [
    Q('Quem chamou Balaão?', ['Faraó', 'Moisés', 'Balaque, rei de Moabe', 'Josué'], 2, 'Nm 22:4-6'),
    Q('Para que Balaque chamou Balaão?', ['Para ser rei', 'Para construir uma cidade', 'Para curar o povo', 'Para amaldiçoar Israel'], 3, 'Nm 22:6'),
    Q('Por que a jumenta de Balaão se desviou do caminho?', ['Porque viu o anjo do Senhor com a espada na mão', 'Porque estava cansada', 'Porque viu um leão', 'Porque estava com sede'], 0, 'Nm 22:23'),
    Q('O que aconteceu de espantoso com a jumenta?', ['Voou', 'Falou com Balaão', 'Fugiu para o deserto', 'Ficou dourada'], 1, 'Nm 22:28'),
    Q('O que Balaão disse que só podia falar?', ['O que Balaque quisesse', 'O que o povo pedisse', 'A palavra que Deus pusesse na sua boca', 'Nada'], 2, 'Nm 22:38'),
    Q('No fim, o que Balaão fez com Israel?', ['Amaldiçoou três vezes', 'Fugiu', 'Lutou contra Israel', 'Abençoou Israel três vezes'], 3, 'Nm 24:10'),
  ],
  fineias: [
    Q('Fineias era filho de quem?', ['De Eleazar, filho de Arão', 'De Moisés', 'De Josué', 'De Corá'], 0, 'Nm 25:7'),
    Q('Onde o povo de Israel se desviou, adorando Baal?', ['No Sinai', 'Em Sitim, com Baal-Peor', 'No Egito', 'Em Cades'], 1, 'Nm 25:1-3'),
    Q('O que a atitude de Fineias fez parar?', ['A chuva', 'Uma guerra', 'A mortandade entre os filhos de Israel', 'A fome'], 2, 'Nm 25:8'),
    Q('Quantos morreram naquela mortandade?', ['Doze', 'Cem', 'Mil', 'Vinte e quatro mil'], 3, 'Nm 25:9'),
    Q('O que Deus fez com Fineias por causa do seu zelo?', ['Estabeleceu com ele um pacto de paz', 'Deu-lhe ouro', 'Fez dele rei', 'Mandou-o embora'], 0, 'Nm 25:12'),
    Q('Que promessa Deus deu à descendência de Fineias?', ['Uma cidade', 'O pacto de um sacerdócio perpétuo', 'Muitas ovelhas', 'Um palácio'], 1, 'Nm 25:13'),
  ],
  // ── Números 26–30 ──
  'filhas-zelofeade': [
    Q('Quantas eram as filhas de Zelofeade?', ['Duas', 'Três', 'Cinco', 'Sete'], 2, 'Nm 27:1'),
    Q('De qual tribo era Zelofeade?', ['Levi', 'Judá', 'Rúben', 'Manassés'], 3, 'Nm 27:1'),
    Q('O que aconteceu com o pai delas?', ['Morreu no deserto e não teve filhos', 'Foi para o Egito', 'Virou sacerdote', 'Ficou rico'], 0, 'Nm 27:3'),
    Q('O que as filhas pediram?', ['Ouro', 'Uma herança entre os irmãos do pai', 'Uma casa no Egito', 'Para voltar a Midiã'], 1, 'Nm 27:4'),
    Q('Diante de quem elas apresentaram o pedido?', ['Diante de Faraó', 'Diante dos vizinhos', 'Diante de Moisés, Eleazar, os príncipes e toda a congregação', 'Diante de Balaão'], 2, 'Nm 27:2'),
    Q('O que Moisés fez com o pedido delas?', ['Recusou na hora', 'Ignorou', 'Mandou esperar um ano', 'Levou a causa ao Senhor'], 3, 'Nm 27:5'),
    Q('O que o Senhor disse sobre o pedido delas?', ['Que elas diziam bem e deviam receber a herança do pai', 'Que estavam erradas', 'Que deviam casar primeiro', 'Que esperassem'], 0, 'Nm 27:6-7'),
    Q('Que regra nova veio desse pedido?', ['Só os sacerdotes herdam', 'Quando alguém morrer sem filhos, a herança passa à sua filha', 'As filhas nunca herdam', 'A herança vai para o rei'], 1, 'Nm 27:8'),
  ],
};
