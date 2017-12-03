css伪类应用：

1. 清除浮动
```css
    .clearfix {
        zoom: 1;
        /*兼容IE*/
    }
    .clearfix:after {
        content: "\0020";
        /*在父容器的结尾处放一个空白字符*/
        height: 0;
        /*让这个这个空白字符不显示出来*/
        display: block;
        clear: both;
    }
```

1. 扩大可点击感应区域
```css
    .btn {
        position: relative;
    }
    .btn:after {
        content: '';
        position: absolute;
        top: -20px;
        right: -20px;
        bottom: -20px;
        left: -20px;
    }
```

2. 利用伪类做对话框的三角形
```css
    .mn {
        width: 100px;   height: 50px;
        background: #fff1af;
        position: relative;
    }
    .mn:before {
        content: '';
        position: absolute;
        left: 0;  top: 50%;
        transform: translate(-100%,-50%);
        border-style: solid;
        border-width: 6px 6px 6px 0;
        border-color: transparent #fff1af transparent transparent;
    }
```

