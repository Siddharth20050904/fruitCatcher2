var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;
var resetB;

function preload(){
  back_img = loadImage("jungle.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  distance = 0;
  resetB = createButton("Reset");
  resetB.position(1300,600);
  resetB.mousePressed(()=>{
    gameState = 0;
    game.update(gameState);
    playerCount = 0
    player.updateCount(playerCount);
  })
  fruitGroup = new Group();
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount
  if(playerCount === 2){
    gameState = 1;
    game.update(gameState);
  }
  if(gameState === 1){
    game.play();
  }
  if(player.score >= 10){
    gameState = 2;
    game.update(gameState);
  }
  if(gameState===2){
    game.end();
  }
}