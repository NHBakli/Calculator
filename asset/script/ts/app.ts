const btn = document.querySelectorAll("#btn");
const input = document.querySelector("#result") as HTMLInputElement;


// 3 function (Résultat, Supprimer, Calcule)

function result(): void {

    Array.from(btn).forEach(btn => {
        btn.addEventListener("click", () => {

            const btnValue: string = btn.textContent || btn.innerText;

            input.innerText = btnValue.toString();
        });
    })
}

result();