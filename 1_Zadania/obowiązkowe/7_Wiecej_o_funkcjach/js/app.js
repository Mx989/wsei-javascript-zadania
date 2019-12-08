/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//deklaracja funkcji jeden
function jeden() {

    //deklaracja zmiennej zmienna1 - scope: funkcja jeden
    var zmienna1 = 1;

    //deklaracja zagnieżdżonej funkcji dwa
    function dwa() {

        //wypisanie do konsoli zmiennej zmienna1 - undefined jest spowodowany złym scope'm
        console.log(zmienna1);

        //deklaracja zmiennej zmienna2 - scope: funkcja dwa
        var zmienna2 = 3;
    }

    //wywołanie funkcji dwa
    dwa();

    //wypisanie do konsoli zmiennej zmienna2 - undefined spowodowany złym scopem
    console.log(zmienna2)
}

//wywołanie funkcji
jeden()