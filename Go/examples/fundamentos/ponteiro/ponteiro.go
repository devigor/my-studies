package main

import "fmt"

func main() {
	i := 1

	// Go não possui aritmética
	// Para criar um ponteiro, usa-se o asterisco antes do nome
	var p *int = nil // nil == nulo
	p = &i           // aqui pega o endereço de memória e joga no p

	fmt.Println(i)
	fmt.Println(p)  // Se eu referencia apenas o p, o valor exibido será o local da memória será exibido
	fmt.Println(*p) // Utilizando o * na frente, o valor real passa a ser exibido
}
