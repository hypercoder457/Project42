var spaceBgImage, spaceCraf1tImg, spaceCraft2Img, spaceCraft3Img, spaceCraft4Img, issImg;
var spaceCraft, iss;
var hasDocked = false;

function preload() {
  spaceBgImage = loadImage("images/spacebg.jpg");
  spaceCraft1Img = loadImage("images/spacecraft1.png");
  spaceCraft2Img = loadImage("images/spacecraft2.png");
  spaceCraft3Img = loadImage("images/spacecraft3.png");
  spaceCraft4Img = loadImage("images/spacecraft4.png");
  issImg = loadImage("images/iss.png");
}

function setup() {
  createCanvas(1400, 600);
  spaceCraft = createSprite(500, 400);
  spaceCraft.addImage(spaceCraft1Img);
  spaceCraft.scale = .25;
  iss = createSprite(400, 250);
  iss.addImage(issImg);
  iss.scale = .5;
}

function draw() {
  background(spaceBgImage);

  if (!hasDocked) {
    spaceCraft.x += random(1, -1);

    if (keyDown("up")) {
      spaceCraft.addImage(spaceCraft2Img);
      spaceCraft.y -= 2;
    }

    if (keyDown("down")) {
      spaceCraft.addImage(spaceCraft1Img);
      spaceCraft.y += 2;
    }

    if (keyDown("left")) {
      spaceCraft.addImage(spaceCraft3Img);
      spaceCraft.x -= 2;
    }

    if (keyDown("right")) {
      spaceCraft.addImage(spaceCraft4Img);
      spaceCraft.x += 2;
    }
  }
  if (spaceCraft.y <= iss.y + 50 && spaceCraft.x <= iss.x + 15) {
    hasDocked = true;
    textSize(30);
    fill("white");
    text("Docking successful!", 600, height / 2);
  }
  drawSprites();
}