
const napis1 = "Cześć tu Roman";
let liczba1 = 22742;
liczba1 = 2274;

//alert ('lala1');
//alert (liczba1);
console.log(`Szczęsliwa liczba Romana to ${liczba1}`);
const article_main = document.querySelector('.article__main--js');
console.log(article_main.innerHTML);
article_main.innerHTML = `${article_main.innerHTML} + dodatkowy tekst dodany przy pomocy JS`;

const article = document.querySelector('.article__description--link--js');
console.log(article.innerHTML);
article.innerHTML = `${article.innerHTML} + dodatkowy tekst dodany przy pomocy JS`;