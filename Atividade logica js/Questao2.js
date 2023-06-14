// Questão 2
function calcularDias(idade) {
    if (idade < 0) {
      return "A idade não pode ser negativa."
    }
  
    var quantidadeDias = idade * 365
    return quantidadeDias
  }
  var idade = 17
  var quantidadeDias = calcularDias(idade)

  console.log("A quantidade de dias correspondente a " + idade + " anos é: " + quantidadeDias)