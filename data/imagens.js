// Cartas que já têm imagem em img/cartas/<id>.webp (geradas no Gemini a partir de PROMPTS-CARTAS.md).
// Ao adicionar uma imagem, inclua o id aqui.
export const COM_IMAGEM = new Set([
  'adao', 'eva', 'caim', 'sete', 'enoque', 'matusalem', 'tera', 'abel', 'noe',
]);

// Selos com imagem em img/selos/<id>.webp (objeto recortado, sem fundo; PROMPTS-SELOS.md).
// Ao adicionar uma imagem, inclua o id aqui. Vale também para os selos especiais (ex.: 'natal-2026').
export const SELOS_COM_IMAGEM = new Set([
  'luz', 'arvore', 'arca', 'arcoiris', 'estrelas', 'carneiro', 'poco', 'escada', 'tunica', 'espiga', 'ouro', 'redemoinho',
  'sarca', 'pao', 'coluna', 'cajado', 'mana', 'arcaalianca', 'tabuas', 'trombetas', 'uvas', 'vara', 'serpente', 'nebo',
  'natal-2026', 'ano-novo-2027', 'pascoa-2027', 'pentecostes-2027', 'purim-2027', 'tabernaculos-2027', 'maes-2027', 'pais-2027', 'criancas-2027',
]);
