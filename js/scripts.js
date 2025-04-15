let a = 5+3 //8
let b = a%5 // 3
let c = 5*b**2 //45
let d = 10-a/2 //6
let e = 6*2/d //2
let f = b%e+4/e //3

//TAMBÉM PODEMOS FAZER:

let n = 3
n = n+4 // n deixa de valer  3 e passa a valer 7 isso é auto atribuição
n = n-5 // o n que estava valendo 7 deixa de valer 7 e passa a valer 2 ... também temos a short version deu auto atribuição que é da seguinte forma
n*=4 // n vale 8
n/=2 ou n=n/2 // n passa a valer 4

//OPERADORES DE INCREMENTO
/*Uma forma ainda mais eficaz de simplificar e variavel é usar operadores de incremento*/
 let x = 5
 x=x+1  //6
 x+=1 //6
 x++ //6 soma um
 //TRÊS EXEMPLOS COM A MESMA CONTA POREM DE FORMAS DIFERENTES 
 let x = 5
 x=x-1 //4
 x-=1 //4
 x-- // subtrai um



/*A ordem de precedencia da conta aritmética aqui segue a mesma regra da matemática... Em uma equação primeiro vai ser calculado oo que estiver dentro de parenteses e então potencia **, multiplicação* divisão/ ou resto% no caso destes três depende da ordem em que eles aparecem na equação e então soma* e subtração-, também dependendo da ordem em que aparecem na expreção aritmética.

()
**
* / %
* -

o  sinal de igual (=) lee-se RECEBE. Dois sinais de igual (==) lee-se IGUAL e essa equality (allows type conversion) ou seja {console.log 5=="5" TRUE} é importante saber que o 5 sem aspas é considerado um número porém dentro das aspas ele se torna um texto, ou seja, ali temos (number vs string). E três sinais de igual significa igual em todos os sentido até em type. Strict equality (no type conversion). {console.log 5==="5" FALSE} falso pois ali temos ( 5 number vs 5 string). Para ser considerado verdadeiro eles precisam ser iguais console.log(5 === 5); true (same value, same type) use ===  for precise comparisons where type matters.

*/ 

//OPERADORES RELACIONAIS
//PARA ODA EXPRESSÃOQ UE TENHA UM OPERADOR RELACIONAL LIGADO A ELA O RESULTADO SEMPRE SERÁ UM BOLEANO
/*

n tem ordem de precedencia. É lido da esquerda para a direita

> maior
< menor
>= maior ou igual
<= menor ou igual
== igual
!= diferente

*/

//OPERADORES LÓGICOS

/*

! Negação                      !
&& Conjunção ou "E"            
|| Disjunção ou "OU"

idade >= 15 && idade<=17 Aqui estamos perguntando de a idade está entre 15 e 17 anos
estado == "RJ" || estado == "SP" O estado é RJ ou SP?
salário > 1500 && sexo !="M" O salário é acima de 1500 e não é homem? !="M" significa sexo diferente de masculino

ordem de precedencia
neste caso a ordem de execução no JS caso tenhamos mais de um operador lógico na expressão é !, && e então ||

*/

/*quando se tem operadores aritmeticos, relacionais e lógicos em uma mesma expressão a ordem em que ela é lida pelo JS é primeiro as contas aritméticas depois os relacionais e então os operadores lógicos */

OPERADOR TERNÁRIO

? :
condição ? valor_se_verdadeiro : valor_se_falso
TESTE ? TRUE : FALSE


//exercicios



