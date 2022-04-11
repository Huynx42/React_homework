// Cách 1
// let sayHello = function (name) {
//     console.log("Xin chào! Tên tôi là " + name);
// }
// Cách 2 sử dụng arrow function
let sayHello = name => `Xin Chao, Tên tôi la , ${name}`;

module.exports = {
    sayHello : sayHello
}