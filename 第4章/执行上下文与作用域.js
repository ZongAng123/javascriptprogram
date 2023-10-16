// 4.2 执行上下文与作用域
/*
执行上下文概念在JS中颇为重要的。
变量或函数的上下文决定了它们可以访问哪些数据，以及它们的行为。
*/ 

/*
代码执行时的标识符解析是通过沿作用域链接逐级搜索标识符名称完成的。
*/ 

var color = "blue";

function changeColor(){
	if (color === "blue") {
		color = "red";
	} else{
		color = "blue";
	}
}
changeColor();
console.log(color);
/*
函数changeColor()的作用域链包含两个对象:
一个是它自己的变量对象(就是定义arguments对象的那个)，
另一个是全局上下文的变量对象。
这个函数内部之所以能够访问变量color，就是因为可以在作用域链接中找到它。
*/ 

/*
此外，局部作用域中定义的变量可用于在局部上下文中替换全局变量。
*/ 
var colorjk = "yellow";

function changeColors(){
	let anotherColor = "pink";

	function swapColors(){
		let tempColor = anotherColor;
		anotherColor = colorjk;
		colorjk = tempColor;
		// 这里可以访问colorjk，anotherColor和tempColor
	}
	// 这里可以访问colorjk，anotherColor，但访问不到tempColor
	swapColors();
}
// 这里只能访问colorjk
changeColors();
console.log(colorjk);