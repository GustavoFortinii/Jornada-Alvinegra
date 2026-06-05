// ==================== GaloFrame - Editor JS ====================

let currentImage = null;
let currentIndex = null;

// Carregar imagem ao abrir o editor
document.addEventListener('DOMContentLoaded', () => {
    loadCurrentImage();
});

function loadCurrentImage() {
    currentImage = localStorage.getItem('currentEditImage');
    currentIndex = localStorage.getItem('currentEditIndex');

    const imgElement = document.getElementById('previewImage');
    
    if (currentImage && imgElement) {
        imgElement.src = currentImage;
    } else {
        alert("Nenhuma imagem encontrada para edição!");
        window.location.href = 'studio.html';
    }
}

// Salvar e voltar para o studio
function saveAndGoBack() {
    if (currentImage && currentIndex !== null) {
        let images = JSON.parse(localStorage.getItem('galoFrameStudioImages')) || [];
        images[currentIndex] = currentImage;
        localStorage.setItem('galoFrameStudioImages', JSON.stringify(images));
    }
    window.location.href = 'studio.html';
}

// Deletar imagem atual
function deleteCurrentImage() {
    if (confirm('Tem certeza que deseja excluir esta imagem?')) {
        if (currentIndex !== null) {
            let images = JSON.parse(localStorage.getItem('galoFrameStudioImages')) || [];
            images.splice(currentIndex, 1);
            localStorage.setItem('galoFrameStudioImages', JSON.stringify(images));
        }
        window.location.href = 'studio.html';
    }
}

// Postar no Feed (simulado por enquanto)
function postImage() {
    alert("✅ Imagem postada com sucesso no Feed do GaloFrame! 🐔\n\n(Em breve conectaremos com o backend)");
    // Aqui no futuro você pode enviar para o servidor
    window.location.href = 'home.html';
}

// Expor funções para o HTML
window.saveAndGoBack = saveAndGoBack;
window.deleteCurrentImage = deleteCurrentImage;
window.postImage = postImage;