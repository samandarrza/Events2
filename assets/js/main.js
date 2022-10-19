let saveBtn = document.querySelector('#save');
let boxX = document.getElementById("boxWidth");
let boxY = document.getElementById("boxHeight");
let ballXY = document.getElementById("ballWidthAndHeight");
let resetBtn = document.getElementById('reset');
let box = document.querySelector('.box');
let ball = document.querySelector('.ball');
let step = document.getElementById('step').value;

save();
resetBall();

saveBtn.addEventListener('click', function () {
    boxX.value = 700;
    boxY.value = 500;
    ballXY.value = 60;
    step = 10;
    save();
    resetBall();
})

resetBtn.addEventListener('click', function () {
    boxX.value = 700;
    boxY.value = 400;
    ballXY.value = 60;
    step = 10;
    save();
    resetBall();
})

function save() {

    box.style.height = parseInt(boxY.value) + 'px';
    box.style.width = parseInt(boxX.value) + 'px';
    ball.style.height = parseInt(ballXY.value) + 'px';
    ball.style.width = parseInt(ballXY.value) + 'px';
}

function resetBall() {
    ball.style.left = (box.clientWidth - ball.clientWidth) / 2 + 'px';
    ball.style.top = (box.clientHeight - ball.clientHeight) / 2 + 'px';
}

document.body.addEventListener('keydown', e => {
    if (e.key == 'ArrowUp') {

        if (ball.style.top != '0px') {
            ball.style.top = parseInt(ball.style.top) + Number(-step) + 'px';
        }
        console.log(ball.style.top)
    }
    else if (e.key == 'ArrowLeft') {
        if (ball.style.left != '0px') {
            ball.style.left = parseInt(ball.style.left) + Number(-step) + 'px';
        }
    }
    else if (e.key == 'ArrowRight') {
        if (ball.style.left != (parseInt(boxX.value)-parseInt(ballXY.value) + 'px')) {
            ball.style.left = parseInt(ball.style.left) + Number(step) + 'px';
        }
    }
    else if (e.key == 'ArrowDown') {
        if (ball.style.top != (parseInt(boxY.value)-parseInt(ballXY.value) + 'px')) {
            ball.style.top = parseInt(ball.style.top) + Number(step) + 'px';
        }
    }
})