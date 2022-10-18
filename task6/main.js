function click() {
    let amount = document.getElementById("amount");
    let cost = document.getElementById("cost");
    let result = document.getElementById("result");

    const re = /\D/; // \D - нашло НЕ цифру
    let chAmount = amount.value.match(re);
    let chCost = cost.value.match(re);

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

function count(){
    let select = document.getElementById("product-type");
    let amount = document.getElementById("amount-2");
    let result = document.getElementById("result-2");
    result.innerHTML="";
    if (amount.value==="" || isNaN(Number(amount.value))) return 0;
    let taste=document.querySelectorAll("label.radio input");
    let checkbox=document.querySelector("label.checkbox input");
    if (select.value==='1'){
        result.innerHTML=89.99*amount.value;
    } else if (select.value==='2'){
        if(taste[0].checked===true) result.innerHTML=92.13*amount.value;
        else if(taste[1].checked===true) result.innerHTML=89.72*amount.value;
    } else if (select.value==='3'){
        if(checkbox.checked===false) result.innerHTML=95.63*amount.value;
        else result.innerHTML=122.17*amount.value;
    }
}

function change() {
    let select = document.getElementById("product-type");
    let amount = document.getElementById("amount-2");
    let result = document.getElementById("result-2");
    result.innerHTML="";
    amount.style.display="block";
    let tastelabel=document.querySelectorAll("label.radio");
    let checkboxlabel=document.querySelector("label.checkbox");
    if (select.value==='1'){
        tastelabel[0].style.display="none";
        tastelabel[1].style.display="none";
        checkboxlabel.style.display="none";
    } else if (select.value==='2'){
        tastelabel[0].style.display="block";
        tastelabel[1].style.display="block";
        checkboxlabel.style.display="none";
    } else if (select.value==='3'){
        tastelabel[0].style.display="none";
        tastelabel[1].style.display="none";
        checkboxlabel.style.display="block";
    }
    amount.value="";
}

window.addEventListener("DOMContentLoaded", function () {
    let select = document.getElementById("product-type");
    select.addEventListener("change", change);
    let amount = document.getElementById("amount-2");
    amount.addEventListener("input", count);
    let taste=document.querySelectorAll("label.radio input");
    taste.forEach(function(taste1){ taste1.addEventListener("change", count);});
    let checkbox=document.querySelector("label.checkbox input");
    checkbox.addEventListener("change", count);
});