### bind实现
```javascript 1.8
    Function.prototype._$bind = function (scope) {
        var self = this;
        return function() {
            return self.apply(scope, arguments);
        }
    };
```
    
    
