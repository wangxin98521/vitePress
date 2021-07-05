---
title: JS-对象方法示例
---
# {{ $frontmatter.title }}

## 常用方法
### 合并 Object.assign()
> 将所有可枚举的 自身属性从一个或多个 源对象复制到目标对象。它返回修改后的目标对象
~~~javascript
let obj1 = { a: 1, b: 2, c: 3 },
    obj2 = { c: 32, e: 42, },
    obj3 = { e: 43 };
Object.assign( obj1, obj2, obj3 ); // => {a: 1, b: 2, c: 32, e: 43 }
// obj1 为返回的对象
// obj2 & obj3 不变
~~~

### 创建 Object.create()
> 创建具有指定原型对象和属性的新对象。

|参数|说明|
|:---:|:---:|
|obj|创建对象的原型，表示要继承的对象|
|propertiesObject(可选 )|也是一个对象，用于对新创建的对象进行初始化|

~~~javascript
let obj1 = { a: 1, b: 2, c: 3 },
    obj2 = {
        value: 24, // 属性默认值
        congigurable: false, // 设置false之后将不能不删除
        enumerable: true, // 设置为false 则不能被循环到
        writable: false,  // 设置false之后将不能修改
    };
let obj3 = Object.create(obj1, { obj2 }); // => { obj2: 24 }
obj3.__proto__ // =>  { a: 1, b: 2, c: 3 }
delete obj3.obj2 // => false 不能删除
obj3.obj2 = 40 // => 40 但没有修改成功
~~~

### 定义属性 Object.defineProperty()
> 直接在对象上定义新属性，或修改对象上现有属性，并返回该对象。

|参数|说明|
|:---:|:---:|
|obj|目标对象|
|prop|要定义或修改的属性的名称|
|descriptor|属性的描述符|

~~~javascript
const obj1 = {};

Object.defineProperty(obj1, 'property1', {
    value: 42,
    writable: false, // 不可修改
});

obj1.property1 = 77;// 修改无效
obj1.property1; // => 42
~~~

### 定义多个属性 Object.defineProperties()
> 直接在对象上定义新属性，或修改对象上现有属性，并返回该对象。

|参数|说明|
|:---:|:---:|
|obj|目标对象|
|props|一个对象[多个属性]|

~~~javascript
const obj1 = {};

Object.defineProperties(obj1, {
    property1: {
        value: 42,
        writable: true
    },
    property2: { value: 2 }
});

obj1.property1; // => 42
obj1.property2; // => 2
~~~

### 定义多个属性 Object.entries()
> 返回对象自己的可枚举字符串键的数组。

~~~javascript
const obj1 = { a: 1, b: 2, c: 3 };

Object.entries(obj1) // => [['a', 1], ['b', 2], ['c', 3]]
~~~

### 定义多个属性 Object.fromEntries()
> 将二维数组转为对象并返回。

~~~javascript
const arr = [['a', 1], ['b', 2], ['c', 3]];

Object.fromEntries(arr) // => { a: 1, b: 2, c: 3 }
~~~

### 定义多个属性 Object.freeze()
> 冻结一个对象 无法再更改冻结的对象。

~~~javascript
const obj1 = { a: 1, b: 2, c: 3 };

Object.freeze(obj1);
obj1.a = 10; // => 修改无效
~~~

### 定义多个属性 Object.isFrozen()
> 判断对象是否被冻结。

~~~javascript
const obj1 = { a: 1, b: 2, c: 3 };

Object.isFrozen(obj1); // => false
Object.freeze(obj1);
Object.isFrozen(obj1); // => true
~~~