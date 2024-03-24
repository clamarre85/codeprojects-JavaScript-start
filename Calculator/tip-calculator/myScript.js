

const btnMultiply = document.getElementById('btnMultiply');
const btnDivide = document.getElementById('btnDivide');
const btnAdd = document.getElementById('btnAdd');
const btnSubtract = document.getElementById('btnSubtract');
const btnClearEntry = document.getElementById('btnClearEntry');
const btnOpenParenthesis = document.getElementById('btnOpenParenthesis');

const myBillAmount = document.getElementById("bill");
const myTipAmount = document.getElementById("tip");
const btnCalculate = document.getElementById("calculate");
const mytotal = document.getElementById("total");

function calculateTip() {
  const billAmount = myBillAmount.value;

  const tipAmount = myTipAmount.value;

  const totalAmount = billAmount * (1 + tipAmount / 100);

  mytotal.innerHTML = totalAmount.toFixed(2);
}

    btnCalculate.addEventListener("click", calculateTip);