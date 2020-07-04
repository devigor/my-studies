package main

import "fmt"

func main() {
	fmt.Print("Mesma")
	fmt.Print(" linha.") // não pula linha

	x := 3.141516
	fmt.Println("O valor de x é:", x) // concatenação no println

	fmt.Printf("O valor de x é %f\n", x) // c-like concatenação
	fmt.Printf("%f | %s | %t \n", 1.123, "text", false)
}
