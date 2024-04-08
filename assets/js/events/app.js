// document.getElementById('btnOne').onclick = () => {
//     alert("Hello World")
// }

// addEventListener
const btn1 = document.getElementById('btn1');

btn1.addEventListener('mouseenter', myFunc)

function myFunc() {
    console.log('Hello World');
}