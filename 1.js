fu/*1.Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.*/
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

//Задачи
// 16. В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

var day = 12;
if(day <= 10)
    alert('First decade!');
else if(day >= 20)
    alert('Third decade!');
else
    alert('Second decade!');

// 17. В переменной month лежит какое-то число из интервала от 1 до 12.
//  Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

var month = 9;
if(month < 3 || month > 11)
    alert('winter');
else if (month > 2 && month < 6)
    alert('spring');
else if (month > 5 && month < 9)
    alert('summer');
else
    alert('fall');

// 18. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что
// первым символом этой строки является букswitchва 'a'. Если это так - выведите 'да',
//  в противном случае выведите 'нет'.

var str = 'abcde';

if (str[0]=='a')
    alert('yes');
else
    alert('no');

// 19. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом
//  этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в
//   противном случае выведите 'нет'.

var str = '12345';

if (str[0]=='1' || str[0]=='2' || str[0]=='3' )
    alert('yes');
else
    alert('no');

// 20. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как
//  числа первый символ строки, второй и третий.

var str = '567';
var result = Number(str[0]) + Number(str[1]) + Number(str[2]);
alert(result);


21. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется
сумме вторых трех цифр. Если это так - выведите 'да', в противном
случае выведите 'нет'.

var str = '523262';
if (
    (Number(str[0]) + Number(str[1]) + Number(str[2]))
    ==(Number(str[3]) + Number(str[4]) + Number(str[5]))
    )
    alert('yes');
else
    alert('no');

////////////
Циклы while и for

1. Выведите столбец чисел от 1 до 100.
var i = 1;
while (i <= 100) {
    document.write(i + '<br>');
    i++;
}

for (var i = 1; i <= 100; i++) {
    document.write(i + '<br>');
}

2. Выведите столбец чисел от 11 до 33

var i = 11;
while (i <= 33) {
    document.write(i + '<br>');
    i++;
}

for (var i = 11; i <= 33; i++) {
    document.write(i + '<br>');
}

3. Выведите столбец четных чисел в промежутке от 0 до 100.

var i = 0;
while (i <= 100) {
    document.write(i + '<br>');
    i+=2;
}

for (var i = 0; i <= 100; i+=2) {
    document.write(i + '<br>');
}

 4. С помощью цикла найдите сумму чисел от 1 до 100.
var sum = 0;
var i = 0;
while (i <= 100) {
    sum+= i;
    i++;
}
alert(sum);

var sum = 0;
for (var i = 0; i <= 100; i++) {
    sum+= i;
}
alert(sum);


Работа с for для массивов
5.Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все
эти элементы на экран.

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i]);
}

6. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму
элементов этого массива. Запишите ее в переменную result.
var result = 0;
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    result+=arr[i];
}
document.write(result);

Работа с for-in
7. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы
этого объекта.

var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
for (var key in obj) {
    document.write(key + ' : ' + obj[key] + '<br>')
}

8. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'.
 С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'

 var obj = {Коля: '200', Вася: '300', Петя: '400'};
 for (var key in obj) {
     document.write(key + ' - зарплата ' + obj[key] + ' долларов' + '<br>');
 }

 Задачи
 9. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора
 if выведите на экран столбец тех элементов массива, которые больше 3-х,
 но меньше 10.

var arr = [2, 5, 9, 15, 0, 4];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 3) {
        document.write(arr[i] + '<br>');
    }
}

10. Дан массив с числами. Числа могут быть положительными и отрицательными.
 Найдите сумму положительных элементов массива.

var arr = [2, -5, 9, -16, 1, -4];
var sum_pos = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        sum_pos+=arr[i];
    }
}
document.write(sum_pos);

11.  Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и
оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если
есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать
не надо.

var arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 4){
        document.write('Есть!');
        break;
    }
}

12. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на
экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

var arr = [10, 20, 30, 50, 235, 3000];

for (var i = 0; i < arr.length; i++) {
    arr[i] = String(arr[i]);
    if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5){
        document.write(arr[i] + '<br>');
    }
}

13. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for
создайте строку '-1-2-3-4-5-6-7-8-9-'

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var str ='';
for (var i = 0; i < arr.length; i++) {
    str += ('-' + arr[i]);
    if (i == arr.length - 1){
        str += '-';
    }
}
document.write(str);

14. Составьте массив дней недели. С помощью цикла for выведите все дни недели,
 а выходные дни выведите жирным.

 var arr = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Fryday', 'Saturday', 'Sunday'];

 for (var i = 0; i < arr.length; i++) {
     if (arr[i] == 'Saturday' || arr[i] == 'Sunday'){
         arr[i] = '<b>' + arr[i] + '</b>';
     }
     document.write(arr[i] + '<br>');
 }

