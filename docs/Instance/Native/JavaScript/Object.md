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
