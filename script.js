const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {

    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = 'indigo'; 
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '';
    });
});
