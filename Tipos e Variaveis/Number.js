const meuNumero = 12.4032

//Transformar numero para String
const numeroComoString = meuNumero.toString()
console.log('Numero transformado em String: ',typeof numeroComoString)

//Retorna o valor com um numero de casas decimais
const fixarDecimais = meuNumero.toFixed(2)
console.log('\nNumero com duas casas decimais: ',fixarDecimais)

//Transforma um string em float
console.log('\nString parseada em float: ',parseFloat(13.22))

//Transforma um string em int
console.log('\nString parseada em int: ',parseInt(13.22))