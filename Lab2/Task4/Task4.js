function checkPasswords() {
    // Get the values of the password and re-type password fields
    var password = document.forms["signin"]["pass"].value;
    var repassword = document.forms["signin"]["repass"].value;
    var username = document.forms["signin"]["user"].value;

    // Check if the passwords are identical
    if (password == '' || repassword == '' || username == '') {
        alert("Fields must not be empty!")
    } else if (password == repassword) {
        alert("Passwords match!");
    } else {
        alert("Passwords do not match!");
    }
}