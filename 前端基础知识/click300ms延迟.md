## 解决方案：

#### 1. 禁用缩放
```html
    <meta name="viewport" content="user-scalable=no">
```

#### 2. CSS touch-action
```css
    .click {
        touch-action: manipulation;
        /* 浏览器只允许进行滚动和持续缩放操作任何其它被auto值支持的行为不被支持。
        启用平移和缩小缩放手势，但禁用其他非标准手势，例如双击以进行缩放。 
        禁用双击可缩放功能可减少浏览器在用户点击屏幕时延迟生成点击事件的需要。*/
    }
```

#### 3. fastclick核心

> 通过touchstart,touchmove,touchend模拟click事件,而将300ms后的click事件给屏蔽掉
 
1. IOS: 如果touchstart触发后马上就触发touchend，说明这是点击操作，此时触发click真正执行的事件。
2. Android: 一些Android的设备屏幕很不灵敏，这种情况下一定会触发touchmove事件。所以针对Android设备的点击操作可以适当放宽，比如touchstart和touchend之间可以允许有少量几个touchmove，并且touchmove的距离不能超过多少个像素
