"""Gera os prompts completos (um por imagem) para o Gemini.

Uso: python3 ferramentas/gerar_prompts.py
Saída: PROMPTS-AVATARES.md, PROMPTS-CARTAS.md, PROMPTS-SELOS.md

Cada prompt é autossuficiente: pode ser colado sozinho, sem o estilo base à parte.
Regra: só o que o texto bíblico diz (referência ao lado); sem violência, sem nudez, sem texto na imagem.
"""

ESTILO = ("ilustração digital para um app bíblico infantil e familiar, estilo livro ilustrado moderno: "
          "cartoon plano (flat) com sombreado suave, contorno limpo e arredondado, formas simples e bonitas, "
          "expressões serenas e simpáticas, adequado para crianças")
TRAJES = "trajes simples do antigo Oriente Próximo (túnicas e mantos de linho e lã, sandálias), sem adereços modernos"
EVITE = ("texto, letras, números, assinatura, moldura, marca d'água, cenas de luta ou violência, sangue, "
         "arma apontada para alguém, nudez, "
         "estilo fotográfico realista, rostos assustadores")

# Cartas colecionáveis (estilo A, aprovado em 22/11/2026): arte mais elaborada que a dos avatares.
ESTILO_CARTA = ("a arte de uma carta colecionável de um app bíblico para famílias (crianças a partir de 8 anos). "
                "ESTILO: pintura digital de livro ilustrado premium, pinceladas visíveis e textura suave de tinta, luz cinematográfica, "
                "cores ricas e quentes, personagens bonitos e expressivos, com proporções naturais levemente estilizadas; "
                "nem cartoon plano nem fotografia")
EVITE_CARTA = ("texto, letras, números, assinatura, moldura, borda, marca d'água, cenas de luta ou violência, sangue, "
               "arma apontada para alguém, nudez, rostos assustadores, estilo cartoon plano, fotorrealismo, "
               "personagem com cara da imagem tradicional de Jesus (túnica branca, cabelo longo solto e barba, braços abertos "
               "sob raios de luz): o personagem tem visual próprio")
# A raridade aparece na própria arte: cada degrau abre mais a cena e aumenta o impacto.
COMPOSICAO = {
    'comum': ("CENA (carta comum, simples e calma): retrato da cintura para cima, personagem ligeiramente fora do centro, "
              "rosto no terço superior, cenário simples com profundidade e fundo levemente desfocado"),
    'rara': ("CENA (carta rara, ação e luz marcante): o personagem fazendo algo, de corpo inteiro ou da cintura para cima, "
             "rosto no terço superior, com uma luz marcante (feixe de luz entre nuvens ou contraluz recortando a silhueta)"),
    'epica': ("CENA (carta épica, ampla e dramática): PLANO ABERTO, personagem de corpo inteiro ocupando no máximo um terço da "
              "altura da imagem; a paisagem e o céu dominam a cena, com nuvens enormes e luz dramática; o rosto continua legível"),
    'lendaria': ("CENA (carta lendária, o momento mais marcante da vida do personagem): personagem em primeiro plano, rosto no "
                 "terço superior, cena grandiosa ao fundo com céu aberto e profundidade enorme; contraluz dourado forte e raios de "
                 "luz bem visíveis descendo do céu sobre o personagem, como num pôr do sol épico; atmosfera majestosa e reverente; "
                 "construções, barcos e objetos em proporções reais e imponentes, nada com aparência de brinquedo"),
}
FAIXAS = ("Deixe o topo (10% da altura) e a faixa de baixo (25% da altura) com menos detalhes, sem rosto nem elementos "
          "importantes, porque ali entram o nome e o título da carta")

# ─────────────────────────── AVATARES (o viajante) ───────────────────────────
# (arquivo, personagem, momento, cena detalhada, expressão, cores, referência)
AVATARES = [
    ('davi', 'Davi', 'inicial', 'um jovem pastor de cabelo ruivo, olhos bonitos e boa aparência, segurando uma pequena harpa de madeira junto ao peito; uma ovelha branca encosta a cabeça no ombro dele', 'sorriso leve e tranquilo', 'túnica bege com faixa âmbar, cajado apoiado no ombro', '1Sm 16:11-12,23'),
    ('davi-meio', 'Davi', 'mediano', 'o mesmo jovem pastor ruivo segurando uma funda de couro na mão direita e, a tiracolo, uma bolsa de pastor aberta com cinco pedras lisas à mostra; nenhum gigante, nenhuma luta, nenhum inimigo na imagem', 'olhar firme e confiante, como quem confia em Deus', 'túnica bege com faixa âmbar', '1Sm 17:40,45'),
    ('davi-final', 'Davi', 'final', 'Davi adulto, já rei, com uma coroa simples de ouro, dançando de alegria com os braços erguidos para o alto, o manto girando com o movimento', 'alegria radiante, olhos voltados para cima', 'manto real vermelho-escuro sobre túnica clara', '2Sm 5:3; 6:14-15'),
    ('ester', 'Ester', 'inicial', 'uma jovem judia de aparência bonita, roupas simples e um véu leve sobre os cabelos escuros, mãos cruzadas à frente', 'olhar tranquilo e gentil', 'tons de lilás claro e creme', 'Et 2:7'),
    ('ester-meio', 'Ester', 'mediano', 'Ester, já rainha, usando vestes simples de jejum, sem coroa, de olhos fechados e mãos juntas em oração', 'serenidade e coragem, concentrada na oração', 'tons de roxo suave e cinza claro', 'Et 4:16'),
    ('ester-final', 'Ester', 'final', 'Ester rainha, com coroa real delicada e vestes nobres, estendendo a mão direita para tocar a ponta de um cetro de ouro que aparece entrando pela lateral da imagem (só o cetro, sem mostrar o rei)', 'confiança serena', 'vestido púrpura com detalhes dourados', 'Et 2:17; 5:1-2'),
    ('daniel', 'Daniel', 'inicial', 'um jovem nobre judeu segurando junto ao peito uma pequena tigela de legumes numa mão e um copo de água na outra, como quem escolhe com gentileza não comer a comida do rei', 'sorriso educado e decidido', 'túnica azul-clara de corte nobre, faixa branca', 'Dn 1:3-6,12'),
    ('daniel-meio', 'Daniel', 'mediano', 'Daniel adulto, de joelhos, mãos juntas em oração, olhando para cima, com o contorno de uma janela aberta logo atrás dele', 'paz e fidelidade', 'túnica azul e manto azul-marinho', 'Dn 6:10'),
    ('daniel-final', 'Daniel', 'final', 'Daniel mais velho, de barba grisalha, de pé e sereno, com dois leões grandes deitados e quietos aos seus pés, de olhos fechados como se descansassem', 'calma profunda, um leve sorriso', 'manto azul-marinho com borda dourada', 'Dn 6:22'),
    ('rute', 'Rute', 'inicial', 'uma jovem moabita abraçando com carinho a sogra idosa, Noemi, que aparece de perfil ao lado dela', 'decisão e ternura no olhar', 'túnica cor de trigo e véu creme; Noemi com manto cinza', 'Rt 1:14-16'),
    ('rute-meio', 'Rute', 'mediano', 'Rute segurando junto ao peito um feixe de espigas de cevada douradas', 'sorriso trabalhador e grato', 'túnica cor de trigo, lenço amarelado na cabeça', 'Rt 2:2,17'),
    ('rute-final', 'Rute', 'final', 'Rute sorrindo, segurando no colo o filho bebê, Obede, enrolado num pano claro', 'alegria e gratidão', 'vestido dourado-claro e manto creme', 'Rt 4:13,17'),
    ('sansao', 'Sansão', 'inicial', 'um menino de cabelo comprido, nunca cortado, solto até os ombros, alegre e forte para a idade, de braços na cintura', 'sorriso largo e travesso', 'túnica terracota', 'Jz 13:5,24'),
    ('sansao-meio', 'Sansão', 'mediano', 'Sansão jovem e muito forte, com o cabelo bem longo preso em sete tranças, de braços cruzados', 'sorriso confiante', 'túnica terracota sem mangas, cinto de couro', 'Jz 16:13,17'),
    ('sansao-final', 'Sansão', 'final', 'Sansão de cabelo longo, com as duas mãos apoiadas em duas colunas grossas de pedra, uma de cada lado, olhos fechados e rosto erguido, orando ao Senhor; sem pessoas ao redor e sem destruição', 'entrega e oração', 'túnica terracota gasta', 'Jz 16:28-29'),
    ('debora', 'Débora', 'inicial', 'uma mulher madura e sábia, profetisa e juíza, sentada, segurando um rolo de pergaminho no colo, com folhas de palmeira aparecendo atrás do ombro', 'olhar sábio e acolhedor', 'túnica verde-oliva e véu bege', 'Jz 4:4-5'),
    ('debora-meio', 'Débora', 'mediano', 'Débora de pé, apontando com o braço estendido para a frente, como quem chama alguém para seguir', 'firmeza e coragem', 'túnica verde-oliva, manto verde-escuro', 'Jz 4:6,14'),
    ('debora-final', 'Débora', 'final', 'Débora com os dois braços erguidos, cantando de alegria um cântico ao Senhor', 'alegria e gratidão, boca aberta cantando', 'túnica verde com detalhes dourados', 'Jz 5:1-3'),
    ('moises', 'Moisés', 'inicial', 'um homem adulto com cajado de pastor, descalço, olhando com espanto para um pequeno arbusto em chamas ao seu lado, que queima sem se consumir', 'espanto e reverência', 'túnica marrom-clara, manto de pastor marrom', 'Êx 3:1-5'),
    ('moises-meio', 'Moisés', 'mediano', 'Moisés com o cajado erguido na mão e o braço estendido para a frente, o vento forte soprando o manto e a barba', 'determinação e fé', 'manto marrom sobre túnica bege', 'Êx 14:16,21'),
    ('moises-final', 'Moisés', 'final', 'Moisés idoso de barba branca longa, segurando junto ao peito duas tábuas de pedra lisas, com o rosto resplandecendo de luz suave', 'serenidade e luz no rosto', 'manto branco-marfim e túnica marrom', 'Êx 34:29'),
    ('miria', 'Miriã', 'inicial', 'uma menina olhando atenta de longe, com a mão sobre os olhos, cuidando do irmão bebê que não aparece na imagem', 'atenção e cuidado', 'túnica rosa-antigo e lenço claro', 'Êx 2:3-4'),
    ('miria-meio', 'Miriã', 'mediano', 'a mesma menina falando com coragem, com uma mão no peito e a outra apontando para o lado, oferecendo ajuda', 'coragem e esperteza', 'túnica rosa-antigo', 'Êx 2:7-8'),
    ('miria-final', 'Miriã', 'final', 'Miriã adulta, profetisa, dançando e tocando um tamborim erguido acima da cabeça', 'alegria contagiante', 'túnica rosa e manto vinho esvoaçante', 'Êx 15:20-21'),
    ('gideao', 'Gideão', 'inicial', 'um homem jovem segurando um punhado de trigo, olhando para cima surpreso, como quem ouviu alguém chamar', 'surpresa e timidez', 'túnica verde-musgo e lenço na cabeça', 'Jz 6:11-12'),
    ('gideao-meio', 'Gideão', 'mediano', 'Gideão segurando com as duas mãos um velo de lã molhado, torcendo-o, com gotas de água caindo', 'admiração', 'túnica verde-musgo', 'Jz 6:37-38'),
    ('gideao-final', 'Gideão', 'final', 'Gideão tocando uma trombeta de chifre de carneiro com uma mão e erguendo uma tocha acesa com a outra; sem armas', 'coragem e confiança', 'túnica verde-oliva e manto marrom', 'Jz 7:16,20'),
    ('ana', 'Ana', 'inicial', 'uma mulher jovem orando em silêncio, olhando para cima com os olhos marejados e uma lágrima no rosto, a mão direita sobre o coração e a mão esquerda aberta com a palma para cima, os lábios entreabertos como quem fala baixinho no coração', 'tristeza com esperança', 'túnica verde-azulada e véu terracota com borda bordada dourada', '1Sm 1:10-13'),
    ('ana-meio', 'Ana', 'mediano', 'Ana cantando de alegria um cântico ao Senhor, sem bebê e sem outras pessoas: rosto erguido, olhos brilhando, boca aberta cantando, as duas mãos abertas juntas na frente do peito com as palmas para cima, como quem oferece louvor', 'alegria e gratidão', 'túnica verde-azulada e véu terracota com borda bordada dourada', '1Sm 2:1-2'),
    ('ana-final', 'Ana', 'final', 'Ana de mãos dadas com o menino Samuel, que veste uma pequena túnica; os dois de frente, ela levemente inclinada para ele', 'ternura e entrega', 'túnica verde-azulada e véu terracota com borda bordada dourada; Samuel de túnica branca', '1Sm 1:27-28; 2:19'),
]

