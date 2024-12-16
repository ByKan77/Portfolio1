function openPDF(pdfUrl) {
    const pdfWindow = window.open(pdfUrl, '_blank');
    if (pdfWindow) {
        pdfWindow.focus();
    } else {
        alert('Impossible d\'ouvrir le PDF. Vérifiez les paramètres de votre navigateur.');
    }
}


document.getElementById("phishing").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = '../../../projects_picture/phishing.pdf';
    link.download = 'Présentation-phishing.pdf';
    link.click();
});