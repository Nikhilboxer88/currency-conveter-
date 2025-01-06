const fetch = require("node-fetch");

const API_KEY = "a7f65374093208d663d0b2e8342a6040"; // Your Fixer.io API key
const BASE_URL = "https://api.apilayer.com/fixer/convert";

const testAPI = async () => {
  const fromCurrency = "USD";
  const toCurrency = "INR";
  const amount = 10;

  const URL = `${BASE_URL}?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`;
  try {
    const response = await fetch(URL, {
      headers: {
        apikey: API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Response:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

testAPI();
