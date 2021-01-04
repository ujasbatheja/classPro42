var gameState = 0;
var playerCount = 0;
var form, player, game;
var database;
var allPlayers;
var distance = 0;
var car1,car2,car3,car4;
var cars;
var carImage1, carImage2, carImage3, carImage4;
var trackImage;

function preload(){
    carImage1 = loadImage("images/car1.png");
    carImage2 = loadImage("images/car2.png");
    carImage3 = loadImage("images/car3.png");
    carImage4 = loadImage("images/car4.png");

    trackImage = loadImage("images/track.jpg");
}

function setup(){
    createCanvas(displayWidth-20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();
    console.log(database);
}

function draw(){
    background("white");
    if (playerCount===4&&gameState===0){
        game.setGameState(1);
    }
    
    if(gameState===1){
        game.play();
    }

    if(gameState===2){
        game.end();
        console.log("you have finished the end line");
    }
    
}