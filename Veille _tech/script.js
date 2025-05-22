document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll("main section");

        sections.forEach((section) => {
            section.classList.add("section-hidden");
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("section-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        sections.forEach((section) => {
            observer.observe(section);
        });
});

document.getElementById("portfolio").addEventListener("click", function() {
            document.location.href = '../index.html';
});