# ─────────────────────────── CARTAS (pessoas da Bíblia) ───────────────────────────
# (arquivo, nome, cena detalhada, aparência sustentada pelo texto, cenário, referência)
CARTAS = [
    ('adao', 'Adão', 'cuidando com as mãos de uma planta no jardim, ao lado de um rio', 'homem adulto, vestido com uma túnica simples de pele', 'jardim exuberante com árvores frutíferas e um rio', 'Gn 2:8-15; 3:21'),
    ('eva', 'Eva', 'ao lado de uma grande árvore frutífera, olhar pensativo', 'mulher adulta, vestida com uma túnica simples de pele', 'jardim verde e luminoso', 'Gn 2:22; 3:20-21'),
    ('caim', 'Caim', 'segurando feixes de grãos como oferta', 'homem adulto, lavrador, com roupas de trabalho no campo', 'campo cultivado ao entardecer', 'Gn 4:2-3'),
    ('abel', 'Abel', 'trazendo nos braços um cordeiro como oferta, junto a um pequeno altar de pedras com fumaça subindo', 'jovem pastor de ovelhas', 'pasto com algumas ovelhas ao fundo', 'Gn 4:2,4'),
    ('sete', 'Sete', 'de pé diante da família reunida, em gesto de oração', 'homem adulto', 'campo aberto sob céu limpo', 'Gn 4:25-26'),
    ('enoque', 'Enoque', 'caminhando por uma trilha em direção a uma luz suave no horizonte, em paz', 'homem idoso de barba', 'trilha entre colinas ao amanhecer', 'Gn 5:22-24'),
    ('matusalem', 'Matusalém', 'sentado à porta de uma tenda, segurando um cajado', 'homem muito idoso, de barba longa e branca', 'entrada de tenda ao pôr do sol', 'Gn 5:27'),
    ('noe', 'Noé', 'diante de uma enorme arca de madeira em construção, enquanto animais se aproximam em pares', 'homem idoso de barba branca', 'campo aberto com a arca ao fundo e céu se fechando ao longe', 'Gn 6:14-22; 7:9'),
    ('sem', 'Sem', 'saindo da arca e olhando para o céu', 'homem adulto', 'montanhas ao fundo e um arco-íris no céu', 'Gn 8:4; 9:13,18'),
    ('ninrode', 'Ninrode', 'segurando um arco, de pé numa planície', 'homem forte, caçador', 'planície com as muralhas de uma cidade antiga ao longe', 'Gn 10:8-10'),
    ('tera', 'Terá', 'conduzindo uma caravana com camelos, saindo de uma cidade', 'homem idoso', 'cidade antiga às margens de um rio, ao fundo', 'Gn 11:31'),
    ('abraao', 'Abraão', 'do lado de fora da tenda, olhando para um céu repleto de estrelas', 'homem idoso de barba branca', 'deserto à noite com tenda iluminada', 'Gn 15:5; 24:1'),
    ('sara', 'Sara', 'à entrada de uma tenda, sorrindo, com um bebê nos braços', 'mulher idosa', 'entrada de tenda com luz da manhã', 'Gn 18:11; 21:2,6'),
    ('lo', 'Ló', 'no alto de um monte, olhando para uma planície verde e bem regada, com rebanhos', 'homem adulto', 'vale verde do Jordão ao fundo', 'Gn 13:10-11'),
    ('melquisedeque', 'Melquisedeque', 'oferecendo pão e um cálice de vinho com as duas mãos', 'rei e sacerdote, homem maduro, com vestes nobres e uma coroa simples', 'portal de uma cidade antiga de pedra', 'Gn 14:18'),
    ('agar', 'Agar', 'junto a uma fonte de água no deserto, olhando para cima com esperança, iluminada por uma luz suave', 'mulher jovem egípcia', 'deserto com uma fonte e poucas plantas', 'Gn 16:7,13'),
    ('ismael', 'Ismael', 'segurando um arco, com uma aljava nas costas', 'jovem arqueiro', 'deserto com dunas', 'Gn 21:20'),
    ('isaque', 'Isaque', 'subindo um monte com um feixe de lenha nas costas', 'rapaz', 'monte rochoso; um carneiro preso pelos chifres num arbusto aparece ao fundo', 'Gn 22:5-6,13'),
    ('abimeleque', 'Abimeleque', 'de pé junto a um poço, em gesto de acordo, com servos atrás', 'rei de uma cidade antiga, com vestes nobres', 'poço no deserto de Berseba', 'Gn 21:22-31'),
    ('rebeca', 'Rebeca', 'junto a um poço, com um cântaro no ombro, dando água a camelos', 'moça jovem', 'poço de pedra ao entardecer', 'Gn 24:15-20'),
    ('labao', 'Labão', 'de pé diante de grandes rebanhos, segurando uma pequena balança de pesar', 'homem de meia-idade, pastor rico', 'campos de Harã com ovelhas e cabras', 'Gn 29:15; 31:7'),
    ('esau', 'Esaú', 'voltando cansado do campo, diante de uma panela de ensopado de lentilhas', 'homem forte, ruivo e muito peludo, caçador', 'acampamento ao entardecer', 'Gn 25:25,27,29-30'),
    ('jaco', 'Jacó', 'dormindo com a cabeça sobre uma pedra, sonhando com uma escada que sobe da terra ao céu, com anjos de luz subindo e descendo', 'homem jovem, tranquilo', 'campo aberto à noite, escada luminosa no céu', 'Gn 25:27; 28:11-12'),
    ('lia', 'Lia', 'à porta de uma tenda, segurando um bebê', 'mulher jovem de olhar terno', 'tenda com luz suave da tarde', 'Gn 29:17,31-32'),
    ('raquel', 'Raquel', 'conduzindo as ovelhas do pai até um poço no campo', 'jovem pastora', 'campo com poço de pedra', 'Gn 29:9-10'),
    ('dina', 'Diná', 'caminhando calma por um campo florido perto de tendas', 'jovem filha de Jacó', 'campo florido com tendas ao fundo; cena tranquila, sem tensão', 'Gn 30:21; 34:1'),
    ('benjamim', 'Benjamim', 'olhando surpreso para uma taça de prata encontrada no alto de um saco de grãos', 'rapaz, o filho mais novo', 'interior de um armazém egípcio', 'Gn 44:12,20'),
    ('jose', 'José', 'num campo de trigo, vestindo uma túnica longa e especial, de mangas compridas, bem ornamentada', 'rapaz de dezessete anos', 'campo com feixes de trigo e céu estrelado ao fundo', 'Gn 37:2-3,7,9'),
    ('ruben', 'Rúben', 'junto a uma cisterna seca no deserto, estendendo a mão para dentro dela, preocupado', 'homem jovem, o primogênito', 'deserto de Dotã', 'Gn 37:21-22,29'),
    ('juda', 'Judá', 'de pé com a mão no peito, em gesto de se oferecer no lugar do irmão mais novo', 'homem maduro', 'salão de uma casa egípcia com colunas', 'Gn 44:18,33'),
    ('tamar', 'Tamar', 'segurando um selo com cordão numa mão e um cajado na outra', 'mulher jovem, com véu', 'caminho de terra entre colinas', 'Gn 38:18,25'),
    ('potifar', 'Potifar', 'de pé, com postura de autoridade, diante da própria casa', 'oficial egípcio, capitão da guarda, com trajes egípcios', 'casa nobre egípcia com colunas e palmeiras', 'Gn 39:1'),
    ('farao-jose', 'Faraó', 'sentado no trono, segurando um cetro', 'rei egípcio com trajes reais egípcios', 'salão com colunas pintadas; ao fundo, pinturas de sete espigas e sete vacas', 'Gn 41:1-7,40'),
    ('manasses', 'Manassés', 'brincando às margens do rio Nilo ao nascer do sol', 'menino', 'margem do Nilo com juncos e sol nascendo', 'Gn 41:51'),
    ('efraim', 'Efraim', 'num campo fértil e verdejante, segurando um ramo com frutos', 'menino', 'plantações às margens do Nilo', 'Gn 41:52'),
    ('simeao', 'Simeão', 'de pé num pátio egípcio, com correntes leves nos pulsos, olhar arrependido', 'homem adulto', 'pátio de pedra com guardas ao longe', 'Gn 42:21,24'),
    ('jo', 'Jó', 'sentado sobre cinzas, coberto com um manto simples, olhando firme para o céu', 'homem maduro de barba', 'céu de tempestade se abrindo em luz dourada', 'Jó 2:8; 38:1'),
    ('elifaz', 'Elifaz', 'sentado à noite, contando com gestos uma visão que teve', 'homem idoso e sábio', 'acampamento à noite sob as estrelas', 'Jó 2:11; 4:13-16'),
    ('bildade', 'Bildade', 'sentado no chão, falando com gestos firmes', 'homem idoso', 'chão de terra com outros amigos sentados em círculo, só contornos', 'Jó 2:11; 8:1'),
    ('zofar', 'Zofar', 'sentado no chão, apontando o dedo enquanto fala', 'homem de expressão severa', 'chão de terra ao entardecer', 'Jó 2:11; 11:1'),
    ('eliu', 'Eliú', 'de pé, falando com energia, com a mão erguida', 'homem jovem, o mais novo do grupo', 'nuvens de tempestade e relâmpagos ao longe', 'Jó 32:6; 37:1-5'),
    # ── Era 2: Moisés ──
    ('joquebede', 'Joquebede', 'colocando com cuidado um bebê num cesto de juncos à beira do rio, entre os juncos', 'mulher hebreia jovem, mãe carinhosa', 'margem do Nilo com juncos altos ao amanhecer', 'Êx 2:2-3'),
    ('filha-farao', 'Filha de Faraó', 'segurando nos braços um bebê que acabou de tirar de um cesto de juncos, com ternura', 'princesa egípcia com vestido de linho branco e joias simples', 'margem do Nilo com servas ao fundo', 'Êx 2:5-6,10'),
    ('moises', 'Moisés', 'descendo do monte com duas tábuas de pedra lisas nos braços, o rosto resplandecendo de luz suave', 'homem idoso de barba branca longa', 'encosta rochosa do monte Sinai com nuvens', 'Êx 34:29'),
    ('zipora', 'Zípora', 'à entrada de uma tenda, segurando um cântaro, com ovelhas ao lado', 'mulher jovem midianita, pastora', 'deserto de Midiã com um poço e ovelhas', 'Êx 2:16,21'),
    ('arao', 'Arão', 'segurando uma vara de madeira da qual brotam flores e amêndoas', 'homem idoso de barba, vestido de sumo sacerdote com peitoral de pedras coloridas e turbante', 'interior iluminado de uma tenda de tecido', 'Êx 28:1-4; Nm 17:8'),
    ('farao-exodo', 'Faraó', 'sentado no trono, de braços cruzados e olhar teimoso, com rãs pequenas no chão do salão', 'rei egípcio com coroa e trajes reais egípcios', 'salão egípcio com colunas pintadas', 'Êx 5:2; 8:2-6'),
    ('miria', 'Miriã', 'tocando um tamborim erguido e dançando de alegria, com mulheres dançando atrás', 'mulher madura, profetisa, véu claro e manto rosa', 'margem do mar ao sol, com ondas calmas', 'Êx 15:20-21'),
    ('jetro', 'Jetro', 'conversando com Moisés, apontando com a mão aberta como quem dá conselho', 'homem idoso e sábio, sacerdote de Midiã, de barba branca e turbante', 'entrada de tenda no deserto ao entardecer', 'Êx 18:13-24'),
    ('josue', 'Josué', 'de pé na entrada de uma tenda, esperando com atenção, segurando um cajado', 'homem jovem e forte, com túnica e cinto de couro', 'acampamento no deserto com a tenda do encontro', 'Êx 33:11'),
    ('bezalel', 'Bezalel', 'trabalhando com cuidado numa peça de ouro com ferramentas de artesão', 'homem adulto, artesão habilidoso, avental de couro', 'oficina simples com tecidos coloridos, madeira e metais', 'Êx 31:2-5'),
    ('nadabe', 'Nadabe e Abiú', 'segurando cada um um incensário com fumaça, de pé diante de uma tenda', 'dois jovens sacerdotes com túnicas brancas', 'entrada da tenda do encontro, com céu cinzento ao fundo; cena calma, sem fogo sobre pessoas', 'Lv 10:1'),
    ('eleazar', 'Eleazar', 'recebendo as vestes de sacerdote, com Moisés colocando-as sobre seus ombros', 'homem adulto, filho de Arão', 'alto de um monte com vista do deserto', 'Nm 20:25-28'),
    ('calebe', 'Calebe', 'ajudando a carregar numa vara, com outro homem, um cacho de uvas enorme', 'homem forte, de barba, olhar confiante', 'vale verde de Escol com videiras', 'Nm 13:23,30'),
    ('core', 'Corá', 'de pé, com a mão erguida, falando em tom de protesto diante de outros homens', 'homem adulto, levita, com túnica', 'acampamento no deserto; cena tensa, sem destruição', 'Nm 16:1-3'),
    ('balaao', 'Balaão', 'montado numa jumenta que vira a cabeça para ele e fala, Balaão espantado', 'homem de meia-idade, adivinho, com manto', 'caminho estreito entre vinhas e muros de pedra', 'Nm 22:23-28'),
    ('fineias', 'Fineias', 'de pé diante da tenda, sereno, com luz suave sobre ele', 'homem jovem, sacerdote, com túnica branca e cinto azul', 'acampamento no deserto ao entardecer; sem armas', 'Nm 25:11-13'),
    ('filhas-zelofeade', 'Filhas de Zelofeade', 'cinco irmãs de pé lado a lado, firmes e respeitosas, diante de um ancião', 'cinco moças jovens com véus de cores diferentes', 'entrada da tenda do encontro', 'Nm 27:1-7'),
    # ── Era 3: Josué e Juízes ──
    ('raabe', 'Raabe', 'à janela de uma casa construída no muro da cidade, amarrando um cordão vermelho no parapeito', 'mulher adulta, de olhar decidido', 'muro de pedra de Jericó ao entardecer, com palmeiras ao longe', 'Js 2:15,18,21'),
    ('aca', 'Acã', 'ajoelhado dentro de uma tenda, cobrindo às pressas com terra uma capa bordada e um brilho de ouro, olhando por cima do ombro', 'homem adulto, apreensivo', 'interior de uma tenda à luz fraca', 'Js 7:21'),
    ('acsa', 'Acsa', 'descendo de um jumento e apontando para uma fonte de água que brota entre as pedras', 'mulher jovem, com véu', 'terra seca com uma fonte e um fio de verde ao redor', 'Js 15:18-19'),
    ('otniel', 'Otniel', 'de pé com escudo e espada, olhando para o horizonte, com uma luz suave descendo sobre ele', 'guerreiro jovem e forte', 'colinas de Judá ao amanhecer', 'Jz 3:9-10'),
    ('eude', 'Eúde', 'segurando com a mão esquerda uma espada curta de dois gumes, a mão direita vazia', 'homem adulto, canhoto, de expressão concentrada', 'estrada de terra diante de um palácio de pedra', 'Jz 3:15-16'),
    ('debora', 'Débora', 'sentada debaixo de uma palmeira, com a mão erguida enquanto fala a pessoas que esperam diante dela', 'mulher madura, de olhar sábio e firme', 'monte de Efraim com colinas e céu claro', 'Jz 4:4-5'),
    ('baraque', 'Baraque', 'descendo a encosta de um monte à frente de soldados, com a espada erguida', 'guerreiro adulto', 'monte Tabor arredondado e um vale com um ribeiro', 'Jz 4:14'),
    ('jael', 'Jael', 'de pé à entrada de uma tenda de pele, segurando uma tigela de leite, olhar firme', 'mulher adulta', 'acampamento de tendas no fim da tarde', 'Jz 4:17-19; 5:24-25'),
    ('gideao', 'Gideão', 'erguendo uma tocha que sai de dentro de um cântaro de barro quebrado, com uma trombeta de chifre na outra mão', 'homem jovem, de expressão corajosa', 'acampamento inimigo à noite no vale, com tendas ao longe', 'Jz 7:16,20'),
    ('abimeleque-jz', 'Abimeleque', 'de pé com uma coroa simples na cabeça, ao lado de um espinheiro', 'homem adulto, de olhar ambicioso', 'cidade de Siquém entre dois montes', 'Jz 9:6,14-15'),
    ('jotao', 'Jotão', 'no alto de um monte, falando em voz alta e apontando para árvores: oliveira, figueira, videira e um espinheiro', 'homem jovem', 'cume do monte Gerizim com a cidade lá embaixo', 'Jz 9:7-15'),
    ('jefte', 'Jefté', 'de pé com as roupas rasgadas no peito, as mãos na cabeça, voltando para casa', 'guerreiro adulto, de expressão abalada', 'porta de uma casa de pedra em Mispá', 'Jz 11:34-35'),
    ('filha-jefte', 'Filha de Jefté', 'saindo pela porta de casa dançando com um tamborim nas mãos', 'moça jovem, alegre', 'pátio de uma casa de pedra com flores', 'Jz 11:34'),
    ('manoa', 'Manoá e sua mulher', 'ajoelhados lado a lado diante de um altar de pedra de onde sobe uma chama alta para o céu', 'casal adulto', 'campo aberto ao entardecer', 'Jz 13:19-20'),
    ('sansao', 'Sansão', 'empurrando com os braços abertos duas colunas grandes de pedra', 'homem jovem e muito forte, cabelo longo em tranças', 'interior de um grande salão de pedra', 'Jz 16:17,29-30'),
    ('dalila', 'Dalila', 'sentada, olhando de lado para uma bolsa de moedas de prata no colo', 'mulher jovem', 'interior de uma casa com cortinas, à luz de lamparina', 'Jz 16:4-5,18'),
    ('mica', 'Mica', 'de pé diante de um pequeno santuário dentro de casa, com uma imagem de metal sobre uma prateleira', 'homem adulto', 'cômodo de uma casa nos montes de Efraim', 'Jz 17:4-5'),
    ('noemi', 'Noemi', 'segurando um bebê no colo, com o rosto cheio de alegria', 'mulher idosa', 'pátio de uma casa em Belém com mulheres ao redor, só contornos', 'Rt 4:16-17'),
    ('rute', 'Rute', 'recolhendo espigas de cevada no campo, com um feixe nos braços', 'mulher jovem moabita, com véu simples', 'campo dourado de cevada com ceifeiros ao longe', 'Rt 2:2-3'),
    ('boaz', 'Boaz', 'na porta da cidade, entregando uma sandália a outro homem diante de anciãos sentados', 'homem maduro, de aparência próspera', 'porta da cidade de Belém, de pedra', 'Rt 4:1-2,7-9'),
]

