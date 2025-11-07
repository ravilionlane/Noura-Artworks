document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".art-card");
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, i * 150);
        });
    }, 300);
});