const calculadora = require('../src/calculadora')


test('Somar dois números',()=>{
    expect(calculadora.somardoisnumeros(1,2)).toBe(3)
} )

test("Subtrair dois números",()=>{
    expect(calculadora.subtrairDoisNumeros(1,2)).toBe(-1)
})

test("Dividir dois números",()=>{
    expect(calculadora.dividirDoisNumeros(1,2)).toBe(0.5)
    expect(()=>{
        calculadora.dividirDoisNumeros(1,0)
    }).toThrow("Divisão por zero não permitida")
})

test("Multiplicar dois números",()=>{
    expect(calculadora.multiplicarDoisNumeros(1,2)).toBe(2)
})