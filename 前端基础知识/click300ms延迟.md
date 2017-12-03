### 解决方案：

##### 1. 禁用缩放
```html
    <meta name="viewport" content="user-scalable=no">
```

##### 2. CSS touch-action
```css
    .click {
        touch-action: manipulation;
        /* 浏览器只允许进行滚动和持续缩放操作任何其它被auto值支持的行为不被支持。
        启用平移和缩小缩放手势，但禁用其他非标准手势，例如双击以进行缩放。 
        禁用双击可缩放功能可减少浏览器在用户点击屏幕时延迟生成点击事件的需要。*/
    }
```

##### 3. fastclick

https://segmentfault.com/a/1190000005850383