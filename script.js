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

function toggleDetails(btn) {
    var details = btn.parentElement.nextElementSibling; // Trouve le div ".details" associé
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        btn.textContent = '- Masquer les détails';
    } else {
        details.style.display = 'none';
        btn.textContent = '+ Afficher les détails';
    }
}

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
    const pdfUrl = 'projects_picture/CV_Ouadah_Sofiane_Alternance.pdf';
    
    // Créer un lien temporaire pour le téléchargement
    const link = document.createElement("a");
    link.href = pdfUrl;  // L'URL du PDF à télécharger
    link.download = 'CV_Ouadah_Sofiane_Alternance.pdf';  // Nom du fichier lors du téléchargement
    
    // Simuler un clic sur le lien pour déclencher le téléchargement
    link.click();
});

function openPDF(pdfFile) {
    window.open(pdfFile, '_blank');
}