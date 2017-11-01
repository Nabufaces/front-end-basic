css伪类应用：

1. 扩大可点击感应区域
```css
    .btn {
        position: relative;
    }
    .btn::after {
        content: '';
        content: '';
        position: absolute;
        top: -20px;
        right: -20px;
        bottom: -20px;
        left: -20px;
    }
```

2. 利用伪类做对话框的三角形
```
    .mn {
        width: 100px;   height: 50px;
        background: #fff1af;
        position: relative;
    }
    .mn::before {
        content: '';
        position: absolute;
        left: 0;  top: 50%;
        transform: translate(-100%,-50%);
        border-style: solid;
        border-width: 7px 6px 6px 0;
        border-color: transparent #fff1af transparent transparent;
    }
```

