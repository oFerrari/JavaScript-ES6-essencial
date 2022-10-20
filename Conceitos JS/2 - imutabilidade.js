/* imutabilidade em JavaScript estamos falando em evitar modificar referências.*/
let estudantes = [
    {
        nome: 'Grace',
        nota: 7
    },
    {
        nome: 'Jhenifer',
        nota: 4
    },
    {
        nome: 'Paul',
        nota: 10
    }
]

function aprovarEstudantes(lista){
    return lista.filter(estudantes => estudantes.nota >= 7)
}

console.log('Alunos Aprovados:')

console.log(aprovarEstudantes(estudantes))