//zadanie 0
//zadanie 0.1
const first = document.querySelector('.first').children[0].children[2];
//zadanie 0.2
const second = document.getElementById('second').parentElement.children[3];
//zadanie 0.3
//dziadek
const grandparent = document
  .querySelector('[data-ex=third]').parentElement.parentElement;
//ostatnie dziecko > pierwsze dziecko
const children = grandparent
  .children[grandparent.children.length - 1].children[0];
//odpowiedz
const ex = children.children[Math.floor(children.children.length / 2)];
//zadanie 0.4
const p = document.querySelector('.forth').parentElement.querySelector('article').querySelectorAll('p')[1];