---
title: JS方法示例
---
# {{ $frontmatter.title }}

## 遍历
### 筛选 every 全部满足
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
arr.every(item => { item < 6 }); // => true
arr.every(item => { item < 4 }); // => false
~~~

### 筛选 some 任一满足
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
arr.every(item => { item > 6 }); // => false
arr.every(item => { item < 4 }); // => true
~~~

### 筛选 filter 保留所有满足
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
arr.filter(item =>  item < 5 ); // => [ 1, 2, 3, 4 ]
arr.filter(item => item != 2 && item != 4 ); // => [ 1, 3, 5 ]
~~~
---

## 常用方法
### 字符串切割成数组 split
~~~js
const str = "1,12,123,1234";
str.split(','); // => [ "1", "12", "123", "1234" ]
str.split('2'); // => [ "1,1", ",1", "3,1", "34" ]
str.split('2', 2); // => [ "1,1", ",1" ]
~~~

### 数组切割成字符串 join
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
arr.join(''); // => "12345"
arr.join(','); // => "1,2,3,4,5"  默认
arr.join('-'); // => "1-2-3-4-5"
~~~

### 判断是否为数组 Array.isArray
~~~js
Array.isArray([]); // => true
Array.isArray([ 1, 2, 3 ]); // => true
Array.isArray({ a: 1 }); // => false
Array.isArray( false ); // => false
Array.isArray( undefined ); // => false
Array.isArray( NaN ); // => false
Array.isArray( null ); // => false
Array.isArray( '' ); // => false
Array.isArray(); // => false
~~~

### 返回满足条件的第一个元素 find
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
arr.find(item => item > 3); // => 4
arr.find(item => item > 5); // => undefined
~~~

### 返回满足条件的第一个索引 findIndex
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
arr.findIndex(item => item > 3); // => 3
arr.findIndex(item => item > 5); // => -1
~~~

### 返回满足条件的第一个索引 indexOf
~~~js
const arr = [ 1, 2, 3, 4, 5, 'wang' ];
arr.indexOf(2); // => 1
arr.indexOf('wang'); // => 5
arr.indexOf('wa'); // => -1
~~~

### 判断数组里是否有满足条件的元素 includes
> 可以指定从哪个索引开始 [为负数时 -X 数组最后第X个开始]
~~~js
const arr = [ 1, 2, 3, 4, 5, 'wang' ];
arr.includes(2); // => true
arr.includes(2, 2); // => false
arr.includes('wang'); // => true
arr.includes('wa'); // => false
arr.includes('wang', -1); // => true
~~~

### 合并多个数组得到新数组 concat
~~~js
const arr1 = [ 1, 2, 3 ], arr2 = [ 3, 4, 5 ], arr3 = [ 5, 6, 7 ];
arr1.concat(arr2); // => [ 1, 2, 3, 3, 4, 5 ]
arr1.concat(arr2, arr3); // => [ 1, 2, 3, 3, 4, 5, 5, 6, 7 ]
~~~

### 合并多个元素得到新数组 Array.of
~~~js
Array.of( 1, 2, 3 ) // => [ 1, 2, 3 ]
Array.of( 1, { a: 1 }, undefined, null, NaN ) // => [ 1, { a: 1 }, undefined, null, NaN ]
~~~

### 返回每个元素走完方法后的新数组 map
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
arr.map(i => i * 2); // => [ 2, 4, 6, 8, 10 ]
arr.map(i => i > 2 ? i * 2 : item); // => [ 1, 2, 6, 8, 10 ]
~~~

### 解构得到新数组 flat
~~~js
const arr = [ 1, 2, [ 3, 4], [ 5, [ 6, 7] ], { a: 1 } ];
arr.flat(1); // => [ 1, 2, 3, 4, 5, [ 6, 7], { a: 1 } ]
arr.flat(2); // => [ 1, 2, 3, 4, 5, 6, 7, { a: 1 } ]
~~~

### 运算后解构得到新数组 flatMap
> 运算加解构 性能最佳方法
~~~js
const arr = [ 1, 2, 3, 4 ];
arr.map(x => [x, x * 2]); // => [[1, 2], [2, 4], [3, 6], [4, 8]]
arr.flatMap(x => [x, x * 2]); // => [ 1, 2, 2, 4, 3, 6, 4, 8 ]

const strArr = ["it's", "", "wx"];
strArr.map(i => i.split(' ')); // => [[ "it's" ], [ "" ], [ "wx" ]]
strArr.flatMap(i => i.split(' ')); // => [ "it's", "", "wx" ]

const numArr = [5, 4, -3, 20, 17, -33, -4, 18];
numArr.flatMap(i => i < 0 ? [] : i % 2 == 0 ? [ i ] : [ i - 1 ] ); // => [ 4, 4, 20, 16, 18 ]
~~~

---

### 数组内替换(改变) fill
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
arr.fill(0); // => [ 0, 0, 0, 0, 0 ]
arr.fill(0, 2); // => [ 1, 2, 0, 0, 0 ]
arr.fill(0, 2, 4); // => [ 1, 2, 0, 0, 5 ]
~~~

### 数组反转(改变) reverse
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
arr.reverse(); // => [ 5, 4, 3, 2, 1 ]
~~~

### 数组排序(改变) sort
~~~js
const arr = [ 1, 2, 3, 4, 5 ];
arr.sort((a, b) => a - b ); // => [ 1, 2, 3, 4, 5 ]
arr.sort((a, b) => b - a ); // => [ 5, 4, 3, 2, 1 ]
~~~
