let currentSection = null;

    function showSection(sectionId) {
        // Si ya es la sección activa, no hacemos nada
        if (currentSection === sectionId) return;

        // Ocultar la sección actual
        if (currentSection) {
            const oldSection = document.getElementById(currentSection);
            oldSection.classList.remove('active');
        }

        // Mostrar la nueva sección
        const newSection = document.getElementById(sectionId);
        newSection.classList.add('active');

        // Guardar como actual
        currentSection = sectionId;
    }

    // Al cargar la página, muestra "about"
    document.addEventListener('DOMContentLoaded', () => {
        showSection('about');
    });

    // Modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".examples img").forEach(img => {
        img.addEventListener("click", function() {
            openLightbox(this.src);
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const modal = document.getElementById("lightbox");
        
        // Asegúrate de que el modal existe antes de añadir el eventListener
        if (modal) {
            modal.addEventListener("click", (e) => {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });
        }
    
        // Función para abrir el lightbox con la imagen
        window.openLightbox = function(src) {
            const lightboxImg = document.getElementById("lightbox-img");
            lightboxImg.src = src;
            modal.style.display = "flex";
        }
    
        // Función para cerrar el lightbox
        window.closeLightbox = function() {
            modal.style.display = "none";
        }
    });
    