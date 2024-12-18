function openPDF(pdfUrl) {
    const pdfWindow = window.open(pdfUrl, '_blank');
    if (pdfWindow) {
        pdfWindow.focus();
    } else {
        alert('Impossible d\'ouvrir le PDF. Vérifiez les paramètres de votre navigateur.');
    }
}

document.getElementById("tyfali").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'biblio_picture/doc_bb2_V2.pdf';
    link.download = 'Documentation_Bibliothèque.pdf';
    link.click();
});