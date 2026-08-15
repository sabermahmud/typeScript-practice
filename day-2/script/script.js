console.log("connected");
/**
1️⃣ Basic Type Annotation
তিনটা variable তৈরি করো:
name → string
age → number
isStudent → boolean
তারপর তিনটাকে console.log() করো।
*/
const userName = "MD SABER MAHMUD";
const age = 30;
const isStudent = true;
// console.log(userName, age, isStudent)
/*
2️⃣ Array Type
একটা numbers array তৈরি করো যেখানে শুধু number থাকবে:
10, 20, 30, 40, 50
তারপর array-এর সবগুলো number-এর যোগফল বের করো।

*/
const numbers = [10, 20, 30, 40, 50];
const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(total);
// export {};
