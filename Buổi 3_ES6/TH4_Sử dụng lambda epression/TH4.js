const checkMauGiao = require("./checkMauGiao");
const checkTieuHoc = require("./checkTieuHoc");

let kids = [
    {id: 1, name: "a", age: 3},
    {id: 2, name: "b", age: 2},
    {id: 3, name: "c", age: 7},
    {id: 4, name: "d", age: 4},
    {id: 5, name: "e", age: 8}
];
console.log(`Kiem tra hoc sinh Mau Giao`);
checkMauGiao.checkMG(kids);
console.log(`Kiem tra hoc sinh Tieu Hoc`);
checkTieuHoc.checkTH(kids);