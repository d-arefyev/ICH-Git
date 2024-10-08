// hoisting

// fooExpr();
// arrowFunc();
foo();

function foo() {
    console.log('Function declaration')
}
const fooExpr = function () {
    console.log('Function exprassion')
}
const arrowFunc = () => {
    console.log('Arrow Function')
}