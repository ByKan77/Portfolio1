function openPDF(pdfUrl) {
    const pdfWindow = window.open(pdfUrl, '_blank');
    if (pdfWindow) {
        pdfWindow.focus();
    } else {
        alert('Impossible d\'ouvrir le PDF. Vérifiez les paramètres de votre navigateur.');
    }
}

document.getElementById("gantt").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = '../../document/ganttproject_guide.pdf';
    link.download = 'documentation_gantt.pdf';
    link.click();
});

document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll("main section");
        sections.forEach(sec => sec.classList.add("visible"));
    });