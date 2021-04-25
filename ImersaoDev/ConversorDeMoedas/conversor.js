var valorEmDolarTexto = prompt("Qual o valor em Dolar que você deseja converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = prompt("Insira aqui o valor atual da cotação em reais!!!")

var valorEmRealNumero = parseFloat(valorEmReal)

var valorEmRealConvertido = valorEmDolarNumero * valorEmRealNumero

var valorEmRealFixado = valorEmRealConvertido.toFixed(2)

alert("O Valor é valor em reais é de: " + valorEmRealFixado + " R$")