function openPDF(pdfUrl) {
    const pdfWindow = window.open(pdfUrl, '_blank');
    if (pdfWindow) {
        pdfWindow.focus();
    } else {
        alert('Impossible d\'ouvrir le PDF. Vérifiez les paramètres de votre navigateur.');
    }
}

document.getElementById("symf").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'doc_symf/cours-symf.pdf';
    link.download = 'documentation_symfony.pdf';
    link.click();
});