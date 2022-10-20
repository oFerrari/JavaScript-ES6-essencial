/* uma definição estrita de elevação sugere que as declarações de variáveis
e funções são fisicamente movidas para o topo do seu código, mas isso não
é realmente o que acontece. Em vez disso, as declarações de variável e 
função são colocadas na memória durante a fase de compilação, mas permanecem
exatamente onde você as digitou no seu código.
 */

function fn(){
    console.log(text)

    let text = 'Exemplo'

    console.log(text)
}

/* function fn(){
    let text
    console.log(text)

    text = 'Exemplo'

    console.log(text)
} */