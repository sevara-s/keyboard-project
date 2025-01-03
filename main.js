document.addEventListener('keydown', function(event) {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

    let  key = event.key;
    if (event.key === ' ')  key = 'Space';
    if (event.key === 'Backspace')  key = 'Backspace';
    if (event.key === 'Escape')  key = 'Escape';

    card1.textContent =  key;        
    card2.textContent = event.keyCode;     
    card3.textContent = event.code;        
});
