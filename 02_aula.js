let nome = "Leilane"
const nome2 ="Yasmin"
const nome3= "Miguel"

console.log(nome + " Nasceu em 1985 ")
console.log("Em 2022", nome, "começou a programar")
console.log (`em 2010 nasceu`, nome2, `filha de ${nome}`)
console.log (`E ${nome3} nasceu em 2013`)

const sobrenome="Negrinho"

console.log(nome+ sobrenome)

// padrao js

const n1 = 0.1
const n2 = 0.7
console.log (n1 + n2)

// to fixed

const numero4 = 15.887745
console.log(numero4)
console.log(numero4.toFixed(2) + 1)

// parseInt - escreve direto (paseando ele para numero inteiro)

console.log(parseInt(numero4))

// parseFloat

console.log(parseFloat(numero4))

// number()

console.log(Number(n2))

console.log(Number(n1*n2))


// ? undefined > quando nao tem nada definido

let nomeAluno
console.log (nomeAluno)

//? Null > nada dentro da variável

const nomeAluno2 = null
console.log(nomeAluno2)

//? boolean > true or false

const alunoAprovado = true
const alunoAprovado2 = false
console.log(alunoAprovado)
console.log(alunoAprovado2)

//? array > TEM ÍNDICES  LISTA COM INDICES
//                  00      01     02           03      posiçaõ 
const aluno = ["carlos", "maria", "Antonio", "Marta", "Jose" ]
console.log(aluno)

console.log(aluno.lenght)

// push e legnt coloca dados no final do array
aluno.push("joão")

//unshift coloca dados na primeira posição do array
aluno.unshift("primeiro nome")
console.log(aluno)

// POP RETIRA O ÚLTIMO 
//const alunoRemovido = aluno.pop()
//aluno.pop()
//aluno.pop()
//console.log(aluno)
//console.log(alunoRemovido)

// shift -remove o primeiro dado do array
const alunoRemovido= aluno.shift()
    console.log(alunoRemovido)
    console.log(aluno)

  //  const existeAluno1 = aluno.includes("carlos")
    //const existeAluno2 = aluno.includes("x")
    
//console.log(existeAluno) busca no seu array se existeou nao e da o numero da posição

//indexOf()

const existeAluno1 = aluno.indexOf("carlos")
const existeAluno2 = aluno.indexOf("sss")
console.log(existeAluno1)


//splice - adiciona e remove itens
//podemos remmover e adicionar tens ao mesmo tempo
//metodo coringa

/*
splice(start)
splice (start, deletecount)
slice(smart, deletecount, item1)

*/

const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho']
//const mesesCortados= meses.splice(2)
const mesesCortados = meses.splice(2,1)
console.log(mesesCortados)
console.log(meses)


//? vetor matriz
const vetor = [
    ["ana", "carlos", "viviane", "giovana", "andré"]
    [34, 35, 32, 45, 23]

]
