let x, y;
let score = 0;
let speedX = 3;
let speedY = 3;

function setup() {

    createCanvas(windowWidth, windowHeight);

    x = width / 2;
    y = height / 2;

}

function draw() {

    background(220);

    x += speedX;
    y += speedY;

    if (x > width || x < 0)
        speedX *= -1;

    if (y > height || y < 0)
        speedY *= -1;

    textSize(50);
    text("😊", x, y);

    fill(0);
    textSize(30);
    text("Score : " + score, 20, 40);

}

function mousePressed() {

    let d = dist(mouseX, mouseY, x, y);

    if (d < 40) {

        score++;

        speedX += 0.5;
        speedY += 0.5;

    }

}