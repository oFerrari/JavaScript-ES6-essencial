const nome = 'Andrei';

//Não podemos alterar o valor

nome = 'Andrei';

const usuario = {
    nome: 'Andrei'
}

//Mas se for um objeto, podemos trocar suas propiedades
usuario.nome = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
usuario = {
    nome: 'Andrei'
};

const pessoas = ['guilherme','pedro','ana'];

//Podemos adicionar novos itens
pessoas.push('Joao');

//Podemos remover algum item
pessoas.shift('Joao');

//Podemos alterar diretamente
pessoas[1] = ('James')

console.log(`array alterado : ${pessoas}`)