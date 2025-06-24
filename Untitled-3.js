// script.js

// Temp Converter
const celsius = document.getElementById("temp-c");
const fahrenheit = document.getElementById("temp-f");

celsius.addEventListener("input", () => {
  const c = parseFloat(celsius.value);
  fahrenheit.value = isNaN(c) ? '' : ((c * 9/5) + 32).toFixed(2);
});

fahrenheit.addEventListener("input", () => {
  const f = parseFloat(fahrenheit.value);
  celsius.value = isNaN(f) ? '' : ((f - 32) * 5/9).toFixed(2);
});

// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("bmi-result");

  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    let category = "";
    if (bmi < 18.5) category = "Eat more bro :)";
    else if (bmi < 25) category = "Maintain the same :)";
    else if (bmi < 30) category = "Dont eat that much bro :)";
    else category = "Obese";

    result.textContent = `BMI: ${bmi.toFixed(2)} (${category})`;
  } else {
    result.textContent = "Please enter valid values.";
  }
}


function calculateSplit() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tip = parseFloat(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people").value);
  const result = document.getElementById("split-result");

  if (!isNaN(bill) && !isNaN(tip) && people > 0) {
    const tipAmount = bill * (tip / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    result.textContent = `Total: $${total.toFixed(2)} | Each: $${perPerson.toFixed(2)}`;
  } else {
    result.textContent = "Please enter valid values.";
  }
}

// Random Quote Picker
const quotes = [
  "Believe in yourself.",
  "Stay hungry, stay foolish.",
  "Push yourself, no one else will do it for you.",
  "Success is not for the lazy.",
  "Great things never come from comfort zones."
];

function showRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}