# ─────────────────────────── SELOS (objetos e palavras-chave) ───────────────────────────
# (arquivo, nome, objeto detalhado, referência)
SELOS = [
    ('luz', 'Luz', 'um sol-estrela estilizado: um círculo central amarelo-ouro intenso com um pequeno centro branco, e 12 raios pontudos alternando laranja forte e amarelo-ouro, todos com contorno marrom-escuro, como um emblema de luz rompendo; ao redor, 4 pequenas faíscas em forma de estrela de quatro pontas, também com contorno', 'Gn 1:3-4'),
    ('arvore', 'Árvore da vida', 'uma árvore frondosa de tronco forte e raízes visíveis, copa verde arredondada; entre as folhas, 7 ou 8 frutos que são pequenas esferas lisas de OURO brilhante, com um pontinho de luz branca em cada uma, SEM cabinho, SEM folhinha e SEM manchas, parecendo joias e não frutas comuns. PROIBIDO: maçãs, laranjas, cerejas, peras ou qualquer fruta conhecida (o texto bíblico não diz qual era o fruto)', 'Gn 2:9; 3:24'),
    ('arca', 'Arca', 'um grande barco de madeira em forma de caixa, com um telhado, uma porta na lateral e uma abertura no alto, flutuando sobre ondas calmas', 'Gn 6:14-16'),
    ('arcoiris', 'Arco nas nuvens', 'um arco-íris completo sobre nuvens brancas e fofas, com gotas de chuva brilhando', 'Gn 9:13-15'),
    ('estrelas', 'Estrelas', 'um grupo de estrelas douradas de vários tamanhos, brilhando, agrupadas de forma harmoniosa, sem lua e sem céu ao fundo', 'Gn 15:5'),
    ('carneiro', 'Carneiro', 'um carneiro de lã clara com chifres curvos presos num arbusto', 'Gn 22:13-14'),
    ('poco', 'Poço', 'um poço antigo do Oriente Próximo: só uma mureta baixa e redonda de pedras, rente ao chão, com um cântaro de barro apoiado na borda e água azul brilhando lá dentro; ao lado, um cocho comprido de pedra (bebedouro) com um pouco de água. SEM telhado, SEM manivela, SEM balde e SEM estrutura de madeira por cima (isso é de poço europeu, não da época de Rebeca)', 'Gn 24:11-20'),
    ('escada', 'Escada', 'uma escada dourada, alta e estreita, quase vertical, com a base apoiada num chão de pedras e o topo entrando nas nuvens; nela, 3 pequenas silhuetas de luz branca e dourada, simples, sem rosto, uma subindo e duas descendo. As silhuetas NÃO têm asas, NÃO têm auréola e NÃO são bebês nem crianças (o texto só diz que os anjos de Deus subiam e desciam). Poucos elementos, forma clara em tamanho pequeno', 'Gn 28:12-15'),
    ('tunica', 'Túnica', 'uma túnica longa e especial, de mangas compridas, bem ornamentada, estendida como se estivesse pendurada', 'Gn 37:3'),
    ('espiga', 'Espigas', 'EXATAMENTE 7 (sete) espigas de trigo cheias e douradas, bem separadas em leque para dar para contar uma a uma, amarradas em feixe na base. O número sete importa (Gn 41: sete espigas, sete anos): não desenhar 5, 6 nem 8', 'Gn 41:5-7,26'),
    ('ouro', 'Ouro provado', 'um cadinho antigo de barro (pequeno pote grosso, cor terracota) sobre brasas vermelhas e chamas laranja, com ouro derretido brilhando dentro; ao lado do cadinho, três pepitas de ouro já purificadas. É o ouro provado no fogo (Jó 23:10). SEM barras de ouro modernas, SEM moedas', 'Jó 23:10'),
    ('redemoinho', 'Redemoinho', 'um redemoinho de vento VISTO DE LADO, em forma de funil: largo em cima, entre nuvens escuras de tempestade, e afinando até tocar o chão de areia, com faixas de vento girando em volta e poeira levantando na base; dentro do funil, uma luz forte e serena brilhando. NÃO desenhar visto de cima (espiral de galáxia ou furacão)', 'Jó 38:1'),
    # ── Era 2: Moisés ──
    ('sarca', 'Sarça ardente', 'um pequeno arbusto do deserto envolto em chamas douradas, com os galhos e folhas inteiros, sem queimar', 'Êx 3:2'),
    ('pao', 'Pão sem fermento', 'uma pilha de 3 pães MUITO finos e achatados, sem fermento (finos como uma folha, quase como uma panqueca seca e crocante, com bolhinhas tostadas), sobre um pano de linho dobrado, e ao lado um pequeno maço de ervas verdes (ervas amargas, Êx 12:8). NÃO desenhar pão grosso, fofo, estufado ou de padaria: sem fermento o pão não cresce', 'Êx 12:8,15'),
    ('coluna', 'Coluna de nuvem e fogo', 'um emblema dividido ao meio na vertical, em formato de cápsula alta: na metade da ESQUERDA é dia (céu azul-claro) e sobe do deserto uma coluna alta e reta de nuvem branca, como um pilar; na metade da DIREITA é noite (céu azul-escuro com estrelinhas) e sobe uma coluna alta e reta de fogo laranja, também como um pilar. Embaixo, uma faixa de areia com 2 ou 3 tendas pequenas. As colunas são finas, retas e altas, do chão até o alto. NÃO desenhar fogueira, NÃO desenhar fumaça saindo do fogo e NÃO desenhar nuvem em forma de cogumelo', 'Êx 13:21-22'),
    ('cajado', 'Cajado erguido', 'um cajado de pastor de madeira, em pé, com ondas do mar se abrindo dos dois lados', 'Êx 14:16,21'),
    ('mana', 'Maná', 'pequenos grãos brancos e redondos espalhados como geada sobre a areia, com brilho suave', 'Êx 16:14,31'),
    ('arcaalianca', 'Arca da aliança', 'um baú retangular de ouro, mais comprido que alto, com uma argola de ouro em cada um dos quatro pés e duas varas compridas também douradas passando pelas argolas dos lados. Na tampa, nas duas pontas, dois querubins de ouro AJOELHADOS um de frente para o outro, de rosto inclinado para baixo olhando a tampa, com as asas grandes abertas para cima e para a frente, as pontas quase se tocando sobre o centro (Êx 25:18-20). Os querubins são figuras adultas e estilizadas, NÃO são bebês, NÃO são anjinhos gorduchos de igreja e NÃO se dão as mãos. Contorno escuro forte para o ouro se destacar', 'Êx 25:10-22'),
    ('tabuas', 'Tábuas da Lei', 'duas tábuas de pedra lado a lado, de topo arredondado, em pedra clara cor de areia (bege e ocre, NÃO cinza), soltas e em pé, sem chão, sem grama e sem pedras em volta; cada tábua com várias linhas de sinais gravados, pequenos traços abstratos que lembram escrita antiga (escritas pelo dedo de Deus, Êx 31:18), sem letras legíveis e SEM números romanos. Bordas lisas, SEM rachaduras. NÃO pode parecer lápide de cemitério', 'Êx 31:18; 34:1'),
    ('trombetas', 'Trombetas de prata', 'duas trombetas de prata batida, longas e retas, cruzadas em X. CADA trombeta tem uma boca larga (campana) em UMA ponta só e um bocal pequeno e estreito na outra ponta, como trombeta de verdade: as duas campanas viradas para cima, os dois bocais para baixo. NÃO desenhar campana nas duas pontas do mesmo tubo. Sem válvulas e sem curvas (trombeta antiga, reta)', 'Nm 10:1-2'),
    ('uvas', 'Cacho de Escol', 'um cacho de uvas enorme pendurado numa vara de madeira', 'Nm 13:23'),
    ('vara', 'Vara que floresceu', 'uma vara de madeira com brotos, flores brancas e amêndoas', 'Nm 17:8'),
    ('serpente', 'Serpente de bronze', 'uma serpente feita de METAL (bronze polido, cor cobre-esverdeada com reflexos), como uma estátua rígida, enrolada no alto de uma haste de madeira comprida e reta, fincada na areia do deserto. A haste é UM pau só, vertical, SEM travessa: NÃO desenhar cruz. A serpente NÃO é um bicho vivo nem fofo: sem olhos expressivos, sem sorriso, sem cara de desenho animado; é um objeto de metal moldado (Nm 21:8-9)', 'Nm 21:8-9'),
    ('nebo', 'Monte Nebo', 'um monte com o cume iluminado e, ao longe, um vale verde com um rio', 'Dt 34:1-4'),
    # ── Era 3: Josué e Juízes ──
    ('cordao', 'Cordão vermelho', 'um cordão de fio vermelho-escarlate enrolado, com a ponta solta', 'Js 2:18,21'),
    ('pedras', 'Doze pedras', 'um monte de pedras de rio lisas e arredondadas, empilhadas com cuidado', 'Js 4:3-8,20'),
    ('muralha', 'Muro de Jericó', 'um trecho de muralha de pedra e tijolos desmoronando, com pedras caindo', 'Js 6:20'),
    ('sol', 'Sol parado', 'um sol dourado brilhante parado no alto, com uma lua pálida ao lado', 'Js 10:12-13'),
    ('hebrom', 'Monte de Calebe', 'um monte rochoso com uma cidade de pedra no alto', 'Js 14:12-13'),
    ('testemunho', 'Pedra do testemunho', 'uma grande pedra em pé debaixo de um carvalho', 'Js 24:26-27'),
    ('palmeira', 'Palmeira de Débora', 'uma palmeira alta e frondosa, com um banco de pedra junto ao tronco', 'Jz 4:5'),
    ('la', 'Lã de Gideão', 'um velo de lã branca estendido no chão, coberto de gotas de orvalho brilhando', 'Jz 6:37-38'),
    ('cantaro', 'Cântaro e tocha', 'um cântaro de barro quebrado com uma tocha acesa saindo de dentro', 'Jz 7:16,20'),
    ('favo', 'Mel no leão', 'um favo de mel dourado escorrendo, com algumas abelhas ao redor', 'Jz 14:8-9'),
    ('cevada', 'Cevada de Boaz', 'um feixe de espigas de cevada douradas amarrado com um laço de palha', 'Rt 2:15-17; 3:15'),
]


