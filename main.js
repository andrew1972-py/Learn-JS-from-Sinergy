// переменные 
/* Комментарии
*/
/*
let text= "11";
let c= parseInt(text);
let a = 10; 

document.write("Сложение а и с = " + (a + c));


//строгое и нестрогое сравнение
 let x="123";
 let a=123;
 document.write(x===a)
 document.write("<br>")
 document.write(x==a)
 
 */
/*

// Условие
let userNumber = prompt("Введите число");
if (userNumber<100){
    document.write("Число меньше 100");
} else{
    document.write("Число больше 100");
}
*/

// краткая запись условия
//let num = prompt("Введите число");
//let result = num % 2 == 0 ? "Число четное" : "Число нечетное";
//document.write(result);
/*
let numForSwitch= 10;

switch(numForSwitch) {
    case 1:
        document.write("Данное число 1");
        break;
    case 5:
        document.write("Данное число 5");
        break;
    case 10:
        let b= numForSwitch+100;
        document.write("Данное число" + b);
    default: 
        console.log("Нет такого значения");
}
*/

// && и  логическое умножение
// || или логическое сложение
// !

//let result = false && true;
//document.write(result); 


/* let num2 = 15;

if (num2 < 30 || num2 > 20) {
    document.write("Число подходит");
} else {
    document.write("Число не подходит");
}*/


// циклы
/*
let i = 5;

while (i < 10) {
    document.write(i);
    document.write("<br>");
    i++;
}

document.write(" мы вышли из цикла");

let k = 1;

do {
    document.write(k);
    document.write("<br>");
    k++;
}
while (k < 4)

document.write("мы вышли из цикла");

for (let j = 0; j < 10; j++) {
    document.write(j);
    document.write("<br>");
    if (j == 5) break;
}

for (let j = 0; j < 10; j++) {
    if (j % 2 == 0) continue;
    document.write(j);
    document.write("<br>");
}


*/
/*
let result= confirm("Хотите продолжить регистрацию");
console.log(result); */

function printHello(){
    document.write("<br>");
    document.write("Привет");
    document.write("<br>");
    document.write("Как твои дела?");
    document.write("<br>");
    document.write("Пока");
    document.write("<br>");
}


printHello();
printHello();
printHello();
printHello();