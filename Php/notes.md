# Curso PHP 7

### Variáveis
Para declarar variávies em PHP usa-se o $ na frente do nome
> $nomeCompleto = "Igor Oliveira";

Para se criar uma constante em PHP, usa-se as seguintes sintaxes:
> define("JUROS", 2.0);
> const JUROS = 1.0;

### Interpolação
As formas de interpolação no PHP são:
> $numero = 10;
> echo "O número é $numero";
> echo "Eu tenho {$numero} canetas";
> echo "Eu tenho " . $numero . " lápis";

### If e Else
Para usar o If e Else em PHP, usa-se a seguinte sintaxe:
> if(condição) {
>    // Código caso a condição seja verdadeira
> } else {
>    // Código caso a condição seja falsa
> }

Há também o ElseIf, com a sintaxe:
> if(condição) {
>
> } elseif (condição) {
>
> } else {
>
> }

### Operadores Relacionais
> == (Igual)
> = (Maior que)
> <= (Menor que)
> > (Maior)
> < (Menor)
> != (Diferente)

### Operadores Lógicos
> ! (Negação)
> && (E)
> || (Ou)

### Operador Ternário
A sintaxe do Operador Ternário em PHP é:
> condição ? true : false;

### Switch
A sintaxe do Switch em PHP é:
> swicth($condição) {
>   case 'algo aqui':
>       // instrução aqui
>       break;
>   default:
>       // caso nenhumas das condições seja antendida
>       break;
> }
Caso não seja definido o 'break' o resultado exibido será o default ou onde estiver o primeiro 'break'


