// Banco de perguntas das cartas — era 4 (O Reino Unido).
// Mesma regra das eras anteriores: só o que já foi lido até a sessão do personagem, com referência (Bíblia Livre).
// Tamanho do banco pela raridade: comum 5, rara 6, épica 8, lendária 9.
const Q = (q, op, a, ref) => ({ q, op, a, ref });

export const QUIZ_CARTAS = {
  // ── 1 Samuel 1–3 ──
  ana: [
    Q('Como se chamava o marido de Ana?', ['Eli', 'Elcana', 'Samuel', 'Jessé'], 1, '1Sm 1:1-2'),
    Q('Por que Ana chorava e não comia?', ['Porque não tinha filhos', 'Porque estava doente', 'Porque perdeu a casa', 'Porque Eli brigou com ela'], 0, '1Sm 1:5-7'),
    Q('Onde Ana foi orar?', ['Em Belém', 'No monte Sinai', 'Em Jerusalém', 'Na casa do Senhor em Siló'], 3, '1Sm 1:3,9'),
    Q('Como Ana orava?', ['Gritando', 'Cantando alto', 'Falando no coração, só movendo os lábios', 'Com o rosto pintado'], 2, '1Sm 1:13'),
    Q('O que Eli pensou quando viu Ana orando?', ['Que ela era profetisa', 'Que ela estava embriagada', 'Que ela estava doente', 'Que ela era estrangeira'], 1, '1Sm 1:13-14'),
    Q('Por que Ana deu ao filho o nome de Samuel?', ['Porque o tinha pedido ao Senhor', 'Porque significava rei', 'Por causa do avô', 'Porque nasceu em Siló'], 0, '1Sm 1:20'),
    Q('O que Ana fazia todo ano para o menino Samuel?', ['Um brinquedo', 'Um bolo', 'Uma sandália', 'Uma pequena túnica'], 3, '1Sm 2:19'),
    Q('Depois de Samuel, quantos filhos e filhas o Senhor deu a Ana?', ['Um filho', 'Sete filhos', 'Três filhos e duas filhas', 'Duas filhas'], 2, '1Sm 2:21'),
  ],
  eli: [
    Q('Onde Eli servia como sacerdote?', ['Em Jerusalém', 'Em Siló', 'Em Hebrom', 'Em Betel'], 1, '1Sm 1:3,9'),
    Q('Como se chamavam os filhos de Eli?', ['Hofni e Fineias', 'Moisés e Arão', 'Davi e Jônatas', 'Caim e Abel'], 0, '1Sm 1:3; 2:12'),
    Q('O que Eli ensinou Samuel a responder quando ouvisse a voz?', ['Quem está aí?', 'Estou dormindo', 'Chame Eli', 'Fala, Senhor, que o teu servo está ouvindo'], 3, '1Sm 3:9'),
    Q('Quantas vezes Samuel correu até Eli antes de Eli entender que o Senhor chamava o menino?', ['Uma', 'Duas', 'Três', 'Cinco'], 2, '1Sm 3:8'),
    Q('Por que o Senhor ia julgar a casa de Eli?', ['Porque Eli era estrangeiro', 'Porque Eli não corrigiu os filhos', 'Porque Eli fugiu', 'Porque Eli não orava'], 1, '1Sm 3:13'),
  ],
  // ── 1 Samuel 4–7 ──
  samuel: [
    Q('Quem eram os pais de Samuel?', ['Elcana e Ana', 'Abraão e Sara', 'Jessé e Raquel', 'Eli e Ana'], 0, '1Sm 1:19-20'),
    Q('Onde Samuel dormia quando o Senhor o chamou?', ['Em casa', 'No campo', 'Numa caverna', 'No templo do Senhor, onde estava a arca'], 3, '1Sm 3:3'),
    Q('Quantas vezes o Senhor chamou Samuel naquela noite?', ['Uma', 'Duas', 'Quatro', 'Três'], 2, '1Sm 3:4-10'),
    Q('O que o Senhor fazia com as palavras de Samuel, conforme ele crescia?', ['Escrevia num livro', 'Deixava nenhuma cair por terra', 'Esquecia', 'Mudava'], 1, '1Sm 3:19'),
    Q('De onde até onde todo Israel soube que Samuel era profeta?', ['De Dã até Berseba', 'Do Egito até a Babilônia', 'De Jericó até Ai', 'De Siló até Gate'], 0, '1Sm 3:20'),
    Q('O que Samuel mandou o povo tirar do meio deles, para voltar ao Senhor?', ['As armas', 'As tendas', 'Os animais', 'Os deuses estranhos'], 3, '1Sm 7:3-4'),
    Q('Onde Samuel reuniu o povo para orar por ele?', ['Em Belém', 'No Carmelo', 'Em Mispá', 'Em Hebrom'], 2, '1Sm 7:5'),
    Q('Que nome Samuel deu à pedra que levantou?', ['Betel', 'Ebenézer', 'Peniel', 'Gilgal'], 1, '1Sm 7:12'),
    Q('O que Samuel fez durante todos os dias da sua vida?', ['Julgou Israel', 'Foi rei', 'Morou no Egito', 'Foi pastor'], 0, '1Sm 7:15'),
  ],
  // ── 1 Samuel 8–12 ──
  saul: [
    Q('Quem era o pai de Saul?', ['Jessé', 'Elcana', 'Ner', 'Quis'], 3, '1Sm 9:1-2'),
    Q('De qual tribo era Saul?', ['Judá', 'Levi', 'Benjamim', 'Efraim'], 2, '1Sm 9:1,21'),
    Q('O que Saul estava procurando quando encontrou Samuel?', ['Ovelhas', 'As jumentas do pai', 'Um rei', 'Água'], 1, '1Sm 9:3'),
    Q('Como o texto descreve a altura de Saul?', ['Do ombro para cima era mais alto que todo o povo', 'Era baixinho', 'Era do tamanho de Golias', 'Era igual aos outros'], 0, '1Sm 9:2'),
    Q('O que Samuel derramou sobre a cabeça de Saul?', ['Água', 'Vinho', 'Areia', 'Um vaso de azeite'], 3, '1Sm 10:1'),
    Q('Onde Saul estava escondido na hora em que foi apresentado como rei?', ['Debaixo da mesa', 'Num poço', 'Entre a bagagem', 'No templo'], 2, '1Sm 10:22'),
    Q('Que povo Saul venceu para livrar a cidade de Jabes-Gileade?', ['Os egípcios', 'Os amonitas', 'Os filisteus', 'Os moabitas'], 1, '1Sm 11:1,11'),
    Q('Onde o povo confirmou Saul como rei diante do Senhor?', ['Em Gilgal', 'Em Jerusalém', 'Em Siló', 'Em Belém'], 0, '1Sm 11:15'),
  ],
  // ── 1 Samuel 13–15 ──
  jonatas: [
    Q('De quem Jônatas era filho?', ['De Davi', 'De Samuel', 'De Eli', 'De Saul'], 3, '1Sm 13:16; 14:1'),
    Q('Com quem Jônatas subiu contra a guarnição dos filisteus?', ['Com Davi', 'Com o exército todo', 'Com o seu escudeiro', 'Sozinho'], 2, '1Sm 14:1,6'),
    Q('O que Jônatas disse que nada impede o Senhor de fazer?', ['Mandar chuva', 'Salvar, com muitos ou com poucos', 'Falar com Samuel', 'Construir o templo'], 1, '1Sm 14:6'),
    Q('Jônatas contou ao pai que ia subir contra os filisteus?', ['Não, não contou ao pai', 'Sim, pediu permissão', 'Contou só para Samuel', 'Contou para o povo'], 0, '1Sm 14:1'),
    Q('Qual foi o sinal que Jônatas combinou?', ['Se chovesse, atacariam', 'Se um pássaro voasse, fugiriam', 'Se a trombeta tocasse, voltariam', 'Se os filisteus dissessem "subam até nós", eles subiriam'], 3, '1Sm 14:9-10'),
    Q('O que Jônatas comeu sem saber do juramento do pai?', ['Pão', 'Carne', 'Um pouco de mel', 'Frutas'], 2, '1Sm 14:27'),
    Q('O que aconteceu com os olhos de Jônatas depois de comer o mel?', ['Ficaram cegos', 'Ficaram iluminados', 'Ficaram tristes', 'Fecharam'], 1, '1Sm 14:27'),
    Q('Quem livrou Jônatas de ser morto pelo juramento de Saul?', ['O povo', 'Samuel', 'Davi', 'Os filisteus'], 0, '1Sm 14:45'),
  ],
  // ── 1 Samuel 16–17 ──
  davi: [
    Q('De que cidade era a família de Davi?', ['Jerusalém', 'Hebrom', 'Siló', 'Belém'], 3, '1Sm 16:1,4'),
    Q('Quem era o pai de Davi?', ['Quis', 'Elcana', 'Jessé', 'Boaz'], 2, '1Sm 16:1; 17:12'),
    Q('O que Davi estava fazendo quando Samuel foi ungir um rei na sua casa?', ['Estudando', 'Apascentando as ovelhas', 'Lutando', 'Dormindo'], 1, '1Sm 16:11'),
    Q('O que o Senhor disse que olha, ao contrário do homem?', ['O coração', 'A altura', 'As roupas', 'A idade'], 0, '1Sm 16:7'),
    Q('Que instrumento Davi tocava para Saul?', ['Trombeta', 'Tamborim', 'Flauta', 'Harpa'], 3, '1Sm 16:23'),
    Q('Que animais Davi tinha enfrentado para proteger as ovelhas?', ['Lobo e raposa', 'Cobra e escorpião', 'Leão e urso', 'Águia e chacal'], 2, '1Sm 17:34-36'),
    Q('Por que Davi não foi com a armadura de Saul?', ['Era muito bonita', 'Ele nunca a tinha experimentado e não estava acostumado', 'Saul não deixou', 'Estava quebrada'], 1, '1Sm 17:38-39'),
    Q('Em nome de quem Davi foi enfrentar Golias?', ['Em nome do Senhor dos Exércitos', 'Em nome de Saul', 'Em nome de Jessé', 'Em seu próprio nome'], 0, '1Sm 17:45'),
    Q('Onde a pedra de Davi acertou Golias?', ['No braço', 'No escudo', 'Na perna', 'Na testa'], 3, '1Sm 17:49'),
  ],
  golias: [
    Q('De que cidade era Golias?', ['Gaza', 'Jericó', 'Gate', 'Belém'], 2, '1Sm 17:4'),
    Q('Qual era a altura de Golias?', ['Três côvados', 'Seis côvados e um palmo', 'Dez côvados', 'Dois côvados e meio'], 1, '1Sm 17:4'),
    Q('Por quantos dias Golias desafiou o exército de Israel?', ['Quarenta', 'Sete', 'Doze', 'Três'], 0, '1Sm 17:16'),
    Q('O que Golias propôs a Israel?', ['Um acordo de paz', 'Que Israel fosse embora', 'Que pagassem tributo', 'Que um homem lutasse com ele, e o povo do perdedor serviria ao outro'], 3, '1Sm 17:8-9'),
    Q('Como reagiram Saul e todo Israel ao ouvir Golias?', ['Riram', 'Atacaram na hora', 'Ficaram assustados e com muito medo', 'Fizeram uma festa'], 2, '1Sm 17:11'),
    Q('Com o que Davi derrubou Golias?', ['Uma lança', 'Uma funda e uma pedra', 'Uma espada', 'Um arco'], 1, '1Sm 17:49-50'),
  ],
  // ── 1 Samuel 18–20 ──
  mical: [
    Q('De quem Mical era filha?', ['De Saul', 'De Samuel', 'De Jessé', 'De Nabal'], 0, '1Sm 18:20'),
    Q('O que Mical sentia por Davi?', ['Medo', 'Raiva', 'Inveja', 'Amor'], 3, '1Sm 18:20'),
    Q('Por onde Mical ajudou Davi a fugir?', ['Pela porta da frente', 'Pelo telhado', 'Pela janela', 'Por um túnel'], 2, '1Sm 19:12'),
    Q('O que Mical colocou na cama para enganar os mensageiros?', ['Um boneco de palha', 'Uma estátua, com uma almofada de pelos de cabra e coberta com uma roupa', 'Um saco de farinha', 'Uma ovelha'], 1, '1Sm 19:13'),
    Q('Quem mandou mensageiros vigiar a casa de Davi para matá-lo?', ['Saul', 'Golias', 'Jônatas', 'Samuel'], 0, '1Sm 19:11'),
  ],
  // ── 1 Samuel 25–27 ──
  abigail: [
    Q('Como o texto descreve Abigail?', ['Rica e orgulhosa', 'Brava e forte', 'Tímida e calada', 'Sensata e bonita'], 3, '1Sm 25:3'),
    Q('Como se chamava o marido de Abigail?', ['Joabe', 'Abner', 'Nabal', 'Urias'], 2, '1Sm 25:3'),
    Q('O que Abigail levou para Davi e seus homens?', ['Armas', 'Pães, vinho, ovelhas, grãos, passas e figos', 'Ouro e prata', 'Cavalos'], 1, '1Sm 25:18'),
    Q('O que Abigail fez quando viu Davi?', ['Desceu do jumento e se prostrou diante dele', 'Fugiu', 'Gritou', 'Mandou um servo falar'], 0, '1Sm 25:23'),
    Q('Do que Abigail impediu Davi?', ['De fugir', 'De ser rei', 'De ir a Belém', 'De se vingar com as próprias mãos'], 3, '1Sm 25:33'),
    Q('O que aconteceu com Abigail depois da morte de Nabal?', ['Voltou para a casa do pai', 'Foi para o Egito', 'Tornou-se esposa de Davi', 'Ficou sozinha'], 2, '1Sm 25:39-42'),
  ],
  // ── 2 Samuel 1–4 ──
  abner: [
    Q('Abner era chefe do exército de quem?', ['De Davi', 'De Saul', 'Dos filisteus', 'De Absalão'], 1, '1Sm 14:50'),
    Q('Quem Abner fez rei sobre Israel depois da morte de Saul?', ['Isbosete', 'Davi', 'Jônatas', 'Mefibosete'], 0, '2Sm 2:8-9'),
    Q('Para onde Abner foi para fazer acordo com Davi?', ['Jerusalém', 'Siló', 'Belém', 'Hebrom'], 3, '2Sm 3:12,20'),
    Q('Quem matou Abner?', ['Davi', 'Saul', 'Joabe', 'Os filisteus'], 2, '2Sm 3:27'),
    Q('Como Davi reagiu à morte de Abner?', ['Ficou feliz', 'Chorou junto à sua sepultura', 'Não ligou', 'Deu uma festa'], 1, '2Sm 3:31-32'),
  ],
  // ── 2 Samuel 5–7 ──
  nata: [
    Q('O que Natã era?', ['Profeta', 'Sacerdote', 'Rei', 'Soldado'], 0, '2Sm 7:2'),
    Q('O que Davi disse a Natã sobre a arca?', ['Que ela tinha sumido', 'Que era pequena', 'Que devia voltar a Siló', 'Que ela estava numa tenda, e ele numa casa de cedro'], 3, '2Sm 7:2'),
    Q('O que Natã respondeu primeiro a Davi?', ['Não faça nada', 'Pergunte a Saul', 'Faça tudo o que está no seu coração', 'Espere sete anos'], 2, '2Sm 7:3'),
    Q('Quando Deus falou com Natã sobre Davi?', ['Um ano depois', 'Naquela mesma noite', 'Na manhã seguinte, no templo', 'Nunca'], 1, '2Sm 7:4'),
    Q('Segundo a palavra de Deus por Natã, quem construiria a casa para o nome de Deus?', ['O descendente de Davi', 'Davi', 'Natã', 'Os sacerdotes'], 0, '2Sm 7:12-13'),
    Q('O que Deus prometeu fazer para Davi, por meio de Natã?', ['Um exército', 'Um navio', 'Uma torre', 'Uma casa (uma descendência)'], 3, '2Sm 7:11'),
    Q('Por quanto tempo Deus disse que o trono de Davi seria firme?', ['Cem anos', 'Enquanto Davi vivesse', 'Para sempre', 'Sete gerações'], 2, '2Sm 7:16'),
    Q('Natã contou tudo isso a Davi conforme...', ['O que ele achava', 'Todas aquelas palavras e toda aquela visão', 'O que o povo queria', 'O que estava escrito em Siló'], 1, '2Sm 7:17'),
  ],
  // ── 2 Samuel 8–10 ──
  mefibosete: [
    Q('De quem Mefibosete era filho?', ['De Jônatas', 'De Saul', 'De Davi', 'De Abner'], 0, '2Sm 4:4; 9:6'),
    Q('Com que idade Mefibosete ficou aleijado dos pés?', ['Dez anos', 'Recém-nascido', 'Vinte anos', 'Cinco anos'], 3, '2Sm 4:4'),
    Q('Por que Davi quis fazer bem a Mefibosete?', ['Porque ele era rico', 'Porque ele lutou bem', 'Por amor de Jônatas', 'Porque Natã pediu'], 2, '2Sm 9:1,7'),
    Q('Como Mefibosete chamou a si mesmo diante de Davi?', ['Rei', 'Cão morto', 'Herdeiro', 'Soldado'], 1, '2Sm 9:8'),
    Q('O que Davi devolveu a Mefibosete?', ['Todas as terras de Saul, seu avô', 'Uma espada', 'Uma coroa', 'Um cavalo'], 0, '2Sm 9:7'),
    Q('Onde Mefibosete passou a comer?', ['Em casa sozinho', 'No templo', 'No campo', 'Sempre à mesa do rei'], 3, '2Sm 9:13'),
  ],
  joabe: [
    Q('Quem era a mãe de Joabe?', ['Ana', 'Mical', 'Zeruia', 'Abigail'], 2, '2Sm 2:13,18'),
    Q('Quem Joabe matou em Hebrom por vingança?', ['Saul', 'Abner', 'Golias', 'Natã'], 1, '2Sm 3:27'),
    Q('Que cargo Joabe tinha no reinado de Davi?', ['Chefe do exército', 'Sacerdote', 'Profeta', 'Cozinheiro'], 0, '2Sm 8:16'),
    Q('Contra quais povos Joabe lutou ao mesmo tempo, na frente e atrás?', ['Egípcios e filisteus', 'Moabitas e edomitas', 'Babilônios e persas', 'Amonitas e sírios'], 3, '2Sm 10:8-9'),
    Q('Quem Joabe colocou para comandar a outra parte do exército?', ['Davi', 'Natã', 'Abisai, seu irmão', 'Mefibosete'], 2, '2Sm 10:10'),
    Q('O que Joabe disse antes da batalha?', ['Fujamos', 'Esforcemo-nos pelo nosso povo e pelas cidades do nosso Deus; o Senhor fará o que lhe parecer bem', 'Vamos nos render', 'Chamem o rei'], 1, '2Sm 10:12'),
  ],
  // ── 2 Samuel 11–12 ──
  'bate-seba': [
    Q('De quem Bate-Seba era mulher, antes de Davi?', ['De Urias, o heteu', 'De Joabe', 'De Natã', 'De Abner'], 0, '2Sm 11:3'),
    Q('Onde estava Urias enquanto Davi ficou em Jerusalém?', ['No templo', 'Em casa', 'No Egito', 'Na guerra, com o exército'], 3, '2Sm 11:1,11'),
    Q('Quem Deus enviou para falar com Davi depois do que ele fez?', ['Samuel', 'Gade', 'Natã', 'Elias'], 2, '2Sm 12:1'),
    Q('Que história Natã contou?', ['A de um filho pródigo', 'A de um rico que tomou a ovelhinha de um pobre', 'A de um semeador', 'A de um gigante'], 1, '2Sm 12:1-4'),
    Q('Qual filho de Davi e Bate-Seba o Senhor amou?', ['Salomão', 'Absalão', 'Amnom', 'Adonias'], 0, '2Sm 12:24'),
    Q('Que outro nome Natã deu a Salomão?', ['Ebenézer', 'Icabode', 'Emanuel', 'Jedidias'], 3, '2Sm 12:25'),
  ],
  // ── 2 Samuel 13–15 ──
  absalao: [
    Q('De quem Absalão era filho?', ['De Saul', 'De Joabe', 'De Davi', 'De Natã'], 2, '2Sm 13:1'),
    Q('Como o texto descreve a aparência de Absalão?', ['Era feio', 'Não havia em Israel homem tão bonito', 'Era muito baixo', 'Era o mais velho'], 1, '2Sm 14:25'),
    Q('O que era famoso em Absalão?', ['O cabelo, que ele cortava uma vez por ano por pesar muito', 'A voz', 'A espada', 'A barba'], 0, '2Sm 14:26'),
    Q('Onde Absalão ficava para conquistar o povo?', ['No templo', 'No campo', 'No palácio', 'Junto ao caminho da porta da cidade'], 3, '2Sm 15:2'),
    Q('O que o texto diz que Absalão roubou?', ['O tesouro do rei', 'Os cavalos', 'O coração dos homens de Israel', 'A coroa'], 2, '2Sm 15:6'),
    Q('Em que cidade Absalão foi proclamado rei?', ['Belém', 'Hebrom', 'Siló', 'Jericó'], 1, '2Sm 15:9-10'),
  ],
  // ── 1 Crônicas 1–9 ──
  jabez: [
    Q('Como o texto descreve Jabez em relação aos irmãos?', ['Mais honrado que eles', 'O mais novo', 'O mais forte', 'O mais rico'], 0, '1Cr 4:9'),
    Q('Por que a mãe deu o nome de Jabez ao filho?', ['Por causa do avô', 'Porque ele nasceu em Belém', 'Porque era ruivo', 'Porque o deu à luz com dores'], 3, '1Cr 4:9'),
    Q('A quem Jabez invocou?', ['Ao rei', 'Aos anciãos', 'Ao Deus de Israel', 'Ao sacerdote'], 2, '1Cr 4:10'),
    Q('O que Jabez pediu sobre os seus limites?', ['Que fossem fechados', 'Que Deus os ampliasse', 'Que fossem vendidos', 'Que mudassem de lugar'], 1, '1Cr 4:10'),
    Q('O que Jabez pediu que a mão de Deus fizesse?', ['Que fosse com ele', 'Que o castigasse', 'Que escrevesse', 'Que construísse'], 0, '1Cr 4:10'),
    Q('O que Deus fez com o pedido de Jabez?', ['Não respondeu', 'Disse para esperar', 'Mandou um profeta', 'Fez suceder o que ele havia pedido'], 3, '1Cr 4:10'),
  ],
  // ── 1 Crônicas 10–16 ──
  asafe: [
    Q('De qual tribo era Asafe?', ['De Judá', 'De Benjamim', 'Dos levitas', 'De Dã'], 2, '1Cr 15:16-17'),
    Q('Que instrumento Asafe tocava?', ['Flauta', 'Címbalos', 'Trombeta', 'Harpa'], 1, '1Cr 15:19; 16:5'),
    Q('Quem era o pai de Asafe?', ['Berequias', 'Jessé', 'Elcana', 'Natã'], 0, '1Cr 15:17'),
    Q('O que Davi entregou a Asafe no dia em que a arca chegou?', ['Uma espada', 'As chaves da cidade', 'Uma coroa', 'O salmo para dar graças ao Senhor'], 3, '1Cr 16:7'),
    Q('Onde Davi deixou Asafe e seus irmãos servindo continuamente?', ['No campo de batalha', 'Em Belém', 'Diante da arca da aliança do Senhor', 'No palácio'], 2, '1Cr 16:37'),
  ],
  // ── 1 Reis 1–4 ──
  salomao: [
    Q('Quem era a mãe de Salomão?', ['Mical', 'Bate-Seba', 'Abigail', 'Ana'], 1, '1Rs 1:11; 2:13'),
    Q('Que conselho Davi deu a Salomão antes de morrer?', ['Esforce-se, seja homem e guarde os caminhos do Senhor', 'Fique rico', 'Volte para Belém', 'Construa um palácio'], 0, '1Rs 2:2-3'),
    Q('Onde o Senhor apareceu a Salomão em sonho?', ['Em Siló', 'Em Belém', 'No Carmelo', 'Em Gibeom'], 3, '1Rs 3:5'),
    Q('O que Salomão pediu a Deus?', ['Riquezas', 'Vida longa', 'Um coração entendido para julgar o povo', 'A morte dos inimigos'], 2, '1Rs 3:9'),
    Q('O que Deus deu a Salomão além do que ele pediu?', ['Um exército', 'Riquezas e honra', 'Um navio', 'Nada'], 1, '1Rs 3:13'),
    Q('Que caso Salomão julgou logo depois do sonho?', ['O de duas mulheres que diziam ser mãe do mesmo bebê', 'O de um ladrão de ovelhas', 'O de dois irmãos', 'O de um rei estrangeiro'], 0, '1Rs 3:16-27'),
    Q('O que o povo viu em Salomão depois daquele julgamento?', ['Medo', 'Riqueza', 'Força', 'A sabedoria de Deus nele para fazer justiça'], 3, '1Rs 3:28'),
    Q('Quantas parábolas Salomão compôs?', ['Cem', 'Mil e cinco', 'Três mil', 'Doze'], 2, '1Rs 4:32'),
    Q('Sobre o que Salomão falava, além de parábolas e cânticos?', ['Sobre guerras', 'Sobre árvores, animais, aves, répteis e peixes', 'Sobre ouro', 'Sobre navios'], 1, '1Rs 4:33'),
  ],
  // ── 1 Reis 9–11 ──
  'rainha-saba': [
    Q('O que a rainha de Sabá ouviu que a fez ir até Salomão?', ['A fama de Salomão', 'Que ele estava doente', 'Que ele queria guerra', 'Que ele estava vendendo ouro'], 0, '1Rs 10:1'),
    Q('Com o que a rainha de Sabá foi provar Salomão?', ['Com uma corrida', 'Com uma luta', 'Com presentes', 'Com perguntas'], 3, '1Rs 10:1'),
    Q('O que os camelos dela levavam?', ['Água e pão', 'Armas', 'Especiarias, muito ouro e pedras preciosas', 'Tecidos simples'], 2, '1Rs 10:2'),
    Q('Salomão conseguiu responder a todas as perguntas dela?', ['Não, a maioria ficou sem resposta', 'Sim, nada ficou escondido do rei', 'Só a metade', 'Ele não quis responder'], 1, '1Rs 10:3'),
    Q('O que a rainha disse que tinham contado a ela?', ['Nem a metade', 'Tudo exato', 'Coisas falsas', 'Muito mais do que era'], 0, '1Rs 10:7'),
    Q('Quem a rainha chamou de felizes?', ['Os soldados', 'Os vizinhos', 'Os mercadores', 'Os homens e os servos que estavam sempre diante de Salomão'], 3, '1Rs 10:8'),
    Q('Quantos talentos de ouro ela deu ao rei?', ['Mil', 'Doze', 'Cento e vinte', 'Sete'], 2, '1Rs 10:10'),
    Q('O que Salomão deu à rainha de Sabá?', ['Nada', 'Tudo o que ela quis e pediu', 'Só um cavalo', 'Uma espada'], 1, '1Rs 10:13'),
  ],
  // ── 1 Reis 12–16 ──
  roboao: [
    Q('De quem Roboão era filho?', ['De Salomão', 'De Davi', 'De Jeroboão', 'De Acabe'], 0, '1Rs 11:43'),
    Q('O que o povo pediu a Roboão?', ['Que fizesse guerra', 'Que construísse um templo', 'Que fosse embora', 'Que aliviasse o jugo pesado de Salomão'], 3, '1Rs 12:4'),
    Q('Que conselho os anciãos deram a Roboão?', ['Ser mais duro', 'Fugir', 'Servir o povo e falar boas palavras', 'Chamar os egípcios'], 2, '1Rs 12:7'),
    Q('De quem Roboão seguiu o conselho?', ['Dos anciãos', 'Dos jovens que tinham crescido com ele', 'Do profeta', 'Da mãe'], 1, '1Rs 12:8'),
    Q('Sobre qual tribo Roboão continuou reinando?', ['Judá', 'Efraim', 'Dã', 'Rúben'], 0, '1Rs 12:17,20'),
  ],
  jeroboao: [
    Q('Quem era o pai de Jeroboão?', ['Salomão', 'Quis', 'Jessé', 'Nebate'], 3, '1Rs 11:26'),
    Q('Em quantos pedaços o profeta Aías rasgou a capa nova?', ['Dois', 'Sete', 'Doze', 'Dez'], 2, '1Rs 11:30'),
    Q('Quantos pedaços Aías mandou Jeroboão pegar?', ['Dois', 'Dez', 'Doze', 'Um'], 1, '1Rs 11:31'),
    Q('O que Jeroboão fez para o povo não subir a Jerusalém?', ['Dois bezerros de ouro', 'Um muro', 'Um templo de pedra', 'Uma estrada nova'], 0, '1Rs 12:28'),
    Q('Em quais cidades Jeroboão colocou os bezerros?', ['Jerusalém e Belém', 'Siló e Gate', 'Hebrom e Jericó', 'Betel e Dã'], 3, '1Rs 12:29'),
  ],
  // ── 1 Reis 17–19 ──
  elias: [
    Q('De onde era Elias?', ['De Belém', 'De Jerusalém', 'O tesbita, de Gileade', 'De Sarepta'], 2, '1Rs 17:1'),
    Q('O que Elias anunciou ao rei Acabe?', ['Que haveria guerra', 'Que não haveria orvalho nem chuva', 'Que viria um terremoto', 'Que o rei seria rico'], 1, '1Rs 17:1'),
    Q('Quem levava pão e carne para Elias junto ao ribeiro de Querite?', ['Os corvos', 'Os anjos', 'Uma viúva', 'Os soldados'], 0, '1Rs 17:6'),
    Q('Em que monte Elias desafiou os profetas de Baal?', ['Sinai', 'Moriá', 'Nebo', 'Carmelo'], 3, '1Rs 18:19-20'),
    Q('Quantos profetas de Baal estavam no Carmelo?', ['Doze', 'Cem', 'Quatrocentos e cinquenta', 'Mil'], 2, '1Rs 18:19,22'),
    Q('O que Elias mandou derramar sobre o sacrifício antes de orar?', ['Azeite', 'Água, três vezes', 'Vinho', 'Areia'], 1, '1Rs 18:33-34'),
    Q('O que o fogo do Senhor consumiu?', ['O holocausto, a lenha, as pedras, o pó e a água da vala', 'Só a lenha', 'Os profetas', 'O altar de Baal'], 0, '1Rs 18:38'),
    Q('Para onde Elias foi quando fugiu de Jezabel?', ['Para o Egito', 'Para Belém', 'Para Sarepta', 'Para o monte de Deus, Horebe'], 3, '1Rs 19:3,8'),
    Q('Quem Elias chamou para segui-lo, lançando sobre ele o seu manto?', ['Acabe', 'Micaías', 'Eliseu', 'Obadias'], 2, '1Rs 19:19'),
  ],
  'viuva-sarepta': [
    Q('Em que cidade morava a viúva que sustentou Elias?', ['Jerusalém', 'Sarepta de Sidom', 'Samaria', 'Betel'], 1, '1Rs 17:9'),
    Q('O que a viúva estava fazendo quando Elias chegou?', ['Colhendo gravetos', 'Buscando água no poço', 'Cozinhando', 'Vendendo pão'], 0, '1Rs 17:10'),
    Q('O que ela tinha em casa?', ['Muito pão', 'Carne e vinho', 'Nada', 'Um punhado de farinha e um pouco de azeite'], 3, '1Rs 17:12'),
    Q('O que Elias pediu que ela fizesse primeiro?', ['Uma oração', 'Um poço', 'Uma pequena torta para ele', 'Uma cama'], 2, '1Rs 17:13'),
    Q('O que aconteceu com a farinha e o azeite?', ['Acabaram no outro dia', 'Não acabaram, conforme a palavra do Senhor', 'Estragaram', 'Foram roubados'], 1, '1Rs 17:16'),
    Q('O que a viúva disse quando Elias lhe devolveu o filho vivo?', ['Agora sei que tu és homem de Deus', 'Vá embora', 'Isso foi sorte', 'Eu já sabia'], 0, '1Rs 17:23-24'),
  ],
  eliseu: [
    Q('Quem era o pai de Eliseu?', ['Jessé', 'Nebate', 'Quis', 'Safate'], 3, '1Rs 19:16,19'),
    Q('De que cidade era Eliseu?', ['Belém', 'Jericó', 'Abel-Meolá', 'Sarepta'], 2, '1Rs 19:16'),
    Q('O que Deus mandou Elias fazer com Eliseu?', ['Fazê-lo rei', 'Ungi-lo para ser profeta em seu lugar', 'Mandá-lo para o Egito', 'Torná-lo soldado'], 1, '1Rs 19:16'),
    Q('O que Eliseu estava fazendo quando Elias o encontrou?', ['Arando com doze juntas de bois', 'Pescando', 'Pastoreando ovelhas', 'Construindo uma casa'], 0, '1Rs 19:19'),
    Q('O que Elias lançou sobre Eliseu?', ['Água', 'Azeite', 'Uma corda', 'O seu manto'], 3, '1Rs 19:19'),
    Q('O que Eliseu pediu antes de seguir Elias?', ['Para levar os bois', 'Dinheiro', 'Para beijar o pai e a mãe', 'Uma espada'], 2, '1Rs 19:20'),
    Q('O que Eliseu fez com o par de bois?', ['Vendeu', 'Matou, cozinhou a carne com a madeira do arado e deu ao povo', 'Deu ao pai', 'Soltou no campo'], 1, '1Rs 19:21'),
    Q('O que Eliseu fez depois de se despedir?', ['Foi atrás de Elias e o servia', 'Voltou para o campo', 'Foi para Jerusalém', 'Virou rei'], 0, '1Rs 19:21'),
  ],
  // ── 1 Reis 20–22 ──
  acabe: [
    Q('Quem era o pai de Acabe?', ['Jeroboão', 'Salomão', 'Quis', 'Onri'], 3, '1Rs 16:29'),
    Q('Com quem Acabe se casou?', ['Mical', 'Abigail', 'Jezabel', 'Bate-Seba'], 2, '1Rs 16:31'),
    Q('O que Acabe queria de Nabote?', ['A casa dele', 'A vinha dele', 'O cavalo dele', 'A filha dele'], 1, '1Rs 21:2'),
    Q('O que Acabe fez quando Nabote não quis vender?', ['Foi para casa triste e irritado, deitou-se e não comeu', 'Riu', 'Ofereceu mais dinheiro', 'Esqueceu'], 0, '1Rs 21:4'),
    Q('O que Acabe fez quando ouviu as palavras de Elias sobre o castigo?', ['Mandou prender Elias', 'Fugiu', 'Não ligou', 'Rasgou as roupas, vestiu pano de saco e jejuou'], 3, '1Rs 21:27'),
    Q('Onde Acabe foi ferido de morte?', ['No Carmelo', 'Em Jerusalém', 'Em Ramote-Gileade', 'Em Sarepta'], 2, '1Rs 22:29,34-35'),
  ],
  jezabel: [
    Q('De quem Jezabel era filha?', ['De Saul', 'De Etbaal, rei dos sidônios', 'De Faraó', 'De Salomão'], 1, '1Rs 16:31'),
    Q('O que Jezabel fazia com os profetas do Senhor?', ['Perseguia e mandava matá-los', 'Os protegia', 'Os ouvia', 'Os convidava para comer'], 0, '1Rs 18:4'),
    Q('O que Jezabel mandou dizer a Elias depois do Carmelo?', ['Que queria conhecê-lo', 'Que se arrependia', 'Que ia embora', 'Que tiraria a vida dele'], 3, '1Rs 19:2'),
    Q('O que Jezabel escreveu em nome de Acabe?', ['Um salmo', 'Uma lei nova', 'Cartas para os anciãos acusarem Nabote', 'Um convite de festa'], 2, '1Rs 21:8-10'),
    Q('Que tipo de testemunhas Jezabel mandou colocar contra Nabote?', ['Dois profetas', 'Dois homens maus, que mentiriam', 'Os filhos de Nabote', 'Os sacerdotes'], 1, '1Rs 21:10,13'),
  ],
  micaias: [
    Q('Quem era o pai de Micaías?', ['Inlá', 'Safate', 'Jessé', 'Nebate'], 0, '1Rs 22:8'),
    Q('Quantos profetas prometeram vitória a Acabe?', ['Doze', 'Sete', 'Mil', 'Uns quatrocentos'], 3, '1Rs 22:6'),
    Q('Por que Acabe não gostava de Micaías?', ['Porque era estrangeiro', 'Porque era jovem', 'Porque ele não profetizava bem a respeito do rei, só mal', 'Porque morava longe'], 2, '1Rs 22:8'),
    Q('O que Micaías disse que falaria?', ['O que o rei quisesse', 'O que o Senhor lhe dissesse', 'O que os outros dissessem', 'Nada'], 1, '1Rs 22:14'),
    Q('O que fizeram com Micaías depois da profecia?', ['Puseram na prisão, a pão e água', 'Deram um presente', 'Fizeram rei', 'Mandaram para casa'], 0, '1Rs 22:27'),
    Q('O que Micaías disse se Acabe voltasse em paz?', ['Que faria uma festa', 'Que iria embora', 'Que seria rei', 'Que então o Senhor não teria falado por ele'], 3, '1Rs 22:28'),
  ],
};
