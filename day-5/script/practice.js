console.log("connected");
/*
1️⃣ Variable — ৫টি Practice
Practice 1
একটি name variable তৈরি করো যার type হবে string এবং value হবে তোমার নাম।
*/
// let name:string = "Saber";
// console.log(name)
/*
Practice 2
একটি age variable তৈরি করো যার type হবে number।
*/
// let age:number = 30;
// console.log(age);
/*
Practice 3
একটি isStudent variable তৈরি করো যার type হবে boolean।
*/
// let isStudent:boolean = true;
// console.log(isStudent)
/*
Practice 4
একটি salary variable তৈরি করো যার type হবে number এবং পরে তার value পরিবর্তন করো।
*/
// let salary:number = 1500;
//  salary = 1700;
//  console.log(salary)
/*
Practice 5 ⭐
একটি country variable তৈরি করো। Type explicitly string declare করো এবং পরে ভুল করে number assign করার চেষ্টা করো। TypeScript কী error দেয় সেটা দেখো।
*/
// let country:string = "Bangladesh";
// country = 123;
// console.log(country)
/*


//--------------------------------------------------



2️⃣ Array — ৫টি Practice
Practice 1
শুধু string রাখবে এমন একটি array তৈরি করো:
["HTML", "CSS", "JavaScript", ...]
কমপক্ষে ৫টি technology রাখো।
*/
// const courses: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
// console.log(courses);
/*
Practice 2
শুধু number রাখবে এমন একটি array তৈরি করো এবং ৫টি সংখ্যা রাখো।
*/
// const numbers: number[] = [23, 52, 36, 98, 62];
// console.log(numbers);
/*
Practice 3
একটি boolean[] array তৈরি করো যেখানে ৫টি boolean value থাকবে।
*/
// const conditions: boolean[] = [true, false, true, true, false];
// console.log(conditions);
/*
Practice 4
একটি Product object-এর array তৈরি করো। প্রতিটি product-এর থাকবে:
name
price
category
কমপক্ষে ৩টি product রাখো।
*/
// const products: object[] = [
//     {
//         name: "laptop",
//         price: 2000,
//         category: "computer"
//     },
//     {
//         name: "Monitor",
//         price: 400,
//         category: "computer-accessories"
//     },
//     {
//         name: "Mouse",
//         price: 250,
//         category: "computer-accessories"
//     },
//     {
//         name: "Ram 16gb",
//         price: 360,
//         category: "computer-accessories"
//     }
// ]
// console.log(products)
/*
Practice 5 ⭐
একটি array তৈরি করো যেখানে একই সাথে string এবং number রাখা যাবে।
উদাহরণ:
["Saber", 30, "Saudi Arabia", 1700]
*/
// const user: (string | number)[] = ["Saber", 30, "Saudi Arabia", 1700];
// console.log(user)
/*


//--------------------------------------------------




3️⃣ Function — ৫টি Practice
Practice 1
একটি function তৈরি করো যেটা দুইটি number গ্রহণ করে তাদের যোগফল return করবে।
*/
var getSum = function (a, b) {
    var sum = a + b;
    return sum;
};
console.log(getSum(2, 5));
/*
Practice 2
একটি function তৈরি করো যেটা একজন মানুষের name গ্রহণ করে এবং একটি greeting string return করবে।
*/
var getGreeting = function (person) {
    return "Hello ".concat(person);
};
console.log(getGreeting("Khalid"));
/*


Practice 3
একটি function তৈরি করো যেটা একটি number গ্রহণ করবে এবং number-টি even নাকি odd সেটা return করবে।
*/
var checkEvenOrOdd = function (number) {
    if (number % 2 === 0) {
        return "".concat(number, " is even");
    }
    else {
        return "".concat(number, " is odd");
    }
};
console.log(checkEvenOrOdd(29));
/*
Practice 4
একটি function তৈরি করো যেখানে:
name: string
age: number
parameter থাকবে এবং void return করবে।
*/
var userInfo = function (name, age) {
    console.log(name + " " + age);
};
userInfo("Saber", 30);
/*
Practice 5 ⭐
একটি function তৈরি করো যেটা একটি number[] গ্রহণ করবে এবং array-এর সব সংখ্যার যোগফল return করবে।
*/
var getSumOfAll = function (numbers) {
    var total = numbers.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    return total;
};
console.log(getSumOfAll([20, 30, 56, 90, 10]));
/*


//--------------------------------------------------



4️⃣ Object — ৫টি Practice
Practice 1

একজন user-এর object তৈরি করো:

name
age
email
isDeveloper

প্রতিটির সঠিক Type দাও।

Practice 2

একটি Car object তৈরি করো:

brand
model
year
price
Practice 3

একটি Student object তৈরি করো:

name
age
department
isPassed
Practice 4

একটি nested object তৈরি করো:

user
 ├── name
 ├── age
 └── address
      ├── city
      └── country

প্রতিটি property-এর type declare করো।

Practice 5 ⭐

একটি Product object তৈরি করো যেখানে থাকবে:

name
price
category
inStock
quantity

তারপর একটি function তৈরি করো যেটা product object গ্রহণ করবে।



//--------------------------------------------------




5️⃣ Union, Null & Unknown — ৫টি Practice
Practice 1 — Union

একটি id variable তৈরি করো যেটা string অথবা number হতে পারবে।

Practice 2 — Union

একটি status variable তৈরি করো যেটার value শুধুমাত্র হতে পারবে:

"success"
"error"
"loading"
Practice 3 — Null

একটি variable তৈরি করো যেটার value string অথবা null হতে পারবে।

প্রথমে null assign করো, পরে একটি string assign করো।

Practice 4 — Unknown

একটি unknown variable তৈরি করো।

তার মধ্যে প্রথমে string এবং পরে number রাখো।

তারপর সরাসরি সেটাকে string হিসেবে ব্যবহার করলে কী error হয় দেখো।

Practice 5 ⭐

একটি function তৈরি করো যার parameter হবে unknown।

Function-এর ভিতরে check করো:

যদি string হয় → string-এর .toUpperCase() ব্যবহার করবে
যদি number হয় → number × 2 করবে
অন্য কিছু হলে → "Unknown type" return করবে



//--------------------------------------------------




6️⃣ Type Alias — ৫টি Practice
Practice 1

একটি User type তৈরি করো:

name
age
email

তারপর সেই type ব্যবহার করে একটি user object তৈরি করো।

Practice 2

একটি Product type তৈরি করো:

name
price
category

তারপর ৩টি product তৈরি করো।

Practice 3

একটি Student type তৈরি করো:

name
age
department
isPassed

তারপর একটি Student[] তৈরি করো।

Practice 4 ⭐

একটি Address type তৈরি করো:

city
country
postalCode

তারপর User type-এর ভিতরে address: Address ব্যবহার করো।

Practice 5 ⭐⭐

একটি Order type তৈরি করো যেখানে থাকবে:

orderId
customerName
products
totalPrice
status

status শুধুমাত্র "pending" | "shipped" | "delivered" হতে পারবে।



//--------------------------------------------------




7️⃣ Interface — ৫টি Practice
Practice 1

User নামে একটি interface তৈরি করো:

name
age
email

তারপর object তৈরি করো।

Practice 2

Car নামে interface তৈরি করো:

brand
model
year

তারপর ২টি car object তৈরি করো।

Practice 3

Product interface তৈরি করো:

name
price
category

তারপর Product[] তৈরি করো।

Practice 4 ⭐

Employee interface তৈরি করো:

id
name
salary
department

তারপর ৩ জন employee-এর array তৈরি করো।

Practice 5 ⭐⭐

দুটি interface তৈরি করো:

Person
Employee

Employee interface যেন Person থেকে properties inherit করে।

তারপর employee object তৈরি করো।



//--------------------------------------------------




8️⃣ Generics — ৫টি Practice

এখানে একটু মাথা খাটাতে হবে। 😄

Practice 1

একটি generic function তৈরি করো:

identity()

যেটা যেকোনো type গ্রহণ করবে এবং একই type return করবে।

যেমন:

identity("Saber")
identity(30)
identity(true)
Practice 2

একটি generic function তৈরি করো যেটা একটি array গ্রহণ করবে এবং array-এর প্রথম element return করবে।

এটি যেন string[], number[], দুটোতেই কাজ করে।

Practice 3

একটি generic function তৈরি করো:

getLength()

যেটা এমন value গ্রহণ করবে যার .length property আছে এবং length return করবে।

Practice 4 ⭐

একটি generic Box<T> type তৈরি করো।

যেমন:

Box<string>
Box<number>
Box<boolean>

প্রতিটির ভিতরে একটি value property থাকবে।

Practice 5 ⭐⭐

একটি generic function তৈরি করো যেটা:

key
object

দুটো গ্রহণ করবে এবং object-এর ওই key-এর value return করবে।

TypeScript-এর generic constraint ব্যবহার করার চেষ্টা করো।



//--------------------------------------------------




9️⃣ Type Assertion — ৫টি Practice
Practice 1

একটি unknown variable তৈরি করো:

let value: unknown = "Hello TypeScript";

Type assertion ব্যবহার করে এটাকে string হিসেবে ব্যবহার করো।

Practice 2

একটি unknown value-কে number হিসেবে assert করো এবং তার সাথে 10 যোগ করো।

Practice 3

একটি HTML element select করো এবং Type Assertion ব্যবহার করে সেটাকে HTMLInputElement হিসেবে ধরো।

তারপর তার .value access করো।

Practice 4 ⭐

একটি function তৈরি করো যেটা unknown return করে।

তারপর type assertion ব্যবহার করে returned value-কে string হিসেবে ব্যবহার করো।

Practice 5 ⭐⭐

একটি object unknown হিসেবে রাখো:

{
  name: "Saber",
  age: 30
}

Type Assertion ব্যবহার করে এটাকে একটি নির্দিষ্ট object type হিসেবে ধরো এবং name ও age access করো।

*/ 
