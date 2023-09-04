function CtoF() {
  var celsius1 = document.getElementById("celsius1").value;
  var fahrenheit1 = celsius1 * 9/5 + 32;
  document.getElementById("fahrenheit1").value = fahrenheit1;
}

function FtoC() {
  var fahrenheit2 = document.getElementById("fahrenheit2").value;
  var celsius2 = (fahrenheit2 - 32) *5/9;
  document.getElementById("celsius2").value = celsius2;
}