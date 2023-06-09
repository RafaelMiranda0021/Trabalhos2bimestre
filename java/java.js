function sortValues() {
  let value1 = parseInt(document.getElementById("value1").value);
  let value2 = parseInt(document.getElementById("value2").value);
  let value3 = parseInt(document.getElementById("value3").value);
  let value4 = parseInt(document.getElementById("value4").value);
  let value5 = parseInt(document.getElementById("value5").value);

  let values = [value1, value2, value3, value4, value5];
  values.sort(function(a, b) {
      return b - a;
  });

  let resultTable = document.getElementById("resultTable");
  resultTable.innerHTML = "";

  let row = resultTable.insertRow();
  for (let i = 0; i < values.length; i++) {
      let cell = row.insertCell();
      cell.innerHTML = values[i];
      cell.style.backgroundColor = i % 2 === 0 ? "#dddddd" : "#ffffff";
  }
}

function checkTriangle() {
  let sideX = parseInt(document.getElementById("sideX").value);
  let sideY = parseInt(document.getElementById("sideY").value);
  let sideZ = parseInt(document.getElementById("sideZ").value);

  if (sideX + sideY > sideZ && sideX + sideZ > sideY && sideY + sideZ > sideX) {
      let triangleType = "";

      if (sideX === sideY && sideY === sideZ) {
          triangleType = "Equilátero";
      } else if (sideX === sideY || sideX === sideZ || sideY === sideZ) {
          triangleType = "Isósceles";
      } else {
          triangleType = "Escaleno";
      }

      let resultTable = document.getElementById("resultTable1");
      resultTable.innerHTML = "";

      let row = resultTable.insertRow();
      let cell = row.insertCell();
      cell.innerHTML = triangleType;
  } else {
      let resultTable = document.getElementById("resultTable1");
      resultTable.innerHTML = "";

      let row = resultTable.insertRow();
      let cell = row.insertCell();
      cell.innerHTML = "Não forma um triângulo";
  }
}

function calculateNotes() {
  let value = parseInt(document.getElementById("value").value);

  let notes = [100, 50, 10, 5, 1];
  let noteCounts = [];

  for (let i = 0; i < notes.length; i++) {
      let note = notes[i];
      let count = Math.floor(value / note);

      noteCounts.push(count);
      value -= count * note;
  }

  let resultTable = document.getElementById("resultTable2");
  resultTable.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
      let note = notes[i];
      let count = noteCounts[i];

      if (count > 0) {
          let row = resultTable.insertRow();
          let noteCell = row.insertCell();
          let countCell = row.insertCell();

          noteCell.innerHTML = note;
          countCell.innerHTML = count;
      }
  }
}

function calculateTax() {
  let year = parseInt(document.getElementById("year").value);
  let value = parseFloat(document.getElementById("value").value);

  let taxRate = (year < 1990) ? 0.01 : 0.015;
  let tax = value * taxRate;

  let resultTable = document.getElementById("resultTable3");
  resultTable.innerHTML = "";

  let row = resultTable.insertRow();
  let taxCell = row.insertCell();

  taxCell.innerHTML = "R$ " + tax.toFixed(2);
}

function calculateSalary() {
  let cargo = document.getElementById("cargo").value;
  let salario = parseFloat(document.getElementById("salario").value);

  let aumento;
  if (cargo === "101") {
      aumento = salario * 0.1;
  } else if (cargo === "102") {
      aumento = salario * 0.2;
  } else if (cargo === "103") {
      aumento = salario * 0.3;
  } else {
      aumento = salario * 0.4;
  }

  let novoSalario = salario + aumento;
  let diferenca = novoSalario - salario;

  let resultTable = document.getElementById("resultTable4");
  resultTable.innerHTML = "";

  let row = resultTable.insertRow();
  let salarioAntigoCell = row.insertCell();
  let novoSalarioCell = row.insertCell();
  let diferencaCell = row.insertCell();

  salarioAntigoCell.innerHTML = "R$ " + salario.toFixed(2);
  novoSalarioCell.innerHTML = "R$ " + novoSalario.toFixed(2);
  diferencaCell.innerHTML = "R$ " + diferenca.toFixed(2);
}

function calculateCredit() {
  let saldoMedio = parseFloat(document.getElementById("saldoMedio").value);

  let percentual;
  if (saldoMedio <= 200) {
      percentual = 0;
  } else if (saldoMedio <= 400) {
      percentual = 0.2;
  } else if (saldoMedio <= 600) {
      percentual = 0.3;
  } else {
      percentual = 0.4;
  }

  let creditoEspecial = saldoMedio * percentual;

  let resultTable = document.getElementById("resultTable5");
  resultTable.innerHTML = "";

  let row = resultTable.insertRow();
  let saldoMedioCell = row.insertCell();
  let creditoEspecialCell = row.insertCell();

  saldoMedioCell.innerHTML = "R$ " + saldoMedio.toFixed(2);
  creditoEspecialCell.innerHTML = "R$ " + creditoEspecial.toFixed(2);
}

