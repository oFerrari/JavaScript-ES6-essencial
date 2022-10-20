var teste = 'Exemplo';

(() => {
    console.log(`Valor dentro da função "${teste}" `)

    if (true){
        var teste
        teste = 'Mudei o Teste'
        console.log(`Valor dentro do if "${teste}" `)
    }
    console.log(`Valor apos execucao do if "${teste}" `)
})()