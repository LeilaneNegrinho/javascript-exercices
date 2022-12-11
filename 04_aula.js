// LAÇO DE REPETÇÃO FOR 


//repete de 1 em 1  de 0 até 10
//       inicia    condição  iteração      
//for(let i = 1;      i<10;     i++){
//inicia aqui
//..
 //   console.log(i) //i+1
//}

//tabuada inteligente
const numero = 8 //se alterar o numero 8 altera a tabuada
for(let i = 0; i <= 10; i++){

    console.log(numero * i)
    const resultado = numero * i
console.log(`A tabuada de ${numero} x ${i} = ${resultado}`)
}

// percorrer o arrei e verificar se é par ou impar
const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//console.log(numeros.lenght) // achar tamanho do array
const tamanhoDoArray = numeros.length
const numerosPares = []
const numerosImpares = []

for(let i = 0; i < tamanhoDoArray; i++) {
    const valor = numeros[i]

    if(valor % 2 ===0) {
        numerosPares.push(valor)   
    } else {
        numerosImpares.push(valor)
    }
}
    console.log(numerosPares)
    console.log(numerosImpares)

    
// QUAL O MAIOR NUIMERO DESSE ARRAY?

   const array = [15, 22, 25, 16, 205, 65, 32, 12, 23, 78, 45, 9, 1425, 55, 100]
    const tamanhoDoArray = array.length
    
    let maiorNumero = 0

    for(let  i= 0; i < tamanhoDoArray; i++){
        const valor = array[i]
    if(valor > maiorNumero) {
        maiorNumero = valor
    }
}
console.log(maiorNumero)


const arrDePessoas = [
    ["Pessoa A", "Pessoa B", "Pessoa C", "Pessoa D"],
    [10,            20,         30,         40]
    ]
const qtdItens = arrDePessoas[0].length
const arrayNovo = []

for(let i = 0; i < qtdItens; i++) {
    const nomePessoa = arrDePessoas [0][i]
    const idadePessoa = arrDePessoas [1][i]
    console.log(`A pessoa ${nomePessoa} tem a idade de ${idadePessoa}`) 
}
console.log(arrayNovo)



