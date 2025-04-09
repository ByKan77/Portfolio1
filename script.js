document.addEventListener("DOMContentLoaded", function() {
    const introSection = document.querySelector("#intro");
    const enterButton = document.querySelector(".enter-button");

    enterButton.addEventListener("click", function() {
        introSection.classList.add("fade-out");
        setTimeout(() => {
            introSection.style.display = "none";
        }, 500);
    });
});

document.getElementById("Synthèse").addEventListener("click", function() {
    const pdfUrl = 'projects_picture/Tableau_Synthèse.pdf';
    
    // Créer un lien temporaire pour le téléchargement
    const link = document.createElement("a");
    link.href = pdfUrl;  // L'URL du PDF à télécharger
    link.download = 'Tableau_Synthèse.pdf';  // Nom du fichier lors du téléchargement
    
    // Simuler un clic sur le lien pour déclencher le téléchargement
    link.click();
});

document.getElementById("CV").addEventListener("click", function() {
    const pdfUrl = 'projects_picture/CV_Sofiane_Ouadah.pdf';
    
    // Créer un lien temporaire pour le téléchargement
    const link = document.createElement("a");
    link.href = pdfUrl;  // L'URL du PDF à télécharger
    link.download = 'CV_Ouadah_Sofiane.pdf';  // Nom du fichier lors du téléchargement
    
    // Simuler un clic sur le lien pour déclencher le téléchargement
    link.click();
});

function openPDF(pdfFile) {
    window.open(pdfFile, '_blank');
}


document.addEventListener('DOMContentLoaded', function () {
    const aboutMeButton = document.getElementById('aboutMeButton');
    const aboutMeContent = document.getElementById('aboutMeContent');

    aboutMeButton.addEventListener('click', function () {
        if (aboutMeContent.classList.contains('hidden')) {
            aboutMeContent.classList.remove('hidden');
            aboutMeContent.classList.add('visible');
        } else {
            aboutMeContent.classList.remove('visible');
            aboutMeContent.classList.add('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.btn-toggle, .about-me-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const details = this.nextElementSibling;
            if (details.style.display === 'none' || !details.style.display) {
                details.style.display = 'block';
                this.textContent = this.classList.contains('btn-toggle') ? '- Masquer les détails' : 'Masquer les détails';
            } else {
                details.style.display = 'none';
                this.textContent = this.classList.contains('btn-toggle') ? '+ Afficher les détails' : 'Afficher les détails';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
        burger.classList.toggle('toggle');
    });
});