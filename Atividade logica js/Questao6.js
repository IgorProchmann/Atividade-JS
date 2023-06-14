// Questão 6
function repetir(elemento, quantidade) {
    const arrayRepeticoes = []
  
    for (let i = 0; i < quantidade; i++) {
      arrayRepeticoes.push(elemento)
    }
  
    return arrayRepeticoes
  }

console.log(repetir("Igor Lindo", 2))
console.log(repetir(17, 21))