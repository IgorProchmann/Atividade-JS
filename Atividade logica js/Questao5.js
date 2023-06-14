// Questão 5
function multiplicarSemOperador(a, b) {
    let resultado = 0
    
    for (let i = 0; i < b; i++) {
      resultado += a
    }
    
    return resultado
  }
const numero1 = 5
const numero2 = 3

const resultado = multiplicarSemOperador(numero1, numero2)

console.log(resultado)