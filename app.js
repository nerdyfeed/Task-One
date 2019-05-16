// nerdyfeed 2019
function calc() {
    var a = document.getElementById('first').value // Получение первого числа
    var b = document.getElementById('second').value // Получение второго числа
    a = parseFloat(a);
    b = parseFloat(b);
    var c = a + b; // Производим вычисления
    if(c <= 0.9) {
        alert("Результат: \n\n" + Math.round(c * 100) / 100); // Вывод результата с учётом округления
    } else {
        alert("Результат: \n\n" + c);// Вывод результата с учётом округления
    }
    
}
// Анонимная функция для кнопки
result.onclick = function() {
    calc();
}