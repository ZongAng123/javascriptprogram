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


