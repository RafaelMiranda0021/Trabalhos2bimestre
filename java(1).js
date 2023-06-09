function calcularArea() {
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let area = comprimento * largura;
    document.getElementById("resultado").innerHTML = "<b>A área do terreno é: <b>" + area + " </b>metros quadrados.</b>";
  }
  function calcularFerraduras() {
    let numeroCavalos = parseInt(document.getElementById('numeroCavalos').value);
    let ferradurasPorCavalo = 4; // Assumindo que cada cavalo precisa de 4 ferraduras
    
    let totalFerraduras = numeroCavalos * ferradurasPorCavalo;
    
    document.getElementById('resultado2').innerHTML = "<b>Total de ferraduras necessárias:<b>" + totalFerraduras + " " + "</b>ferraduras</b>.";
  }
  function calcularDados() {
    // Ler as quantidades de pães e broas inseridas pelo usuário
    let quantidadePaes = parseInt(document.getElementById("quantidadePaes").value);
    let quantidadeBroas = parseInt(document.getElementById("quantidadeBroas").value);
    
    // Calcular o valor total arrecadado com a venda dos pães e broas
    let valorTotal = quantidadePaes * 0.12 + quantidadeBroas * 1.50;
    
    // Calcular o valor a ser guardado na conta de poupança (10% do valor total)
    let valorPoupanca = valorTotal * 0.1;
    
    // Exibir os resultados na página
    document.getElementById("valorTotal").textContent = "Valor total arrecadado: R$ " + valorTotal.toFixed(2);
    document.getElementById("valorPoupanca").textContent = "Valor a ser guardado na conta de poupança: R$ " + valorPoupanca.toFixed(2);
  }
  function calcularDiasVida() {
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let diasVida = idade * 365;

    let resultado = nome + ", você já viveu " + diasVida + " dias.";
    document.getElementById("resultado3").innerHTML = resultado;
  }
  function calcularLitros() {
    // Obter os valores inseridos pelo usuário
    let precoLitro = parseFloat(document.getElementById("precoLitro").value);
    let valorPagamento = parseFloat(document.getElementById("valorPagamento").value);

    // Calcular a quantidade de litros
    let litros = valorPagamento / precoLitro;

    // Exibir o resultado
    document.getElementById("resultado4").innerHTML = "<b>Você conseguiu colocar <b>" + litros.toFixed(2) + "</b> litros no tanque.</b>";
  }
  function calcularValor() {
    let peso = parseFloat(document.getElementById("peso").value);
    let valorPorQuilo = 12.00;
    let valorAPagar = peso * valorPorQuilo;
    
    document.getElementById("resultado5").innerHTML = "Valor a pagar: R$ " + valorAPagar.toFixed(2);
  }
  function calcularDias() {
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    
    let diasPassados = (mes - 1) * 30 + dia;
    
    document.getElementById("resultado6").innerHTML = "Dias passados desde o início do ano: " + diasPassados;
  }
  function calcularValorArrecadado() {
    let quantidadePequenas = parseInt(document.getElementById("quantidade-pequenas").value);
    let quantidadeMedias = parseInt(document.getElementById("quantidade-medias").value);
    let quantidadeGrandes = parseInt(document.getElementById("quantidade-grandes").value);
    
    let precoPequenas = 10;
    let precoMedias = 12;
    let precoGrandes = 15;
    
    let valorArrecadado = (quantidadePequenas * precoPequenas) + (quantidadeMedias * precoMedias) + (quantidadeGrandes * precoGrandes);
    
    document.getElementById("resultado7").innerHTML = "Valor arrecadado: R$ " + valorArrecadado.toFixed(2);
  }
  function calcularDistancia() {
    // Obter os valores dos pontos x e y
    let x1 = parseFloat(document.getElementById('x1').value);
    let y1 = parseFloat(document.getElementById('y1').value);
    let x2 = parseFloat(document.getElementById('x2').value);
    let y2 = parseFloat(document.getElementById('y2').value);

    // Calcular a diferença entre as coordenadas x e y
    let diffX = x2 - x1;
    let diffY = y2 - y1;

    // Calcular a distância usando o teorema de Pitágoras
    let distancia = Math.sqrt(diffX ** 2 + diffY ** 2);

    // Exibir a distância na página
    document.getElementById('resultado8').innerHTML = `A distância entre os pontos é: ${distancia.toFixed(2)}`;
  }
  function converterTempo() {
    let dias = parseInt(document.getElementById("dias").value);
    
    let anos = Math.floor(dias / 365);
    let meses = Math.floor((dias % 365) / 30);
    let diasRestantes = dias % 30;
    
    document.getElementById("resultado9").innerHTML = "Tempo sem acidentes: " + anos + " anos, " + meses + " meses e " + diasRestantes + " dias.";
  }
  function imprimirNumeros() {
    let numero = parseInt(document.getElementById("numero").value);
    
    let centena = Math.floor(numero / 100);
    let dezena = Math.floor((numero % 100) / 10);
    let unidade = numero % 10;
    
    document.getElementById("resultado10").innerHTML = "CENTENA = " + centena + " DEZENA = " + dezena + " UNIDADE = " + unidade;
  }
  function calcularArea1() {
    let raio = parseFloat(document.getElementById("raio").value);
    
    let area = 3.14 * raio * raio;
    
    document.getElementById("resultado23").innerHTML = "Área da pizza: " + area.toFixed(2);
  }
  function calcularSalario() {
    // Obter o valor do salário
    let salario = parseFloat(document.getElementById('salario').value);

    // Calcular o aumento de 15%
    let aumento = salario * 0.15;
    let salarioComAumento = salario + aumento;

    // Calcular o desconto de 8% de impostos
    let descontoImpostos = salarioComAumento * 0.08;
    let salarioFinal = salarioComAumento - descontoImpostos;

    // Exibir os resultados na página
    document.getElementById('salarioInicial').innerHTML = `Salário inicial: R$ ${salario.toFixed(2)}`;
    document.getElementById('salarioComAumento').innerHTML = `Salário com aumento: R$ ${salarioComAumento.toFixed(2)}`;
    document.getElementById('salarioFinal').innerHTML = `Salário final após desconto de impostos: R$ ${salarioFinal.toFixed(2)}`;
  }
  function racharConta() {
    let valorTotal = parseFloat(document.getElementById("valor-total").value);
    
    let valorCarlos = Math.floor(valorTotal / 3);
    let valorAndre = Math.floor(valorTotal / 3);
    let valorFelipe = valorTotal - (valorCarlos + valorAndre);
    
    document.getElementById("resultado-carlos").innerHTML = "Carlos deve pagar: R$ " + valorCarlos.toFixed(2);
    document.getElementById("resultado-andre").innerHTML = "André deve pagar: R$ " + valorAndre.toFixed(2);
    document.getElementById("resultado-felipe").innerHTML = "Felipe deve pagar: R$ " + valorFelipe.toFixed(2);
  }
