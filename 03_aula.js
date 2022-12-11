/*aritimetica
+ adicao e contatenacaco
-subtracao
**potencia
*/

//contas basicas

const num1 = 10
const num2 = 5

const soma = num1 + num2
console.log(soma)

const sub = num1 - num2
    
const div = num1 / num2
console.log(div)

const mult = num1 / num2
console.log(mult)

const potencia = num1** num2//10* 10* 10* 10* 10
console.log(potencia)

const mod = num1 % num2
console.log(mod) //serve para verificar se o numero e par ou impar

//adição e concatenação, tomar cuidado ao somar string com numeros
const som1= "5" + 10
console.log(som1) //510 

//? precedencia
const num3 = 10 
//           10      5      10
const calc = num1 + num2 * num3
//javascript usa as regras da matemática - primeiro a multiplicação

//alterar a precedencia - 
//
const calc1 = (num1 + num2) * num3
console.log (calc1) //60

/*ordem das precedencias
1  () - parenteses 
2  **   potencias
3  * / %  multiplicação, divisao e modulo
4  + -  soma e subtração

caso pegue os valores na mesma precedencia o codigo é lido da esquerda para direita
*/
//*  Operadores logicos */
/*
  > Maior que
  < Menor que
  >= Maior ou igual que
  <= Menor ou igual que
  == Igual a
  === IdÃªntico a
  ! negação
  != Diferente de
  !== Não identico
  && E/And 
  || ou/or
*/

const numero1 = 10
const numero2 = 9
// > maior que
const maiorQ = numero1 > numero2
console.log(maiorQ)

// < Menor que
const menorQ = numero1 < numero2
console.log(menorQ)

// >= Maior ou igual que
const maiorOuIgualQ = numero1 >= numero2
console.log(maiorOuIgualQ)

// <= Menor ou igual que
const menorOuIgualQ = numero1 <= numero2
console.log(menorOuIgualQ)

// igual a (ele NAO leva em conta os tipos de retorno string e numeros sao =)
const igual = "5" == 5
console.log(igual)

// identico a ( ele LEVA em conta os tipos do retorno - tem que ser igual )
const identico = "5" === 5
console.log(identico)

// != Diferente de
const dif = "10" != 10
console.log(dif)

// !== Nao identico
const dif2 = "10" !== 10
console.log(dif2)

//* LOGICA PROPOSICIONAL */
// &&  e/and  
// ||  or/ ou 

// &&  e/and  
//           oculos      Blusa
console.log( true    &&    true)
console.log( true    &&    false)
console.log( false   &&    true)
console.log( false   &&    false)

// ||  or/ ou 
//           oculos        Blusa
console.log( true    ||    true)
console.log( true    ||    false)
console.log( false   ||    true)
console.log( false   ||    false)



//OPERADORES DE INCREMENTO E DECREMENTO
//usar let para poder reatribuir o valor
let contador = 1
contador = contador +1
contador++
console.log(contador)
//adiciona o valor de 1 em 1


//DECREMENTO  - cuidado com o contador1-- retira depois.
let contador1 = 10
contador1-- // pÃ³s incremento
--contador1 // prÃ© incremento
console.log(contador1)
// Mesmo que -> contador = contador - 1

//* Operadores aritmÃ©ticos

/* Podemos fazer isso para qualquer operador aritmÃ©tico
  += AdiÃ§Ã£o
  -= SubtraÃ§Ã£o
  /= DivisÃ£o
  *= MultiplicaÃ§Ã£o
  %= MÃ³dulo
  **= PotÃªncia
*/

let n1 = 1
n1 += 5 // Mesmo que = variavel = variavel - 5
console.log(n1) 

let n2 = 1
n2 -= 5 // Mesmo que = variavel = variavel - 5
console.log(n2) 

let n3 = 1
n3 *= 5 // Mesmo que = variavel = variavel * 5
console.log(n3) 

let n4 = 1
n4 /= 5 // Mesmo que = variavel = variavel / 5
console.log(n4) 

let n5 = 1
n5 %= 5 // Mesmo que = variavel = variavel % 5
console.log(n5) 

let n6 = 1
n6 **= 5 // Mesmo que = variavel = variavel ** 5
console.log(n6) 


