const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['green', 'red', 'violet', 'orange', 'blue', 'yellow', 'hotpink', 'pink', 'purple'];

body.style.backgroundColor = 'grey';
button.addEventListener('click', changeBackground);

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
}

function func() {
    button.removeClass("btn-active");
}