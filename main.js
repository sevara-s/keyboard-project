document.addEventListener('keydown', function(event) {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

    let keyDisplay = event.key;
    if (event.key === ' ') keyDisplay = 'Space';
    if (event.key === 'Backspace') keyDisplay = 'Backspace';
    if (event.key === 'Escape') keyDisplay = 'Escape';

    card1.textContent = keyDisplay;        
    card2.textContent = event.keyCode;     
    card3.textContent = event.code;        
});