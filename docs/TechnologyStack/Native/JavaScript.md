---
title: JavaScript
---
# {{ $frontmatter.title }}
> 万物基于 JavaScript **[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)** <br />
> JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web 页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中。


## 数组
> [MDN 数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
### 添加
~~~javascript
Array.unshift('从头添加');
Array.push('从尾添加');
// 指定位置添加 一个或多个元素 => (目标索引， 删除多少个元素，添加的元素)
Array.splice(index,delNum,item1,item2,itemX);
~~~

### 删除
~~~javascript
Array.shift(); // 从头删除
Array.pop(); // 从尾删除
Array.splice(index, delNum); // 通过索引删除某几个元素
~~~

### 遍历
~~~javascript
/* Array 必须是个数组 否则会报错 */
// forEach
Array.forEach((item, index) => {
    console.log(`第${index}个为：${item}`);
})
// for循环
for (let i = 0; i < Array.length; i++) {
    console.log(`第${i}个为：${Array[i]}`);
}
// for in循环 (超长数组 推荐使用)
for (let i in Array) {
    console.log(`第${i}个为：${Array[i]}`);
}

/* 带有筛选的遍历 */
// 判断一个数组内的所有元素是否都满足条件 返回true || false
Array.every(方法);
// 判断数组中是不是至少有 1 个元素满足条件 => 空数组始终返回 false
Array.some(方法);
// 过滤所有满足条件的元素 并返回在一个新的数组里
Array.filter(方法);
~~~

### 方法
> [MDN 原型Prototype](https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript/Reference/Global_Objects/Array/prototype) || 
> [示例](../../Instance/Native/JavaScript/Array)
~~~javascript
// 在浏览器控制台打印可以看到数组的方法;也可以向所有数组添加自定义方法或属性
Array.prototype;
// 查询其索引(对象也可以) => 返回 字符串数组，会自动排序
Object.keys(Array);
// 返回一个新的Array Iterator对象，该对象包含了数组中的每个元素
Array.values();
// 根据指定字符串内容进行切割成数组
Array.split('匹配的部分(必填，可用正则)', '匹配多少个(数字，选填)');
// 通过连接数组中的所有元素来创建并返回一个新字符串,用逗号或指定的分隔符字符串分隔
Array.join(分割的元素(默认,));
// 判断 传入的值 是否是数组 => 此处的Array 是默认的
Array.isArray(arr);
// 返回一个新的Array 从已有的数组中返回选定的元素
Array.slice(start,end);
// 数组中每个元素执行一个由您提供的reducer函数（升序执行），将其结果汇总为单个返回值
Array.reduce(方法);
// 接受函数作为累加器（累加器）和数组的每个值（从右到左）将其减少为单个值
Array.reduceRight(方法);
// 返回可以在数组中找到给定元素的第一个索引，如果不存在，则返回 -1
Array.indexOf(匹配的值);
// 返回数组中满足满足条件的第一个元素的元素 找不到返回 undefined
Array.find(方法);
// 返回数组中满足满足条件的第一个元素的索引 找不到返回 -1
Array.findIndex(方法);
// 创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值
Array.map(方法);
// 用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
Array.concat(arr1,arr2,arrX);
// 从指定位置到指定位置 替换成 指定值 （默认从0 开始 到 最后）
Array.fill(value, start[可选], end[可选]);
// 创建一个新数组，其中所有子数组元素以递归方式连接到指定深度 => 多维转换
Array.flat(depth[可选]);
// 返回新数组，该数组是满足条件的每个元素，然后将结果展平一级而形成的
Array.flatMap(方法);
// 确定数组是否在其条目中包含某个值，返回 true || false
Array.includes(匹配的值);
// 将参数 合并成一个数组
Array.of(元素, 元素, 元素X);
// 将数组反转 => 此处的Array 是默认的
Array.reverse(arr);
// 数组排序 => 默认方法为 将元素转为字符串 再通过UTF-16排序
Array.sort(方法);
~~~


## 对象
> [MDN对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects)

### 定义一个对象
~~~javascript
let obj = { a: 1, b: 2 };
obj.c = 3; // 添加 c
obj.a = 11; // 修改 a 的值

let propertyName = 'e';
obj[propertyName] = 4; // 变量的形式添加 一个新属性

// obj => { a: 11, b: 2, c: 3, e: 4 }
~~~

### getters & setters
~~~javascript
let obj = {
    a: 1,
    get b() {
        return this.a + 1;
    },
    set c(params) {
        this.a = params / 2;
    }
};
obj.a; // => 1;
obj.b; // => 2;
obj.c = 12;
obj.a; // => 6
~~~

### 删除属性
~~~javascript
let obj = { a: 1, b: 2 };
delete obj.a;
obj // => { b: 2 }
~~~

### 遍历
~~~javascript
let obj = { a: 1, b: 2, c: 3, e: 4 };

/* 1: for循环 */
for(let i in obj) {
    console.log(`变量名${i}: ${obj[i]}`);
};

/* 2: Object.key && Object.value */
Object.keys(obj); // 返回 元素数组 => [ "a", "b", "c", "e" ]
Object.values(obj); // 返回 值数组 => [ 1, 2, 3, 4 ]
~~~

### 方法
> [MDN-对象方法集合](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) ||
> [示例](../../Instance/Native/JavaScript/Object)

~~~javascript
/* 常用 */
Object.assign(对象, 要被合并的, '..'); // => 将其他对象的值合并到目标对象
Object.create(要继承的对象, 对新对象的初始化); // => 原型链 和 赋值
Object.getPrototypeOf(目标对象); // => 返回 目标对象的原型
Object.setPrototypeOf(目标对象, 对象的新原型[对象|null]); // => 设置 指定对象的原型

/* 不常用 */
Object.defineProperty(目标对象, 属性名, 值[描述]); // => 修改/添加当前对象属性
Object.defineProperty(目标对象, { 属性: 描述[可多个] }); // => 修改/添加当前对象多个属性
Object.entries(目标对象); // => 对象转为数组
Object.fromEntries(目标二维数组); // => 数组转为对象
Object.is(value1, value2); // => 比较两个值 是否相同[===的升级版]
Object.getOwnPropertyNames(目标对象); // => 返回 目标对象 所有属性[不包含Symbol]
// 返回描述信息
Object.getOwnPropertyDescriptor(目标对象, 属性名); // => 返回 目标对象指定属性的描述属性
Object.getOwnPropertyDescriptors(目标对象); // => 返回 目标对象所有属性的描述属性
// 防止对象被修改等
Object.preventExtensions(目标对象); // => 防止 对象添加新属性[不可扩展]
Object.isExtensible(目标对象); // => 判断 对象是否可扩展
Object.seal(目标对象); // => 密封一个对象
Object.isSealed(目标对象); // => 判断 对象是否被密封
Object.freeze(目标对象); // => 将对象冻结 不能修改
Object.isFrozen(目标对象); // => 返回 目标对象是否被冻结 false/true
~~~
> 描述信息

| 值 | 作用 |
|:--:|:--:|
| value | 与属性关联的值(仅限数据描述符) |
| writable | 当且仅当与属性关联的值可以更改(仅限数据描述符) |
| get | 用作属性的 getter 的函数，或者undefined如果没有 getter(仅限访问器描述符) |
| set | 用作属性设置器的函数，或者undefined如果没有设置器(仅限访问器描述符) |
| configurable | 当且仅当该属性描述符的类型可以改变并且该属性可以从相应的对象中删除时 |
| enumerable | 当且仅当在枚举相应对象的属性期间出现此属性 |
---
> 防扩展 < 密封 < 冻结

|方法|禁止添加属性|禁止删除属性|禁止修改属性|
|:--:|:--:|:--:|:--|
|Object.preventExtensions()|是|否|否|
|Object.seal()|是|是|否|
|Object.freeze()|是|是|是|