
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//deklaracja funkcji sortArray
function sortArray() {

    //deklaracja tablicy
    var points = [41, 3, 6, 1, 114, 54, 64];

    //sortowanie tablicy
    points.sort(function (a, b) {
        //sortuje tablice od najmniejszego elementu
        return a - b;
    });

    //zwraca posortowaną tablice
    return points;
}

//Wywołanie funkcji sortArray
sortArray();
