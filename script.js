let x, y;
let score = 0;
let speedX = 3;
let speedY = 3;
let gameStart = false;

function setup() {
    createCanvas(windowWidth, windowHeight);

    x = width / 2;
    y = height / 2;
}

function draw() {
    background(180, 220, 255);

    if (gameStart == false) {
        fill(0);
        textAlign(CENTER);
        textSize(42);
        text("Smile Click Game", width / 2, height / 2 - 120);

        textSize(24);
        text("遊戲說明", width / 2, height / 2 - 60);
        text("點擊畫面中移動的笑臉可以得分", width / 2, height / 2 - 20);
        text("每點到一次，笑臉會變得更快", width / 2, height / 2 + 20);
        text("按下滑鼠開始遊戲", width / 2, height / 2 + 80);

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
}

function mousePressed() {
    if (gameStart == false) {
        gameStart = true;
        return;
    }

    let d = dist(mouseX, mouseY, x, y);

    if (d < 50) {
        score++;
        speedX += 0.5;
        speedY += 0.5;
    }
}