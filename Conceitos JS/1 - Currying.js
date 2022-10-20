/* Currying é o processo de transformar uma função que espera vários argumentos
 em uma função que espera um único argumento e retorna outra função curried. */

function soma(a){

    return function /* soma2 */(b){

        return a+b;
    }
}

let soma2 = soma(2)

console.log(soma2(2))
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))

/* OU */

console.log(soma(2)(5));