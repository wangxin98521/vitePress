---
title: TypeScript
---
# {{ $frontmatter.title }}
> [TypeScript官方文档](https://www.tslang.cn/) | 只列举基础

## 类型
### 基础类型
|类型|说明|
|:--:|:--:|
|字符串||
|数字||
|布尔值||
|数组||
|对象||
|null & undefined|任何类型的子集|
|元组|元组类型表示一个已知元素数量和类型的数组.|
|枚举|一组数值赋予|
|Any|任意类型|
|Void|没有任何值返回的时候|
|Never|永不存在的值的类型|
|类型断言|告诉编辑器 这一定是什么类型|
#### 补充
- 字符串 | string
~~~typescript
let str: string;
str = '1';
str = 1; // => error
str = null;
str = undefined;
~~~

- 数字 | number
~~~typescript
let num: number;
num = '1'; // => error
num = 1;
num = null;
num = undefined;
~~~

- 布尔值 | boolean
~~~typescript
let flag: boolean;
flag = false;
flag = true;
flag = null;
flag = undefined;
~~~

- 数组 | Array
~~~typescript
let list: number[] = [1, 2, 3]; // 定义全是数字组成的数组
let list1: Array<number> = [1, 2, 3]; // 数组泛型定义 全是数字的数组

let list3: (number | string)[] = [1, '2', null, undefined, NaN]; // 多类型数组
let list4: Array<string | number> = [1, '2', null, undefined, NaN]; // 同上
~~~

- 元组 | Tuple
>元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
~~~typescript
let tuple: [string, number];
tuple = ['1', 2];
tuple = [1, 2]; // error
tuple = ['1', 2, 3]; // error
~~~

- 任意类型 | Any
~~~typescript
let any: any = 4;
any = '4';
~~~

- 没有任何类型 | Void
~~~typescript
function warnUser(): void {
    console.log("没有任何返回值");
}
~~~

- 永不存在 | Never
>never类型表示的是那些永不存在的值的类型。 例如，never类型是那些总是会**抛出异常或根本就不会有返回值**的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
> <br />
>never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never
~~~typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
~~~

- 类型断言
>清楚地知道一个实体具有比它现有类型更确切的类型
~~~typescript
// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

// 另一个为as语法:
let someValue1: any = "this is a string";

let strLength1: number = (someValue as string).length;
~~~


### 接口
> 指定参数的类型 和 个数;依次对应
#### 定义
~~~typescript
// 普通定义 只要包含 label字段 且值为字符串就行
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

~~~

~~~typescript
// 定义接口
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
~~~

~~~typescript
// 可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.clor) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
~~~

~~~typescript
// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
~~~

~~~typescript
// 额外属性
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let squareOptions = { colour: "red", width: 100, black: true };
let mySquare = createSquare(squareOptions);
~~~

#### 继承
~~~typescript
// 继承单个接口
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
~~~

~~~typescript
// 继承多个接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
~~~

#### 混合类型
~~~typescript
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
~~~

### 类
#### 基础
~~~typescript
// 基础
class Greeter {
    greeting: string; // 定义字段
    constructor(message: string) { // 构造函数
        this.greeting = message; // 将传入的参数 赋值
    }
    greet() { // 方法
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
greeter(); // => Hello, world
~~~

#### 继承
~~~typescript
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
~~~

#### 修饰符
> public 共有(默认) | private 私有 | protected 受保护 | readonly 只读

~~~typescript
class Person {
    public name: string;
    private age: number; // 私有 不被继承
    protected sex: string; // 受保护 只能在内部方法
    readonly uid: number; // 只读 不能被修改
    constructor(sex: string) {
        this.sex = sex;
    }
}

class Employee extends Person {
    private department: string;

    constructor( sex: string) {
        super(sex) // 执行继承类的 构造函数
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
~~~