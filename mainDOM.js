let mainHeader = document.querySelector("h1");

// создание в цикле новых элементов страницы
let body = document.querySelector("body");
for (let i = 0; i < 2; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = "blue";
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.margin = "10px";
    body.appendChild(div);
}


// создать кнопку
let myButton= document.createElement('button');
myButton.innerText="новая кнопка";

body.appendChild(myButton);

// input 

let input=  document.createElement('input');
input.setAttribute('type', "number");
body.appendChild(input);

//div.innerHTML= "новый див";
//let body= document.querySelector("body");

// добавление элемента в боди
//body.appendChild(div);
// добавление элемента с заменой
//mainHeader.replaceWith(div);

//mainHeader.remove();


// для размещения элемента относительно другого
// after, before, append, prepend,
//mainHeader.after(div);

//mainHeader.before(div);







/*
mainHeader[2].style.fontSize= "60px";

mainHeader[0].innerHTML="Измененный заголовок";
mainHeader[1].hidden= true;

// добавление класса элементу
mainHeader[0].className="newClass";
// удаление класса у элемента
mainHeader[0].classList.remove("newClass");
// проверяем есть ли класс у элемента
mainHeader[0].classList.contains("newClass");

// получаем нестандартный атрибут
mainHeader[0].hasAttribute('id');

//  получаем значение атрибута
mainHeader[0].getAttribute('id');

// установка значения
mainHeader[0].setAttribute('id', "12" );
// удаление атрибута
mainHeader[0].removeAttribute('id');

*/
