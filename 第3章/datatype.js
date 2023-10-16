// 3.4 數據類型
/*
ECMAScript有6种简单数据类型[也称为原始类型]
"Undefined"表示值为定义
"Null"、
Boolean、
Number、
String、
"Symbol"表示值为符号
*/ 

// 使用typeof操作符的例子
let message = "some string";
console.log(typeof message);//string
console.log(typeof (message));//string
console.log(typeof 95);//number

// 3.4.2 Undefined类型
/*
Undefined类型只有一个值，就是特殊值Undefined。当使用var或let声明了变量但没有初始化时，就相当于给变量赋予了Undefined值。
*/ 

let jk;
console.log(jk == undefined);//true

