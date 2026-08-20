"use strict";
/*
Problem 1 — getTicketPrice
👉 Age অনুযায়ী ticket price return করবে।
< 5 → 0
5–12 → 100
13–59 → 200
60+ → 120
মূল বিষয়: number, parameter type, return type, if/else
*/
// const getTicketPrice =(age:number):number => {
//     if(age < 5){
//         return 0
//     }
//     else if( age <= 12){
//         return 100
//     }
//     else if (age <=59 ){
//         return 200
//     }
//     else{
//         return 120
//     }
// }
// console.log(getTicketPrice(95))
const findProducts = (products, category) => {
    if (!Array.isArray(products)) {
        return "Invalid";
    }
    else if (products.length <= 0) {
        return [];
    }
    const filteredProducts = products.filter((product) => {
        return product.category === category;
    });
    return filteredProducts;
};
console.log(findProducts([
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" },
], "phone"));
/*
Problem 8 — getPatientStatus
👉 Patient দুই ধরনের:
"general"
অথবা
"emergency"
Emergency হলে emergencyLevel থাকবে:
1 → Critical
2 → Serious
3 → Moderate
মূল বিষয়: ⭐⭐ discriminated union, union type, type narrowing
*/
/*
Problem 9 — processTransaction
👉 Bank balance-এর উপর transaction চালাবে।
"deposit" → টাকা যোগ
"withdraw" → টাকা বাদ
balance-এর চেয়ে বেশি withdraw → balance অপরিবর্তিত
মূল বিষয়: ⭐⭐ discriminated union, type narrowing, conditional logic
*/
