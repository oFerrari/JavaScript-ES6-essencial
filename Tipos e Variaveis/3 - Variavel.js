(() => {
    let teste = 'Exemplo';
    console.log(`Valor dentro da função "${teste}" `);

    if (true){
        let teste = 'Mudei o Teste';
        console.log(`Valor dentro do if "${teste}" `);
    }
    console.log(`Valor apos execucao do if "${teste}" `);
})();