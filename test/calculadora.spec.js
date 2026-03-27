const calculadora = require("../src/calculadora");

test("Somar dois números", () => {
  expect(calculadora.somardoisnumeros(1, 2)).toBe(3);
});

test("Subtrair dois números", () => {
  expect(calculadora.subtrairDoisNumeros(1, 2)).toBe(-1);
});

test("Dividir dois números", () => {
  expect(calculadora.dividirDoisNumeros(1, 2)).toBe(0.5);
  expect(() => {
    calculadora.dividirDoisNumeros(1, 0);
  }).toThrow("Divisão por zero não permitida");
});

let massaDivisao = [
  [7, 2, 3.5],
  [7, 0, "erro"],   // melhor usar erro em vez de Infinity
  [4, 0.25, 16],
];

test.each(massaDivisao)("dividir %p / %p = %p", (num1, num2, resultado) => {
  if (resultado === "erro") {
    expect(() => {
      calculadora.dividirDoisNumeros(num1, num2);
    }).toThrow();
  } 
  
  if(resultado !== "erro") {
    expect(calculadora.dividirDoisNumeros(num1, num2)).toBe(resultado);
  }
});

test("Multiplicar dois números", () => {
  expect(calculadora.multiplicarDoisNumeros(1, 2)).toBe(2);
});


