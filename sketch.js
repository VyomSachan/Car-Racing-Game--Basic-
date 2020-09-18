var database, gameState, playerCount;
var game, player, form;
var allPlayers;
var resetButton;
var car1, car2, car3, car4, cars;
var car1_img, car2_img, car3_img, car4_img, track_img;

function preload(){
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  track_img = loadImage("images/track.jpg")
}

function setup(){
  createCanvas(displayWidth + 120, displayHeight - 100);

  database = firebase.database();
  //console.log();

  game = new Game();
  game.getGameState();

  //player  = new Player();
  //player.getCarsAtEnd();

  resetButton = createButton("reset");
  resetButton.position(250, 100);
}

function draw(){
  imageMode (CENTER);
  image (track_img, width/2, height/2, width, height*50);

  if(playerCount == 4){
    game.updateGameState(1);
  }
  if(gameState == 1){
    clear();
    game.play();
  }
  if(gameState == 2){
    game.end();
  }

  resetButton.mousePressed(reset);

  drawSprites();
}

function reset(){
  game.updateGameState(0);
  player.updatePlayerCount(0);
  player.updateCarsAtEnd(0);

  database.ref('players').remove();
}