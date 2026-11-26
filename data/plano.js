// Ordem cronológica por livro, conforme a imagem de referência do Rafael
// (@abibliadoprincipioaofim). Cada era agrupa livros; caps = nº de capítulos.
// Eras com `conteudo: true` já têm sessões escritas em data/era-*.js.

// quando = datas APROXIMADAS (a Bíblia não usa o nosso calendário). São estimativas de estudiosos
// e algumas são debatidas — por isso o Êxodo traz as duas datas mais defendidas. Onde o texto não
// permite datar (origens, Jó, Apocalipse), não se dá data.
export const ERAS = [
  { id: 'principio', quando: 'Origens sem data · patriarcas c. 2100–1800 a.C.', nome: 'Princípio e Patriarcas', conteudo: true, livros: [
    ['gn', 'Gênesis', 50, 'gn'], ['jo', 'Jó', 42, 'jó']] },
  { id: 'moises', quando: 'Êxodo c. 1446 ou c. 1260 a.C.', nome: 'Moisés', conteudo: true, livros: [
    ['ex', 'Êxodo', 40, 'ex'], ['lv', 'Levítico', 27, 'lv'], ['nm', 'Números', 36, 'nm'], ['dt', 'Deuteronômio', 34, 'dt']] },
  { id: 'juizes', quando: 'c. 1400/1200 – 1050 a.C.', nome: 'Josué e Juízes', conteudo: true, livros: [
    ['js', 'Josué', 24, 'js'], ['jz', 'Juízes', 21, 'jz'], ['rt', 'Rute', 4, 'rt']] },
  { id: 'reino-unido', quando: 'c. 1050 – 930 a.C.', nome: 'O Reino Unido', conteudo: true, livros: [
    ['1sm', '1 Samuel', 31], ['2sm', '2 Samuel', 24], ['1cr', '1 Crônicas', 29], ['sl', 'Salmos', 150],
    ['1rs', '1 Reis', 22], ['ct', 'Cântico dos Cânticos', 8], ['pv', 'Provérbios', 31], ['ec', 'Eclesiastes', 12]] },
  { id: 'reino-dividido', quando: '930 – 586 a.C.', nome: 'Reino Dividido', livros: [
    ['2rs', '2 Reis', 25], ['2cr', '2 Crônicas', 36], ['ob', 'Obadias', 1], ['jl', 'Joel', 3], ['jn', 'Jonas', 4],
    ['am', 'Amós', 9], ['os', 'Oseias', 14], ['is', 'Isaías', 66], ['mq', 'Miqueias', 7], ['na', 'Naum', 3],
    ['sf', 'Sofonias', 3], ['jr', 'Jeremias', 52], ['hc', 'Habacuque', 3]] },
  { id: 'exilio', quando: '586 – 538 a.C.', nome: 'Exílio', livros: [
    ['lm', 'Lamentações', 5], ['ez', 'Ezequiel', 48], ['dn', 'Daniel', 12]] },
  { id: 'pos-exilio', quando: '538 – c. 430 a.C.', nome: 'Depois do Exílio', livros: [
    ['ed', 'Esdras', 10], ['ag', 'Ageu', 2], ['zc', 'Zacarias', 14], ['et', 'Ester', 10], ['ne', 'Neemias', 13],
    ['ml', 'Malaquias', 4]] },
  { id: 'jesus', quando: 'c. 6/4 a.C. – c. 30/33 d.C.', nome: 'Jesus', livros: [
    ['mt', 'Mateus', 28], ['mc', 'Marcos', 16], ['lc', 'Lucas', 24], ['joa', 'João', 21]] },
  { id: 'igreja', quando: 'c. 30 – 67 d.C.', nome: 'A Igreja', livros: [
    ['at', 'Atos', 28], ['tg', 'Tiago', 5], ['gl', 'Gálatas', 6], ['1ts', '1 Tessalonicenses', 5],
    ['2ts', '2 Tessalonicenses', 3], ['1co', '1 Coríntios', 16], ['2co', '2 Coríntios', 13], ['rm', 'Romanos', 16],
    ['cl', 'Colossenses', 4], ['fm', 'Filemom', 1], ['ef', 'Efésios', 6], ['fp', 'Filipenses', 4],
    ['1tm', '1 Timóteo', 6], ['tt', 'Tito', 3], ['1pe', '1 Pedro', 5], ['hb', 'Hebreus', 13],
    ['2tm', '2 Timóteo', 4], ['2pe', '2 Pedro', 3], ['jd', 'Judas', 1]] },
  { id: 'fim-seculo', quando: 'Fim do século I d.C.', nome: 'Fim do Século I', livros: [
    ['1jo', '1 João', 5], ['2jo', '2 João', 1], ['3jo', '3 João', 1], ['ap', 'Apocalipse', 22]] },
];

// Texto bíblico: NAA (direitos da SBB). Não é embutido no app — o repositório
// é público. Cada capítulo abre no site oficial da SBB.
export const linkNAA = (livro, cap) =>
  livro.slug ? `https://www.bibliaonline.com.br/naa/${livro.slug}/${cap}` : null;

// Ordem canônica protestante (1 = Gênesis … 66 = Apocalipse): nome do arquivo do texto em data/biblia/blivre/<n>.json
const CANON = 'gn ex lv nm dt js jz rt 1sm 2sm 1rs 2rs 1cr 2cr ed ne et jo sl pv ec ct is jr lm ez dn os jl am ob jn mq na hc sf ag zc ml mt mc lc joa at rm 1co 2co gl ef fp cl 1ts 2ts 1tm 2tm tt fm hb tg 1pe 2pe 1jo 2jo 3jo jd ap'.split(' ');

export const LIVROS = {};
let ordem = 0;
for (const era of ERAS) {
  era.livros = era.livros.map(([id, nome, caps, slug]) => {
    // slug = abreviação usada pelo site da SBB (bibliaonline.com.br) na URL.
    // Só preencher depois de conferir no site (ex.: Jó = "jó", João = "jo").
    const l = { id, nome, caps, slug, era: era.id, ordem: ++ordem, n: CANON.indexOf(id) + 1 };
    LIVROS[id] = l;
    return l;
  });
}
