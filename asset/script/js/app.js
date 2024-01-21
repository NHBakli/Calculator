"use strict";
const btn = document.querySelectorAll("#btn");
const input = document.querySelector("#result");
// 3 function (Résultat, Supprimer, Calcule)
function result() {
    Array.from(btn).forEach(btn => {
        btn.addEventListener("click", () => {
            const inputValue = input.value;
            input.innerText = btn.toString();
        });
    });
}
result();