def bloco(arq, titulo, ref, texto):
    return f"### `{arq}` — {titulo}\nConferir: {ref}\n\n```\n{texto}\n```\n"


def prompt_avatar(a):
    arq, nome, momento, cena, expr, cores, ref = a
    return (f"Crie uma {ESTILO}. Avatar do personagem bíblico {nome} ({momento} da jornada). "
            f"PERSONAGEM: {cena}. EXPRESSÃO: {expr}. ROUPA E CORES: {cores}; {TRAJES}. "
            "COMPOSIÇÃO: retrato próximo, só do peito para cima (busto), personagem centralizado e de frente; a cabeça é grande, "
            "ocupando cerca de 40% da altura da imagem; braços e objetos ficam junto ao corpo, nunca abertos nem perto das bordas; "
            "pensado para ser recortado em círculo e reconhecido mesmo bem pequeno. "
            "FUNDO: branco liso e puro (#FFFFFF), sem cenário, sem chão, sem sombra projetada e sem degradê. "
            f"O mesmo traço e a mesma paleta suave usados para todos os personagens da série. "
            f"EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")


def raridades():
    """Lê a raridade de cada carta direto de data/era-*.js (fonte única)."""
    import glob, re
    rar = {}
    for f in sorted(glob.glob('data/era-*.js')):
        txt = open(f, encoding='utf-8').read()
        bloco_cartas = txt[txt.index('export const CARTAS'):]
        bloco_cartas = bloco_cartas[:bloco_cartas.index('};')]
        for m in re.finditer(r"^\s*'?([\w-]+)'?:\s*\['[^']*',\s*'(\w+)'", bloco_cartas, re.M):
            rar[m.group(1)] = m.group(2)
    return rar


