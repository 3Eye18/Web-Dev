function reset() {
    document.getElementById("username").value = null
    document.getElementById("password").value = null
    document.getElementById("repassword").value = null
}

function submit() {
    let user = document.getElementById("username").value
    let pass = document.getElementById("password").value
    let repass = document.getElementById("repassword").value
    if (user == '' || pass == '' || repass == '') {
        alert("Fields must not be empty!")
    }
    else if (pass != repass) {
        alert("Password and Retype Password must be the same")
    }
    else {
        alert("Congrats! You entered all the field correctly")
    }
}