$(document).ready(function() {
    let currentIndex = 0; // L'index de l'image actuellement affichée
    const totalImages = $('.slider img').length; // Nombre total d'images

    // Fonction pour aller à l'image suivante
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSliderPosition();
    }

    // Fonction pour aller à l'image précédente
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateSliderPosition();
    }

    // Met à jour la position du slider
    function updateSliderPosition() {
        const newLeft = -(currentIndex * 25) + '%'; // Décalage de 100% pour chaque image (avec 4 images, chaque image occupe 25%)
        $('.slider').css('transform', `translateX(${newLeft})`);

        // Met à jour les points de navigation
        $('.dot').removeClass('bg-green-600').addClass('bg-gray-300');
        $('.dot').eq(currentIndex).removeClass('bg-gray-300').addClass('bg-green-600');
    }

    // Écoute les clics sur les boutons
    $('.btn-next').click(nextSlide);
    $('.btn-prev').click(prevSlide);

    // Slider automatique toutes les 10 secondes
    setInterval(nextSlide, 5000);
});