RARIDADE = raridades()
NOME_RAR = {'comum': 'comum', 'rara': 'rara', 'epica': 'épica', 'lendaria': 'lendária'}

# Lote 1 (as 12 primeiras do Álbum), com a cena reescrita para a escala de raridade.
# (cena, aparência, cenário, referência) — substitui a tupla de CARTAS.
CENA_LOTE1 = {
    'adao': ('de pé no centro do jardim, com a mão estendida, dando nome aos animais que se aproximam em paz ao redor dele: '
             'um leão deitado, ovelhas, um cervo, pássaros coloridos pousando e um elefante ao fundo',
             'homem adulto, forte e sereno, vestido com uma túnica simples de pele',
             'o jardim do Éden exuberante, com árvores frutíferas enormes e um rio de águas cristalinas', 'Gn 2:15,19-20; 3:21'),
    'eva': ('segurando com ternura um bebê recém-nascido envolto em pano, de pé no alto de uma colina, olhar esperançoso',
            'mulher adulta de cabelos longos ao vento, vestida com uma túnica simples de pele',
            'imensa paisagem abaixo dela com rios serpenteando e, bem distante no horizonte, um jardim exuberante brilhando; '
            'céu enorme ao nascer do sol, com nuvens iluminadas em dourado e rosa', 'Gn 3:20-21; 4:1'),
    'caim': ('segurando nos braços feixes de grãos e frutos do campo como oferta',
             'homem adulto, lavrador, de mãos fortes, com roupas de trabalho no campo',
             'campo cultivado ao entardecer, com sulcos de terra arada e trigo maduro', 'Gn 4:2-3'),
    'abel': ('caminhando em direção a um altar de pedras levando nos braços um cordeiro branco, o melhor do seu rebanho; '
             'a fumaça do altar sobe reta para o céu',
             'jovem pastor de ovelhas, rosto gentil e cheio de gratidão',
             'colinas verdes ao amanhecer com ovelhas pastando; um feixe de luz dourada atravessa as nuvens e ilumina Abel e o altar',
             'Gn 4:2,4'),
    'sete': ('de pé num campo aberto, rosto erguido e uma das mãos sobre o peito, invocando o nome do Senhor, com a família pequena atrás dele',
             'homem jovem de cabelo curto e encaracolado, barba curta, expressão serena, túnica de lã verde-oliva com manto marrom-escuro '
             '(nada de branco)',
             'campo ao nascer do sol, com raios de luz rompendo as nuvens sobre ele', 'Gn 4:25-26'),
    'enoque': ('caminhando sozinho e em paz por uma trilha longa no alto das colinas, em direção a um horizonte imenso e luminoso',
               'homem idoso de barba, com cajado',
               'colinas sem fim e um céu gigantesco dourado ao amanhecer, com uma luz suave e forte no fim do caminho',
               'Gn 5:22-24'),
    'matusalem': ('caminhando devagar, apoiado num cajado, entre os filhos e filhas da família, que o acompanham com carinho',
                  'homem muito, muito idoso, de barba branca longuíssima',
                  'acampamento de tendas ao pôr do sol, com a luz quente recortando a silhueta dele', 'Gn 5:25-27'),
    'noe': ('braços levemente abertos e rosto erguido para o céu em gratidão, ao lado de um altar de pedras com fumaça subindo; '
            'atrás dele a arca, enorme, de madeira, encalhada, com a porta aberta, e os animais descendo aos pares '
            '(elefantes, leões, girafas, ovelhas, pássaros voando); a família de Noé pequena ao fundo',
            'homem idoso de barba branca longa',
            'o alto dos montes de Ararate logo depois da chuva, com um enorme arco-íris cruzando o céu de ponta a ponta',
            'Gn 8:4,18-20; 9:12-16'),
    'sem': ('de pé, olhar tranquilo, com a mão sobre o peito em gratidão',
            'homem adulto de barba escura, filho de Noé',
            'encosta de montanha verde depois da chuva, com a arca pequena e distante ao fundo', 'Gn 6:10; 9:18,26'),
    'ninrode': ('de pé, confiante, segurando um grande arco de madeira, com uma aljava de flechas nas costas',
                'homem forte e imponente, caçador, de ombros largos e braços musculosos, pele morena queimada de sol, cabelo preto '
                'longo preso atrás, barba preta curta e aparada, expressão altiva e confiante, túnica curta de couro com uma pele '
                'de animal sobre um dos ombros (bem diferente dos outros personagens: nada de túnica longa nem barba cheia)',
                'planície com as muralhas de uma cidade antiga ao longe', 'Gn 10:8-10'),
    'tera': ('apoiado num cajado de madeira, olhando para o horizonte, pronto para partir em viagem',
             'homem idoso de barba branca longa, rosto sereno e determinado',
             'fim de tarde nos arredores de Ur dos caldeus, com o zigurate de tijolos ao longe, palmeiras e alguns jumentos '
             'carregados ao fundo', 'Gn 11:31'),
    'abraao': ('do lado de fora da tenda, à noite, com o rosto erguido e uma das mãos apontando para o céu, contando as estrelas',
               'homem idoso de rosto forte e marcado, barba grisalha (branca com fios escuros) cheia e não muito longa, cabeça coberta '
               'por um turbante claro, manto listrado azul-índigo e creme sobre túnica clara (bem diferente de Noé e de Terá, '
               'que usam marrom)',
               'deserto à noite sob um céu imenso repleto de estrelas e da Via Láctea, tenda iluminada por dentro atrás dele, '
               'luz dourada e prateada sobre o rosto', 'Gn 15:5; 17:5'),
}
JA_GERADAS = {'adao', 'eva', 'caim', 'sete', 'enoque', 'matusalem', 'sem', 'ninrode', 'tera', 'abel', 'noe'}


