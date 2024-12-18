document.getElementById("play-button").addEventListener("click", function() {
    window.open('https://enzochatellard.alwaysdata.net/game/', '_blank');
});
document.getElementById("back").addEventListener("click", function() {
    document.location.href = '../../index.html';
});
document.getElementById("math").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'doc_jeu/Jeu_mathematique.pdf';
    link.download = 'Documentation_Jeu_Math.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function openPDF(pdfUrl) {
    const pdfWindow = window.open(pdfUrl, '_blank');
    if (pdfWindow) {
        pdfWindow.focus();
    } else {
        alert('Impossible d\'ouvrir le PDF. Vérifiez les paramètres de votre navigateur.');
    }
}