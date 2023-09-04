function biggest() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    const nums = [num1, num2, num3, num4, num5]
    let biggest = 0;
    for (let index = 0; index < nums.length; index++) {
        if (biggest < nums[index]) {
            biggest = nums[index]
        }
    }
    document.getElementById("biggest").value = biggest;
}