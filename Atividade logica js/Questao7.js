// Questão 7
function filtro(array) {
    const numeros = array.filter(elemento => typeof elemento === 'number')
    return numeros
  }

console.log(filtro([2, "palavra", 4, 5, 7, "aleatoria"]))
console.log(filtro(["só", "pra", "ver", "se", "vai"]))