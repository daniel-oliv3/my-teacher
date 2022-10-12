/* ======= JavaScript basic ======= */
//Comando exibe informações no console
console.log("Olá, Mundo!");

// ======= Variaveis e tipos de dados =======
/* String */
let nome = "Daniel Oliveira";
console.log(nome);

/* Number */
let idade = 35;
console.log(idade);

/* Boolean */
let ehprogramador = true;
console.log(ehprogramador);

// ======= Operadores matematicos =======
let num1 = 10;
let num2 = 5;

/* Soma */
console.log("Soma");
console.log(num1 + num2);

/* Subtração */
console.log("Subtração");
console.log(num1 - num2);

/* Multiplicação */
console.log("Multiplicação");
console.log(num1 * num2);

/* Divisão */
console.log("Divisão");
console.log(num1 / num2);

/* Modulo/Resto da divisão */
console.log("Modulo/Resto da divisão");
console.log(num1 % num2);

/* ======= Arrays ======= */
let notas = [10, 8.9, 7.3, 8.5];
console.log(notas);
console.log(notas[0]);
console.log(notas[2]);

notas[0] = 8;
console.log(notas);

notas.push(9);
console.log(notas);


/* ======= Laços de repetição ======= */
// For
let numeros = [1,2,3,4,5,6,7];
for(let i = 0; i < 7; i++){
    console.log(numeros[i]);
}

console.log("Terminou o for");

// For of
for(let nota of notas){
    console.log(nota);
}

console.log("Terminou o for of");

/* ======= Objetos javascript ======= */
let aluno = {
    nome: "Daniel Oliveira",
    idade: 35,
    notas: [10, 8.9, 7.3, 8.5],
    contato: { 
        telefone: "(55)92-99131-5030",
        email: "danieloliveira.webmaster@gmail.com"
    }
}

console.log(aluno);















