// Para volume muito grande de dados onde é necessário adicionar
// e remover itens. Muito utilizado em desenvolvimento de front end.
let lista = [1, 2, 5];
let listaIncluir = [3, 4];

for (let i = 0; i < listaIncluir.length; i++)  {
  for (let j = 0; j < lista.length; j++)  {
    if (lista[j] >= listaIncluir[i])  {

      // Na posição J não quero excluir nada e incluir o valor i da listaIncluir.  
      lista.splice(j, 0, listaIncluir[i]);
      j++;
    }
  }
}

console.log(lista);

// Aplicação do spread operator para adicionar uma lista 
// dentro de outra lista.
const listaResult = [1, 2, ...listaIncluir, 5];

console.log(listaResult)

let arr = ['a', 'b', 'c'];

// Utilizado para copiar a lista arr para arr2.
let arr2 = [...arr];

// Com push posso adicionar itens, outras listas
// ou um único valor.
arr2.push('d');

console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);

