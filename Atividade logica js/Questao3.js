// Questão 
function mes(numero) {
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
];
    if (numero >= 1 && numero <= 12) {
      return meses[numero]
  }
}
console.log(mes(10))
console.log(mes(1))