document.addEventListener("DOMContentLoaded", function () {
  var a = document.getElementById("a");
  var b = document.getElementById("b");

  //This wskazuje na obiekt document gdyz kontekst z jakiego ja wylowano to document
  console.log("obiekt document: ", this);

  a.addEventListener("click", function (event) {
    // This wskazuje na element DOM id a 
    console.log("a: ", this);
  });

  b.addEventListener("click", function (event) {
    //This wskazuje na element DOM o id b
    console.log("b: ", this);


    function innerFuncOne() {
      // this wskazuje na element Window.
      console.log("innerFuncOne: ", this);
    }
    innerFuncOne();
    // uzylbym
    // innerFuncOne.call(b)
    // innerFuncOne.call(b)
    // zalezy od kontekstu

  });

})