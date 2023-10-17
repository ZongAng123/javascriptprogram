// 6.2 Array 
/*
除了Object，Array应该是ES中最常用的类型了。
ES数组也是一组有序的数组，但跟其他语言不同的是，数组中每个槽位可以存储任意类型的数据
*/ 

//6.2.1 创建数组
// 有幾種基本方式可以創建數組。一種是使用Array構造函數，比如:

let colors = new Array();

/*
如果知道這個數組中元素的數量，那么可以给构造函数传入一个数值，然后length属性就会被自动创建并设置这个值。
*/ 
let colors1 = new Array(20);
console.log(colors1);

// 也可以给Array构造函数传入要保存的元素。
let colors2 = new Array("red","blue","green");
console.log(colors2);

/*
创建数组时可以给构造函数传一个值，这时候就有点问题了，因为如果这个值是数值，则会创建一个长度为指定数值的数组；
而如果这个值是其他类型的，则会创建一个只包含该特定值的数组。
*/ 

// 也可以给Array构造函数传入要保存的元素。
let colors3 = new Array(3); //创建一个包含三个元素的数组
let name = new Array("Greg");//创建一个包含一个元素，即字符串Greg的数组
// 在使用Array构造函数时，也可以省略new操作符。结果都是一样的

/*
另一种创建数组的方式就是使用数组字面量表示法。数组字面量是在中括号中包含以逗号分隔的元素列表。
*/ 
let  colors4 = ["red","blue","green"];
let names = [];
let values = [1,2,];
/*
与对象一样，在使用数组字面量表示法创建数组不会掉用Array构造函数
*/ 

/*
Array构造函数还有两个ES6新增的用于创建数组的静态方法:from()和of()。
from()用于将类数组结构转换为数组实例，而of()用于将一组参数转换为数组实例
*/ 

// 字符串会被拆分为单个字符数组
console.log(Array.from("Zong"));
console.log(Array.from("张麻子"))

// 可以使用from()将集合和映射转换为一个新数组
const m = new Map().set(1,2).set(3,4);
const s = new Set().add(1).add(2).add(3).add(4);
console.log(m);
console.log(s);
console.log(Array.from(m));//[Array(2), Array(2)]
console.log(Array.from(s));//[1, 2, 3, 4]

// Array.from()对现有数组执行浅复制
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);

console.log("对现有数组执行浅复制",a1);
// alert(a1 === a2); //false


