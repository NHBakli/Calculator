"use strict";
// ↓ Variables ↓ 
const btn = document.querySelectorAll("#btn");
const input = document.querySelector("#result");
const btnEquals = document.querySelector("#btnEquals");
const btnClear = document.querySelector("#btnClear");
let currentValue = "";
let isLastButtonClear = false;
// ↓ Function ↓ 
function calculateResult() {
    try {
        currentValue = eval(currentValue).toString();
        input.value = currentValue;
    }
    catch (error) {
        input.value = "Error";
        currentValue = "0";
    }
}
function clearResult() {
    currentValue = "0";
    input.value = currentValue;
    isLastButtonClear = true;
}
// ↓ Event ↓ 
btnEquals.addEventListener("click", () => {
    calculateResult();
});
btnClear.addEventListener("click", () => {
    clearResult();
});
Array.from(btn).forEach(btn => {
    btn.addEventListener("click", () => {
        var _a;
        if (isLastButtonClear) {
            currentValue = "";
            isLastButtonClear = false;
        }
        currentValue += (_a = btn.textContent) !== null && _a !== void 0 ? _a : "";
        input.value = currentValue;
    });
});
