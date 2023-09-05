function multiply() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var result = num1 * num2
    document.getElementById("result").innerText = `The Result is: ${result}`
}

function divide() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var result = num1 / num2
    if (result == Infinity) {
        alert("2nd Number must NOT be 0!")
    } else {
    document.getElementById("result").innerText = `The Result is: ${result}`
    }
}