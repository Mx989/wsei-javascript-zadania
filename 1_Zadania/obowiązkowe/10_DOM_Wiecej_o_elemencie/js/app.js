document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zadanie 0
    const list = document.querySelectorAll('.ex5 li');
    for (let i = 0; i < list.length; i++) {
        if (i % 2) list[i].style.background = '#0f0';
        if (!(i % 3) && i !== 0) list[i].style.textDecoration = 'underline';
    }
    list[4].classList.add('big');

    //zadanie 1
    const chrome = document.querySelector('.ex1 .chrome');
    const edge = document.querySelector('.ex1 .edge');
    const firefox = document.querySelector('.ex1 .firefox');

    //zadanie 1 - a
    edge.style.backgroundImage = 'url("assets/img/edge.png")';
    firefox.style.backgroundImage = 'url("assets/img/firefox.png")';
    //zadanie 1 - b
    firefox.nextElementSibling.setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/');
    chrome.nextElementSibling.setAttribute('href', 'https://www.google.com/intl/pl_pl/chrome/');
    edge.nextElementSibling.setAttribute('href', 'https://www.microsoft.com/pl-pl/windows/microsoft-edge');
    firefox.nextElementSibling.innerText = 'Firefox'
    chrome.nextElementSibling.innerText = 'Chrome';
    //zadanie 1 - c
    chrome.style.width = '100px';

    //zadanie 2
    document.querySelector('.ex2 #name').innerHTML = 'Mateusz Hanzel';
    document.querySelector('.ex2 #fav_color').innerHTML = 'Black';
    document.querySelector('.ex2 #fav_meal').innerHTML = 'Pizza';
    
    //zadanie 3
    document.querySelector('.ex3 ul').classList.add('menu');
    for (const i of document.querySelectorAll('.ex3 li')) {
        i.classList.add('menuElement');
        i.classList.remove('error');
    }
    
    //zadanie 4
    let id = 1;
    for (const i of document.querySelectorAll('.ex4 li')) i.dataset.id = id++;
});