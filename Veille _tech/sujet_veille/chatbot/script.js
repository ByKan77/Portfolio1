document.getElementById("portfolio").addEventListener("click", function() {
            document.location.href = '../../../index.html';
        });

document.getElementById("chatbot").addEventListener("click", function() {
            const link = document.createElement("a");
            link.href = '../../../projects_picture/Chatbot.pdf';
            link.download = 'Présentation-Chatbot.pdf';
            link.click();
        });

function openPDF(pdfUrl) {
            const pdfWindow = window.open(pdfUrl, '_blank');
            if (pdfWindow) {
                pdfWindow.focus();
            } else {
                alert('Impossible d\'ouvrir le PDF. Vérifiez les paramètres de votre navigateur.');
            }
        }
        