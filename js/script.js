let history = [];

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
  expression = expression.replace(/%/g, "/100");
  expression = expression.replace(/√(\d+)/g, "Math.sqrt($1)");
  const result = eval(expression);
  document.getElementById("result").value = result;
  addToHistory(expression, result);
}

function addToHistory(expression, result) {
  const historyItem = `${expression} = ${result}`;
  history.push(historyItem);
  if (history.length > 5) {
    history.shift(); // Удаляем самую старую операцию
  }
  renderHistory();
}

function renderHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";
  for (let i = history.length - 1; i >= 0; i--) {
    const item = history[i];
    const listItem = document.createElement("li");
    listItem.textContent = item;
    historyList.appendChild(listItem);
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    calculateResult();
  }
}