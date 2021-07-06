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

### 创建 Object.getPrototypeOf()
> 返回对象的原型。

~~~javascript
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = Object.create(obj1);

Object.getPrototypeOf(obj2) === obj1; // => true
~~~

### 创建 Object.setPrototypeOf()
> 给对象 设置原型。

~~~javascript
let obj1 = { a: 1, b: 2, c: 3 };
Object.setPrototypeOf(obj1, { ss: 22 });
obj1._proto_; // => { ss: 22 }
Object.setPrototypeOf(obj1, null);
obj1._proto_; // => undefined
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

### 定义多个属性 Object.is()
> 确定两个值是否 相同。
- 两个都 undefined
- 两个都 null
- 两者true或两者false
- 相同长度的两个字符串以相同的顺序具有相同的字符
- 两者都是同一个对象（意味着两个值都引用了内存中的同一个对象）
- 数字和
  + 两个都 +0
  + 两个都 -0
  + 两个都 NaN
  + 或两者都非零且两者都不是NaN且两者都具有相同的值

~~~javascript
Object.is(25, 25);                // => true
Object.is('foo', 'foo');          // => true
Object.is('foo', 'bar');          // => false
Object.is(null, null);            // => true
Object.is(undefined, undefined);  // => true
Object.is(window, window);        // => true
Object.is([], []);                // => false
var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);              // => true
Object.is(foo, bar);              // => false

// Case 2: Signed zero
Object.is(0, -0);                 // => false
Object.is(+0, -0);                // => false
Object.is(-0, -0);                // => true
Object.is(0n, -0n);               // => true

// Case 3: NaN
Object.is(NaN, 0/0);              // => true
Object.is(NaN, Number.NaN);        // => true
~~~

### 查看所有属性 Object.getOwnPropertyNames()
> 返回在给定对象中直接找到的所有属性（包括不可枚举的属性，除了使用 Symbol 的属性）的数组。
~~~javascript
const obj1 = { a: 1, b: 2, c: 3 };

Object.getOwnPropertyNames(obj1); // => [ "a", "b", "c" ]
~~~

### 查看指定属性的描述 Object.getOwnPropertyDescriptor()

~~~javascript
const obj1 = { a: 1, b: 2, c: 3 };

Object.getOwnPropertyDescriptor(obj1, 'a'); // => { value: 1, configurable: true, enumerable: true, writable: true }
~~~

### 查看所有属性的描述 Object.getOwnPropertyDescriptors()

~~~javascript
const obj1 = { a: 1, b: 2, c: 3 };

Object.getOwnPropertyDescriptors(obj1); // => { a:{ value: 1, ..}, b: {...}}
~~~

### 防止扩展 Object.preventExtensions()
> 防止向对象添加新属性[防止将来对 对象进行扩展]。
~~~javascript
const obj1 = { a: 1, b: 2, c: 3 };

Object.preventExtensions(obj1);
obj1.a = 11; // => 可以
obj1.b = 22; // => 可以
obj1.c = 33; // => 可以
obj1.d = 44; // => 无效果
delete obj1.a; // => 可以被删除
~~~

### 查询是否可扩展 Object.isExtensible()
> 查询对象 是否可以扩展。
~~~javascript
const obj1 = { a: 1, b: 2, c: 3 };

Object.isExtensible(obj1); // => true
Object.preventExtensions(obj1); // => 不可扩展操作
Object.isExtensible(obj1); // => false
~~~

### 密封对象 Object.seal()
> 防止向其添加新属性并将所有现有属性标记为不可配置。只要当前属性的值是可写的，它们的值仍然可以更改。
~~~javascript
const obj1 = { a: 1, b: 2, c: 3 };

Object.preventExtensions(obj1);
obj1.a = 11; // => 可以
obj1.b = 22; // => 可以
obj1.c = 33; // => 可以
obj1.d = 44; // => 无效果
delete obj1.a; // => 不可以被删除
~~~

### 查询是否可扩展 Object.isSealed()
> 查询对象 是否被密封。
~~~javascript
const obj1 = { a: 1, b: 2, c: 3 };

Object.isExtensible(obj1); // => false
Object.preventExtensions(obj1); // => 密封操作
Object.isExtensible(obj1); // => true
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