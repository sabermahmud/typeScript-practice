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
const getPatientStatus = (patient) => {
    if (patient.type === "general") {
        return "general Patient";
    }
    else if (patient.type === "emergency") {
        if (patient.emergencyLevel === 1) {
            return "Critical Patient";
        }
        else if (patient.emergencyLevel === 2) {
            return " Serious Patient";
        }
    }
    return "Moderate Patient";
};
console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
console.log(getPatientStatus({
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 3,
}));
/*
Problem 9 — processTransaction
👉 Bank balance-এর উপর transaction চালাবে।
"deposit" → টাকা যোগ
"withdraw" → টাকা বাদ
balance-এর চেয়ে বেশি withdraw → balance অপরিবর্তিত
মূল বিষয়: ⭐⭐ discriminated union, type narrowing, conditional logic
*/
