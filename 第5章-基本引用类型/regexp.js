// 5.2 RegExp
/*
ES通过RegExp类型支持正则表达式。
正则表达式使用类似Perl的简洁语法来创建
let expression = /pattern/flags;
这个正则表达式的pattern(模式)可以是任何简单或复杂的正则表达式，包括字符类、限定符、分组、向前查找和反向引用。
每个正则表达式可以带零个或多个flag(标记)，用于控制正则表达式的行为。
*/ 

// 使用不同模式和标记可以创建出各种正则表达式

// 匹配字符串中的"at"
let pattern1 = /at/g;
console.log(pattern1);

// 匹配第一个"bat"或"cat"，忽略大小写
let pattern2 = /[bc]at/i;
console.log(pattern2);