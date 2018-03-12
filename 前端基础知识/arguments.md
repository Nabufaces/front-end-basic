### JS数组的arguments不是数组，是类数组

#### arguments类型
```ecmascript 6
    function judgeArguments() {
      console.log(Object.prototype.toString.call(arguments))    //[object Arguments]
    }
```

#### 将arguments转化为真正的数组
```ecmascript 6
    function toArrayOne() {
        return Array.prototype.slice.call(arguments);
    }
    
    function toArrayTwo() {
        return [].slice.call(arguments);
    }
    
    function toArrayThree() {
        return Array.from(arguments); 
    }
    
    function toArrayFour() {
        return [...arguments]; 
    }
```
