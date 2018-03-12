### JS数组的arguments不是数组
```
    function toArray() {
        return Array.prototype.slice.call(arguments);
    }
    //
    [...arguments]
```
