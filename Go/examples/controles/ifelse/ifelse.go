package main

import "fmt"

func imprimirResultado(nota float64) {
	if nota >= 7 {
		fmt.Println("Aprovado com nota:", nota)
	} else {
		fmt.Println("Reprovado faltando:", 7-nota)
	}
}

func main() {
	imprimirResultado(8.0)
	imprimirResultado(5)
}
