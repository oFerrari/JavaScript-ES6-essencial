/* imutabilidade em JavaScript estamos falando em evitar modificar referências.*/

let usuario = {
    nome: 'Andrei',
    sobrenome: 'Ferrari Domingos'
}
console.log(usuario)

function completarNome(usu){
    return{
        ...usu,
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`  //usuario.nome +' '+usuario.sobrenome 
    }
}

let mostrarNome = completarNome(usuario)

console.log(mostrarNome)

/* ----------------------------------------------------------- */

/* let usuario = {
    nome: 'Andrei',
    sobrenome: 'Ferrari Domingos'
}
console.log(usuario)

let mostrarNome = function completarNome(usu){
    return{
        ...usu,
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`  //usuario.nome +' '+usuario.sobrenome 
    }
}

console.log(mostrarNome()) */