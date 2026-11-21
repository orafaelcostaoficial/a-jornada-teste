// Personagens que o jogador pode escolher para si (o "viajante").
// Imagem: img/avatares/<id>.webp (gerada no Gemini a partir de PROMPTS-AVATARES.md);
// enquanto não houver imagem, aparece o símbolo sobre a cor do personagem.
// Ao adicionar uma imagem, inclua o id em AVATARES_COM_IMAGEM.
// "frase" resume algo que o texto bíblico diz sobre a pessoa (com a referência).

export const AVATARES = [
  { id: 'davi', nome: 'Davi', cor: '#c0843a', simbolo: 'music', frase: 'Pastor de ovelhas que tocava harpa.', ref: '1Sm 16:11,23' },
  { id: 'ester', nome: 'Ester', cor: '#7d4fc0', simbolo: 'crown', frase: 'Rainha que falou ao rei para salvar o seu povo.', ref: 'Et 2:17; 4:16' },
  { id: 'daniel', nome: 'Daniel', cor: '#3a6ea5', simbolo: 'shield-check', frase: 'Orava três vezes por dia, mesmo proibido.', ref: 'Dn 6:10' },
  { id: 'rute', nome: 'Rute', cor: '#b8862b', simbolo: 'wheat', frase: 'Escolheu o povo e o Deus de Noemi como seus.', ref: 'Rt 1:16' },
  { id: 'sansao', nome: 'Sansão', cor: '#a33d3d', simbolo: 'hand-fist', frase: 'Nazireu de força dada pelo Espírito do Senhor.', ref: 'Jz 13:5; 14:6' },
  { id: 'debora', nome: 'Débora', cor: '#3f8a5a', simbolo: 'tree-palm', frase: 'Profetisa e juíza que julgava debaixo de uma palmeira.', ref: 'Jz 4:4-5' },
  { id: 'moises', nome: 'Moisés', cor: '#8a5a2b', simbolo: 'scroll', frase: 'Conduziu o povo e recebeu a Lei no monte.', ref: 'Êx 3:10; 34:29' },
  { id: 'miria', nome: 'Miriã', cor: '#c2557a', simbolo: 'music', frase: 'Profetisa que cantou com tamborim depois do mar.', ref: 'Êx 15:20-21' },
  { id: 'gideao', nome: 'Gideão', cor: '#5a6b2b', simbolo: 'flame', frase: 'Venceu com 300 homens, tochas e trombetas.', ref: 'Jz 7:7,16' },
  { id: 'ana', nome: 'Ana', cor: '#2f7a8a', simbolo: 'heart', frase: 'Orou por um filho e o dedicou ao Senhor.', ref: '1Sm 1:10-11,27-28' },
];

export const AVATARES_COM_IMAGEM = new Set([
  'po',
  'davi', 'davi-meio', 'davi-final',
  'ester', 'ester-meio', 'ester-final',
  'daniel', 'daniel-meio', 'daniel-final',
  'rute', 'rute-meio', 'rute-final',
  'sansao', 'sansao-meio', 'sansao-final',
  'debora', 'debora-meio', 'debora-final',
  'moises', 'moises-meio', 'moises-final',
  'miria', 'miria-meio', 'miria-final',
  'gideao', 'gideao-meio', 'gideao-final',
  'ana', 'ana-meio', 'ana-final',
]);

export const avatarPorId = (id) => AVATARES.find((a) => a.id === id);
