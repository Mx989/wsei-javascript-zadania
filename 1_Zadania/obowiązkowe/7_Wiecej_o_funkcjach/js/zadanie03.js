Wypisz();

function Wypisz(){
    console.log("Cześć");
}

Wypisz();

//funkcja zadeklarowana definicją funkcji jest dostępna przed jej deklaracją


Wypisz2();

var Wypisz2 = function(){
    console.log("Witaj");
}

Wypisz2();

//wyrażenie fukncyjne jest dostępne dopiero po jego zadeklarowaniu