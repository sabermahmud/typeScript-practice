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
const canEdit = (role) => {
    if (role === "admin" || role === "editor") {
        return true;
    }
    return false;
};
console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));
console.log(canEdit("guest"));
/*
Problem 7 — findProducts
👉 Product array থেকে নির্দিষ্ট category-এর products filter করবে।
যেমন:
findProducts(products, "phone")
শুধু phone products return করবে।
কিছু না পেলে:[]
মূল বিষয়: typed array, object type, filter()
*/
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
