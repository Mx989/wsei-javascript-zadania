// zadanie 0a

const city = {
    capital: "xxx",
    population: 0,
    president: "A. B.",
    primeMinister: ["G", "H"]
};

//zadanie 0b

const timeMachine = {
    shape: "rectangle",
    model: "xxx",
    run : function(date = "dd.mm.yy", place ="place") {
        console.log(`moved to: ${place}, time: ${date}`);
    }
};

timeMachine.run();

//zadanie 1

const book = {
    title: 'test',
    autor: 'autor',
    numberOfPages: 'number'
};

//for (const key of book){
//    console.log(book[key]);
//}

//zadanie 2

const person = {
    name: "Andrzej",
    age: 12,
    sayHello: function() {
        console.log("hello");
    }
};

console.log(person.name);
console.log(person.age);
person.sayHello();

//zadanie 3
const recipe = {
    title: "recipe",
    servings: 0
};

recipe.ingredients = [];
recipe.addIngredient = function(ingredient) {
    this.ingredients.push(ingredient);
    this.servings++;
}

recipe.addIngredient("ing 1");
recipe.addIngredient("ing 2");

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);


//zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);