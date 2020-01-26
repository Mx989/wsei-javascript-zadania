document.addEventListener("DOMContentLoaded", function () {

    var name = document.getElementById("name");
    var type = document.getElementById("type");
    var button = document.querySelector("button");
    button.addEventListener('click', clickMe);
    function clickMe(){
        Check();
    }
    function Check(){
        switch(name.value[0]) {
            case "4":
                type.innerHTML ="Visa";
                if(name.value.length >= 13 && name.value.length <= 16){
                    name.style.border = "solid 5px green";
                }
                else{
                    name.style.border = "";
                }
              break;
            case "5":
                type.innerHTML ="Mastercard";
                if(name.value.length == 16){
                    name.style.border = "solid 5px green";
                }
                else{
                    name.style.border = "";
                }
              break;
            case "3":
                    if(name.value[1] == 4 || name.value[1] == 7){
                        type.innerHTML ="American Express";
                        if(name.value.length == 15){
                            name.style.border = "solid 5px green";
                        }
                    }
                    else{
                        type.innerHTML ="";
                        name.style.border = "";
                    }
                break;
            default:
            type.innerHTML ="";
            name.style.border = "";
          }
     }
});