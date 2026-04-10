var x='global';

function foo(){
    var x='local';
    console.log(x);
}
foo(); // global

console.log(x); // local
