/* Julie Rizzino
rizzino_a05a.js
INFO 2124
Thoendel
1/14/20 */

let toDoList = [`Fold laundry`,`Cook breakfast`,`Take a shower`,`Make my bed`];
console.log(toDoList);
toDoList.unshift(`Go grocery shopping`);
console.log(toDoList);
toDoList.reverse();
toDoList.sort();
console.log(toDoList);
toDoList.includes(`x`);

let groceryList = new Array(`Bananas`,`Avocados`,`Rotissire Chicken`,`Bread`,`Eggs`,`Milk`);
console.log(groceryList);
groceryList.shift();
console.log(groceryList);
groceryList.splice(2,0,`Peanut butter`,`Strawberry jelly`);
console.log(groceryList);