function calculateTotal() {
  let itemCode = parseInt(document.getElementById("itemCode").value);
  let quantity = parseInt(document.getElementById("quantity").value);

  let productName = "";
  let unitPrice = 0;

  switch (itemCode) {
      case 1:
          productName = "Cachorro Quente";
          unitPrice = 11.00;
          break;
      case 2:
          productName = "Bauru";
          unitPrice = 8.50;
          break;
      case 3:
          productName = "Misto Quente";
          unitPrice = 8.50;
          break;
      case 4:
          productName = "Hambúrguer";
          unitPrice = 9.00;
          break;
      case 5:
          productName = "Cheeseburger";
          unitPrice = 10.00;
          break;
      case 6:
          productName = "Refrigerante";
          unitPrice = 4.50;
          break;
      default:
          alert("Código do item inválido.");
          return;
  }

  let total = unitPrice * quantity;

  let resultTable = document.getElementById("resultTable6");
  resultTable.innerHTML = "";

  let row = resultTable.insertRow();
  let productNameCell = row.insertCell();
  let quantityCell = row.insertCell();
  let unitPriceCell = row.insertCell();
  let totalCell = row.insertCell();

  productNameCell.innerHTML = productName;
  quantityCell.innerHTML = quantity;
  unitPriceCell.innerHTML = unitPrice.toFixed(2);
  totalCell.innerHTML = total.toFixed(2);
}

function calculateWeightIdeal() {
  let height = parseFloat(document.getElementById("height").value);
  let gender = document.getElementById("gender").value;

  let weightIdeal = 0;

  if (gender === "male") {
      weightIdeal = (72.7 * height) - 58;
  } else if (gender === "female") {
      weightIdeal = (62.1 * height) - 44.7;
  } else {
      alert("Sexo inválido.");
      return;
  }

  let resultTable = document.getElementById("resultTable7");
  resultTable.innerHTML = "";

  let row = resultTable.insertRow();
  let genderCell = row.insertCell();
  let heightCell = row.insertCell();
  let weightIdealCell = row.insertCell();

  genderCell.innerHTML = gender === "male" ? "Masculino" : "Feminino";
  heightCell.innerHTML = height;
  weightIdealCell.innerHTML = weightIdeal.toFixed(2);
}

function calculatePayment() {
  let price = parseFloat(document.getElementById("price").value);
  let paymentCondition = document.getElementById("paymentCondition").value;

  let valueToPay = 0;

  switch (paymentCondition) {
      case "a":
          valueToPay = price - (price * 0.1);
          break;
      case "b":
          valueToPay = price - (price * 0.15);
          break;
      case "c":
          valueToPay = price;
          break;
      case "d":
          valueToPay = price + (price * 0.1);
          break;
      default:
          alert("Condição de pagamento inválida.");
          return;
  }

  let resultTable = document.getElementById("resultTable8");
  resultTable.innerHTML = "";

  let row = resultTable.insertRow();
  let paymentConditionCell = row.insertCell();
  let valueToPayCell = row.insertCell();

  let paymentConditionText = "";

  switch (paymentCondition) {
      case "a":
          paymentConditionText = "À vista em dinheiro ou cheque";
          break;
      case "b":
          paymentConditionText = "À vista no cartão de crédito";
          break;
      case "c":
          paymentConditionText = "Em duas vezes";
          break;
      case "d":
          paymentConditionText = "Em duas vezes com juros";
          break;
  }

  paymentConditionCell.innerHTML = paymentConditionText;
  valueToPayCell.innerHTML = valueToPay.toFixed(2);
}

function calculateSalary() {
  let professorLevel = document.getElementById("professorLevel").value;
  let hoursPerWeek = parseFloat(document.getElementById("hoursPerWeek").value);

  let valuePerHour = 0;

  switch (professorLevel) {
      case "1":
          valuePerHour = 12;
          break;
      case "2":
          valuePerHour = 17;
          break;
      case "3":
          valuePerHour = 25;
          break;
      default:
          alert("Nível do professor inválido.");
          return;
  }

  let salary = valuePerHour * hoursPerWeek * 4.5;

  let resultTable = document.getElementById("resultTable9");
  resultTable.innerHTML = "";

  let row = resultTable.insertRow();
  let professorLevelCell = row.insertCell();
  let hoursPerWeekCell = row.insertCell();
  let salaryCell = row.insertCell();

  professorLevelCell.innerHTML = professorLevel;
  hoursPerWeekCell.innerHTML = hoursPerWeek;
  salaryCell.innerHTML = salary.toFixed(2);
}