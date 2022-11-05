const prompt = require('prompt-sync')();
let meat = ['Burger', 'Shrimp', 'Lobster', 'Chicken', 'Steak'];
let drink = ['Soda', 'Water', 'Wine', 'Beer'];
let dessert = ['Cake', 'Ice Cream', 'Cookie', 'Fruit Cup', 'Donuts']

let meatRandom = Math.floor(Math.random() * meat.length);
let drinkRandom = Math.floor(Math.random() * drink.length);
let dessertRandom = Math.floor(Math.random() * dessert.length);

let meatResponse = meat[meatRandom];
let drinkResponse = drink[drinkRandom];
let dessertResponse = dessert[dessertRandom];


const namePrompt = prompt('Enter your name and your random message will appear ');
console.log(`Hey there ${namePrompt} You\'re meal recommendation for the day is a meat choice of ${meatResponse}. \nWith a drink choice of ${drinkResponse} \nand dessert choice of ${dessertResponse} \n\nHope you enjoy!!:-)`);