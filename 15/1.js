const primeNumbersList = document.getElementById('prosti');
let num = 0;


function ceproste(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    let tri = 3;
    while (tri * tri <= number) {
        if (number % tri === 0) return false;
        tri += 2;
    }

    return true;
}

while (num <= 100) {
    if (ceproste(num)) {
        const list = document.createElement('li');
        list.textContent = num;
        primeNumbersList.appendChild(list);
    }
    num++;
}