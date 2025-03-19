function openPDF(pdfUrl) {
    const pdfWindow = window.open(pdfUrl, '_blank');
    if (pdfWindow) {
        pdfWindow.focus();
    } else {
        alert('Impossible d\'ouvrir le PDF. Vérifiez les paramètres de votre navigateur.');
    }
}
document.getElementById("dailyclient").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'doc_daily/dailyclient.pdf';
    link.download = 'Documentation__client_dailyho.pdf';
    link.click();
});
document.getElementById("dailyclient").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'doc_daily/dailytechnique.pdf';
    link.download = 'Documentation_technique_dailyho.pdf';
    link.click();
});