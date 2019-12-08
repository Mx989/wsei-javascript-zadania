function callOtherFunction(nameOfFunction) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    var randomNumber1 = Math.random() * 20;
    var randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b)
    console.log("Wynik", a + b)
})

callOtherFunction(function (x, y){
    console.log(x, "* ", y, " = ", x)
})

callOtherFunction(function (x,y){
    if(x>0){
        console.log("Pierwiastek z ",x,": ", Math.sqrt(x))
    }
    else{
    console.log("Liczba nie może być mniejsza od 0");
    }
    if(y>0){
        console.log("Pierwiastek z ",y,": ", Math.sqrt(y))
    }
    else{
    console.log("Liczba nie może być mniejsza od 0");
    }
})

