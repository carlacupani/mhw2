// Seleziona tutti i pulsanti "Leggi di più"
const readMoreButtons = document.querySelectorAll('.faq li button');

// Aggiungi un gestore di eventi a ciascun pulsante
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Seleziona il contenuto associato al pulsante cliccato
        const content = button.nextElementSibling;

        // Se il contenuto è già visibile, nascondilo, altrimenti mostralo
        if (content.style.display === 'block') {
            content.style.display = 'none';
            button.querySelector('img').style.transform = 'rotate(0deg)';
        } else {
            content.style.display = 'block';
            button.querySelector('img').style.transform = 'rotate(45deg)';
        }
    });
});


const bnt1 = document.querySelector("#qst1");
const bnt2 = document.querySelector("#qst2");
const bnt3 = document.querySelector("#qst3");
const bnt4 = document.querySelector("#qst4");
const bnt5 = document.querySelector("#qst5");
const bnt6 = document.querySelector("#qst6");
let list = document.querySelectorAll(".question");

bnt1.addEventListener("click", destroy);
bnt2.addEventListener("click", destroy);
bnt3.addEventListener("click", destroy);
bnt4.addEventListener("click", destroy);
bnt5.addEventListener("click", destroy);
bnt6.addEventListener("click", destroy);

function toggleAccordion() {
    const clickedButton = this;
    list.forEach(question => {
        const content = question.nextElementSibling;
        const arrow = question.querySelector("img");
        if (question !== clickedButton && content.style.display === "block") {
            arrow.style.transform = "rotate(-45deg)";
            content.style.display = "none";
        }
    });

    const content = clickedButton.nextElementSibling;
    const arrow = clickedButton.querySelector("img");
    if (content.style.display === "none") {
        arrow.style.transform = "rotate(180deg)";
        content.style.display = "block";
    } else {
        arrow.style.transform = "rotate(0deg)";
        content.style.display = "none";
    }
}