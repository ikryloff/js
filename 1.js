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
num ++;
num ++;
num --;
alert(num);
