function click() {
    let amount = document.getElementById("amount");
    let cost = document.getElementById("cost");
    let result = document.getElementById("result");

    const re = /\D/; // \D - нашло НЕ цифру
    let chAmount = amount.value.match(re);
    let chCost = cost.value.match(re);

    // === - так безопаснее проверять: без автопреобразования типов
    if (amount.value === "" || cost.value === "") {
        result.innerHTML = "Пустое поле";
    } else if (chAmount === null && chCost === null) {
        let intA = parseInt(amount.value);
        let intC = parseInt(cost.value);
        result.innerHTML = "Результат проведённых внутренних вычислений в десятичной форме: " + intA * intC;
    } else {
        result.innerHTML = "Некорректные символы в поле";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("btn");
    button.addEventListener("click", click);
});
