// document.getElementById('btnOne').onclick = () => {
//     alert("Hello World")
// }

// addEventListener
// const btn1 = document.getElementById('btn1');

// btn1.addEventListener('mouseenter', myFunc)

// function myFunc() {
//     console.log('Hello World');
// }


const rectDiv = document.querySelector('.rect');
const rectBtn = document.querySelector('.rectBtn');

const rectEffect1 = () => {
    console.log('Working');
    rectDiv.classList.add('rect1'); 
}
const rectEffect2 = () => {
    console.log('Working');
    rectDiv.classList.add('rect2'); 
}
const rectEffect3 = () => {
    console.log('Working');
    rectDiv.classList.add('rect3'); 
}
const rectEffect4 = () => {
    console.log('Working');
    rectDiv.className = 'rect'
}



rectDiv.addEventListener('mouseover', rectEffect1);
rectDiv.addEventListener('mousedown', rectEffect2);
rectDiv.addEventListener('dblclick', rectEffect3);
rectBtn.addEventListener('click', rectEffect4);