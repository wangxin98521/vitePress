---
title: JS方法示例
---
# {{ $frontmatter.title }}

## 遍历
### 筛选 every 全部满足
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
console.log(arr.every(item => { item < 6 })); // => true
console.log(arr.every(item => { item < 4 })); // => false
~~~

### 筛选 some 任一满足
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
console.log(arr.every(item => { item > 6 })); // => false
console.log(arr.every(item => { item < 4 })); // => true
~~~

### 筛选 filter 保留所有满足
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
console.log(arr.filter(item =>  item < 5 )); // => [ 1, 2, 3, 4 ]
console.log(arr.filter(item => item != 2 && item != 4 )); // => [ 1, 3, 5 ]
~~~
---

## 常用方法
### 字符串切割成数组 split
~~~js
const str = "1,12,123,1234";
console.log(str.split(',')); // => [ "1", "12", "123", "1234" ]
console.log(str.split('2')); // => [ "1,1", ",1", "3,1", "34" ]
console.log(str.split('2', 2)); // => [ "1,1", ",1" ]
~~~

### 数组切割成字符串 join
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
console.log(arr.join('')); // => "12345"
console.log(arr.join(',')); // => "1,2,3,4,5"  默认
console.log(arr.join('-')); // => "1-2-3-4-5"
~~~

### 返回满足条件的第一个元素 find
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
console.log(arr.find(item => item > 3)); // => 4
console.log(arr.find(item => item > 5)); // => undefined
~~~

### 返回满足条件的第一个索引 findIndex
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
console.log(arr.findIndex(item => item > 3)); // => 3
console.log(arr.findIndex(item => item > 5)); // => -1
~~~

### 返回满足条件的第一个索引 indexOf
~~~js
const arr = [ 1, 2, 3, 4, 5, 'wang' ];
console.log(arr.indexOf(2)); // => 1
console.log(arr.indexOf('wang')); // => 5
console.log(arr.indexOf('wa')); // => -1
~~~
