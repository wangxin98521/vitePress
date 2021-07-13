---
title: 正则 表达式
---
# {{ $frontmatter.title }}
> 用于匹配规律规则的表达式，正则表达式最初是科学家对人类神经系统的工作原理的早期研究，现在在编程语言中有广泛的应用。正则表通常被用来检索、替换那些符合某个模式(规则)的文本。
> 正则表达式是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑。
 
## 规则
### 常用元字符:
|元字符|说明|
|:--:|:--|
|\d|匹配数字|
|\D|匹配任意非数字的字符|
|\b|匹配单词边界|
|\B|匹配任意非单词边界的字符|
|\w|匹配字母或数字或下划线|
|\W|匹配任意不是 字母|数字|下划线|
|\s|匹配任意的空白符|
|\S|匹配任意不是空白符的字符|
|.|匹配除换行符以为的任意单个字符|
|\0|匹配 NULL 字符|
|\n|匹配 换行符|
|\f|匹配 换页符|
|\r|匹配 回车符|
|\t|匹配 制表符|
|\v|匹配 垂直制表符|
|\u4e00 - \u9fa5|匹配中文|
|^|以谁开始|
|$|以谁结束|

### 限定符
|限定符|说明|
|:--:|:--|
|*|重复零次或更多次|
|+|重复一次或更多次|
|?|重复零次或一次|
|{n}|重复n次|
|{n,}|重复n次或更多次|
|{n,m}|重复n到m次|

### 参数
|标志|说明|
|:--:|:--|
|i|忽略大小写|
|g|全局匹配|
|gi|全局忽略大小写匹配|
|m|多行查找(必须与g一起实用,并且,当使用^和$模式时才会起作用)|

### 属性
|属性|说明|
|:--:|:--|
|lastIndex|下一次匹配的字符位置|

### 其他
|标志|说明|
|:--:|:--|
|[]|匹配其中任意字符[为字符串]|
|[^]|匹配除中括号以内的内容|
|\/|转义符[反斜杠,被转义了敲不出来]|
|\||或|
|()|二选一, 分组|

## 方法
|方法|说明|
|:--:|:--|
|test|测试某个字符串是否与正则匹配，匹配就返回true，否则返回false|
|exec|返回数组，数组元素为匹配的子字符串|
|match|匹配一个字符串，返回一个数组|
|search|查找第一次匹配的子字符串的位置,没有则 -1|
|replace|用来将字符串中的某些子串替换为需要的内容|
|split|将一个字符串拆分成一个数组|

### 实例
#### test
> 检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。
~~~javascript
const reg = /this/g;
reg.test('this is wx'); // => true
reg.test('thisiswx'); // => true
~~~

#### exec
> 返回数组，其中存放匹配的结果[可以打点访问]。如果未找到匹配，则返回值为 null。<br />
> 如果在全局匹配下 重新匹配需要清一下 lastIndex 不然不能从头开始
~~~javascript
const reg = /this/g;
reg.exec('this is wx'); // => [ 0: "this", groups: undefined, index: 0, input: "this is wx", length: 1 ]
reg.exec('this is wx this'); // => [ 0: "this", groups: undefined, index: 11, input: "this is wx this", length: 1 ]
reg.lastIndex = 0;
reg.exec('this is wx this'); // =>  [ 0: "this", groups: undefined, index: 0, input: "this is wx this", length: 1 ]
reg.exec('this is wx this').input; // =>  "this is wx this"
~~~

#### match
> 返回数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
~~~javascript
const str = 'this is wx this';
str.match(/this/); // => [ 0: "this", groups: undefined, index: 11, input: "this is wx this", length: 1 ]
str.match(/this/g); // => [ "this", "this" ]
~~~

#### search
> 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的字符串[首次]，并返回字符串的起始位置。
~~~javascript
const str = "this is String!!!";
str.search(/string/i); // => 8
str.search(/t/i); // => 0
~~~

#### replace
> 匹配到字符串并替换,第一个参数为: 匹配内容,第二个参数: 要替换的新内容。
~~~javascript
const str = "this is String!!!";
str.replace(/string/i); // => 'this is undefined!!!'
str.replace(/t/i, 2); // => '2his is String!!!'
str.replace(/t/g, 2); // => '2his is S2ring!!!'
str.replace('is', 2); // => 'th2 is string!!!'
~~~

#### split
> 用于把一个字符串分割成字符串数组,第一个参数: 字符串或正则表达式, 第二个参数: 最大返回数组长度。
~~~javascript
const str = "this is String!!!";
str.split(/string/i); // => [ 'this is', '!!!' ]
str.split(/t/i, 2); // => [ '', 'his is S' ]
str.split('is', 3); // => [ 'th', ' ', 'String!!!' ]
~~~

## 常用正则
~~~javascript
const value = ''; // value 为传参
/^\d+$/.test(value); // 只允许输入数字 => 返回 true || false
value.replace(/[^\d]*/g, ''); // 清除数字外的所有字符 => 返回 替换后的字符串
value.replace(/\s/g, ''); // 清除空格 => 返回 没有空格的字符串
/^1(3\d|5[0-3, 5-9]|66|7[3-8]|8\d|9[1,8-9])\d{8}$/.test(value); // 手机号校验
/\S+@\S+\.\S+/.test(value); // 邮箱校验
~~~
