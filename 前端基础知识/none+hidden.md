## CSS display:none和visibility:hidden的区别

* visibility:hidden隐藏，但在浏览时保留位置；
* display:none视为不存在，且不加载！

#### display:none

- 使用该属性后，HTML元素（对象）的宽度、高度等各种属性值都将“丢失”;
- 浏览器需要重排并重绘

#### visibility:hidden

- 使用该属性后，HTML元素（对象）仅仅是在视觉上看不见（完全透明），而它所占据的空间位置仍然存在，也即是说它仍具有高度、宽度等属性值。
- 浏览器仅需要重排