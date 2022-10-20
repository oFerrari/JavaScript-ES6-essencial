const simbolo1 = Symbol();
const simbolo2 = Symbol();

// Symbols são únicos
console.log("simbolo1 é igual a simbolo2 => ", simbolo1 === simbolo2); // false

// Previnir conflito entre nomes de propriedades
const nomeSimbolo1 = Symbol("name");
const nomeSimbolo2 = Symbol("name");

const usuario = {
  [nomeSimbolo1]: "Guilherme",
  [nomeSimbolo2]: "Outro nome",
  sobrenome: "Cabrini da Silva"
};

console.log(usuario);

// Symbols criam propriedades não enumerables
for (const key in usuario) {
  if (usuario.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${usuario[key]}`);    /*Propriedades enumeráveis aparecem em for...*/
    }                                              /*in loops exceto se o nome da propriedade for um objeto Symbol. */ 
}

console.log("Propriedades do objeto usuario:", Object.keys(usuario));
console.log("Valores das propriedades do objeto usuario:", Object.values(usuario));

// Exibir symbols de um objeto
console.log(
  "\nSymbols registrados no objeto usuario:",
  Object.getOwnPropertySymbols(usuario)
);

// Acessando todas as propriedades do objeto
console.log("\nTodas propriedades do objeto usuario:", Reflect.ownKeys(usuario));

// Criar um enum
const direcoes = {
  UP: Symbol("UP"),
  DOWN: Symbol("DOWN"),
  LEFT: Symbol("LEFT"),
  RIGHT: Symbol("RIGHT")
};

console.log(direcoes)