var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("connected");
var userInfo = {
    name: "Saber",
    age: 30,
    email: "sabermahmud01@gmail.com",
    isDeveloper: true
};
console.log(userInfo);
var car = {
    brand: "Toyota",
    model: "Yeris",
    year: 2026,
    price: 45000
};
console.log(car);
var student = {
    name: "Khalid",
    age: 25,
    department: "CSE",
    isPassed: true
};
console.log(student);
var user = {
    name: "Samir",
    age: 22,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
console.log(user);
var product = {
    name: "Mouse",
    price: 300,
    category: "Accessories",
    inStock: true,
    quantity: 3
};
var getProduct = function (productInfo) {
    var _a = __assign({}, productInfo), name = _a.name, price = _a.price, category = _a.category, inStock = _a.inStock, quantity = _a.quantity;
    return "name:".concat(name, ",\n            price:").concat(price, ",\n            category: ").concat(category, ",\n            stock:").concat(inStock, ",\n            quantity: ").concat(quantity, " ");
};
console.log(getProduct(product));
/*

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
