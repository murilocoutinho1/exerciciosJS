//Criar uma variável chamada 'nome' e mostre no console: "Olá, meu nome é.......". Usando templateString

let nome = 'Murilo';
console.log(`Olá, meu nome é ${nome}`);

//Crie duas variáveis de números e mostre a soma

const var1 = 1;
const var2 = 5;
const total = var1 + var2;

console.log(`A soma de ${var1} + ${var2} é ${total}`);

//calcule o dobro de um número armazenado em uma variável

const n1 = 10;
const mult = n1 * 2;

console.log(`O dobro de ${n1} é ${mult}`);

//verifique se um número é par ou ímpar

const numero = '12';

if (numero % 2 === 0)
{
    console.log(`O número ${numero} é par`);
}
else
{
    console.log(`O número ${numero} é ímpar`);
}

//verificar se uma pessoa é maior de idade

const idade = 23;
if (idade >= 18)
{
    console.log(`Se a pessoa tem ${idade} anos, ela é maior de idade`)
}
else
{
    console.log(`Se a pessoa tem ${idade} anos, ela é menor de idade`)
}

//receba uma nota (0-10) e exiba: "Aprovado" > 7, "Recuperação" >= 5 e < 7 ou "Reprovado"

const nota = 6.99;
if (nota >= 7)
{
    console.log(`Como a nota é: ${nota}, o aluno está APROVADO!`);
}
else if (nota >= 5 && nota < 7)
{
    console.log(`Como a nota é: ${nota}, o aluno está de RECUPERAÇÃO!`);
}
else
{
    console.log(`Como a nota é: ${nota}, o aluno está REPROVADO!`);
}