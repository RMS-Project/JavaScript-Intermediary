// Função normal.
function soma (x, y) {
  return x + y;
}

const multiplicacao = function(x, y) {
  return x * y;
};

console.log(multiplicacao(5 , 5));

// Arrow Function.
const dividir = (x, y) => {
  return x / y;
}

// Quando tiver uma função  anonima e quero passar um objeto 
// tenho que encapsular entre parênteses.
const objeto = () => ({ nome: 'RMS', sobrenome: 'Messias'})

console.log(objeto)


