package main

import (
	"fmt"
	"reflect"
)

func main() {
	// inteiros
	fmt.Println(2, 1, 1000)
	fmt.Println("Literal inteiro é:", reflect.TypeOf(2)) // reflect.TypeOf() mostra o tipo
	var typeRune rune = 'c'                              // representa o valor dentro da tabela unicode
	fmt.Println(typeRune)
}