15. Составьте массив дней недели. С помощью цикла for выведите все дни недели,
а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

var arr = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Fryday', 'Saturday', 'Sunday'];
var current = 'Sunday';
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == current){
        arr[i] = '<i>' + arr[i] + '</i>';
    }
    document.write(arr[i] + '<br>');
}

16. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не
станет меньше 50. Какое число получится? Посчитайте количество итераций,
необходимых для этого (итерация - это проход цикла), и запишите его в
переменную num.

var n = 1000;
var num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}
document.write( 'n = ' + n + '<br>' + 'number of iterations: ' + num);


Задачи на математические функции JavaScript

Работа с %

1. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

var a = 10;
var b = 3;
document.write(a % b);

2. Даны переменные a и b. Проверьте, что a делится без остатка на b.
Если это так - выведите 'Делится' и результат деления, иначе выведите
'Делится с остатком' и остаток от деления.

var a = 10;
var b = 3;

if (a % b == 0){
    alert('Делится');
}
else {
    alert('Делится с остатком');
}

Работа со степенью и корнем

3.  Возведите 2 в 10 степень. Результат запишите в переменную st.

var st = Math.pow(2, 10);

4. Найдите квадратный корень из 245.

var sq = Math.sqrt(245);

5. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

var arr = [4, 2, 5, 19, 13, 0, 10];
var res = 0;

for (var i = 0; i < arr.length; i++) {
    res += Math.pow(arr[i], 3);
}
res = Math.sqrt(res);
alert(res);

Работа с функциями округления
6. Найдите квадратный корень из 379. Результат округлите до целых, до десятых,
до сотых.

document.write(Math.sqrt(379).toFixed(0));
document.write(Math.sqrt(379).toFixed(1));
document.write(Math.sqrt(379).toFixed(2));

7. Найдите квадратный корень из 587. Округлите результат в большую и меньшую
стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
var obj = {};
obj['floor'] = Math.floor(Math.sqrt(587));
obj['ceil'] = Math.ceil(Math.sqrt(587));
for (var key in obj) {
    document.write(key + ':' + obj[key] + '<br>');
}

Нахождение максимального и минимального числа

8. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

document.write(Math.min(4, -2, 5, 19, -130, 0, 10));
document.write('<br>');
document.write(Math.max(4, -2, 5, 19, -130, 0, 10));

Работа с рандомом

9. Выведите на экран случайное целое число от 1 до 100.

document.write(Math.floor(Math.random() * 100));

10. Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно
  воспользоваться циклами for или while).

var arr = [];

for (var i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random()*100);
  document.write(arr[i] + '<br>');
}

Работа с модулем
11. Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте
работу скрипта самостоятельно для различных a и b.

var a = 150;
var b = 333;

document.write(Math.abs(a - b));


12. Даны переменные a и b. Отнимите от a переменную b и результат присвойте
 переменной c. Сделайте так, чтобы в любом случае в переменную c
  записалось положительное значение. Проверьте работу скрипта при a и b,
   равных соответственно 3 и 5, 6 и 1.

var a = 3;
var b = 5;
var c = Math.abs(a - b);
alert(c);

Задачи

13. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу
на массиве с элементами 12, 15, 20, 25, 59, 79.

var arr = [12, 15, 20, 25, 59, 79];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

document.write('Ср Арифметическое: ' + sum / arr.length);

14. Напишите скрипт, который будет находить факториал числа. Факториал
(обозначается !) - это произведение (умножение) всех целых чисел,
меньше данного, и его самого. Например, 4! = 1*2*3*4.

var num = 5;
var fact = 1;

for (var i = 1; i <= num; i++) {
  fact *= i;
}
alert(fact);

Работа с регистром символов
1. Дана строка 'js'. Сделайте из нее строку 'JS'.

var str = 'js';
str = str.toUpperCase();
alert(str);

2. Дана строка 'JS'. Сделайте из нее строку 'js'.
var str = 'JS';
str = str.toLowerCase();
alert(str);


Работа с length, substr, substring, slice. Работа с indexOf

3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
var str = 'я учу javascript!';
alert(str.length);

4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово
'javascript' тремя разными способами (через substr, substring, slice).

var str = 'я учу javascript!';
document.write('substr: ' + str.substr(2, 3) + '<br>');
document.write('substring: ' + str.substring(2, 5) + '<br>');
document.write('slice: ' + str.slice(2, 5) + '<br>');

5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
var str = 'я учу javascript!';
document.write(str.indexOf('учу'));

