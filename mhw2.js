const readMoreButtons = document.querySelectorAll('.faq li button');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
            button.querySelector('img').style.transform = 'rotate(0deg)';
        } else {
            content.style.display = 'block';
            button.querySelector('img').style.transform = 'rotate(45deg)';
        }
    });
});

var btnInviaEmail = document.getElementById("signup-btn");

btnInviaEmail.addEventListener("click", function() {
    var campoEmail = document.getElementById("signup-email");
    var testoInserito = campoEmail.value;

    console.log("Testo dell'email:", testoInserito);

    btnInviaEmail.classList.add("email-inviata");
    btnInviaEmail.textContent = "Email Inviata!";
});

function showLogo2(event) {
    var logo = document.getElementById("logo1");
    var hiddenImage = document.getElementById("logo2");
    hiddenImage.style.display = "inline-block";
    logo.style.display = "none";
}

function hideLogo2(event) {
    var logo = document.getElementById("logo1");
    var hiddenImage = document.getElementById("logo2");
    hiddenImage.style.display = "none";
    logo.style.display = "inline-block";
}

var logo = document.getElementById("logo1");
logo.addEventListener("mouseover", showLogo2);
logo.addEventListener("mouseout", hideLogo2);