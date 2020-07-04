package main

import (
	"fmt"
	"strconv"
)

func main() {
	x := 2.4
	y := 2
	fmt.Println(x / float64(y))

	// cuidado
	fmt.Println("Teste", string(97)) // irá retornar 'a', pois é o valor representado na tabela unicode para 97

	// int para string
	fmt.Println("Teste" + strconv.Itoa(123))

	// string para int
	num, _ := strconv.Atoi("123") // _ irá indicar que a váriavel não será usada
	fmt.Println(num - 122)
}
