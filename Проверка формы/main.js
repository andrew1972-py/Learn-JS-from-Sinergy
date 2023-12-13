
function checkForm(form){
    let result = true;

    let allInputs = form.queryselectorAll('input');
    
   ?? function removeError(){
        const parent = input.parentNode;
        if (parent.classList.contents('error')) {
            let a = parent.querySelector('.error-label')
            a.remove();
            parent.classList.remove(); ??


    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');
        errorLabel.classList.add('error-title');
        errorLabel.textContent = text;
        parrent.classList.add('error');
        parent.append(errorLabel);
    }

    for (const input of allInputs) {

        if(input.value == ""){
            console.log("Ошибка поля");
            createError(input, "Поле не заполнено!");
            result = false;
        }
    }

    return result;

document.getElementById('add-form').addEdventListener('submit',function(event){
    event.preventDefeault();
    
    let allInputs = form.querySelectorAll('input');

        for(let input of allInputs) {
            if(input.value == ''){
                console.log('Ошибка');
            }
        }
    if (checkForm(this)==true){
        alert('Проверка прошла успешно!');
    }
})

    


function removeError
    });
