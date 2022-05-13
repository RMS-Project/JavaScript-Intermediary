// Match - busca um conteúdo específico em uma massa de dados que não se
// tem certeza se os dados estão lá ou como ela está estruturada lá dentro.

const textoNaoEstruturado= 'Meu CPF é 111.111.111-12';

// Expressão regular 
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(textoNaoEstruturado.match(regex));