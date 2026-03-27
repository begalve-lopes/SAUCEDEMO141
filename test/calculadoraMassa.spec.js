const calculadora = require("../src/calculadora");

const somar = require("../fixtures/somar");
const multiplicacao = require("../fixtures/multiplicacao");
const subitracao = require("../fixtures/subitracao");
const divisao = require("../fixtures/divisao");

test.each(somar.array.map(item =>
    [
        item.num1,
        item.num2,
        item.resultado
    ]
))("Somar %p + %p = %p",( num1,num2,resultado) =>{
    expect(calculadora.somardoisnumeros(num1,num2)).toBe(resultado);
})

test.each(multiplicacao.array.map(item =>
[
    item.num1,
    item.num2,
    item.resultado
]
))("Multiplicação %p * %p = %p", (num1,num2,resultado)=>{
    expect(calculadora.multiplicarDoisNumeros(num1,num2)).toBe(resultado);
})


test.each(multiplicacao.array.map(item =>
[
    item.num1,
    item.num2,
    item.resultado
]
))("Subitração %p - %p = %p", (num1,num2,resultado)=>{
    expect(calculadora.multiplicarDoisNumeros(num1,num2)).toBe(resultado);
})

test.each(divisao.array.map(item=>[
        item.num1,
        item.num2,
        item.resultado
]))("Divisão %p / %p = %p ", (num1,num2,resultado) =>{
    if(resultado == "erro"){
        expect(()=>calculadora.dividirDoisNumeros(num1,num2)).toThrow();
    }

    if(resultado !== "erro"){
        expect(calculadora.dividirDoisNumeros(num1,num2)).toBe(resultado)
    }
})