function oneToFifteen() {
    let text = document.getElementById('textSpace');
    for (let num = 1; num < 16; num++) {
        if (num % 2 ==0) {
            text.value += `${num} is even\n`;
        }
        else {
            text.value += `${num} is odd\n`;
        }
    }
}