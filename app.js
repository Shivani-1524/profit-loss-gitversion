const initalPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputText = document.querySelector("#output");
const containerborder = document.querySelector(".container");

outputText.style.borderColor = "transparent";
containerborder.style.borderColor = "#fdffb6"

const calcProfitAndLoss = (initial, quantity, current) => {
    if (initial > current) {
        let loss = ((initial - current) * quantity).toFixed(2);
        let lossPercentage = ((loss / initial) * 100).toFixed(2);
        containerborder.style.borderColor = "#d90429"
        outputText.style.borderColor = "#d90429";
        showResult(`Hey the profit is ${loss} and the loss percent is ${lossPercentage}% 😫`);
    } else if (current > initial) {
        let profit = ((current - initial) * quantity).toFixed(2);
        let profitPercentage = ((profit / initial) * 100).toFixed(2);
        containerborder.style.borderColor = "#06d6a0"
        outputText.style.borderColor = "#06d6a0";
        showResult(`Hey the profit is ${profit} and the profit percent is ${profitPercentage}% 😎`);
    }
    else {
        containerborder.style.borderColor = "#8ecae6"
        outputText.style.borderColor = "#8ecae6";
        showResult("No gain no pain. its balance 😄")
    }
}

const submitHandler = () => {
    let init = Number(initalPrice.value);
    let qty = Number(stocksQuantity.value);
    let curr = Number(currentPrice.value);
    if ((!isNaN(init) && !isNaN(qty) && !isNaN(curr)) && (init > 0 && qty > 0 && curr > 0)) {
        if ((init && qty && curr)) {
            calcProfitAndLoss(init, qty, curr);

        } else {
            outputText.style.borderColor = "transparent";
            showResult("Please Fill All The Fields");
        }
    } else {
        outputText.style.borderColor = "transparent";
        showResult("Enter valid inputs");
    }
}

submitBtn.addEventListener("click", submitHandler);

const showResult = (message) => outputText.innerText = message