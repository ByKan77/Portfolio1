document.getElementById("respire").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'projet_respire/RespireStat.zip';
    link.download = 'RespireStat.zip';
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