//exercicio1

/*const Nome = "Leilane"

console.log(Nome, " nasceu em 1985")
console.log("Em 2019", Nome, "começou a programar")
console.log("Em 2020" , Nome, "ingressou na faculdade");
console.log("Em 2022 como programadora,", Nome, "conquistou seu primeiro emprego");

const Time= "Coritinthians"
const time = "Palmeiras"
const Time2= "CURINTIAAAAA"

//exercicio 2

console.log(Time+ "  campeao dos campeoes")
console.log(time+ " nao tem mundial")
console.log("Vai " +Time2)


const numero = 32.45678

console.log(numero)
console.log(parseFloat (numero))
//ver se parsefloat tb está certo


console.log(parseInt (numero))
console.log(numero.toFixed(2))

//parseInt-- transforma em inteiro
//parseFloat -- transforma em decimal


/* 3# - ExercÃ­cio
  const numeros = [1, 2, 3, 1, 2, 4, 5, 5, 4, 10, 12, 10, 1, 13, 12, 14]

  Dado o array acima:
  - Retorne a posiÃ§Ã£o do primeiro nÃºmero 2
  - Crie uma varÃ¡vel que verifique se existe o nÃºmero 14. Retorne true ou false
  - Insira o numero 34 na ultima posiÃ§Ã£o do array.
  - Insira o nÃºmero 90 na primeira posiÃ§Ã£o do array.
  - Retorne em uma variÃ¡vel o tamanho do array acima.
*/
const numeros = [1, 2, 3, 1, 2, 4, 5, 5, 4, 10, 12, 10, 1, 13, 12, 14]

console.log(numeros) //imprimiu todos os numeros
console.log(numeros.lengh)//nao funcionou
console.log(numeros.indexOf(2)) //achou a posição do 1 numero 2 // como achar a posição do segundo?

//ADICIONAR NA ULTIMA POSIÇÃO
numeros.push = 34 //adicionar o 34 na ultima posição
console.log(numeros) //ok!

//incluir numero na primeira posição - unshift
numeros.unshift = 90 
console.log(numeros)

// TRUE/FALSE
const existeNumero = numeros.includes(14)
console.log(existeNumero)

const existeNumero2 = numeros.includes(19)
console.log(existeNumero2)

const existeNumero1 = numeros.includes(6)
console.log (existeNumero1)

const existeNumero3 = numeros.includes(13)
console.log (existeNumero3)

// Retorne em uma variÃ¡vel o tamanho do array acima.
const tamanhoDoArray = numeros.length
console.log(tamanhoDoArray)


/* 4# ExercÃ­cio
  const meses = ["Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov"]

  Dado o array acima:
   - Insira na Ãºltima posiÃ§Ã£o do novo array a string "Dez"
   - Insira na primeira posiÃ§Ã£o do novo array a string "Jan"
   - Retorne em uma variÃ¡vel o tamanho do array acima.
*/
const meses = ["Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov"]

meses.push = ("Dez")
console.log(meses)

meses.unshift = ("Jan")
console.log(meses) 

const tamanhoDoArrayMeses = meses.length
console.log(tamanhoDoArrayMeses)
// para retornar o tamanho do array usar o nome da const +.length


/* 5# - ExercÃ­cio
Declare uma const meuAnodeNascimento que recebe o ano de seu nascimento Ex: 2001
Declare uma const anoAtual que recebe o ano atual Ex: 2022
Exiba as constantes meuAnodeNascimento e anoAtual uma ao lado da outra no console.log()
Declare uma variÃ¡vel chamada minhaIdade que recebe anoAtual subtraÃ­do a meuAnodeNascimento. Imprima o valor no console. (NÃ£o digite o valore da varÃ­avel minhaIdade de forma manual)
Declare uma variÃ¡vel chamada numeroCinco, que recebe 5 e:
      Descomente o console.log abaixo na terceira linha, Os nÃºmeros nÃ£o devem ser digitados manualmente;
      1) Substitua a palavra "valor1" pelo anoAtual somado Ã  5;
      2) Substitua a palavra "valor2" pela minhaIdade somada Ã  5;
      3)console.log(`Em ${valor1}, estarei com ${valor2} anos.`)


OBS:
Para fazer conta no javascript utilize os seguintes exemplos
  
  const soma = 2 + 2
  console.log(soma) // 4

  const subtracao = 4 - 2
  console.log(subtracao) // 2

  const multiplicacao = 3 * 3
  console.log(multiplicacao) // 9

  const divisao = 10 / 2
  console.log(divisao) // 5

  *** SerÃ¡ passado aritimÃ©tica na prÃ³xima aula
*/

const meuAnodeNascimento = (1985)
const anoAtual = (2022)
console.log(meuAnodeNascimento, anoAtual)

const minhaIdade = (anoAtual - meuAnodeNascimento)
console.log(minhaIdade)

let numeroCinco = (5)
const valor1 = (anoAtual)
const valor2 = (minhaIdade)
console.log(`Em ${valor1 + numeroCinco}, estarei com ${valor2 + numeroCinco} anos.`)
//para usar ${} USAR SEMPRE CRASE ``

/* 6# - Exerci­cio
Aqui no Brasil a temperatura Ã© medida em Celsius. PorÃ©m, vocÃª foi contratado para uma empresa americana para trabalhar com programaÃ§Ã£o 
JavaScript e agora deverÃ¡ utilizar Fahrenheit no seu novo lar. 
Crie uma calculadora que faÃ§a essa conversÃ£o e escreva no terminal a seguinte mensagem.

  RETORNO:
  "A temperatura de **VARIAVEL_EM_CELSIUS**Â°C Ã© igual a Fahrenheit: **VARIAVEL_QUE_FAZ_A_CONTA**Â°F"
  
  OBS:
  1) FÃ³rmula para o cÃ¡lculo ||  Â°F = Â°C x 9 Ã· 5 + 32
  2) Para ver se seu algoritmo estÃ¡ correto, utilize o site https://www.metric-conversions.org/pt-br/temperatura/celsius-em-fahrenheit.htm
*/
//declarar a constante de celsius 
const celsius = 20
const fahrenheit = (celsius * 9/5+32)
const result = `a temperatura de ${celsius}  é igual a ${fahrenheit}`
console.log(`a temperatura de ${celsius}  é igual a ${fahrenheit}`)

console.log(typeof"123")//string
console.log(typeof 123) //number

/* 7# - ExercÃ­cio
Crie uma calculadora de IMC que imprima a frase abaixo. Onde tem **___** substitua por variÃ¡veis.

  RETORNO ESPERADO:
  "
  **NOME** tem **IDADE** anos, pesa **KILOS** kg
  tem **ALTURA** de altura e seu IMC Ã© de **IMC**
  **NOME** nasceu em **ANO_NASCIMENTO**
  "
  OBS:
    1 - Crie variÃ¡veis(let/const) para nome, idade, peso, altura, imc e ano de nascimento
    2 - Para o resultado de altura utiliza em metros, exemplo: 1.63 | 1.85 | 1.76 e etc...
    3 - O cÃ¡lculo do IMC Ã© peso / (alturaEmMetros * alturaEmMetros)
*/
const nome1 = "Ligia"
const idade = 44
const kilos = 90
const altura = 1.62
const imc = (kilos / (altura * 2).toFixed(1))  //fixar numeros quebrados
const nasc = (2022 - idade)

console.log(`${nome1} tem ${idade} anos, pesa ${kilos} kg, tem ${altura} e seu IMC é de ${imc}. ${nome1} nasceu em ${nasc} `)


