/* Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada. */

function init(){

let variavel = `Essa variavel`

    return function(){
        console.log(`1 Estamos falando ${variavel}`)

        return function(){
            console.log(`2 Estamos falando ${variavel}`)

            return function(){
                console.log(`3 Estamos falando ${variavel}`)
            }
        }

    }
   
}

init()()()()