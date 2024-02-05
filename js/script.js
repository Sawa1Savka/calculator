function appendNumber(number) {
  document.getElementById("result").value += number;
}

function appendOperator(operator) {
  document.getElementById("result").value += operator;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  let expression = document.getElementById("result").value;
  // Заменяем символ % на /100
  expression = expression.replace(/%/g, "/100");
  // Вычисляем корень
  expression = expression.replace(/√(\d+)/g, "Math.sqrt($1)");
  const result = eval(expression);
  document.getElementById("result").value = result;
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    calculateResult();
  }
}