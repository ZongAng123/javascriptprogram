/*
第5章 基本引用类型
引用值(或者对象)是某个特定引用类型的实例。
引用类型是把数据和功能组织到一起的结构，经常被人错误的称作“类”。
引用类型有时候也被称为对象定义，因为它们描述了自己的对象应有的属性和方法
引用类型虽然有点像类，但跟类并不是一个概念。
*/ 

/*
对象被认为时某个特定引用类型的实例。
新对象通过使用new操作符跟后跟一个构造函数来创建。
构造函数就是用来创建新对象的函数
*/ 
let now = new Date();
// console.log(now);
/*
这行代码创建了引用类型Date的一个新实例，并将它保存在now中。
Date()这里就是构造函数,它负责创建一个只有默认属性和方法的简单对象
*/ 

// 5.1 Date
/*
ES的Date类型参考了java早起版本中的java.util.Date。
*/ 
let someDate = new Date(Date.parse("May 23, 2019"));
// console.log(someDate);


// Date.UTC()方法也返回日期的毫秒表示，但使用的是跟Date.parse不同的信息来生成这个值。
let y2k = new Date(Date.UTC(2000,0));
console.log(y2k);
let allFives = new Date(Date.UTC(2005,4,5,17,55,55));
console.log(allFives);

/*
ES还提供了Date.now方法，返回表示方法执行时日期和时间的毫秒数。
*/ 
// 起始时间
let start = Date.now();
console.log(start);

// 5.1.1 继承的方法


let date1 = new Date(2019,0,1);
let date2 = new Date(2019,1,1);
console.log(date1);
console.log(date2);

console.log(date1 < date2);
console.log(date1 > date2);

