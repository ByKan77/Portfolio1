function openPDF(pdfUrl) {
    const pdfWindow = window.open(pdfUrl, '_blank');
    if (pdfWindow) {
        pdfWindow.focus();
    } else {
        alert('Impossible d\'ouvrir le PDF. Vérifiez les paramètres de votre navigateur.');
    }
}
document.getElementById("dailyClientBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'doc_daily/dailyclient.pdf';
    link.download = 'Documentation_client_dailyho.pdf';
    link.click();
});

document.getElementById("dailyTechBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'doc_daily/dailytechnique.pdf';
    link.download = 'Documentation_technique_dailyho.pdf';
    link.click();
});

document.getElementById("appClientBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'doc_daily/DocAppClientDayli.pdf';
    link.download = 'Documentation_application_client_dailyho.pdf';
    link.click();
});

document.getElementById("appTechBtn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = 'doc_daily/dailyapptech.pdf';
    link.download = 'Documentation_application_technique_dailyho.pdf';
    link.click();
});

document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("section").forEach(section => {
        section.classList.add("visible");
      });
    });