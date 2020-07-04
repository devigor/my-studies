Para transformar um Array-Like em Array, no JavaScript utiliza-se a seguinte sintaxe: 
> Array.from(ARRAY-LIKE)

### classList
Element.classList
    - add('') // Adiciona
    - remove('') // Remove
    - toggle('') // Adiciona ou remove classe
    - contains('') // Verifica se existe a classe
    - replace('', '') // Verifica se existe uma classe e troca ela por outra

### This
A palavra 'this' pode fazer referência a diferentes objetos dependendo do contexto.

### Dataset
'dataset' é uma propriedade do HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com 'data-'

### Promises
Função construtora de promessas, existem dois resultados/parâmetros para ela e são eles: 'resolve' e 'reject'
Dentro das Promises possíumos o método 'then()', que terá seu callback ativado quando a promise for resolvida. Este método retorna outra promise, logo podemos fazer um encadeamento de 'then()'. Quando não for mais utilizando o método 'then()', encerramos com o método 'catch()' que terá uma função de callback caso a promise seja rejeitada

Alguns métodos das Promises
  - Promises.all() => Retorna uma nova promise assim que todas as promises dentro dela (em formato de array) forem resolvidas, ou pelo menos um rejeita e sua resposta é um array com o resultado de cada promise
  - Promise.race() => Retorna a primeira promise resolvida ou rejeitada

### Async / Await
A palavra chave 'async', indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar. O 'await' irá indicar que devemos esperar.
Para lidar com erros nas promises usando o 'async/await', usamos o 'try' para tentar realizar algo e o 'catch' para quando há falha
