const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.navigation ul');

menuBtn.addEventListener('click', () => {
    // Comprueba si el menú ya tiene la clase 'show'
    if (menu.classList.contains('show')) {
        menu.classList.remove('show'); // Quita la clase 'show'
    } else {
        menu.classList.add('show'); // Añade la clase 'show'
    }
});

window.addEventListener('scroll', () => {
    const imageContainer = document.querySelector('.image-container');
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Calcular el filtro en función del desplazamiento
    const brightness = Math.max(0, 1 - (scrollPosition / maxScroll) * 1); // Ajustar el factor para oscurecer más
    imageContainer.style.filter = `brightness(${brightness})`; // Aplicar filtro de brillo
});
