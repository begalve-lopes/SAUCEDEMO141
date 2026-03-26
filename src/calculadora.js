// src/calculadora.js
let somardoisnumeros = function somardoisnumeros(num1, num2) {
    let resultado = 0
    resultado = num1 + num2
    return resultado
}

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2) {
    return num1 - num2
}

let dividirDoisNumeros = (num1, num2) => {
    if (num2 === 0) {
        throw new Error("Divisão por zero não permitida")
    }
    return num1 / num2
}

let multiplicarDoisNumeros = (num1, num2) => {
    return num1 * num2
}

// Teste rápido (opcional)
console.log("Teste de divisão:", dividirDoisNumeros(1, 2))

module.exports = {
    somardoisnumeros,
    subtrairDoisNumeros,
    dividirDoisNumeros,
    multiplicarDoisNumeros
}