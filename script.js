function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;
  let convertedAmount;

  // Example exchange rates
  const exchangeRates = {
    USD_CNY: 6.43, // 1 USD to CNY
    USD_KRW: 1178.50, // 1 USD to KRW
    CNY_USD: 0.16, // 1 CNY to USD
    CNY_KRW: 182.93, // 1 CNY to KRW
    KRW_USD: 0.00085, // 1 KRW to USD
    KRW_CNY: 0.0055 // 1 KRW to CNY
  };

  if (fromCurrency === "USD" && toCurrency === "CNY") {
    convertedAmount = amount * exchangeRates.USD_CNY;
  } else if (fromCurrency === "USD" && toCurrency === "KRW") {
    convertedAmount = amount * exchangeRates.USD_KRW;
  } else if (fromCurrency === "CNY" && toCurrency === "USD") {
    convertedAmount = amount * exchangeRates.CNY_USD;
  } else if (fromCurrency === "CNY" && toCurrency === "KRW") {
    convertedAmount = amount * exchangeRates.CNY_KRW;
  } else if (fromCurrency === "KRW" && toCurrency === "USD") {
    convertedAmount = amount * exchangeRates.KRW_USD;
  } else if (fromCurrency === "KRW" && toCurrency === "CNY") {
    convertedAmount = amount * exchangeRates.KRW_CNY;
  } else {
    convertedAmount = amount; // If conversion is within the same currency
  }
  document.getElementById("result").innerText = `${amount} ${fromCurrency} is ${convertedAmount.toFixed(2)} ${toCurrency}`;
}