var grImg;
var cat1, cat2, cat3, cat;
var mouse1, mouse2, mouse3, mouse;

function preload() {
    
    grImg = loadImage("garden.png");
    cat1 = loadAnimation("cat1.png");
    cat2 = loadAnimation("cat2.png", "cat3.png");
    cat3 = loadAnimation("cat4.png");
    mouse1 = loadAnimation("mouse1.png");
    mouse2 = loadAnimation("mouse2.png", "mouse3.png");
    mouse3 = loadAnimation("mouse4.png");
}

function setup() {
    createCanvas(1000, 800);
    
    cat = createSprite(850,690,70,45);
    cat.addAnimation("cot",cat1);
    cat.scale = 0.2;

    mouse = createSprite(150,690,70,45);
    mouse.addAnimation("mose",mouse1);
    mouse.scale = 0.16
}

function draw() {
    background(grImg);
    
    if(cat.x - mouse.x < (cat.width - mouse.width)*2){
       mouse.addAnimation("mose",mouse3);
       mouse.changeAnimation("mose",mouse3);
       cat.addAnimation("cot",cat3);
       cat.changeAnimation("cot",cat3);
       cat.velocityX = 0;
    }

    drawSprites();
}


function keyPressed() {
     
   if(keyCode === LEFT_ARROW){
     mouse.addAnimation("mose",mouse2);
     mouse.changeAnimation("mose",mouse2);
     mouse.frameDelay = 25;
     cat.addAnimation("cot",cat2);
     cat.changeAnimation("cot",cat2);
     cat.frameDelay = 25;
     cat.velocityX = -2;
   }

}
