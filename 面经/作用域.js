/**
 * Created by 高文林 on 2017/8/26.
 */

var a = 1;
function b() {
    console.log(a);     //undefined
    var a = 2;
}
b();

var c = 1;
function d() {
    console.log(c);   //1
    c = 2;
}
d();

var e = 1;
function f() {
    console.log(e);     //[function: e]
    var e = 2;
    function e() {}
}
f();

var g = 1;
function h() {
    console.log(g);     //[function: g]
    g = 2;
    function g() {}
}
h();

(function () {
    var i = j = 5;
})();
console.log(i);  //undefined i为函数的局部变量
console.log(j);  //5 j为全局变量

