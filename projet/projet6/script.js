function openPDF(pdfUrl) {
    const pdfWindow = window.open(pdfUrl, '_blank');
    if (pdfWindow) {
        pdfWindow.focus();
    } else {
        alert('Impossible d\'ouvrir le PDF. Vérifiez les paramètres de votre navigateur.');
    }
}
document.getElementById("daily").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'doc_daily/daily.pdf';
    link.download = 'Documentation_dailyho.pdf';
    link.click();
});