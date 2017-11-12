/*1.Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.*/
var num = 3;
alert(num);

 /*2.Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления). */
var a = 10;
var b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);
 /*3.Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result*/

var c=15;
var d=2;
var result;
result=c+d;
alert(result);

/*4.Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.*/

var a=10;
var b=2;
var c=5;
alert(a+b+c);

/*5.Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.*/

var a = 17;
var b = 10;
var c = a - b;
var d = 7;
var result = c + d;
alert(result);


/*6.Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.*/

var str = 'Привет, Мир!';
alert(str);

/*7.Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'*/

var str1 = 'Привет, ';
var str2 = 'Мир!';
alert(str1 + str2);


// 8. Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.

var name ='Ilya';
alert('Привет, ' + name);

// 9.Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
var age = 33;
alert('Мне ' + age + ' лет!');

// 10. Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.

var name = prompt('What is your name?');
alert('Your name is '+ name);

// 11.Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.

var num = prompt('Say the number');
alert(num*num);

// 12. Создайте переменную str и присвойте ей значение 'abcde'.
// Обращаясь к отдельным символам этой строки выведите на экран символ 'a',
//  символ 'c', символ 'e'.

var str = 'abcde';
alert(str[0]);
alert(str[2]);
alert(str[4]);

// 13.Создайте переменную num и присвойте ей значение '12345'.
 // Найдите произведение (умножение) цифр этого числа.

var num = '12345';
alert('Multiplication: ' + (num[0]*num[1]*num[2]*num[3]*num[4]));

// 14.Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце
alert('Hour: ' + 60*60);
alert('Day: ' + 60*60*24);
alert('Month: ' + 60*60*24*31);

// 15.Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.

var hour = '19';
var min = '20';
var sec = '40';
alert(hour + ':' + min + ':' + sec);

// 16.Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.

var num = 20;
alert(num*num);

// 17.Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.

var num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);

// 18.Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.

var num = 10;
num++;
num++;
num--;
alert(num);

// Работа с массивами
// 1. Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
var arr = ['a', 'b', 'c'];
alert(arr);

//2.С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
var arr = ['a', 'b', 'c'];
alert(arr[0]);
alert(arr[1]);
alert(arr[2]);

// 3. Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на
// экран строку 'a+b, c+d'.
var arr = ['a', 'b', 'c', 'd'];
alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]);

//  4. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент
// массива на второй, а третий элемент на четвертый.
//  Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

var arr = [2, 5, 3, 9];
result = arr[0]*arr[1] + arr[2]*arr[3];
alert(result);

// Объекты (ассоциативные массивы)
// 5. Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами:
// через квадратные скобки и как свойство объекта:

var obj = {a: 1, b: 2, c: 3};
alert(obj['c']);
alert(obj.c);

// 6. Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.

var obj = {Коля: '1000', Вася: '500', Петя: '200'};
alert(obj['Петя']);
alert(obj['Коля']);

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от
// начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

var obj = {1:'Понедельник', 2:'Вторник', 3:'Среда', 4:'Четверг', 5:'Пятница', 6:'Суббота', 7:'Воскресенье' };
alert(obj[7]);

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
//  Выведите день недели, соответствующий значению переменной day
var obj = {1:'Понедельник', 2:'Вторник', 3:'Среда', 4:'Четверг', 5:'Пятница', 6:'Суббота', 7:'Воскресенье' };
day = 3;
alert(obj[day]);

// Многомерные массивы
// 9. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

alert(arr[1][0]);

// 10. Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}.
// Выведите с его помощью слово 'jQuery'.

var obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(obj['js'][0]);

// 11. Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'.
// Пусть первый ключ содержит элемент, являющийся массивом названий дней недели
//  по-русски, а второй - по-английски. Выведите с помощью этого массива
//  понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

var obj = {'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], 'en':['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Fryday', 'Saturday', 'Sunday']};
alert(obj['ru'][0]);
alert(obj['en'][2]);

// 12. Пусть теперь в переменной lang хранится язык (она принимает одно из
// значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня.
//  Выведите словом день недели, соответствующий переменным lang и day. То есть:
//  если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

var obj = {'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], 'en':['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Fryday', 'Saturday', 'Sunday']};
var lang = 'en';
var day = 4;
alert(obj[lang][day]);

// Работа с if-else

// 1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

var a = 1;
if(a == 0)
    alert('Right');
else
    alert('Wrong');

// 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
//  Проверьте работу скрипта при a, равном 1, 0, -3
var a = 1;
if(a > 0)
    alert('Right');
else
    alert('Wrong');

// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
//  Проверьте работу скрипта при a, равном 1, 0, -3.

var a = 1;
if(a < 0)
    alert('Right');
else
    alert('Wrong');

// 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите
//  'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

var a = 1;
if(a >= 0)
    alert('Right');
else
    alert('Wrong');


// 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3

var a = 1;
if(a <= 0)
    alert('Right');
else
    alert('Wrong');
// 6.Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
var a = 1;
if(a != 0)
    alert('Right');
else
    alert('Wrong');

// 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
var a = 'test';
if(a == 'test')
    alert('Right');
else
    alert('Wrong');
// 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

var a = 1;
if(a === '1')
    alert('Right');
else
    alert('Wrong');

// Работа с логическими переменными

// 9. Если переменная test равна true, то выведите 'Верно', иначе выведите
// 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два
//  варианта скрипта - с короткой записью и с длинной.
var test = true;
if(test == true)
    alert('Right');
else
    alert('Wrong');
//////////
var test = true;
if(test == true){
    alert('Right');
}
else{
    alert('Wrong');
}

// 10. Если переменная test не равна true, то выведите 'Верно', иначе выведите
//  'Неверно'. Проверьте работу скрипта при test, равном true, false.
//   Напишите два варианта скрипта - с короткой записью и с длинной.
var test = true;
if(test != true)
    alert('Right');
else
    alert('Wrong');
//////////
var test = true;
if(test != true){
    alert('Right');
}
else{
    alert('Wrong');
}

// Работа с && (и) и || (или)

// 11. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе
//  выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
var a = 2;
if(a > 0 && a < 5)
    alert('Right');
else
    alert('Wrong');

// 12. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе
//  поделите ее на 10. Выведите новое значение переменной на экран.
//  Проверьте работу скрипта при a, равном 5, 0, -3, 2.

var a = 2;
if(a == 0 || a == 2)
    a+=7;
else
    a/=10;
alert(a);

// 13. Если переменная a равна или меньше 1, а переменная b больше или равна 3,
//  то выведите сумму этих переменных, иначе выведите их разность
//  (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
var a = 1;
var b = 3;
if(a <= 1 && b >= 3)
    alert(a + b);
else
    alert(a - b);

// 14. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или
// равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

var a = 7;
var b = 3;
if((a > 2 && a < 11) || (b >= 6 && b < 14))
    alert('Right');
else
    alert('Wrong');


    // На switch-case
 // 15. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она
 // имеет значение '1', то в переменную result запишем 'зима', если имеет
 // значение '2' – 'весна' и так далее. Решите задачу через switch-case.
var num = 3;
var result;
switch (num) {
    case 1: result ='зима';
        break;
    case 2: result ='весна';
        break;
    case 3: result ='лето';
        break;
    case 4: result ='осень';
        break;
}
alert(result);
