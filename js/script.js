document.getElementById('form-close-button-number').addEventListener("click", function() {
    const div = document.getElementById('form-request-number');
    const divblock = document.getElementById('form-request-number-block');
    
    // 1. Убираем класс `active` (запускаем анимацию исчезновения)
    divblock.classList.remove('active');
    
    // 2. Через 300ms (длительность анимации) скрываем элемент
    setTimeout(() => {
        div.classList.add('form-order-none');
    }, 200);
});

document.querySelectorAll('.number-button').forEach(button => {
    button.addEventListener('click', function() {
        const div = document.getElementById('form-request-number');
        const divblock = document.getElementById('form-request-number-block');
        // 1. Убираем скрытие (если было)
        div.className = "form-order";
        
        // 2. Даём браузеру время на отрисовку перед анимацией
        setTimeout(() => {
            divblock.classList.add('active');
        }, 10);
    });
});

document.querySelectorAll('.order-equipment-button-complete').forEach(button => {
     button.addEventListener('click', function() { 
        const div = document.getElementById('form-request-number');
        const divblock = document.getElementById('form-request-number-block');
    
        // 1. Убираем класс `active` (запускаем анимацию исчезновения)
        divblock.classList.remove('active');
        
        // 2. Через 300ms (длительность анимации) скрываем элемент
        setTimeout(() => {
            div.classList.add('form-order-none');
        }, 200);
    }); 
});
