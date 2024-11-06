document.addEventListener("DOMContentLoaded", function() {
    const introSection = document.querySelector("#intro");
    const enterButton = document.querySelector(".enter-button");

    enterButton.addEventListener("click", function() {
        introSection.classList.add("fade-out");
        setTimeout(() => {
            introSection.style.display = "none";
        }, 1000);
    });
});
