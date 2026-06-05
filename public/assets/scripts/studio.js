// ==================== GaloFrame - Studio JS ====================

let images = [];

// Carregar imagens salvas ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadImages();
    renderGallery();
});

// ==================== FUNÇÕES PRINCIPAIS ====================

function loadImages() {
    const savedImages = localStorage.getItem('galoFrameStudioImages');
    if (savedImages) {
        images = JSON.parse(savedImages);
    }
}

function saveImages() {
    localStorage.setItem('galoFrameStudioImages', JSON.stringify(images));
}

function renderGallery() {
    const grid = document.getElementById('imageGrid');
    const emptyMessage = document.getElementById('emptyMessage');

    if (!grid) return;

    grid.innerHTML = '';

    if (images.length === 0) {
        emptyMessage.style.display = 'block';
        return;
    }

    emptyMessage.style.display = 'none';

    images.forEach((imgData, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imgData;
        imgElement.alt = `Foto ${index + 1}`;
        
        // Clique para editar a imagem
        imgElement.addEventListener('click', () => {
            openImageInEditor(index);
        });

        grid.appendChild(imgElement);
    });
}

// Abrir seletor de imagem
function openUploadModal() {
    const input = document.getElementById('imageUpload');
    if (input) input.click();
}

// Processar imagem selecionada
function handleImageUpload(event) {
    const file = event.target.files[0];
    
    if (!file) return;
    if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione um arquivo de imagem válido!');
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        // Adiciona no início da galeria (mais recente primeiro)
        images.unshift(e.target.result);
        saveImages();
        renderGallery();
        
        // Limpa o input para permitir selecionar a mesma imagem novamente
        event.target.value = '';
    };

    reader.readAsDataURL(file);
}

// Abrir imagem no editor
function openImageInEditor(index) {
    if (images[index]) {
        localStorage.setItem('currentEditImage', images[index]);
        localStorage.setItem('currentEditIndex', index); // para possível deleção futura
        window.location.href = 'editor.html';
    }
}

// Limpar todas as imagens
function clearAllImages() {
    if (images.length === 0) return;
    
    if (confirm('Tem certeza que deseja excluir TODAS as imagens do Estúdio?')) {
        images = [];
        saveImages();
        renderGallery();
    }
}

// ==================== EVENT LISTENERS ====================

document.addEventListener('DOMContentLoaded', () => {
    const uploadInput = document.getElementById('imageUpload');
    
    if (uploadInput) {
        uploadInput.addEventListener('change', handleImageUpload);
    }
});

// Expor funções para o HTML (caso use onclick)
window.openUploadModal = openUploadModal;
window.clearAllImages = clearAllImages;