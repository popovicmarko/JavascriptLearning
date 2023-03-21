
let user = [
     { name: "Ana", surname: "Anić", age: 25 },
     { name: "Ivan", surname: "Ivanić", age: 30 },
     { name: "Marija", surname: "Marić", age: 28 }
];

// for (let i = 0; i < user.length; i++) {
//     console.log(user[i].name);
// }

user.forEach(function ispisivanjeImena(object){
    console.log(object.name)
})


user.forEach(function (object){
    if(object.name.startsWith("M")){
        console.log(`Hello ${object.name}`)
    }
})

user.forEach(function(object){
    if(object.name.startsWith("M")){
        user[0]['id'] = '1m'
    }
})
 console.log(user)
