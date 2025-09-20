const inputTemp = document.getElementById("inputTemp");
const inputUnit = document.getElementById("inputUnit");
const outputTemp = document.getElementById("outputTemp");
const outputUnit = document.getElementById("unitOutput");
const swapBtn = document.getElementById("swap");

function convertTemperature(value, fromUnit, toUnit) {
    if(isNaN(value)) {
        return "";
    }

    let celseius;

    switch (fromUnit) {
        case "C":
            celsius = value;
            break;
        case "F":
            celsius = (value - 32) * 5 / 9;
            break;
        case "K":
            celsius = value - 273.15;
            break;
    }

    switch (toUnit) {
        case "C":
            return celsius.toFixed(2);
        case "F":
            return (celsius * 9 / 5 + 32).toFixed(2);
        case "K":
            return (celsius + 273.15).toFixed(2);
    }
}

function updateOutputTemperature() {
    const value = parseFloat(inputTemp.value);
    const fromUnit = inputUnit.value;
    const toUnit = outputUnit.value;

    if(isNaN(value)) {
        return "";
    }

    outputTemp.value = convertTemperature(value, fromUnit, toUnit);
}

inputTemp.addEventListener("input", updateOutputTemperature);
inputUnit.addEventListener("change", updateOutputTemperature);
outputUnit.addEventListener("change", updateOutputTemperature);

swapBtn.addEventListener("click", () => {
   const tempUnitValue = inputUnit.value;
   inputUnit.value = outputUnit.value;
   outputUnit.value = tempUnitValue;

   updateOutputTemperature();
});