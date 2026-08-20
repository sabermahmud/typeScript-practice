// console.log("connected");

// // class Student {
// //     name: string 
// //     email: string 
// //     age: number
// //     marks: number 

// //     // constructor -----> special method
// //     constructor(name: string ,email: string , age: number, marks: number ){

// //         this.name = name;
// //         this.email = email;
// //         this.age = age;
// //         this.marks = marks;
// //     }
// // }
// // // instantiate
// // // instance
// // const rafi = new Student("rafi", "rafi@gmail.com", 16, 100);
// // const sadiya =  new Student("sadiya", "sadiya@gmail.com", 14, 90);
// // console.log(rafi, sadiya);

// class Product {
//     name: string;
//     brand: string;
//     price: number;
//     condition: string;
//     stockAmount: number;
//     isAvailable: boolean;

//     constructor(
//         name: string,
//         brand: string,
//         price: number,
//         condition: string,
//         stockAmount: number,
//         isAvailable: boolean
//     ) {
//         this.name = name;
//         this.brand = brand;
//         this.price = price;
//         this.condition = condition;
//         this.stockAmount = stockAmount;
//         this.isAvailable = isAvailable;
//     }
//     getInfo() {
//         const info = `Name: ${this.name} Brand: ${this.brand}`;
//         return info
//     }
//     giveDiscount(){
//         const discounted = this.price - 50;
//         return discounted
//     }
// }
// const myPhone = new Product("S25", "Samsung", 1700, "used", 1, true);
// console.log(myPhone)
// console.log(myPhone.giveDiscount())



class BkashAcc {
    bkashNumber:number;
    bkashPin:number;
    bkashBalance: number;
    bkashUser: string;

    constructor(    bkashNumber:number,
    bkashPin:number,
    bkashBalance: number,
    bkashUser: string){

        this.bkashNumber = bkashNumber;
        this.bkashPin = bkashPin;
        this.bkashBalance = bkashBalance;
        this.bkashUser = bkashUser
    }
    getInfo(){
        return this.bkashBalance
    }
    giveProfit(){
      const profitMargin =  (this.bkashBalance / 100) * 7;
      return this.bkashBalance + profitMargin 
    }
}

 const acc1Info = new BkashAcc (8801606093319, 91196, 1200, "Saber")

 const acc2Info = new BkashAcc (8801404599090, 12345, 1300, "Tamanna")

 console.log("first account info:",acc1Info,"second account info:", acc2Info,"first account balance:", acc1Info.getInfo(), "second account balance:",acc2Info.getInfo(),"after given profit to acc1:", acc1Info.giveProfit(),"after given profit to acc2:", acc2Info.giveProfit() );