/*

✅ Aritméticos:
	•	+, -, *, /, %

✅ Relacionais (comparação):
	•	>, <, >=, <=, ==, !=

✅ Lógicos:
	•	&& (e)
	•	|| (ou)
	•	! (não)

---------------------------------------------------------------------------------

Pergunta:
“O usuário tem permissão se for ADMIN ou MODERADOR.”
➡ Como ficaria a condição em JS?

usuario === "admin" || usuario === "moderador" 
---------------------------------------------------------------------------------
Pergunta:
“Para entrar no evento, a pessoa precisa ter mais de 18 anos e ter ingresso.”
➡ Como ficaria a condição em JS?

idade >= 18 && ingresso === "sim"
Dica: sempre use === ao invés de ==, para garantir que o tipo também seja igual.

---------------------------------------------------------------------------------

“Verifique se um aluno passou. A nota precisa ser maior ou igual a 6.”

nota >= 6

---------------------------------------------------------------------------------

“Mostre se uma pessoa tem entre 18 e 59 anos (inclusive).”

idade >= 18 && idade <= 59

---------------------------------------------------------------------------------

“Verifique se o número NÃO é maior que 10.”

numero !> 10 🛑 Isso não existe em JS. !> é inválido.

✅ Correto seria: !(numero > 10) OU numero <= 10

---------------------------------------------------------------------------------

“Mostre no console se um usuário tem nome igual a ‘admin’ OU senha igual a ‘1234’.”

nome === "admin" || senha === 1234 


---------------------------------------------------------------------------------

“Mostre se dois números são diferentes.”

2!=3


---------------------------------------------------------------------------------

“Verifique se a idade é menor que 12 ou maior que 60 (para desconto).”

idade < 12 || idade > 60

---------------------------------------------------------------------------------

“Mostre a soma, subtração, multiplicação e divisão de dois números no console.”

2 + 2
2 - 2
2 * 2
100 / 10

--------------------------------------------------------------------------------

3. “Verifique se um número é par usando o operador %.”

100 % 2 === 0
Isso retorna true se o número for par.

--------------------------------------------------------------------------------

Verifique se a idade de uma pessoa está entre 13 e 17 anos, inclusive. (idade de adolescente)

idade >= 13 && idade <= 17
---------------------------------------------------------------------------------

Verifique se a soma de dois números é maior que 100.

numero + numero > 100
--------------------------------------------------------------------------------
Verifique se um número não está entre 20 e 50.

numero < 20 || numero > 50

--------------------------------------------------------------------------------
Verifique se a nota de um aluno é menor que 3 ou maior que 9 (nota muito baixa ou muito alta).

nota < 3 || nota > 9
--------------------------------------------------------------------------------
Verifique se um número é ímpar.

numero % 2 !== 0
--------------------------------------------------------------------------------
Verifique se uma senha não é igual a "123456".

senha !== "123456"
--------------------------------------------------------------------------------
Dado o ano de nascimento, verifique se a pessoa é maior de idade.

let anoNasc = 2007
let idade = 2025 - anoNasc
idade >= 18

--------------------------------------------------------------------------------
Verifique se dois números são iguais.

let a = 2
let b = 4
a === b
--------------------------------------------------------------------------------
Verifique se a média de duas notas é maior ou igual a 6 (aprovado).

let nota1 = 7
let nota2 = 5
let media = (nota1 + nota2)/2
media >= 6

--------------------------------------------------------------------------------
Verifique se um número é negativo ou positivo.
numero > 0 
numero <0

Correto. Mas você pode colocar em forma de if para prática:
if (numero > 0) {
  console.log("Número positivo")
} else if (numero < 0) {
  console.log("Número negativo")
} else {
  console.log("Zero")
}
--------------------------------------------------------------------------------
Verifique se uma pessoa pode tirar carteira de motorista (idade mínima 18)

idade >= 18
--------------------------------------------------------------------------------
Verifique se uma pessoa tem entre 60 e 80 anos (para uma promoção especial).

idade >= 60 && idade <= 80
--------------------------------------------------------------------------------
Verifique se uma senha está errada (diferente de “abc123”).

senha !== "abc123"

--------------------------------------------------------------------------------
Incremente um número e verifique se ele passou de 100.

numero++
numero > 100
--------------------------------------------------------------------------------

Verifique se a idade é diferente de 30.

idade !== 30
--------------------------------------------------------------------------------
Verifique se uma pessoa pode votar (idade maior ou igual a 16).

let anoNascimento = 2008
let idade = 2025 - anoNascimento
idade >= 16
--------------------------------------------------------------------------------

4. Verifique se dois nomes são diferentes.

let name1 = "Brenna"
let name2 = "Natalia"

name1 == name2
--------------------------------------------------------------------------------

5. Some 10 ao número e verifique se ele ficou maior que 50.

let number = 50
number + 10 > 50

--------------------------------------------------------------------------------
6. Verifique se a subtração entre dois números é negativa.

let number1 = 2
let number2 = 3
number1 - number2 < 0

--------------------------------------------------------------------------------

7. Verifique se a nota está entre 0 e 10 (nota válida).

let nota1 = 6

nota1 >= 0 && nota1 <= 10
--------------------------------------------------------------------------------
9. Verifique se um número é maior que 20 ou menor que 10.

let number = 15

number > 20 || number < 10
--------------------------------------------------------------------------------
10. Verifique se um produto está fora da faixa de preço entre 100 e 200.

let produto = 150
produto < 100 || produto > 200
--------------------------------------------------------------------------------
> let idade = 19
> idade >= 18 ? 'Maior de idade' : 'Menor de idade'
'Maior de idade'

--

> let number = 2
> number % 2 == 0 ? 'Par' : 'Ímpar'
'Par'

--

> let senha = 123456
> senha === 12356 ? 'Acesso permitido' : 'Senha incorreta' 
'Senha incorreta'

--

> let nota1 = 8
> let nota2 = 3
> let media = (nota1 + nota2) / 2
> media >= 6 ? 'Aprovado' : 'Reprovado'
'Reprovado'

------

> let temperatura = 32 
> temperatura >= 30 ? 'Está quente' : 'Temperatura Agradável'
'Está quente'

--

> let nomeUsuario = "admin"
> nomeUsuario === "admin" ? 'Bem-vindo, administrador' : 'Bem-vindo, usuário'
'Bem-vindo, administrador
-------------------------------------------

-------------------------------------------

DOCUMENT OBJECT MODEL

*/