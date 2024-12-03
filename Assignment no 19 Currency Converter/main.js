let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");
let amount = document.getElementById("amount");
let convert = document.getElementById("covertBtn");
let clearBtn = document.getElementById("clearBtn");
let resultDiv = document.getElementById("result");

convert.addEventListener("click", convertCurrency);

function convertCurrency() {
    resultDiv.style.display = "block"
    let fCurrency = fromCurrency.value;
    let tCurrency = toCurrency.value;
  let amount1 = amount.value;
  let box = document.createElement("div");
  if (amount1 == "") {
    alert("Sorry input abhi khali h!🤨");
    resultDiv.style.display = "none"
    return;
  }
  const rates = {
    USD: { INR: 84.72, PKR: 278.0, USD: 1 },
    INR: { USD: 0.013, PKR: 3.82, INR: 1 },
    PKR: { USD: 0.0035, INR: 0.26, PKR: 1 },
  };
  if (amount1 <= 0) {
    resultDiv.innerHTML = "Please enter a valid amount.";
    return;
  }

  if (fCurrency === tCurrency) {
    resultDiv.innerHTML = "Please select different currencies.";
    return;
  }

  let result = amount1 * rates[fCurrency][tCurrency];

  // Result ko show karna
  resultDiv.innerHTML = `${amount1} ${fCurrency} = ${result.toFixed(2)} ${tCurrency}`;
  resultDiv.append(box);

  amount.value = "";
  fromCurrency.value = "USD";
  toCurrency.value = "USD";
}


clearBtn.addEventListener("click", clearFields);

function clearFields() {
     resultDiv.style.display = "none"
  resultDiv.innerHTML = "";
}
