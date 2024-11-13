$(document).ready(function() {
    let currentIndex = 0;
    const totalImages = $('.slider img').length;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSliderPosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateSliderPosition();
    }

    function updateSliderPosition() {
        const newLeft = -(currentIndex * 25) + '%';
        $('.slider').css('transform', `translateX(${newLeft})`);

        $('.dot').removeClass('bg-green-600').addClass('bg-gray-300');
        $('.dot').eq(currentIndex).removeClass('bg-gray-300').addClass('bg-green-600');
    }

    $('.btn-next').click(nextSlide);
    $('.btn-prev').click(prevSlide);

    setInterval(nextSlide, 5000);
});
