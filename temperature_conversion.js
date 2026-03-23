// Welcome message
function typeWelcomeMessage() {
    const welcomeMessage = "Welcome to the Temperature Converter";
    const welcomeElement = document.getElementById("welcome-message");
    const typingSpeed = 100; // Adjust typing speed as needed

    let i = 0;
    function type() {
        if (i < welcomeMessage.length) {
            welcomeElement.innerHTML += welcomeMessage.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        }
    }
    type();
}

// Swap units
function swapUnits() {
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    document.getElementById("fromUnit").value = toUnit;
    document.getElementById("toUnit").value = fromUnit;
}

// Conversion function
function convertUnits() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result;

    // Perform temperature conversion calculation
    if (fromUnit === toUnit) {
        result = temperature; // If the units are the same, no conversion needed
    } else {
        switch (fromUnit) {
            case 'celsius':
                switch (toUnit) {
                    case 'fahrenheit':
                        result = (temperature * 9/5) + 32;
                        break;
                    case 'kelvin':
                        result = temperature + 273.15;
                        break;
                }
                break;
            case 'fahrenheit':
                switch (toUnit) {
                    case 'celsius':
                        result = (temperature - 32) * 5/9;
                        break;
                    case 'kelvin':
                        result = (temperature + 459.67) * 5/9;
                        break;
                }
                break;
            case 'kelvin':
                switch (toUnit) {
                    case 'celsius':
                        result = temperature - 273.15;
                        break;
                    case 'fahrenheit':
                        result = (temperature * 9/5) - 459.67;
                        break;
                }
                break;
        }
    }

    // Display the result
    document.getElementById("result").innerText = result.toFixed(2) + " " + toUnit;
}

// Add event listeners
document.getElementById("convertButton").addEventListener("click", convertUnits);
document.getElementById("swapButton").addEventListener("click", swapUnits);
window.addEventListener("load", typeWelcomeMessage);
