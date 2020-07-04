# Go - Meus estudos

### Go env
> go env // lista as variávies de ambiente do go

### Estrutura básica
'''go
  package main // exucatáveis iniciam pelo pacote main

  import (
      "fmt" // padrão para todo código escrito em go
  )

  func main() { // função principal
      fmt.Println("Hello, World!") // exibe algo na tela
  }
'''

### Go na linha de comando
> go version // exibe a versão do go
> go build <file> // compila o arquivo
> go run <file> // compila e roda um programa
> go help <comando> // exibe a ajuda sobre um determinado comando
> godoc -http=:6060 // exibe a documentação da linguagem de forma offline
> go get -u <url> // faz o download de um pacote do github

### Variáveis
Forma Reduzida
> name := "Igor" // usando o := já cria e atribui um valor sem precisar declarar tipo

Bloco de const e vars
> const (
>   a = 1
>   b = 2
>)
> var (
>   c = 3
>   b = 4
> )

### Imprimindo valores
> fmt.Print("AAA") // não há quebra de linha
> fmt.Println("BBB") // há quebra de linha
> fmt.Printf("%f, %s, %t", 2.10, "texto", true) // %f - FLOAT, %s - STRING, %t - BOOL
> fmt.Printf("%v, %v, %v", 2.10, "texto", true) // %v - genérico

### Tipos
  Inteiro
  Boolean
  String
Usa-se o reflect.TypeOf() para descobrir o tipo de um valor

> var typeRune rune = 'a' // rune retorna o valor na tabela unicode

### Conversão
Para converter de inteiro para float
> float64(x)
Para converter de float para inteiro
> int(x)
Para converter de inteiro para string
> string(x) // cuidado, aqui irá retornar o valor na tabela unicode
> strconv.Itoa(x) // aqui irá retornar o valor em corretamente
Para converter de string para int
> strconv.Atoi(x)

### Funções
Escopo
> func (a int, b string, c float) int {} // os parametros devem ter seu tipo e caso a função retorne algo, também deve conter o tipo do retorno

### Ponteiros
Em Go, não é permitido a operações aritméticas com ponteiros
Para se criar um ponteiro em go, usa-se p asterisco
> var myVar *int == nil
OBS: Para exibir um ponteiro é necessário usar o asterisco na frente do nome da variavel, caso contrário irá exibir o local da memória onde o valor foi guardado

### If/Else
Em Go não usamos () quando formos verificar a expressão, exceto quando estamos realizando operções dentro da expressão

### For
Em Go o único laço de repetição que existe é o FOR
