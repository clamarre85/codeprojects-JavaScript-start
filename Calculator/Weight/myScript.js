const myWeightInput = document.getElementById("weight");
const btnCalculate = document.getElementById("calculate");
const myTotal = document.getElementById("total");

function calculateWeight() {
  
  const weightInPounds = parseFloat(myWeightInput.value);

  
  if (isNaN(weightInPounds)) {
    alert("Please enter a valid weight in pounds.");
    return;
  }

  
  const weightInKg = weightInPounds * 0.45359237;

  
  myTotal.innerHTML = " " + weightInKg.toFixed(2) + " kg";
}

btnCalculate.addEventListener("click", calculateWeight);