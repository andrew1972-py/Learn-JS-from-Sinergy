
// function имя функции(параметры) { тело функция-
//то что функция делает 
// return результат }
/*
// описание функции 
function sendMessage(par1, par2) {
    document.write(par1 + ", " + par2);
    document.write("<br>");
}

sendMessage("Barbara", "how are you?");
sendMessage("Alice", "how are you?");
sendMessage("Nikita", "how are you?");
sendMessage("Alex", "how are you?");


function sendMessage2(par1, par2) {
    return (par1 + ", " + par2);
}


//let myMessage= sendMessage2("Sveta", "message");
//document.write(sendMessage2("Sveta", "message"));

/* напишите функцию с тремя параметрами: 
число, число2, имя 
функция должна вывести на экран сумму чисел и имя
имя: сумма */
/*
function sendMessage3(num1, num2, name) {
    let sum = num1 + num2;
    document.write(name + ": " + sum);
    document.write("<br>");
}


sendMessage3(2, 5, "Настя");

// название функции = (параметры) => тело функции 

function sum(a, b, c) 
{ return a + b + c; }

document.write(sum(1, 2, 3));
*/

// объекты 
/*
let user = {
    nameUser: "Maksim",
    ageUser : 40, 
    maleUser: "male",
    "likes books": true
}

user.isAdmin= true;
delete user.nameUser;
let a= "likes books";

document.write(user[a]);

// определить объект со свойствами: имя, 
//любит животных, не является администратором

let user2 = {
    nameUser: "Maksim",
    "likes animals" : true, 
    isAdmin: false
}

document.write(nameUser,user2["likes animals"],user2.isAdmin);
*/
/*
function createObject(name, isAdmin){
    return {
        name, 
        isAdmin,
        sendMessage2: function(){
            document.write("Hello again  " + this.name);
        }
    };
}


let user= createObject('Никита', true);
let user2= createObject('Катя', true);

user.sendMessage = function (){
    document.write("Hello");
}

user.sendMessage2();
user2.sendMessage2();
*/

// массивы, индексация начинается с нуля

let array= ["Клубника", "Малина", "Голубика", "Вишня", "Смородина"];

function arrayClone(arr){
    return arr.slice(0);
}

let newArray= arrayClone(array);
document.write(newArray);



