/* 1# - Exercício
  const array = [
    [1, 5, 7, 9],
    [2, 6, 8, 10]
  ]

- Calcule a média dos números do array da primeira posição (Índice 0)
- Calcule a média dos números do array da segunda posição (Índice 1)
- Some todos os números dos arrays dos índices 1 e 2 e também forneça a média do array em relação a quantidade 
de todos os números do array
- Multiplique os valores de cada index e coloque-os em variáveis representando cada index,
  exemplo const index0, const index1 e etc...
*/

const tabela = [
    [1, 5, 7, 9],
    [2, 6, 8, 10]
  ]

const tamanhoTabela1 = tabela[0].length
const somaPrimeiraTabela = tabela[0][0]+ tabela[0][1]+ tabela[0][2] + tabela[0][3];
const mediaPrimeiraTabela = somaPrimeiraTabela / tamanhoTabela1
console.log(mediaPrimeiraTabela)

const tamanhoTabela2 = tabela[1].length
const somaSegundaTabela = tabela[1][0]+ tabela[1][1]+ tabela[1][2] + tabela[0][3];
const mediaSegundatabela = somaSegundaTabela / tamanhoTabela2
console.log(mediaSegundatabela)

const somaNumeros = somaPrimeiraTabela + somaSegundaTabela
const quantidadeDeNumeros = tamanhoTabela1 + tamanhoTabela2
const media = somaNumeros / quantidadeDeNumeros
console.log(media)


/* 2# - Exercício
  Vamos construir com if um sistema de sinal de transito
  - Crie uma variável chamada cor que receba uma das cores a seguir: "vermelho", "amarelo", "verde"
  - Gostaríamos que:
    - Caso a variável cor for vermelha imprima na tela "PARE"
    - Caso a variável cor for amarela imprima na tela "CUIDADO"
    - Caso a variável cor for verde imprima na tela "PROSSIGA"
    - Caso a variável cor receba alguma cor inválida, imprima "COR INVÀLIDA"
*/

const cor1 = "vermelho"
if (cor1 === "vermelho")
console.log("PARE")

const cor2 = "amarelo"
if (cor2 === "amarelo")
console.log("CUDADO")

const cor3 = "verde"
if (cor3 ==="verde")
console.log("PROSSIGA")
else{
    console.log("COR INVALIDA")
}




/* 3# - Exercício
  Monte um programa que realiza a verificação de uma entrada de um ônibus
  Monte um fluxo sistêmico que verifique os seguintes requisitos.
    - Pessoas abaixo de 6 anos não são permitidas.
    - Crianças entre 7 a 10 anos só podem entrar acompanhada dos pais
    - Adolescentes de 11 a 17 anos pagam se estiverem sem "carteirinha" e não pagam com "carteirinha"
    - Pessoas acima de 65 anos não pagam
    - Pessoas acima de 18 anos pagam normalmente.

    Saídas esperadas do sistema
      - "ENTRADA PERMITIDA",
      - "ENTRADA PERMITIDA, SEM CUSTO",
      - "ENTRADA NÃO PERMITIDA"
    
    Inicie seu sistema com as seguintes variáveis
    const idade = valor do tipo number
    const carteirinha = valor do tipo boolean
    const acompanhadoPais = valor do tipo boolean
*/
/*
const idade = 19
const carteirinha = true
const acompanhadoPais = true

if(idade <= 6) {
  console.log("ENTRADA NÃO PERMITIDA", idade)
}
else if(idade >= 7 && idade<= 10 && acompanhadoPais){
  console.log("ENTRADA PERMITIDA", idade)
  }
    
else if(idade >=11 && idade<= 17 && carteirinha) {
  console.log("VERIFICAR CARTEIRINHA")
}else{ console.log("ENTRADA PERMITIDA, SEM CUSTO")
}

f(idade >= 65){
  console.log("ENTRADA PERMITIDA, SEM CUSTO")
} else if(idade >= 18){
  console.log("ENTRADA PERMITIDA")
}







/*const idade = 6
const carteirinha = true
const acompanhadoPais = true
const idade = 6
if(idade > 6) {
  console.log("Entrada não permitida", idade)
} else if(idade >= 7 && >=10 && acompanhadoPais) {
  console.log("Entrada permitida", idade) 
} {else if(idade >=11 && <=17){
    if(carteirinha) {
        console.log()
        
    }
}
  console.log(", idade)
} 
 {else.if(idade >65)}
else {
  console.log("Não tem mais que 18 anos, entrada NÃO permitida", idade)
*/
    

//1 Exercício
//Dado o array abaixo, imprima apenas os valores ímpares


const array = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100]
//PERCORRER O ARRAY
console.log(array.length) //15 posições

for(let i=0 ; i < array.length; i++ ){
  if(array[i]  % 2 === 1){
    console.log("valor ímpar", array[i])

  }
}


/**
#2 Exercício
Dado o array abaixo, verifique qual é o maior número e exiba-lo
*/


const array1 = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100]
//achar o tamanho - array.length

console.log(array1.length) // tamanho 15

let maiorNumero=0

for(let i=0 ; i< array.length ; i++){
  if(array1[i] > maiorNumero){
    maiorNumero = array1[i]    
  }
}
console.log(maiorNumero)



//#3 Exercício
//Dado o array abaixo, calcule a média dos valores de um array


const array2 = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100]

//fazer a soma depois pegar o valor e dividir pelo tamanho de numeros do array

console.log(array2.length)//15 posições

let somaDoArray2=0
for(let i = 0 ; i < array2.length ; i++ ){
 somaDoArray2 = somaDoArray2 +array2[i];
}

console.log(somaDoArray2)
console.log(somaDoArray2 / array.length)


/**
#4 Exercício
Dado o array abaixo, calcule o quadrado de cada número
*/
const array3 = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100]

console.log(array3.length)

for(let i = 0 ; i < array3.length ; i++){
  console.log("o quadrado de" + array3[i] + " é " + (array3[i]**2))  //pode fazer (array3[i] * array3[i]
}