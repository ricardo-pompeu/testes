const tabs = document.querySelectorAll('.category-tabs button');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(btn => btn.classList.remove('active'));
    tab.classList.add('active');
  });
});






/*----------------------------------------------------*/


if (window.innerWidth > 1000) {

    let index = 0;
        const slides = document.querySelector('.carousel-images');
        const dots = document.querySelectorAll('.dot');
        const total = document.querySelectorAll('.carousel-images img').length;
        let startX = 0;
        let moveX = 0;
        let isDragging = false;
        
        function showSlide() {
            slides.style.transition = "transform 0.5s ease-out";
            slides.style.transform = `translateX(calc(${-index * 100}% - ${index * 0}vw))`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }
        
        function nextSlide() {
            if (index < total - 1) index++;
            else index = 0;
            showSlide();
        }
        
        function prevSlide() {
            if (index > 0) index--;
            else index = total - 1;
            showSlide();
        }
        
        function goToSlide(n) {
            index = n;
            showSlide();
        }
        
        
        // Suporte a gestos estilo Instagram
        document.getElementById("carousel").addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            moveX = startX;
            slides.style.transition = "none";
            isDragging = true;
        });
        
        document.getElementById("carousel").addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            moveX = e.touches[0].clientX;
            let diff = moveX - startX;
            
            slides.style.transform = `translateX(calc(${-index * 100}% - ${index * 0}vw + ${(diff / window.innerWidth) * 100}%))`;

        });
        
        document.getElementById("carousel").addEventListener("touchend", () => {
            let diff = moveX - startX;
            if (diff < -50) {
                nextSlide();
            } else if (diff > 50) {
                prevSlide();
            } else {
                showSlide();
            }
            isDragging = false;
        });

}

























/*-------------------------------------------------------------------------------------------------------------------------------*/

let index = 0;
        const slides = document.querySelector('.carousel-images');
        const dots = document.querySelectorAll('.dot');
        const total = document.querySelectorAll('.carousel-images img').length;
        let startX = 0;
        let moveX = 0;
        let isDragging = false;
        
        function showSlide() {
            slides.style.transition = "transform 0.5s ease-out";
            slides.style.transform = `translateX(calc(${-index * 100}% - ${index * 12}vw))`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }
        
        function nextSlide() {
            if (index < total - 1) index++;
            else index = 0;
            showSlide();
        }
        
        function prevSlide() {
            if (index > 0) index--;
            else index = total - 1;
            showSlide();
        }
        
        function goToSlide(n) {
            index = n;
            showSlide();
        }
        
        
        // Suporte a gestos estilo Instagram
        document.getElementById("carousel").addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            moveX = startX;
            slides.style.transition = "none";
            isDragging = true;
        });
        
        document.getElementById("carousel").addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            moveX = e.touches[0].clientX;
            let diff = moveX - startX;
            
            slides.style.transform = `translateX(calc(${-index * 100}% - ${index * 12}vw + ${(diff / window.innerWidth) * 100}%))`;

        });
        
        document.getElementById("carousel").addEventListener("touchend", () => {
            let diff = moveX - startX;
            if (diff < -50) {
                nextSlide();
            } else if (diff > 50) {
                prevSlide();
            } else {
                showSlide();
            }
            isDragging = false;
        });


    
    


       // Inicia o autoplay trocando as imagens a cada 6 segundos
let autoplay = setInterval(nextSlide, 6000);

// Função para pausar o autoplay
function pauseAutoplay() {
    clearInterval(autoplay);
}

// Função para retomar o autoplay
function resumeAutoplay() {
    autoplay = setInterval(nextSlide, 6000);
}

// Seleciona todas as imagens do carrossel
const images = document.querySelectorAll(".carousel-images img");

// Adiciona eventos de toque para pausar e retomar o autoplay
images.forEach(img => {
    img.addEventListener("touchstart", pauseAutoplay); // Pausa ao tocar na imagem
    img.addEventListener("touchend", resumeAutoplay);  // Retoma ao soltar o dedo
});



