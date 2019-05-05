// nerdyfeed 2019
function calc() {
    var a = parseFloat(document.getElementById('first').value); // Получение первого числа
    var b = parseFloat(document.getElementById('second').value); // Получение второго числа
    var c = a + b; // Производим вычисления
    alert("Результат: \n\n" + Math.round(c * 100) / 100); // Вывод результата с учётом округления
}
// Анонимная функция для кнопки
result.onclick = function() {
    calc();
}