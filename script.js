let left = document.querySelectorAll('.left');
let right = document.querySelectorAll('.right');
let leftInput = document.querySelector('.left-input');
let rightInput = document.querySelector('.right-input');



let leftCurrency = 'USD';
let rightCurrency = 'RUB';


    left.forEach((e) => {
        e.addEventListener('click', function () {
            leftCurrency = this.innerHTML;
            left.forEach((a) => {
                a.classList.remove("active");
                this.classList.add("active")
                
            })
            convertReverse(leftCurrency,rightCurrency);
        })
    });



    right.forEach((e) => {
        e.addEventListener('click', function () {
            rightCurrency = this.innerHTML;
            right.forEach((a) => {
                a.classList.remove("active");
                this.classList.add("active");

            })
            convert(rightCurrency,leftCurrency);
        })
    });



if (leftCurrency != rightCurrency) {
    leftInput.addEventListener('keyup', function () {
        convert(leftCurrency, rightCurrency);

    })
    rightInput.addEventListener('keyup', function () {
        convertReverse(rightCurrency, leftCurrency)
    })

}



function convert(leftCurrency, rightCurrency) {
    console.log(leftCurrency + " " + rightCurrency);
    fetch(`https://api.exchangerate.host/latest?base=${leftCurrency}&symbols=${rightCurrency}`)
        .then((response) => response.json())
        .then((data) => {

            result = data.rates[rightCurrency]
            rightInput.value = leftInput.value * result;

        })
}
function convertReverse(rightCurrency, leftCurrency) {

    fetch(`https://api.exchangerate.host/latest?base=${rightCurrency}&symbols=${leftCurrency}`)
        .then((response) => response.json())
        .then((data) => {
            result = data.rates[leftCurrency]
            leftInput.value = rightInput.value * result;

        })
}



