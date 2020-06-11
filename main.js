const napis1 = "Cześć tu Roman";
let liczba1 = 2274444;
liczba1 = 2274;

//alert ('lala1');
//alert (liczba1);
console.log(`Szczęsliwa liczba Romana to ${liczba1}`);


//const article_main = document.querySelector(".article__main--js");
//article_main.innerHTML = `${article_main.innerHTML} + dodatkowy tekst dodany przy pomocy JS`;
//console.log(article_main.innerHTML);

//const article = document.querySelector(".article__description--link--js");
//article.innerHTML = `${article.innerHTML} + dodatkowy tekst dodany przy pomocy JS`;
//console.log(article.innerHTML);

function addHtmlContent (querySelector, content){
    const article = document.querySelector(querySelector);
    article.innerHTML = `${article.innerHTML} ${content}`;
    console.log(article.innerHTML);
    
}

//addHtmlContent (".article__main--js", "dodatkowy tekst dodany przy pomocy JS" ) 
//addHtmlContent (".article__description--link--js", "dodatkowy tekst z funkcji" ) 



function calculate(number1, number2) {
    //console.log(`pierwszy argument to ${number1}`);
    //console.log(`drugi argument to ${number2}`);
    return number1*number2;
}

const calculate2 = (number1, number2) => number1*number2;

const wynik = calculate (11, 2); 
console.log (wynik);

const wynik1 = calculate2 (12, 2); 
console.log (wynik1);

function greetOld (age, firstName) {
    console.log(`Witaj odwiedzający man na imię ${firstName} i mamyyyy ${age} lat`);
}

const greet = (age, firstName) => {
    console.log(`Witaj odwiedzający man na imię ${firstName} i mam ${age} lat`);
}
//greetOld(19, 'Kacper');
//greet(14, 'Ania');

const button = document.querySelector(".action__button1--js");
function changeButton () {
    const header = document.querySelector(".header--js");
    header.innerHTML = `${header.innerHTML} widzę, że już kliknąłeś`;
    header.classList.add('klasa--js')
    button.innerHTML = `${button.innerHTML} click`;
}
//button.addEventListener("click",changeButton);



const hamburger = document.querySelector('.hamburger--js');
function changeMenu () {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open')
}
hamburger.addEventListener('click',changeMenu);