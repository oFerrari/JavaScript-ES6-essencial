let usuario = {
    nome: 'Andrei'
}
console.log(usuario)


//Alterando a propiedade de um objeto
usuario.nome = 'outro nome 1'
console.log(usuario)
usuario['nome'] = 'outro nome 2'
console.log(usuario)


const prop = 'nome'
usuario[prop] = 'outro nome 3'  //ou usuario['nome']
console.log(usuario)


//Criando uma propiedade
usuario.sobrenome = 'Ferrari Domingos'
console.log(usuario)


//Deletando uma propiedade
delete usuario.nome
console.log(usuario)