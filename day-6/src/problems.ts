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
// const getStockStatus = (stock: number): string => {
//   if (stock <= 0) {
//     return "Out of Stock";
//   } else if (stock <= 5) {
//     return "Almost Sold Out";
//   } else if (stock <= 20) {
//     return "Available";
//   } else {
//     return "In Stock";
//   }
// };
// console.log(getStockStatus(120));

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
// type User = {
//     name: string,
//     age: number,
//     city: string
// }

// const formatUserProfile = (user: User): string => {
//   return `${user.name} is ${user.age} years old and lives in ${user.city}.`
// };
// console.log(formatUserProfile({
//     name:"Fahim",
//     age: 22,
//     city:"Dhaka"
// }));

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
// interface Product {
//     name: string;
//     price:number;
// }
// const calculateCartTotal = (products:Product[]):number => {
//     const total:number = products.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue.price;
//     },0 )

//  return total
// }
// console.log(calculateCartTotal([
//     { name: "Keyboard", price: 1500 },
//     { name: "Mouse", price: 800 },
//     { name: "USB Cable", price: 300 }
// ]
// ))
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
// type Student = {
//   name: string;
//   marks: number[];
// };
// const getStudentResult = (student: Student) => {
//   const totalMarks = student.marks.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   },0);

//   const averageMark = totalMarks / student.marks.length;

//   if(averageMark >= 40){
//     return{
//         name:student.name,
//         average: averageMark,
//         result: "Passed"
//     }
//   }
//   else{
//      return{
//         name:student.name,
//         average: averageMark,
//         result: "Failed"
//     }
//   }

// };
// console.log(
//   getStudentResult({
//     name: "Rafi",
//     marks: [80, 75, 90, 85],
//   }),
// );
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
// type Role = "admin" | "editor" | "viewer" ;
// const canEdit = (role: Role): boolean => {
//   if (role === "admin" || role === "editor") {
//     return true;
//   }
//   return false;
// };
// console.log(canEdit("admin"));
// console.log(canEdit("editor"));
// console.log(canEdit("viewer"));
// console.log(canEdit("guest"));
/*
Problem 7 — findProducts
👉 Product array থেকে নির্দিষ্ট category-এর products filter করবে।
যেমন:
findProducts(products, "phone")
শুধু phone products return করবে।
কিছু না পেলে:[]
মূল বিষয়: typed array, object type, filter()
*/
// type Product = {
//   name: string;
//   price: number;
//   category: string;
// };
// const findProducts = (products: Product[], category: string) => {
//   if (products.length <= 0) {
//     return [];
//   }
//   const filteredProducts = products.filter((product) => {
//     return product.category === category;
//   });

//   return filteredProducts;
// };
// console.log(
//   findProducts(
//     [
//       { name: "iPhone 15", price: 90000, category: "phone" },
//       { name: "Galaxy S24", price: 85000, category: "phone" },
//       { name: "MacBook Air", price: 120000, category: "laptop" },
//       { name: "Dell XPS", price: 110000, category: "laptop" },
//     ],
//     "phone",
//   ),
// );
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
// interface GeneralPatient {
//   name: string;
//   age: number;
//   type: "general" ;
// }

// interface EmergencyPatient {
//   name: string;
//   age: number;
//   type: "emergency" ;
//   emergencyLevel:1 | 2 | 3;
// }
// const getPatientStatus = (patient: GeneralPatient | EmergencyPatient):string => {
//   if (patient.type === "general" ) {
//     return "general Patient";
//   } else if (patient.type === "emergency") {
//     if (patient.emergencyLevel === 1) {
//       return "Critical Patient";
//     } else if (patient.emergencyLevel === 2) {
//       return " Serious Patient";
//     }
//   }
//   return "Moderate Patient";
// };
// console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
// console.log(
//   getPatientStatus({
//     name: "Karim",
//     age: 60,
//     type: "emergency",
//     emergencyLevel: 3,
//   }),
// );
/*
Problem 9 — processTransaction
👉 Bank balance-এর উপর transaction চালাবে।
"deposit" → টাকা যোগ
"withdraw" → টাকা বাদ
balance-এর চেয়ে বেশি withdraw → balance অপরিবর্তিত
মূল বিষয়: ⭐⭐ discriminated union, type narrowing, conditional logic
*/
type Transaction = {
  type: "deposit" | "withdraw";
  amount: number;
};

const processTransaction = (
  balance: number,
  transaction: Transaction,
) => {
if(transaction.type === "deposit"){
  return balance + transaction.amount
}
if (balance < transaction.amount){
  return "insufficient balance"
}

return balance - transaction.amount
};

console.log(processTransaction(5000, { type: "deposit", amount: 2000 }))
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }))
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }))