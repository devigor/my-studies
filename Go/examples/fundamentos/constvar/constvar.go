package main

import (
	"fmt"
	"math"
)

func main() {
	// Forma completa
	const PI float64 = 3.1415
	var raio = 3.2

	// Forma reduzida
	area := PI * math.Pow(raio, 2) // := quer dizer que está criando e atribuindo um valor
	fmt.Println("A área é:", area)

	// Bloco
	const (
		a = 1
		b = 2
	)

	var (
		c = 3
		d = 4
	)

	fmt.Println(a, b, c, d)
}
