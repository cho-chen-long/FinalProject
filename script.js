let x, y;
let score = 0;
let speedX = 3;
let speedY = 3;
let gameStart = false;
let gameOver = false;
let timeLeft = 30;

let bgR = 180;
let bgG = 220;
let bgB = 255;

function setup() {
    createCanvas(windowWidth, windowHeight);

    x = width / 2;
    y = height / 2;

    setInterval(() => {
        if (gameStart == true && gameOver == false && timeLeft > 0) {
            timeLeft--;
        }
    }, 1000);
}

function draw() {
    background(bgR, bgG, bgB);

    if (gameStart == false) {
        fill(0);
        textAlign(CENTER);
        textSize(42);
        text("Smile Click Game", width / 2, height / 2 - 120);

        textSize(24);
        text("遊戲說明", width / 2, height / 2 - 60);
        text("目標：30秒內盡量獲得高分", width / 2, height / 2 - 20);
        text("操作：點擊移動中的笑臉", width / 2, height / 2 + 20);
        text("點到後速度會變快，背景也會變色", width / 2, height / 2 + 60);
        text("按下滑鼠開始遊戲", width / 2, height / 2 + 110);

        return;
    }

    if (timeLeft <= 0) {
        gameOver = true;

        fill(0);
        textAlign(CENTER);
        textSize(50);
        text("GAME OVER", width / 2, height / 2 - 40);

        textSize(30);
        text("Your Score : " + score, width / 2, height / 2 + 20);
        text("重新整理網頁可以再玩一次", width / 2, height / 2 + 70);

        return;
    }

    x += speedX;
    y += speedY;

    if (x > width || x < 0) {
        speedX *= -1;
    }

    if (y > height || y < 0) {
        speedY *= -1;
    }

    textAlign(LEFT);
    textSize(50);
    text("😊", x, y);

    fill(0);
    textSize(30);
    text("Score : " + score, 20, 40);
    text("Time : " + timeLeft, 20, 80);
}

function mousePressed() {
    if (gameStart == false) {
        gameStart = true;
        return;
    }

    if (gameOver == true) {
        return;
    }

    let d = dist(mouseX, mouseY, x, y);

    if (d < 50) {
        score++;
        speedX += 0.5;
        speedY += 0.5;

        bgR = random(255);
        bgG = random(255);
        bgB = random(255);
    }
}