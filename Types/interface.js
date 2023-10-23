// type Point = {
//   x: number;
//   y: number;
// };
var pt = { x: 50, y: 60 };
var thomas = {
    id: 5,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: function () {
        return "Hi";
    },
};
thomas.first = "Chad";
var shoes = {
    name: "Adidas Allstar",
    price: 100,
    applyDicount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shoes.applyDicount(0.4));
