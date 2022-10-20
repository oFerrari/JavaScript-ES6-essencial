const usuario = {
    nome: "Andrei",
    lastnome: "Ferrari Domingos"
  };

  // Recupera as chaves do objeto
  console.log("Propriedades do objeto usuario:", Object.keys(usuario));

  // Recupera os valores das chaves do objeto
  console.log("Valores das propiedades do objeto usuario:", Object.values(usuario));
  
  // Retorna um array de arrasy contendo [ nome_propriedade, valor_propriedade ]
  console.log("\nLista de propriedades e valores:", Object.entries(usuario));
  
  // Mergear propriedades de objetos
  Object.assign(usuario, { nomeCompleto: "Andrei Ferrari Domingos" });
  
  console.log("\nAdiciona a propriedade nomeCompleto no objeto usuario", usuario);
  console.log(
    "\nRetorna um novo objeto mergeando dois ou mais objetos",
    Object.assign({}, usuario, { age: 26 })
  );
  console.log(usuario)
  
  // Previne todas as alterações em um objeto
const novoObj = { foo: "bar" };
//Object.freeze(novoObj);      Nada pode ser adicionado ou removido do conjunto de propriedades de um objeto congelado.\\

novoObj.foo = "changes";
//delete novoObj.foo;
novoObj.bar = "foo";

console.log("\nVariável new Obj após as alterações:", novoObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { nome: "Andrei" };
//Object.seal(person);  Nada pode ser adicionado ou removido do conjunto de propriedades de um objeto congelado. Pode alterar algo que ja existe.\\

person.nome = "Andrei Ferrari";
delete person.nome;
person.age = 26;

console.log("\nVariável person após as alterações:", person);