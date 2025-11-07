document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    });
});

const backsound = document.getElementById("backsound");
let isPlaying = false;

document.getElementById("backsoundBtn").addEventListener("click", function () {
    if (isPlaying) {
        backsound.pause();
        this.textContent = "Backsound";
    } else {
        backsound.play();
        this.textContent = "Stop Music";
    }
    isPlaying = !isPlaying;
});