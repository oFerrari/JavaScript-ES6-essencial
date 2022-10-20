/* Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada. */

function makeFunc(nome) {

    function displayName() {
      console.log(nome);
    }
    return displayName;
  }
  var myFunc = makeFunc('joao');
  myFunc();

/* ----------------------------------- */

function init() {
    var name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    displayName();
  }
  init();