function convertUnits() {
    var unit = parseFloat(document.getElementById("unit").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Conversion factors based on meters
    var conversionFactors = {
        'm': 1,
        'km': 1000,
        'cm': 0.01,
        'mm': 0.001,
        'um': 1e-6,
        'nm': 1e-9,
        'mile': 1609.34,
        'yard': 0.9144,
        'foot': 0.3048,
        'inch': 0.0254
    };

    // Perform unit conversion calculation
    var result;
    if (fromUnit === toUnit) {
        result = unit; // If the units are the same, no conversion needed
    } else {
        var factor = conversionFactors[fromUnit] / conversionFactors[toUnit];
        result = unit * factor;
    }

    // Display the result
    document.getElementById("result").innerText = result + " " + toUnit;
}

// Add event listeners for the convert button and unit type changes
document.getElementById("convertButton").addEventListener("click", convertUnits);
document.getElementById("fromUnit").addEventListener("change", convertUnits);
document.getElementById("toUnit").addEventListener("change", convertUnits);

// Function to swap units
function swapUnits() {
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Swap the selected units
    document.getElementById("fromUnit").value = toUnit;
    document.getElementById("toUnit").value = fromUnit;

    // Trigger conversion after swapping
    convertUnits();
}

// Function to simulate typing effect for welcome message
function typeWelcomeMessage() {
    const welcomeMessage = "Welcome to the Unit Converter";
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

// Trigger welcome message typing effect
typeWelcomeMessage();
