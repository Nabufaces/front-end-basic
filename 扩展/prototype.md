## 构造函数创建对象
我们先使用构造函数创建一个对象：
```javascript
    function Person() {
    }
    var person = new Person();
    person.name = 'name';
    console.log(person.name) // name
```
在这个例子中，Person就是一个构造函数，我们使用new创建了一个实例对象person。

## prototype
每个函数都有一个prototype属性，比如：
```javascript
    function Person() {
    }
    // prototype是函数才会有的属性
    Person.prototype.name = 'name';
    var person1 = new Person();
    var person2 = new Person();
    console.log(person1.name);  // name
    console.log(person2.name);  // name
```
* 函数的prototype属性指向了一个对象，这个对象正是**调用该构造函数而创建的实例的原型**,也就是这个例子中的person1和person2的原型。
* 每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，**每一个对象都会从原型”继承”属性**。
让我们用一张图表示构造函数和实例原型之间的关系：
![构造函数和实例原型](http://wx4.sinaimg.cn/mw690/6941baebly1ff9jtsgw6lj20g305swek.jpg)

## __proto__
* 每一个JavaScript对象(除了null)都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。
```javascript
    function Person() {
    }
    var person = new Person();
    console.log(person.__proto__ === Person.prototype); //true
```
于是我们更新下关系图：
![](http://wx4.sinaimg.cn/mw690/6941baebly1ff9jtswfwuj20g0082t8x.jpg)

## constructor
* 每个原型都有一个**constructor属性指向关联的构造函数**
```javascript
    function Person() {
    }
    console.log(Person === Person.prototype.constructor); //true
```
所以再更新下关系图：
![](http://wx4.sinaimg.cn/mw690/6941baebly1ff9jttah2yj20g4082dg5.jpg)


综上我们已经得出：
```javascript
    function Person() {
    }
    var person = new Person();
    console.log(person.__proto__ == Person.prototype) // true
    console.log(Person.prototype.constructor == Person) // true
    // 顺便学习一个ES5的方法,可以获得对象的原型
    console.log(Object.getPrototypeOf(person) === Person.prototype) //true
```

## 实例与原型
* 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。
```javascript
    function Person() {
    }
    Person.prototype.name = 'name';
    var person = new Person();
    person.name = 'name of this person';
    console.log(person.name);  // name of this person
    delete person.name;
    console.log(person.name);  // name
```

在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是
```javascript
    var obj = new Object();
    obj.name = 'name';
    console.log(obj.name); // name
```
所以原型对象是通过Object构造函数生成的，结合之前所讲,实例的__proto__指向构造函数的prototype,所以我们再更新下关系图：

![](http://wx2.sinaimg.cn/mw690/6941baebly1ff9jttpwsej20ge0d9js0.jpg)

## 原型链
![](http://wx1.sinaimg.cn/mw690/6941baebly1ff9jtuafvxj20ge0elt9d.jpg)

图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。