// 4.2.1 作用域链增强
/*
虽然执行上下文主要有全局上下文和函数上下文两种，但有其他方式增强作用域链。
某些语句会导致在作用域链前端临时添加一个上下文，这个上下文在代码执行后会被删除。
通常两种情况下会出现这个现象，即代码执行到下面任意一种情况时
1、try/catch语句的catch块
2、with语句
*/ 

function buildUrl(){//buildUrl()函数中定义了一个变量qs。当with语句中的代码引用变量href时，实际上引用的是location.href,也就是自己对象属性
    let qs = "?debug=true";

    with(location){//这里，with将location对象作为上下文，因此location会被添加到作用域链前端
        let url = href + qs;
    }
    return url;
}

