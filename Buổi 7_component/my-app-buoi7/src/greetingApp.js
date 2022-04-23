// Cách 1
//Khai báo component Viết hoa chữ cái đầu
// const SayHello = (props) => {
//     //props ở đây trả về 1 Object, hay react element
//     return (<h1>Hello {props.value} - {props.age}</h1>)
// }

//Cách 2
//Khai báo trực tiếp biến, dùng {} để khai báo thuộc tính component
const SayHello = ({value,age}) => {
    //props ở đây trả về 1 Object, hay react element
    return (<h1>Hello {value} - {age} - greetingApp</h1>)
}

export default SayHello;