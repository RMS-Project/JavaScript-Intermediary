// Desestruct - utilizado para desestruturar um objeto para que os
// dados contidos sejam colocados em diferentes locais da aplicação. 

const pessoa =  {
  nome: 'RMS',
  sobrenome: 'Messias',
  idade: 35,
  profissao: 'Programador'
};

console.log(pessoa);

// Desestruturação de um objeto convencional.

/* let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao;
 */

// Desestruturação de um objeto utilizando Desentruct.
let {nome, sobrenome, idade, profissao} = pessoa

console.log( nome, sobrenome, idade, profissao);