def prompt_carta(c):
    arq = c[0]
    nome = c[1]
    cena, aparencia, cenario, ref = CENA_LOTE1.get(arq, c[2:6])
    rar = RARIDADE.get(arq, 'comum')
    return (f"Crie {ESTILO_CARTA}. PERSONAGEM: {nome}, {aparencia}, {cena}. {TRAJES.capitalize()}. "
            f"CENÁRIO: {cenario}. {COMPOSICAO[rar]}. {FAIXAS}. "
            "Deus nunca aparece como figura humana; quando houver presença divina, só luz. "
            f"EVITE: {EVITE_CARTA}. FORMATO: vertical 3:4, alta resolução.")


def escrever_cartas():
    intro = ("Uma carta para cada pessoa que aparece nas sessões. Estilo A (pintura de livro ilustrado premium), "
             "formato vertical 3:4. A raridade aparece na própria arte: **comum** é retrato calmo, **rara** tem ação e luz "
             "marcante, **épica** é plano aberto com céu dramático e **lendária** é o momento mais marcante do personagem.")
    out = f"""# Prompts das cartas (pessoas da Bíblia) — A Jornada

{intro}

**Como usar:** copie um bloco inteiro e cole no Gemini. Se a imagem vier quadrada, peça: *"refaça no formato vertical 3:4"*.
Salve com o nome exato do título (ex.: `adao.png`) em **Projetos/A_Jornada/01_Imagens/Cartas**.
Para o traço não variar: uma conversa do Gemini por lote, anexando uma carta já aprovada (ex.: `noe.png`) e pedindo
*"mesmo estilo desta imagem"*. **Conferir** mostra onde a cena está no texto bíblico.

---

## Lote 1 — as 12 primeiras do Álbum

"""
    lote = [c for c in CARTAS if c[0] in CENA_LOTE1]
    resto = [c for c in CARTAS if c[0] not in CENA_LOTE1]
    out += "| Carta | Raridade | Situação |\n|---|---|---|\n"
    for c in lote:
        sit = "✅ pronta (no app)" if c[0] in JA_GERADAS else "a gerar"
        out += f"| {c[1]} | {NOME_RAR[RARIDADE.get(c[0], 'comum')]} | {sit} |\n"
    out += "\n"
    for c in lote:
        ref = CENA_LOTE1[c[0]][3]
        out += bloco(c[0] + '.png', f"{c[1]} ({NOME_RAR[RARIDADE.get(c[0], 'comum')]})", ref, prompt_carta(c)) + "\n"
    out += "---\n\n## Demais cartas (próximos lotes; as cenas ainda serão revisadas lote a lote)\n\n"
    for c in resto:
        out += bloco(c[0] + '.png', f"{c[1]} ({NOME_RAR[RARIDADE.get(c[0], 'comum')]})", c[5], prompt_carta(c)) + "\n"
    open('PROMPTS-CARTAS.md', 'w', encoding='utf-8').write(out)
    print('PROMPTS-CARTAS.md', len(CARTAS))


