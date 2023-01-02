

// cars = ["Toyota", "BMW", "Audi", "Mercedes Benz", "WV"];
// cars[3]= "kia";
// console.log(cars[3]);
// console.log(cars.length)
// console.log(cars[cars.length - 1])
//====================================
// articles = ["Milk", "Bread", "Apples"]
// console.log(articles.length);
// articles[articles.length - 2] = "Bananas"
// articles.push("Tangarines");
// let fruit = articles.push("Oranges")
// console.log(articles)
//===================================

// articles1 = ["Milk", "Bread", "Apples", "Bananas", "Oranges"]
// articles2 = ["Toyota", "BMW", "Audi", "Mercedes Benz", "WV"]
// articles3= articles1.concat(articles2)//spajanje dva niza
// articles3.pop()//brisanje zadnjeg elmenta niza
// articles3.shift()//brisanje prvog elemnta niza
// articles1.splice(2, 0, "Cocolate")//dodaje na 2 mesto
// articles3.splice(1,3) //brise elementa na indeksima od 1 do 3
// let arr = articles3.find(e => e === "Audi")//trazi d ali u nisu ima zadati element
// let findIndex = articles3.indexOf("Audi")//Proverava na kojem je indeksu zadati elemant
// let sortArr = articles3.sort()//Sortiranje elmenata u nizu
// let reverseArr = articles3.reverse()

// console.log(findIndex)
// console.log(articles3)
// console.log(arr)
// console.log(sortArr)
// console.log(reverseArr)

//==========================================================================================

let listBuy = [];
listBuy.push('Milk', 'Bread', 'Apples');
console.log(listBuy);
listBuy.splice(1, 1, 'Bananas', 'Eggs');
console.log(listBuy)
let lastItem = listBuy.pop()
console.log(lastItem)
listBuy.sort();
console.log(listBuy)
let finIndex = listBuy.indexOf('Milk');
console.log(finIndex);
listBuy.splice(listBuy.indexOf('Bananas') + 1, 0, 'Juice', 'Pop')
console.log(listBuy);
listBuy2= ['Juice', 'Pop'];
listBuy3= listBuy.concat(listBuy2, listBuy2);
console.log(listBuy3)
let valueIndex= listBuy3.indexOf('Pop', 8);
console.log(valueIndex)