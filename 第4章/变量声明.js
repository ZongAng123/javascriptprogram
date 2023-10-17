//4.2.2 变量声明

/*
ES6之后，JS的变量声明发生了变化。
ES6不仅增加了let和const两个关键字，而且还让这两个关键字压倒性的超越var称为首选。
*/  

// 1、使用var的函数作用域声明
function add(num1,num2){
    // var sum = num1 + num2;
    sum = num1 + num2;
    return sum;
}
let result = add(10,20);//30
console.log(sum);//会报错，sum这里不是有效变量[Uncaught ReferenceError: sum is not defined]

/*
var声明会被拿到函数或全局作用域的顶部，位于作用域中所有代码之前。这个现象叫做"提升"(hoisting)。
*/ 

console.log(name);
var name = "Jake";

// 等价于
// name = "liming";
// var name;

//下面是两个等价的函数
function fn1(){
    console.log(name1);
    var name1 = "jake";
}

// 等价于
function fn2(){
    var name2;
    name2 = "jake";
}

// 2、使用let的块级作用域声明
/*
ES6新增的let关键字跟var很相似，但它的作用域是块级的。这也是JS中的新概念。
块级作用域由最近的一队花括号{}界定。换句话说，if块、while块、function块，甚至连单独的块也是let声明变量的作用域。
*/ 

// if (true) {
//     let a;
// }
// console.log(a);//ReferenceError：a 没有被定义

/*
let的行为非常适合在循环中声明迭代变量。
使用var声明的迭代变量会泄漏到循环外部，这种情况应该避免。
*/ 
for(var i = 0; i < 10; i++){}
console.log(i);//10

// for(let j = 0; j < 10; j++){}
// console.log(j);//ReferenceError: j is not defined

