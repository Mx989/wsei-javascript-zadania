document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

     //zadanie 0
     var el = document.querySelector('div .title');

     function getDataAnimation(element){
        const variable = element.getAttribute('data-animation');
        return variable;
     }

     var result = getDataAnimation(el);

     console.log(result);


     //zadanie 1

     const home = document.getElementById('home');
     const home2 = document.querySelector('#home');

     const liElement = document.querySelector('li[data-direction]');
     const clasElement = document.querySelector('.block')


     //zadanie 2

     const list = document.querySelectorAll("nav li");
     const paragraphs = document.querySelectorAll("div p");
     const divs = document.querySelectorAll("article div");

     console.log(list);
     console.log(paragraphs);
     console.log(divs);
    
     //zadanie 3

     const art = document.querySelector("article.first");
     const result = art.getElementsByTagName("h1");

     console.log(result.length);
    
    });
