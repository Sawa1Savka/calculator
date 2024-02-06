let history = [];

function appendNumber(number) {
  document.getElementById("result").value += number;
  document.getElementById("result").focus(); // Установка фокуса после нажатия кнопки
}

function appendOperator(operator) {
  document.getElementById("result").value += operator;
  document.getElementById("result").focus(); // Установка фокуса после нажатия кнопки
}

function appendBracket(bracket) {
  document.getElementById("result").value += bracket;
  document.getElementById("result").focus(); // Установка фокуса после нажатия кнопки
}

function clearResult() {
  document.getElementById("result").value = "";
  document.getElementById("result").focus(); // Установка фокуса после нажатия кнопки
}

function calculateResult() {
  let expression = document.getElementById("result").value;
  expression = expression.replace(/%/g, "/100");
  expression = expression.replace(/√(\d+)/g, "Math.sqrt($1)");
  const result = eval(expression);
  document.getElementById("result").value = result;
  addToHistory(expression, result);
  document.getElementById("result").focus(); // Установка фокуса после нажатия кнопки
}

function addToHistory(expression, result) {
  const historyItem = `${expression} = ${result}`;
  history.push(historyItem);
  if (history.length === 1) {
    document.querySelector('.history').style.display = 'block';
  } else if (history.length > 5) {
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

function undoLastAction() {
  if (history.length > 0) {
    history.pop();
    renderHistory();
    if (history.length === 0) {
      document.querySelector('.history').style.display = 'none';
    }
  }
  clearResult();
  document.getElementById("result").focus(); // Установка фокуса после нажатия кнопки
}

function clearHistory() {
  history = [];
  renderHistory();
  document.querySelector('.history').style.display = 'none';
  clearResult();
  document.getElementById("result").focus(); // Установка фокуса после нажатия кнопки
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    calculateResult();
  }
}