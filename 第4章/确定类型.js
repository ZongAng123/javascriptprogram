// 4.1.4 确定类型
/*
前一章提到的typeof操作符最适合用来判断一个变量是否为原始类型。更确切的说，
它是判断一个变量是否为字符串、数值、布尔值或undefined的最好方式。如果值是对象或null,那么
typeof返回"object"，如下面的例子所示：
*/ 
let a = "丹泽尔华盛顿"
let b = true;
let i = 22;
let u;
let n = null;
let o = new Object();
console.log(typeof a);//string
console.log(typeof b);//boolean
console.log(typeof i);//number
console.log(typeof u);//undefined
console.log(typeof n);//object
console.log(typeof o);//object

/*
typeof虽然对原始值很有用，但它对引用值的用处不大。
我们通常不关心一个值是不是对象，而是想知道它是什么类型的对象。
为了解决这个问题，ES提供了instanceof操作符。
*/ 

console.log(a instanceof Object);