6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте
обрезание длинного текста по следующему принципу: если количество символов
этого текста больше заданного в переменной n, то в переменную result запишем
первые n символов строки str и добавим в конец троеточие '...'. В противном
случае в переменную result запишем содержимое переменной str.

var str = 'я учу javascript!';
var n = 10;
var result = '';
if (str.length > n){
  result += str.substr(0, n) + '...';
}
else {
  result += str;
}
document.write(result);

Работа с replace

7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью
глобального поиска и замены.
var str = 'Я-учу-javascript!';
str = str.replace(/-/g, '!');
document.write(str);

Работа с split

8. Дана строка 'я учу javascript!'. С помощью метода split запишите
каждое слово этой строки в отдельный элемент массива.

var str = 'я учу javascript!';
var arr = str.split(' ');

9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый
символ этой строки в отдельный элемент массива.

var str = 'я учу javascript!';
var arr = str.split('');

10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату
в формат '31.12.2025'.

var date = '2025-12-31';
var tmp = date.split('-');
date = tmp[2] + '.' + tmp[1] + '.' + tmp[0];
document.write(date);

Работа с join
11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join
преобразуйте массив в строку 'я+учу+javascript+!'.

var arr = ['я', 'учу', 'javascript', '!'];
arr = arr.join('+');
document.write(arr);

Задачи

12. Преобразуйте первую букву строки в верхний регистр.

var str = 'hello world';
str = str.substr(0, 1).toUpperCase() + str.substr(1);
document.write(str);


13. Преобразуйте первую букву каждого слова строки в верхний регистр.

var str = 'hello world';
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1);
}
str = arr.join(' ')
document.write(str);

14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же,
должен работать с любыми аналогичными строками.

var str = 'var_test_text';
var arr = str.split('_');
for (var i = 1; i < arr.length; i++) {
  arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1);
}
str = arr.join('')
document.write(str);


Задачи на функции работы с массивами в JavaScript
Работа с concat

1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

arr1 = arr1.concat(arr2);
document.write(arr1);

Работа с reverse

2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
var arr = [1, 2, 3];
arr = arr.reverse();
document.write(arr);

Работа с push, unshift

3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

var arr = [1, 2, 3];
arr.push(4, 5, 6);
document.write(arr);

4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

var arr = [1, 2, 3];
arr.unshift(4, 5, 6);
document.write(arr);


Работа с shift, pop

5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

var arr = ['js', 'css', 'jq'];
var tmp = arr.shift();
document.write(tmp);

6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

var arr = ['js', 'css', 'jq'];
var tmp = arr.pop();
document.write(tmp);

Работа с slice

7. 	Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
var arr = [1, 2, 3, 4, 5];
var new_arr = arr.slice(0, 3);
document.write(new_arr);

8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

var arr = [1, 2, 3, 4, 5];
var new_arr = arr.slice(3);
document.write(new_arr);


Работа с splice

9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

var arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
document.write(arr);

10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

var arr = [1, 2, 3, 4, 5];
var new_arr = arr.splice(1, 3);
document.write(new_arr);

11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив
[1, 2, 3, 'a', 'b', 'c', 4, 5].

var arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
document.write(arr);

12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив
[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

var arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
document.write(arr);

Работа с sort

13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

var arr = [3, 4, 1, 2, 7];
arr.sort();
document.write(arr);

Работа с Object.keys

14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

var obj = {js:'test', jq: 'hello', css: 'world'};
var okeys = Object.keys(obj);
document.write(okeys);

Отработка стандартных функций JavaScript

1. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл.
Найдите два решения.

var str = 'hello world';
str = str.substr(0, 1).toUpperCase() + str.substr(1);
document.write(str);

var str = 'hello world';
var arr = [];
arr = str.split('');
arr[0] = arr[0].toUpperCase();
str = arr.join('');
document.write(str);

2. Дана строка, например, '123456'. Переверните эту строку
(сделайте из нее '654321') не используя цикл.

var str = '123456';
var arr = [];
arr = str.split('');
arr = arr.reverse();
str = arr.join('');
document.write(str);

3. Дано число, например, 3751. Отсортируйте цифры в нем
(сделайте из него 1357) не используя цикл.
var num = 3751;
var str = String(num);
var arr = [];
arr = str.split('');
arr.sort();
str = arr.join('');
num = Number(str);
document.write(num);

4.  Проверьте, что строка начинается на http://.
var str = 'http://ya.ru'
document.write(str.startsWith('http://'));

var str = 'http://ya.ru'
document.write(str.substr(0, 7)==('http://'));


5. Проверьте, что строка заканчивается на .html

var str = 'http://ya.html'
document.write(str.endsWith('.html'));

var str = 'http://ya.html'
document.write(str.substr(-5)==('.html'));
