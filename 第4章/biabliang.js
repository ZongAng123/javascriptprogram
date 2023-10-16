// 第4章 变量、作用域与内存
// 4.1 原始值与引用值
/*
ES变量可以包含两种不同类型的数据:原始值与引用值
1、原始值就是简单的数据，引用值则是由多个值构成的对象。

*/ 

// 4.1.1 动态属性
/*
原始值和引用值的定义方式很类似，都是创建一个变量，然后给它赋一个值。
不过，在变量保存了这个值之后，可以对这个值做什么，则大有不同。
对于引用值而言，可以随时添加、修改和删除其属性和方法。
*/ 
let person = new Object();
person.name = "张麻子";
console.log(person.name);

// 4.1.2 复制值
/*
除了存储方式不同，原始值和引用值在通过变量复制时也有所不同。
在通过变量把一个原始值赋值到另一个变量时，原始值就会被复制到新变量的位置。
*/ 

let numl = 5;
let gh = numl;
console.log(gh);

// 4.1.3 传递参数

function addTen(num){
	num += 10;
	return num;
}
let count = 20;
let result = addTen(count);
console.log(count);//20没有变化
console.log(result);//30
