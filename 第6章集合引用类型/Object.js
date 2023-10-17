// 6.1 Object
/*
到目前为止，大多数引用值的示例使用的是Object类型。
*/ 

// 显式地创建Object实例有两种方式。第一种是使用new操作符和Object构造函数
let person = new Object();
person.name = "zongang";
person.age = 29;
console.log(person);

/*
另一种方式是使用对象字面量(object literal)表示法。
对象字面量是对象定义的简写形式，目的是为了简化包含大量属性的对象的创建。
*/ 

let person1 = {
    name:"中软国际",
    age:29
};
console.log(person1);

// 接下来指定了name属性，后跟一个冒号，然后是属性的值

let person2 = {
    "name":"李龙",
    "age":29,
    5:true
};
console.log(person2);
// 这个例子会得到一个带有属性name、age和5的对象。注意，属性值会自动转换为字符串

/*
当然也可以用对象字面量表示法来定义一个只有默认属性和方法的对象，只要使用一对大括号，中间留空就行了。
*/ 

let person3 = { }; //与new Object相同
person3.name = "纵昂";
person3.age = 29;
console.log(person3);


