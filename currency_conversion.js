// Function to convert currency
function convert() {
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            var rate = response.rates[toCurrency];
            var result = amount * rate;
            document.getElementById("result").innerHTML = amount + " " + fromCurrency + " = " + result.toFixed(2) + " " + toCurrency;
        }
    };
    xhr.open("GET", "https://api.exchangerate-api.com/v4/latest/" + fromCurrency, true);
    xhr.send();
}

// Function to swap currencies
function swapCurrencies() {
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    
    // Swap the selected currencies
    var temp = fromCurrency;
    document.getElementById("fromCurrency").value = toCurrency;
    document.getElementById("toCurrency").value = temp;
}

// Simulate typing effect for welcome message
function typeWelcomeMessage() {
    const welcomeMessage = "Welcome to the Currency Converter";
    const welcomeElement = document.getElementById("welcome-message");
    const typingSpeed = 100; // Adjust typing speed as needed

    let i = 0;
    function type() {
        if (i < welcomeMessage.length) {
            welcomeElement.innerHTML += welcomeMessage.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        }
        else {
            // Show the converter section after typing completes
            document.getElementById("converter").style.display = "block";
        }
    }
    type();
}

// Delay the conversion functionality after a few seconds
setTimeout(typeWelcomeMessage, 1000); // Adjust delay time as needed
