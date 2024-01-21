// ↓ Variables ↓ 
const btn = document.querySelectorAll("#btn");
const input = document.querySelector("#result") as HTMLInputElement;
const btnEquals = document.querySelector("#btnEquals") as HTMLButtonElement;
const btnClear = document.querySelector("#btnClear") as HTMLButtonElement;

let currentValue: string = "";
let isLastButtonClear: boolean = false;  


// ↓ Function ↓ 
function calculateResult(): void {
    try {
        currentValue = eval(currentValue).toString();  
        input.value = currentValue;
    } catch (error) {
        input.value = "Error";  
        currentValue = "0";
    }
}

function clearResult(): void {
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
        if (isLastButtonClear) {
            currentValue = "";  
            isLastButtonClear = false;
        }

        currentValue += btn.textContent ?? "";
        input.value = currentValue;
    });
});