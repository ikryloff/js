Задачи на основы работы с пользовательскими функциями в JavaScript

1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function square(num){
  return num*num;
}
alert(square(4));

2. Сделайте функцию, которая возвращает сумму двух чисел.
function sum (a, b){
  return a + b;
}
alert(sum(4, 5));

3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function f1 (a, b, c){
  return (a - b) / c;
}
alert(f1(4, 5, 6));

4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function day(n){
  switch (n) {
      case 1: return 'Понедельник';
          break;
      case 2: return 'Вторник';
          break;
      case 3: return 'Среда';
          break;
      case 4: return 'Четверг';
          break;
      case 5: return 'Пятница';
          break;
      case 6: return 'Суббота';
          break;
      case 6: return 'Воскресенье';
          break;
  }
}
alert(day(4));
