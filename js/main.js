let a = '';      //первое число
let b = '';      //второе число
let sing = '';   //знак операции
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.','00'];
const action = ['-','+','X','/'];

//Экран устройства
const out = document.querySelector('.calc__conclusion');

//Обнуление AC
function clearAll() {
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = 0;
}


document.querySelector('.calc__buttons').onclick = (event) =>{
    //нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    //вызов обнуления AC
    if(event.target.classList.contains('ac')) clearAll()
    
    out.textContent = '';
    //получение нажатой кнопки
    const key = event.target.textContent;

    //нажата 0-9 или .
    if(digit.includes(key)){
        if(b === '' && sing === '') {
            a += key;
            out.textContent = a;
        }
        else if(a !== '' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sing);
        return;
        
    }
    //если нажата кдавиша'-','+','X','/'
    if(action.includes(key)){
        sing = key;
        out.textContent = sing
        
    }
    //нажата клавиша '='
    if(key === '=') {
        switch (sing) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-": 
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if(b === '0' || b === '00'){
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sing = '';
                    return
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sing);

    }
}

//Подсветка
const buttonLight = document.querySelector('.calc__night-btn');
document.addEventListener('click', (event) => {

    if(event.target.closest('.calc__night-btn')){
        document.body.classList.toggle('_night')
    }
})