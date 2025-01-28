document.getElementById('click').onclick = function() {
    let password = document.getElementById('password').value;
    let outputMessages = "Password is invalid:<br>"
    let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']
    let numbers = [1,2,3,4,5,6,7,8,9,0]
    
    // Password Requirements
    // Minimum length: 8
    // At least one special character (from specialCharacters array)
    // no spaces
    // At least 1 uppercase letter
    // At least 1 lowercase letter
    // At least 1 numeric digit

    let counter = 0;

    // reset the innerHTML on each click
    document.getElementById('result').innerHTML = "";

    if (password.length < 8) {
        outputMessages += "The password must be at least 8 characters long.<br>";
        counter++;
    }

    if (!specialCharacters.some(char => password.includes(char))) {
        outputMessages += "The password must contain at least one special character (!, @, #, $, %, ^, &, *).<br>";
        counter++;
    }

    if (!numbers.some(number => password.includes(number))) {
        outputMessages += "The password must contain at least one digit.<br>";
        counter++;
    }

    if (password.includes(" ")) {
        outputMessages += "The password must not contain spaces.<br>";
        counter++;
    }

    if (password === password.toLowerCase()) {
        outputMessages += "The password must have at least one capital letter.<br>";
        counter++;
    }

    if (password === password.toUpperCase()) {
        outputMessages += "The password must have at least one lowercase letter.<br>";
        counter++;
    }

    // Needs to be the last thing in the file
    if (counter > 0) {
        document.getElementById('result').style.color = "red";
        document.getElementById('result').innerHTML = outputMessages;
        
    } else {
        document.getElementById('result').style.color = "green";
        document.getElementById('result').innerHTML = "Password is valid!";
    }
    
}