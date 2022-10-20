//Retorna o tamanho de uma string
const tamanhoTexto = 'Texto'.length
console.log(`Quantidade de letras: ${tamanhoTexto}`)

//Retorna um array quebrando a string por um delimitador
const textoDividido = 'Texto'.split('x')
console.log(`\nArray com as posições separadas pelo delimitador: `,textoDividido)

//Busca um valor e substitui por outro
const textoSubstituido = 'Texto'.replace('Text','novoText')
console.log(`\nSubstituicao de Valor: `,textoSubstituido)

//Retorna a "fatia"  de um valor
const ultimoCaractere = 'Texto'.slice(-1)
console.log(`\nUltima letra de uma string`, ultimoCaractere)

const todoUltimoCaractere = 'Texto'.slice(0,-1)
console.log(`\nValor da string da primeira letra menos a ultima: `,todoUltimoCaractere)

const segundoTerminar = 'Texto'.slice(1)
console.log(`\nValor da string da posicao ate a ultima: `,segundoTerminar)

//Retorna N caracters a partir de uma posição
const caracteresAntesPosicao = 'Texto'.substr(0,2)
console.log(`\nAs primeiras letras sao: `,caracteresAntesPosicao)