def prompt_selo(s):
    arq, nome, objeto, ref = s
    return (f"Crie uma {ESTILO}, como um ícone-emblema para um selo colecionável chamado \"{nome}\". "
            f"OBJETO: {objeto}. COMPOSIÇÃO: só o objeto, centralizado, ocupando cerca de 75% da imagem, "
            "forma clara e reconhecível mesmo em tamanho pequeno, sem pessoas (a não ser que estejam descritas acima). "
            "CORES: saturadas e fortes, com contorno marrom-escuro bem definido em volta de tudo, para destacar sobre uma medalha dourada "
            "(evite amarelo-claro e branco como cor principal). SEM brilho difuso, sem halo e sem névoa em volta do objeto: as bordas "
            "terminam limpas no branco. FUNDO: branco liso e puro (#FFFFFF), sem moldura e sem círculo "
            f"(o app coloca o objeto sobre uma medalha dourada). EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")


CABECALHO = """# {titulo} — A Jornada

{intro}

**Como usar:** copie um bloco inteiro e cole no Gemini. Cada prompt já traz o estilo, a composição e o fundo.
Salve a imagem com o nome exato do título (ex.: `{exemplo}`) na pasta **Projetos/A_Jornada/01_Imagens/{pasta}** do Drive.
Gere todas na mesma conversa do Gemini para manter o traço igual. **Conferir** mostra onde a cena está no texto bíblico.

---

"""


def escrever(nome_arq, titulo, intro, exemplo, pasta, itens, fn, rotulo):
    out = CABECALHO.format(titulo=titulo, intro=intro, exemplo=exemplo, pasta=pasta)
    for i in itens:
        out += bloco(i[0] + '.png', rotulo(i), i[-1], fn(i)) + "\n"
    open(nome_arq, 'w', encoding='utf-8').write(out)
    print(nome_arq, len(itens))


