### bind实现
```javascript
    Function.prototype._$bind = function (scope) {
        var ctx = this;
        var args = Array.prototype.slice.apply(arguments, [1]);
        return function() {
            return ctx.apply(scope, args);
        }
    };
```
    
    
