//Stanford empty project

// DEFINE variables here
var player
var player2
var walls;
var wall1
var wall2
var wall3
var wall4

var score = 0;

var ava1;
var falling;

var gameover=0;
var highscore=0;
var score=0;
var player1wins=0;
var player2wins=0;
//var pause=0;
//var stopmove=1;
//Create every variable below
function setup() {
 createCanvas(800,600);
 walls = Group();
 falling= Group();
//INSTANTIATE variables here
player=createSprite(400,300,50,50);
player2=createSprite(300,200,50,50);
wall1=createSprite(0,-25,2400,50)
wall2=createSprite(800+50,0+650/2,100,650)
wall3=createSprite(0,625,5000,50)
wall4=createSprite(-25,0+650/2,50,1200)
ava1=createSprite(400,-50,60,60)
//adding walls to group
walls.add(wall1);
walls.add(wall2);
walls.add(wall3);
walls.add(wall4);
//adding ava1 to falling group
falling.add(ava1);
//Made the walls immovable
for (var i = 0; i < walls.length ; i++){
    walls.get(i).immovable = true; }

//Friction determine how the blocks move along the surface
player.friction=.98
player2.friction=.98
}

function draw() {
  background(200);

  if(gameover>=1){
    textSize(60);
text("Game over ",300,100,200,200);
textSize(35)
text("Refresh page to play again!",200,500);
  }

  if(gameover==1){
    player.visible=false
    player2.visible=false
  }
  //if(player.position.x <= 0 || player.position.x >= 800 || player.position.y <= 0 || player.position.y >= 600){
  //  player1wins=-1;
  //}
  //if(player2.position.x <= 0 || player2.position.x >= 800 || player2.position.y <= 0 || player2.position.y >= 600){
    //player1wins=1;
//  }

if(gameover==1&&player1wins==1){
  textSize(45)
text("Player 1 wins!",300,300,300,300)
}
if(gameover==1&&player2wins==1){
  textSize(45)
text("Player 2 wins!",300,300,300,300)
}
  if(score>highscore){
    highscore=score;
  }
  if(gameover==1){
     for (var i = 0; i < falling.length ; i++){
        falling.get(i).friction = 0; }
  }

//if(player.collide(walls))
  //text("player 2 wins!",400,300)
//}
//if(stopmove)
  //Determined speed for falling block
for (var i = 0; i < falling.length ; i++){
          falling.get(i).addSpeed(.04,90);
  falling.get(i).mass=4;
}

//UPDATE variables here
drawSprites();
player.bounce(walls,resetPlayer);
player2.bounce(walls,resetPlayer2);
//Added text to diplay
  textSize(60);
  text("Score : "+score,50,50);
  textSize(40);
  text("highscore : " +highscore,50,100);
  textSize(13);
  text("Player 1 starting on left use 'WASD', Player 2 starting on right use arrow keys, Attempt to hit your oppenet off the screen!",50,450);
//Determined the way each block will react with other blocks and the walls
player.bounce(player2);
falling.bounce(player);
player2.bounce(falling);
falling.get(0).collide(wall3,respawn);
//falling.collide(wall3);
//ava1.collide(wall3,respawn2);
falling.collide(wall3,respawn2);



    if(keyDown(37)){
//Put what you want to happen when left is pressed in here
player.addSpeed(.2,180);
}
if(keyDown(39)){
//Put what you want to happen when right is pressed in here
player.addSpeed(.2,0);
}
if (keyDown(38)) {
player.addSpeed(.2,270);
}
//Put what you want to happen when up arrow is pressed
if (keyDown(40)){
  player.addSpeed(.2,90);
}
//Put what you want to happen when down arrow is pressed
    if(keyDown(65)){
player2.addSpeed(.2,180);
}
//Put what you want to happen when "A key" is pressed
if(keyDown(68)){
  player2.addSpeed(.2,0);
}
//Put what you want to happen when "D key" is pressed
if(keyDown(87)){
  player2.addSpeed(.2,270);
  }
  //Put what you want to happen when "W key" is pressed
  if(keyDown(83)){
    player2.addSpeed(.2,90);
  }
  //Put what you want to happen when "S key" is pressed
}

//Reset player to middle of screen once it goes outside boundaries
function resetPlayer(spriteA, spriteB) {
//   spriteA.velocity.y=0;
   score = 0;
   player.position.x = 400;
   player.position.y = 300;
   player2.position.x = 400;
   player2.position.y = 300;
   for (var i = 0; i < falling.length ; i++){
             falling.get(i).remove();
}
   falling.add(createSprite(random(800), random(-150), 60,60) );
gameover=1;
player1wins=1;

//gamedone();
// wallHits = wallHits + 1;
}

function resetPlayer2(spriteA, spriteB) {
//   spriteA.velocity.y=0;
   score = 0;
   player.position.x = 400;
   player.position.y = 300;
   player2.position.x = 400;
   player2.position.y = 300;
   for (var i = 0; i < falling.length ; i++){
             falling.get(i).remove();
}
   falling.add(createSprite(random(800), random(-150), 60,60) );
gameover=1;
player2wins=1;

//gamedone();
// wallHits = wallHits + 1;
}

//Makes ava1 go back to top of the screen
function respawn(spriteA, spriteB){
spriteA.position.y=-50;
spriteA.velocity.y=0
 falling.add(createSprite(random(800), random(-150), 60,60) );
score +=1;
 }

 function respawn2(spriteA, spriteB){
 spriteA.position.y=-50;
 spriteA.velocity.y=0
 score += 1;
}
function gamedone(){
  gameover=1;
//  textSize(60);
  //text("Game over",400,300);
    score=0
  }






//function keyPressed(){
//  if(keyCode == ESCAPE)
//{ if(pause == 0){
//  pause=1;
