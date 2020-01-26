document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //zadanie 0
    function getDatasInfo(elements) {
        const datas = [];
        for (const element of elements) datas.push(element.dataset.color);
        return datas;
    }

    //zadanie 1
    const log = (e) => {
        console.log(e.tagName);
        console.log(e.classList);
    }
    log(homeElement);
    for (const i of childElements) log(i);
    log(banner);
    for (const i of blocks) log(i);
    for (const i of links) log(i);

   //zadanie 2
    blocks.forEach(block=>{
        console.log(block.innerHTML);
        // outer
        console.log(block.outerHTML);

        block.innerHTML = "Nowa wartość diva o klasie blocks";
    })

    //zadanie 3
    function getId(el) {
        return el.id;
    }
    getId(document.getElementById('mainFooter'));

    //zadanie 4
    function getTags(elements) {
        const tags = [];
        for (const i of elements) tags.push(i.tagName);
        return tags;
    }

    //zadanie 5
    function getClassInfo(element) {
        return element.classList;
    }
    getClassInfo(banner);

    //zadanie 6
    const li = document.querySelectorAll('nav li');
    function setDataDirection(elements) {
        for (const i of elements) {
            if (i.dataset.direction == undefined) i.dataset.direction = 'top';
        }
    }
    setDataDirection(li);
});
