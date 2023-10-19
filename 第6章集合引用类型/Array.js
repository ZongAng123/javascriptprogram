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

// 6.2.2 数组空位
/*
使用数组字面量出实话数组时，可以使用一串逗号来创建空位。
*/ 

const options = [,,,,,];//创建包含5个元素的数组
console.log(options.length);//5
console.log(options);// [空属性 × 5]

/*
ES6新增的方法和迭代器与早期ES版本中存在的方法行为不同。ES6新增方法普遍将这些空位当成存在的元素，只过不为undefine
*/ 

const optionsss = [1,,,,5];

for(const option of optionsss){
    console.log(option === undefined);
}


// 6.2.3 数组索引
/*
要取得或设置索引的值，需要使用中括号并提供相应的数字索引，如下所示
*/ 
let colors5 =["红色","蓝色","绿色"];//定义一个字符串数组
console.log(colors5[0]);
colors5[2] = "黑色";
colors5[3] = "苹果红";
console.log(colors5);

// 6.2.4 检测数据
/*
一个经典的ES问题是判断一个对象是不是数组。
在只有一个网页(因而只有一个全局作用域)的情况下，使用instanceof操作符足矣
*/ 

if (value instanceof Array) {
    // 操作数组
}
/*
使用instanceof的问题是假定只有一个全局执行上下文。
如果网页里有多个框架，则可能涉及两个不同的全局执行上下文，因此就会有两个不同版本的Array构造函数。
如果要把数组从一个框架传给另一个框架，则这个数组的构造函数将有别于在第二个框架内本地创建的数组。
*/ 

// 为了解决这个问题，ES提供了Array.isArray()方法

if (Array.isArray(value)) {
    // 操作数组
}