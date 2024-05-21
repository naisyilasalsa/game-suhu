function convert() { 
     
    let inputValue =  
        document.getElementById("inputValue").value; 

    let fromUnit =  
        document.getElementById("fromUnit").value; 

    let toUnit =  
        document.getElementById("toUnit").value; 

    let result; 

    if (fromUnit === "Celcius" && toUnit === "Reamur") { 
        result = inputValue * 4 / 5;
    } else if (fromUnit === "Celcius" && toUnit === "Kelvin") { 
        result = (inputValue*1) + 273.15; 
    } else if (fromUnit === "Celcius" && toUnit === "Fahrenheit") { 
        result = (inputValue * 9 / 5) + 32; 
    } else if (fromUnit === "Reamur" && toUnit === "Celcius") { 
        result = inputValue * 5 / 4; 
    } else if (fromUnit === "Reamur" && toUnit === "Kelvin") { 
        result = (inputValue * 5 / 4) + 273.15; 
    } else if (fromUnit === "Reamur" && toUnit === "Fahrenheit") { 
        result = (inputValue * 9 / 4) + 32; 
    } else if (fromUnit === "Kelvin" && toUnit === "Celcius") { 
        result = inputValue - 273.15; 
    } else if (fromUnit === "Kelvin" && toUnit === "Reamur") { 
        result = (inputValue * 4 / 5) - 273.15; 
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") { 
        result = 9 / 5 * (inputValue - 273) + 32; 
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celcius") { 
        result = 5 / 9 * (inputValue - 32); 
    } else if (fromUnit === "Fahrenheit" && toUnit === "Reamur") { 
        result = 4 / 9 * (inputValue - 32); 
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") { 
        result = 5 / 9 * (inputValue - 32) + 273.15; 
    }
         else { 
        result = inputValue;  
    } 

    document.getElementById("result").innerHTML =  
        result.toFixed(2); 
}