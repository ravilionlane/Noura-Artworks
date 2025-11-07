const form = document.getElementById('commissionForm');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closePopup');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    popup.style.display = 'flex';
    form.reset();
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});