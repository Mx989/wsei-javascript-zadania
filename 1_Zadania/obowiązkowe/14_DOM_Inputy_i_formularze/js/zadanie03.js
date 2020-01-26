document.addEventListener("DOMContentLoaded", function () {

    var team1 = document.getElementById("team1");
    var points1 = document.getElementById("points1");
    var team2 = document.getElementById("team2");
    var points2 = document.getElementById("points2");
    var button = document.querySelector("button");
    var table = document.querySelector("table");
    var tr="",td="";
    button.addEventListener('click', clickMe);
    function clickMe(){
        Check();
    }
    function Check(){
        if(team1.value == team2.value){

        }else{
            if(team1.length < 1 || team2.length < 1){

            }else{
                if(points1.value < 0 || points2.value < 0){
                }
                else{
                    tr = document.createElement("tr");
                    tdTeam1 = document.createElement("td");
                    tdTeam2 = document.createElement("td");
                    tdScore = document.createElement("td");
                    tdTeam1.innerHTML = team1.value;
                    tr.appendChild(tdTeam1); 
                    tdTeam2.innerHTML = team2.value;
                    tr.appendChild(tdTeam2); 
                    tdScore.innerHTML = points1.value + " - " + points2.value;
                    tr.appendChild(tdScore); 
                    tr.style.textAlign = "center";
                    table.appendChild(tr);
                }
            }
        }
     }
});