function distFromAvarage(tab){

    let sum = 0;
    let newTab = [];

    for(i=0; i < tab.length; i++){
        sum += tab[i];
    }
    
    sum /= tab.length;
    
    tab.forEach(el => {
        newTab.push(el-sum);
    })

    return(newTab);
}

let tab = [1,2,3,4,5,6,7];

distFromAvarage(tab);

//zadanie 1

var favouriteFruits = ['apple', 'orange', 'banana'];
console.log(favouriteFruits[0]);
console.log(favouriteFruits[favouriteFruits.length-1]);

for(var i = 0; i< favouriteFruits.length; i++) {
    console.log(favouriteFruits[i]);
}