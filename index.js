// console.log(helloWorld2())
console.log("hello world")

let foo = 1
let bar = 2

function doCall(a){
    return new Promise((f) => f(a * 2) );
}
    
// function test(){
//     let i = 10;
//     doCall(i).then((a) => {
//         i = a;
//         console.log(i);
//     } );
//     new Promise(() => setTimeout(() => { console.log("TIMED!") }, 0)).then(() => console.log("end"));
//     console.log(i);
// }

// test()