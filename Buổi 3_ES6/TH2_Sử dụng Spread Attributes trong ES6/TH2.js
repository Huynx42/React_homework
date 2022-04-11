// Bài 1: Đếm số ký tự của một chuỗi: “lazy dog jumps over brown fox”
let str = "lazy dog jumps over brown fox";
console.log(`"Bai 1",${str.length}`);

//Bài 2: Nối 2 mảng dữ liệu thành mảng mới.
let blog1Subscribers = ['billy@example.com', 'sally@gmail.com'];
let blog2Subscribers = ['timmy@gmail.com', 'tammy@example.com', 'tommy@gmail.com'];
let allBlog = [...blog1Subscribers,...blog2Subscribers];
console.log("bai 2 :" + allBlog);

// Bài 3: Copy 2 mảng dữ liệu
let students = ['John', 'Sofia', 'Bob'];
let copy_students = students;
console.log("Bai 3: " + copy_students);
students.push('Sally','Tony'); // Change students
console.log(students);