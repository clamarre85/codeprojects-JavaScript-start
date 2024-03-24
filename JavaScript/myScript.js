const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.querySelectorAll(".input");

inputs.forEach(input => {
    input.addEventListener("input", function () {
        let value = parseFloat(input.value);
        console.log(input.name + ":" + value);
        
        if (input.name === "celsius") {
            fahrenheitInput.value = (value * 1.8) + 32;
            kelvinInput.value = value + 273.15; 
        } else if (input.name === "fahrenheit") {
            celsiusInput.value = (value - 32) / 1.8;
            kelvinInput.value = ((value - 32) /1.8) + 273.15; 
        } else if (input.name === "kelvin") {
            fahrenheitInput.value = ((value -273.15) * 1.8) + 32;
            celsiusInput.value = value - 273.15; 
        }
    });
});


const celsiusInput= document.getElementById("celsius");
const fahrenheitInput= document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.querySelectorAll(".input");

inputs.forEach(input => {
    input.addEventListener("input", function () {
        let value = parseFloat(input.value);
        console.log(input.name + ":" + value);
        
        if (input.name === "celsius") {
            fahrenheitInput.value = (value * 1.8) + 32;
            kelvinInput.value = value + 273.15; 
        } else if (input.name === "fahrenheit") {
            celsiusInput.value = (value - 32) / 1.8;
            kelvinInput.value = ((value - 32) /1.8) + 273.15; 
        } else if (input.name === "kelvin") {
            fahrenheitInput.value = ((value -273.15) * 1.8) + 32;
            celsiusInput.value = value - 273.15; 
        }
    });
});


