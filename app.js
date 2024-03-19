    const checkbox = document.getElementById('checkbox');
    const tablesSection = document.querySelector('.tablesSection');
    const inventoryItems = [];
    //login
    // For the title
    const title = document.querySelector('#title');

    // For reg form
    const regForm = document.querySelector('.regForm');

    // For reg form fields
    const usernameReg = document.getElementById('usernameReg');
    const passwordReg = document.getElementById('passwordReg');

    // For login form
    const logForm = document.querySelector('.logForm');

    // For login form fields
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    // For username and passwords
    const usernameAndPasswords = {}

    // For getting the date and time today
    const time = new Date().toLocaleString();


    function checkIfExists(item, inventoryItems) {
        for (var i = 0; i < inventoryItems.length; i++) {
            if(item == inventoryItems[i]) {
                return true;
            }
        }
    }

    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const item = document.getElementById('item').value;
        const quantity = document.getElementById('quantity').value;

        if(item.length == 0 || quantity.length == 0) {
            alert("Fill out the form first");
        }
        else {
            if (checkIfExists(item, inventoryItems)) {
                alert('Item already taken');
            }
            else {
                inventoryItems.push(item);

                const trElement = document.createElement('tr');
                const tdElementForItemName = document.createElement('td');
                const tdElementForQty = document.createElement('td');
                const tdElementForEdit = document.createElement('td');

                tdElementForItemName.textContent = item;
                tdElementForQty.textContent = quantity;
                tdElementForEdit.textContent = "Edit";
                tdElementForEdit.addEventListener('click', function() {
                    const newQuantity = prompt("Enter new quantity");
                    tdElementForQty.textContent = newQuantity;
                });

                trElement.appendChild(tdElementForItemName);
                trElement.appendChild(tdElementForQty);
                trElement.appendChild(tdElementForEdit);

                document.querySelector('table').appendChild(trElement);
            }
        }
    });

    checkbox.addEventListener('change', function(e) {
        e.preventDefault();
        if(checkbox.checked == true) {
            tablesSection.style.display = "block";
        }
        else {
            tablesSection.style.display = "none";
        }
    });

//login functions 

        // For checking if a username already exists
        function checkIfUserExists(username, usernameAndPasswords) {
            if (usernameAndPasswords.hasOwnProperty(username)) {
                return true
            }
        }

        // For validating username and passwords stored 
        function validateUserNameAndPassword(username, password, usernameAndPasswords,) {
            if(usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] == password) {
                return true;
            }
        }

        regForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validate if one of the fields are empty
            if(usernameReg.value.length == 0 || passwordReg.value.length == 0) {
                alert("Fill out all the forms first");
            }

            // Store username and password to JS object
            else {
                if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
                    alert('Username is already taken');
                }
                else {

                    // Store the username and passwords inside the JavaScript Object 
                    usernameAndPasswords[usernameReg.value] = passwordReg.value;
                    console.log(usernameAndPasswords);

                    // Display the login form and get rid of the registration form on the page
                    logForm.style.display = "block";
                    regForm.style.display = "none";

                }
            }

        })

        logForm.addEventListener('submit', function (e) {

            // Passing username and password to the function
            if (validateUserNameAndPassword(username.value, password.value, usernameAndPasswords)) {

                // Hide the login form and title after user has been validated
                logForm.style.display = "none";
                title.style.display = "none";

                // Greet user who just logged in
                document.querySelector('.welcomePanel #greeting').innerHTML = "Good day! " + username.value + ". It's currently " + time;
            }
            else {

                // Login invalid
                alert("Username and password don't exist");

            }

        })

        // For checking if a username already exists
        function checkIfUserExists(username, usernameAndPasswords) {
            if (usernameAndPasswords.hasOwnProperty(username)) {
                return true
            }
        }

        // For validating username and passwords stored 
        function validateUserNameAndPassword(username, password, usernameAndPasswords,) {
            if(usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] == password) {
                return true;
            }
        }

        // Function to check password strength
        function checkPasswordStrength(password) {
        // Check if password is less than 8 characters
        if (password.length < 8) {
            return false;
        }

        // Check if password only consists of integers
        if (/^\d+$/.test(password)) {
            return false;
        }

        // Check if password is a combination of uppercase and lowercase characters
        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            return false;
        }

        // If all checks pass, return true
        return true;
        }

        regForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Validate if one of the fields are empty
            if(usernameReg.value.length == 0 || passwordReg.value.length == 0) {
                alert("Fill out allthe forms first");
            }

            // Check password strength
            if (!checkPasswordStrength(passwordReg.value)) {
                alert("Password must be at least 8 characters long, contain both uppercase and lowercase letters, and not consist only of numbers.");
                return;
            }

            // Store username and password to JS object
            else {
                if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
                    alert('Username is already taken');
                }
                else {

                    // Store the username and passwords inside the JavaScript Object 
                    usernameAndPasswords[usernameReg.value] = passwordReg.value;
                    console.log(usernameAndPasswords);

                    // Display the login form and get rid of the registration form on the page
                    logForm.style.display = "block";
                    regForm.style.display = "none";

                }
            }

        })

        logForm.addEventListener('submit', function (e) {

            // Passing username and password to the function
            if (validateUserNameAndPassword(username.value, password.value, usernameAndPasswords)) {

                // Hide the login form and title after user has been validated
                logForm.style.display = "none";
                title.style.display = "none";

                // Greet user who just logged in
                document.querySelector('.welcomePanel #greeting').innerHTML = "Good day! " + username.value + ". It's currently " + time;
            }
            else {

                // Login invalid
                alert("Username and password don't exist");

            }

        })