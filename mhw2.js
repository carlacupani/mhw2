
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
