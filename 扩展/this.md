## this
在JavaScript中this可以是全局对象、当前对象或者任意对象，这完全取决于函数的调用方式，this 绑定的对象即函数执行的上下文环境（context）。

#### 对象方法调用
```
    // 作为对象方法调用
    const test = {
        f : function() {
            console.log(this)
            //此处this指向test
        }
    }
```

#### 函数调用
1.
```
    const a = 1;
    function test() {
        console.log(this.a);
        //此处this指向window
    }
```
2.
```
    const test = {
        f : function() {
            function F() {
                console.log(this);
                //此处this指向window
            }
            F();
        }
    }
```

## hack写法改变上下文
```
    const test = {
        f : function() {
            const self = this;  //这里this指向test
            function F() {
                console.log(self);
            }
            F();
        }
    }
```

## 使用call、apply和bind改变函数执行时的上下文（this）
* call方法：

语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]])

说明：如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。

* apply方法：

语法：apply([thisObj[,argArray]])

说明：如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。

* bind方法：

语法：bind(thisArg[, arg1[, arg2[, ...]]])

说明：bind()方法所返回的函数的length（形参数量）等于原函数的形参数量减去传入bind()方法中的实参数量（第一个参数以后的所有参数），因为传入bind中的实参都会绑定到原函数的形参。

```
    const test = {
        f : function() {
            const F = function() {
                console.log(this);   //这里this指向test
            }.bind(this);
            F();
        }
    }
```

## 箭头函数this
* 箭头函数里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域
* 不能更改this：this的值在函数内部不能被修改，在函数的整个生命周期内其值会保持不变。
```
    const test = {
        f : function() {
            const F = () => {
                console.log(this);      //这里this指向test
            }
            F();
        }
    }
```
```
    function foo() {
        setTimeout(function () {
            console.log('id:', this.id);
            //输出结果：id:21
            //这里this指向window
        }, 100);
    }

    var id = 21;

    foo.call({ id: 42 });
```
```
    function foo() {
        setTimeout(() => {
            console.log('id:', this.id);
            //输出结果：id:42
            //这里this指向foo
        }, 100);
    }

    var id = 21;

    foo.call({ id: 42 });
```
