console.log("connected")
/**
1️⃣ Basic Type Annotation
তিনটা variable তৈরি করো:
name → string
age → number
isStudent → boolean
তারপর তিনটাকে console.log() করো।
*/
const userName:string = "MD SABER MAHMUD";
const age:number = 30;
const isStudent:boolean = true;
// console.log(userName, age, isStudent)
/*
2️⃣ Array Type
একটা numbers array তৈরি করো যেখানে শুধু number থাকবে:
10, 20, 30, 40, 50
তারপর array-এর সবগুলো number-এর যোগফল বের করো।

*/
const numbers:number[]=[10, 20, 30, 40, 50]
const total:number =numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})
console.log(total)
/*
3️⃣ String Array
একটা skills array তৈরি করো:
JavaScript
TypeScript
React
Node.js
MongoDB
তারপর loop ব্যবহার করে প্রত্যেকটা skill আলাদা আলাদাভাবে console-এ print করো।
*/



/*
4️⃣ Object Type
একজন user-এর জন্য একটি User type তৈরি করো।
তার properties:
name → string
age → number
email → string
isDeveloper → boolean
তারপর User type ব্যবহার করে একটি object তৈরি করো।
*/

/*
5️⃣ Object Array
Product নামে একটি type তৈরি করো:
name → string
price → number
category → string
তারপর ৩টা product-এর array তৈরি করো।
Example:
Laptop
Phone
Keyboard
তারপর সব product-এর নাম print করো।
*/

/*
6️⃣ Function Parameter Type
একটা function বানাও:
greetUser()
যেটা একটি name: string নেবে এবং return করবে:
Hello, Saber!
অর্থাৎ function-এর parameter-এর type অবশ্যই define করতে হবে।
*/

/*
7️⃣ Function Return Type
একটা function বানাও:
calculateAge()
যেটা birthYear: number নেবে এবং বর্তমান বছর থেকে বয়স calculate করে number return করবে।
Example:
calculateAge(1996)
Output:30
এখানে return type explicitly number declare করার চেষ্টা করবে।
*/

/*
8️⃣ Array + Function 🔥
একটা function বানাও:
getTotal()
যেটা number[] নেবে এবং সব number-এর যোগফল return করবে।
Example: getTotal([10, 20, 30, 40])
Expected: 100
Function-এর parameter এবং return—দুটোর type define করবে।
*/

/*
9️⃣ Object + Function 🔥🔥
Student নামে একটি type বানাও:
name → string
age → number
marks → number
তারপর এমন একটা function তৈরি করো:
getResult(student)
যদি marks 40 বা তার বেশি হয়:
Pass
নাহলে:
Fail
Example:
getResult({
  name: "Saber",
  age: 30,
  marks: 85
})
Output:
Pass
*/


/*
🔟 Real-world Challenge 🚀
এবার একটু serious TypeScript practice।
Phone নামে একটি type তৈরি করো:
name → string
brand → string
price → number
ram → number
storage → number
তারপর ৫টা phone-এর array তৈরি করো।
Example:
Samsung
iPhone
Xiaomi
OnePlus
Realme
তারপর একটি function তৈরি করো:
getHighestRamPhone()
যেটা phone array নিয়ে সবচেয়ে বেশি RAM-এর phone-এর পুরো object return করবে।
Example output:
{
  name: "Galaxy S25",
  brand: "Samsung",
  price: 3500,
  ram: 12,
  storage: 256
}
 */







export {};