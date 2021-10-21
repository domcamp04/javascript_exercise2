// console.log('Hey Dom!')
// console.log('Test');

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}   

// function displayFavorites(lst){
//     for ( let key in person3){
//         return (person3[key])
//     }
// }   
// console.log(displayFavorites(person3))


// Bryans solution //
for (let i =0; i < Object.keys(person).length; i ++){
    if (Array.isArray(Object.values(person)[i])){
        for (let j = 0; j < Object.values(person)[i].length; j++){
            if(typeof(Object.values(person)[i][j]) === 'object'){
                for (let k = 0; k < Object.keys(Object.values(person)[i][j]).length; k++){
                    console.log(Object.values(Object.values(person)[i][j])[k])
                } 
                }
                else {
                    console.log(Object.values(person)[i][j])
                }
            }
        } else{
            console.log(Object.values(person)[i])
        }
    }


// console.clear()
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
class Person {
    constructor(name, gender, age, favoriteColor) {
    this.name = name
    this.gender = gender
    this.age = age
    this.favoriteColor = favoriteColor
    }
    ageAdd() {
    let newAge = Person.age + 1;
    newAge = Person.age
    return newAge;
    }
  }

  const Emma = new Person('Emma', 'Female', 28, 'Purple');
  const Dominick = new Person('Dominick', 'Male', 28, 'Maroon');

// create the printInfo method
console.log(Emma)
console.log(Dominick)
console.log(Dominick.ageAdd())
console.log(Dominick.ageAdd())




console.clear()
//=======Exercise #3=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


// function replaceEvens(arr){
//     for (let k=0; k< arr.length; k++){
//         while (arr[k] % 2 == 0) {
//         console.log(splice(even, "even index"))
//         }
//     }
// };
// console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

function replaceEvens(arr){
    for (let i = 0; i = arr.length; i++){
        if (i % 2 == 0){
            arr.splice(arr[i], 1, 'even index')
        }
        return arr
    }
}
console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

// function replaceEvens1(arr){
//     for (const i of arr){
//         if (i % 2 != 0){
//         arr.splice(i, 0, 'even index')
//         } else {
//             return 
//         }
//     return arr
//     }
// }
// console.log(replaceEvens1(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// console.clear()

function friend(friends){
    let friendsNew = []
    for (let f = 0; f < friends.length; f++){
      if (friends[f].length === 4)
        friendsNew.push(friends[f]) 
    }
    return friendsNew
  }
console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Adam", "Jeremy", "Dominick", 'Luke', "Grace"]))
console.log(friend(["Brian", "Dave", "Joanne"]))