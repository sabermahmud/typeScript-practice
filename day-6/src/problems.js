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
/*
Problem 2 — getStockStatus
👉 Stock quantity অনুযায়ী status return করবে।
0 → "Out of Stock"
1–5 → "Almost Sold Out"
6–20 → "Available"
21+ → "In Stock"
মূল বিষয়: number → string, boundary condition, if/else
*/
const getStockStatus = (stock) => {
    if (stock <= 0) {
        return "Out of Stock";
    }
    else if (stock <= 5) {
        return "Almost Sold Out";
    }
    else if (stock <= 20) {
        return "Available";
    }
    else {
        return "In Stock";
    }
};
console.log(getStockStatus(120));
/*
Problem 3 — formatUserProfile
👉 একটি User object নিয়ে সুন্দর sentence বানাবে।
User:
{
  name: string;
  age: number;
  city: string;
}
Output:
"Fahim is 22 years old and lives in Dhaka."
মূল বিষয়: type/interface, object typing, template literal
*/
/*
Problem 4 — calculateCartTotal
👉 Product-এর array থেকে সব price যোগ করবে।
Product[]
প্রতিটি product:
{
  name: string;
  price: number;
}
মূল বিষয়: object type, array type, reduce()
*/
/*
Problem 5 — getStudentResult
👉 Student-এর marks থেকে:
Average বের করবে
average >= 40 হলে "Passed"
না হলে "Failed"
Name + average + result return করবে
মূল বিষয়: object, number[], reduce(), conditional logic, return object
⚠️ Empty marks array কী করবে সেটাও ভাবতে হবে।
*/
/*
Problem 6 — canEdit
👉 User-এর role অনুযায়ী edit permission দেবে।
"admin" | "editor" | "viewer"
admin → true
editor → true
viewer → false
"guest" দিলে TypeScript error হবে।
মূল বিষয়: ⭐ union type, literal type, type safety
*/
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