if __name__ == '__main__':
    escrever('PROMPTS-AVATARES.md', 'Prompts dos personagens do jogador',
             'Toda jornada começa no pó da terra (Gn 2:7), desenhado pelo próprio app. Ao concluir a primeira sessão, '
             'o viajante escolhe um destes 10 personagens. Cada um tem três imagens: **inicial** (níveis 1–7), '
             '**mediana** (`-meio`, níveis 8–19) e **final** (`-final`, nível 20+). O app desenha atrás o cenário '
             'de cada estágio, por isso o fundo é branco liso.', 'davi-meio.png', 'Avatares',
             AVATARES, prompt_avatar, lambda a: f"{a[1]} ({a[2]})")
    po = (f"Crie uma {ESTILO}. Gênesis 2:7, o instante antes do fôlego de vida: uma figura humana ADULTA (proporções de um "
          "homem jovem, ombros e braços de adulto, não de bebê nem de criança), modelada em barro avermelhado e terra úmida, "
          "sentada com os joelhos dobrados junto ao peito e os braços envolvendo as pernas, cabeça levemente inclinada para baixo, "
          "olhos fechados, rosto simples e sereno, sem cabelo definido (é só barro). Ainda sem vida: todo o corpo é de terra, com "
          "textura de barro alisado à mão, pequenas rachaduras finas, marcas de dedos e alguns grãos de pó se soltando das bordas. "
          "Sem roupa visível porque é só uma forma de barro, sem nenhum detalhe anatômico. "
          "SEM raio de luz, sem brilho e sem halo ao redor (o app desenha a luz e o cenário). "
          "CORES: terracota, ocre e marrom quente. COMPOSIÇÃO: enquadramento fechado, a figura ocupa cerca de 85% da altura da imagem, "
          "centralizada, encostada na parte de baixo, sem espaço vazio em cima. Não mostrar Deus, mãos divinas nem rosto no céu. "
          f"FUNDO: branco liso e puro (#FFFFFF), sem chão e sem sombra no chão. EVITE: {EVITE}, bebê, criança. FORMATO: quadrado 1:1, alta resolução.")
    with open('PROMPTS-AVATARES.md', 'a', encoding='utf-8') as f:
        f.write("---\n\n## Opcional: o começo da jornada\n\n" + bloco('po.png', 'Pó da terra (todos começam assim)', 'Gn 2:7', po))
    escrever_cartas()
    escrever('PROMPTS-SELOS.md', 'Prompts dos Selos da Palavra',
             'Os selos são objetos e palavras-chave do texto. A imagem é só o objeto, em fundo branco; '
             'o app coloca sobre uma medalha dourada.', 'luz.png', 'Selos', SELOS, prompt_selo, lambda s: s[1])
    natal = (f"Crie uma {ESTILO}, como um emblema para um selo colecionável especial chamado \"Natal 2026\". "
             "OBJETO: uma manjedoura simples de madeira cheia de feno dourado, VAZIA: sem pano, sem lençol, sem trouxinha e sem nenhum volume ou forma deitada sobre o feno (nada que pareça um corpo coberto), "
             "e acima dela uma estrela dourada de oito pontas brilhando com raios suaves; um raminho verde com duas frutinhas douradas na base. "
             "COMPOSIÇÃO: tudo centralizado, ocupando cerca de 75% da imagem, forma clara e reconhecível mesmo em tamanho pequeno, sem pessoas. "
             "CORES: madeira quente, feno dourado, estrela dourada brilhante, verde do ramo. FUNDO: branco liso e puro (#FFFFFF), sem moldura e sem círculo "
             f"(o app coloca o emblema sobre uma medalha vermelha com borda dourada). EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")
    anonovo = (f"Crie uma {ESTILO}, como um emblema para um selo colecionável especial chamado \"Ano novo 2027\". "
               "OBJETO: um sol nascendo laranja e amarelo-ouro atrás de duas colinas de areia do deserto, com raios curtos e definidos; "
               "descendo das colinas, um riacho azul que corta a areia, e na margem um broto verde novo com duas folhas "
               "(misericórdias novas a cada manhã e rios no deserto: Lm 3:23; Is 43:19). "
               "COMPOSIÇÃO: tudo centralizado, ocupando cerca de 75% da imagem, forma clara mesmo pequena, sem pessoas, sem texto e o sol SEM rosto (sem olhos, sem boca: é só um sol). "
               "CORES: laranja e ouro do sol, areia bege, azul do riacho, verde do broto, contorno marrom-escuro forte. "
               "FUNDO: branco liso e puro (#FFFFFF), sem moldura e sem círculo (o app coloca o emblema sobre uma medalha). "
               f"EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")
    pascoa = (f"Crie uma {ESTILO}, como um emblema para um selo colecionável especial chamado \"Páscoa 2027\". "
              "OBJETO: um túmulo antigo escavado numa rocha cinza-clara, com a entrada aberta e escura por dentro (VAZIO, sem ninguém), "
              "e ao lado uma grande pedra redonda e achatada, rolada para fora da entrada; atrás da rocha, o sol nascendo em laranja e "
              "dourado (ao clarear do primeiro dia da semana, Mt 28:1-6); na base, um pouco de grama verde e duas florzinhas brancas. "
              "SEM pessoas, SEM anjo, SEM cruz e SEM texto. COMPOSIÇÃO: tudo centralizado, ocupando cerca de 75% da imagem, forma clara mesmo pequena. "
              "CORES: rocha cinza e bege, sol laranja e ouro, grama verde, contorno marrom-escuro forte. "
              "FUNDO: branco liso e puro (#FFFFFF), sem moldura e sem círculo (o app coloca o emblema sobre uma medalha). "
              f"EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")
    pentecostes = (f"Crie uma {ESTILO}, como um emblema para um selo colecionável especial chamado \"Pentecostes 2027\". "
                   "OBJETO: várias chamas pequenas em forma de língua de fogo (laranja, vermelho e amarelo-ouro), pairando no ar em leque, "
                   "acima de faixas curvas de vento azul-claro que giram por baixo delas como um sopro forte (At 2:2-3). "
                   "SEM pessoas, SEM pomba, SEM texto e SEM fogueira (o fogo não sai de lenha: são línguas de fogo no ar). "
                   "COMPOSIÇÃO: tudo centralizado, ocupando cerca de 75% da imagem, forma clara mesmo pequena. "
                   "CORES: laranja, vermelho e ouro das chamas; azul-claro e branco do vento; contorno marrom-escuro forte. "
                   "FUNDO: branco liso e puro (#FFFFFF), sem moldura e sem círculo (o app coloca o emblema sobre uma medalha). "
                   f"EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")
    purim = (f"Crie uma {ESTILO}, como um emblema para um selo colecionável especial chamado \"Purim 2027\". "
            "OBJETO: uma coroa de rainha dourada com pedras vermelhas, apoiada ao lado de um cetro de ouro comprido com a ponta arredondada (Et 5:2), sobre um rolo de pergaminho aberto (a carta que mandou celebrar Purim, Et 9:20-22). SEM pessoas, SEM rosto e SEM texto legível no pergaminho (apenas traços). "
            "COMPOSIÇÃO: tudo centralizado, ocupando cerca de 75% da imagem, forma clara mesmo pequena. "
            "CORES: fortes e quentes, contorno marrom-escuro forte. "
            "FUNDO: branco liso e puro (#FFFFFF), sem moldura e sem círculo (o app coloca o emblema sobre uma medalha). "
            f"EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")
    tabern = (f"Crie uma {ESTILO}, como um emblema para um selo colecionável especial chamado \"Tabernáculos 2027\". "
            "OBJETO: uma pequena cabana feita de galhos e folhas de palmeira, com o teto de ramos verdes deixando ver frestas, ao lado de um ramo de palmeira e um ramo de salgueiro (Lv 23:40); acima, algumas estrelinhas no céu. SEM pessoas e SEM texto. "
            "COMPOSIÇÃO: tudo centralizado, ocupando cerca de 75% da imagem, forma clara mesmo pequena. "
            "CORES: fortes e quentes, contorno marrom-escuro forte. "
            "FUNDO: branco liso e puro (#FFFFFF), sem moldura e sem círculo (o app coloca o emblema sobre uma medalha). "
            f"EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")
    maes = (f"Crie uma {ESTILO}, como um emblema para um selo colecionável especial chamado \"Dia das Mães 2027\". "
            "OBJETO: um cesto pequeno e oval de juncos trançados, vedado com piche escuro, entre juncos verdes à beira de um rio azul (o cesto em que a mãe de Moisés o colocou, Êx 2:3), com um pequeno coração vermelho pairando acima. O cesto está fechado: SEM bebê visível, SEM pessoas e SEM texto. "
            "COMPOSIÇÃO: tudo centralizado, ocupando cerca de 75% da imagem, forma clara mesmo pequena. "
            "CORES: fortes e quentes, contorno marrom-escuro forte. "
            "FUNDO: branco liso e puro (#FFFFFF), sem moldura e sem círculo (o app coloca o emblema sobre uma medalha). "
            f"EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")
    pais = (f"Crie uma {ESTILO}, como um emblema para um selo colecionável especial chamado \"Dia dos Pais 2027\". "
            "OBJETO: um par de sandálias de couro simples, um anel de ouro e uma túnica dobrada (a melhor roupa), arrumados juntos como presentes de boas-vindas do pai ao filho que voltou (Lc 15:22). SEM pessoas e SEM texto. "
            "COMPOSIÇÃO: tudo centralizado, ocupando cerca de 75% da imagem, forma clara mesmo pequena. "
            "CORES: fortes e quentes, contorno marrom-escuro forte. "
            "FUNDO: branco liso e puro (#FFFFFF), sem moldura e sem círculo (o app coloca o emblema sobre uma medalha). "
            f"EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")
    criancas = (f"Crie uma {ESTILO}, como um emblema para um selo colecionável especial chamado \"Dia das Crianças 2027\". "
            "OBJETO: um cajado pequeno de pastor, uma funda de couro e cinco pedrinhas lisas de rio (as coisas do jovem pastor Davi, 1Sm 17:40), ao lado de uma ovelhinha deitada. SEM pessoas e SEM texto. "
            "COMPOSIÇÃO: tudo centralizado, ocupando cerca de 75% da imagem, forma clara mesmo pequena. "
            "CORES: fortes e quentes, contorno marrom-escuro forte. "
            "FUNDO: branco liso e puro (#FFFFFF), sem moldura e sem círculo (o app coloca o emblema sobre uma medalha). "
            f"EVITE: {EVITE}. FORMATO: quadrado 1:1, alta resolução.")
    with open('PROMPTS-SELOS.md', 'a', encoding='utf-8') as f:
        f.write("---\n\n## Selos especiais (desafios sazonais)\n\nGanhos ao completar um desafio; aparecem na aba Eventos do Álbum.\n\n"
                + bloco('natal-2026.png', 'Natal 2026 — A promessa cumprida', 'Lc 2:7,12; Mt 2:9-10', natal)
                + bloco('ano-novo-2027.png', 'Ano novo 2027 — Recomeços', 'Lm 3:22-23; Is 43:19', anonovo)
                + bloco('pascoa-2027.png', 'Páscoa 2027 — A última semana de Jesus', 'Mt 27:60; 28:1-6', pascoa)
                + bloco('pentecostes-2027.png', 'Pentecostes 2027 — O vento e o fogo', 'At 2:1-4', pentecostes)
                + bloco('purim-2027.png', 'Purim 2027 — Para um momento como este', 'Et 4:14; 5:2; 9:22', purim)
                + bloco('tabernaculos-2027.png', 'Tabernáculos 2027 — Morando em cabanas', 'Lv 23:40-43', tabern)
                + bloco('maes-2027.png', 'Dia das Mães 2027 — Mães na Bíblia', 'Êx 2:3; Lc 2:19', maes)
                + bloco('pais-2027.png', 'Dia dos Pais 2027 — Pais na Bíblia', 'Lc 15:20-22', pais)
                + bloco('criancas-2027.png', 'Dia das Crianças 2027 — Crianças na Bíblia', '1Sm 17:34-37; Lc 2:52', criancas))
