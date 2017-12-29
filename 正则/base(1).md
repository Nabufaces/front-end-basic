## 正则基本篇

### 正则表达式的定义

##### 1.字面量定义

```javascript
    const regex = /xyz/;
```
##### 2.RegExp 构造函数

```javascript
    const regex = new RegExp('xyz');
```

- 上面两种写法是等价的，都新建了一个内容为xyz的正则表达式对象。它们的主要区别是，字面量定义在编译时新建正则表达式，RegExp 构造函数在运行时新建正则表达式。

### 正则对象的属性和方法

#### 属性

##### 与修饰符相关

属性 | 描述
---|---
ignoreCase | 返回布尔值，表示是否设置了i修饰符
global | 返回布尔值，表示是否设置了g修饰符
multiline | 返回布尔值，表示是否设置了m修饰符

##### 与修饰符无关

属性 | 描述
---|---
lastIndex | 返回下一次开始搜索的位置，只在设置了g修饰符时有意义
source | 返回正则表达式的字符串形式（不包括反斜杠）

#### 方法 

##### 1.test()
- 正则对象的test方法返回布尔值，表示当前模式是否能匹配参数字符串。
- 如果正则表达式带有g修饰符，则每一次test方法都从上一次结束的位置开始向后匹配。

```javascript
    /cat/.test('cats and dogs') // true
    //上面代码验证参数字符串之中是否包含cat，结果返回true。
```

##### 2.exec()
- 正则对象的exec方法，可以返回匹配结果。如果发现匹配，就返回一个数组，成员是每一个匹配成功的子字符串，否则返回null。
- 如果正则表达式带有g修饰符，则每一次exec方法都从上一次结束的位置开始向后匹配。

```javascript
    const s = '_x_x';
    const r1 = /x/;
    const r2 = /y/;
    
    r1.exec(s) // ["x"]
    r2.exec(s) // null
```

如果正则表示式包含圆括号（即含有“组匹配”），则返回的数组会包括多个成员。第一个成员是整个匹配成功的结果，后面的成员就是圆括号对应的匹配成功的组。也就是说，第二个成员对应第一个括号，第三个成员对应第二个括号，以此类推。


```javascript
    const s = '_x_x';
    const r = /_(x)/;
    
    r.exec(s) // ["_x", "x"]
```

###### exec方法的返回数组两个属性：
- input：整个原字符串。
- index：整个模式匹配成功的开始位置。

利用g修饰符允许多次匹配的特点，可以用一个循环完成全部匹配。

```javascript
    const r = /a(b+)a/g;
    const s = '_abbba_aba_';
    
    while(true) {
      let match = r.exec(s);
      if (!match) break;
      console.log(match);
    }
    // [ 'abbba', 'bbb' ]
    // [ 'aba', 'b' ]
```

### 字符串对象的方法

方法 | 描述
---|---
match() | 返回一个数组，成员是所有匹配的子字符串。
search() | 按照给定的正则表达式进行搜索，返回一个整数，表示匹配开始的位置。
replace() | 按照给定的正则表达式进行替换，返回替换后的字符串。
split() | 按照给定规则进行字符串分割，返回一个数组，包含分割后的各个成员。

##### String.prototype.match()
- 如果正则表达式带有g修饰符，则该方法与正则对象的exec方法行为不同，会一次性返回所有匹配成功的结果。
- 设置正则表达式的lastIndex属性，对match方法无效，匹配总是从字符串的第一个字符开始。

```javascript
    var s = 'abba';
    var r = /a/g;
    
    s.match(r) // ["a", "a"]
    r.exec(s) // ["a"]
```

##### String.prototype.search()
- 该方法会忽略g修饰符。

```javascript
    '_x_x'.search(/x/)  // 1
```

##### String.prototype.replace()
- replace方法可以替换匹配的值。它接受两个参数，第一个是搜索模式，第二个是替换的内容。
- 搜索模式如果不加g修饰符，就替换第一个匹配成功的值，否则替换所有匹配成功的值。

```javascript
    'aaa'.replace('a', 'b') // "baa"
    'aaa'.replace(/a/g, 'b') // "bbb"
```

- replace方法的第二个参数可以使用美元符号$，用来指代所替换的内容。

符号 | 描述
---|---
$& | 指代匹配的子字符串。
$` | 指代匹配结果前面的文本。
$' | 指代匹配结果后面的文本。
$n | 指代匹配成功的第n组内容，n是从1开始的自然数。
$$ | 指代美元符号$。

```javascript
    'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1')
    // "world hello"
    
    'abc'.replace('b', '[$`-$&-$\']')
    // "a[a-b-c]c"
```
- replace方法的第二个参数还可以是一个函数，将每一个匹配内容替换为函数返回值。

```javascript
    '3 and 5'.replace(/[0-9]+/g, function(match){
      return 2 * match;
    })
    // "6 and 10"
```

##### String.prototype.split()
- split方法接受两个参数，第一个参数是分隔规则，第二个参数是返回数组的最大成员数。