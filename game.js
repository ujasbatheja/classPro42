class Game{
    constructor(){
        
    }
    getGameState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data)
        {
            gameState = data.val();
        })
        console.log("getGameState"+gameState);
    }
    setGameState(state){
        database.ref("/").update({
            gameState: state
        })
        console.log("setGameState"+state);
    }
    setCarAtEnd(rank){
        database.ref("/").update({
            carAtEnd: rank
        })
        console.log("setGameState"+state);
    }
    start(){
        if (gameState===0){
            console.log("startingGame");
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage("car1",carImage1);
        car2 = createSprite(300,200);
        car2.addImage("car2",carImage2);
        car3 = createSprite(500,200);
        car3.addImage("car3",carImage3);
        car4 = createSprite(700,200);
        car4.addImage("car4",carImage4);
        cars = [car1, car2, car3, car4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();

        player.getPlayerRank();
        if (allPlayers!==undefined){
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
            var display_position = 130;
            var index = 0;
            var carIndex = 0;
            var x = 150;
            var y=displayHeight-50
            for(var plr in allPlayers){
                carIndex = index; 
                index = index+1;
                x=x+250;             
                y = displayHeight-allPlayers[plr].distance-100;
                //console.log("x: "+x+" y: "+y);
                cars[carIndex].x=x;
                cars[carIndex].y=y; 
                if(index===player.index){
                    stroke(10);
                    fill("white");
                    ellipse(x,y,100,100);
                    cars[carIndex].shapeColor="red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[carIndex].y;
                }
                //display_position+=20;
                //textSize(15);
                //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
            }
        }
        if (keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50;
            player.updatePlayerInfo();
        }
        if(player.distance>4050){
            gameState = 2;
            this.setGameState(2);
            player.rank = player.rank+1;
            console.log("playerRank"+player.rank);
            Player.updatePlayerRank(player.rank);
        }

        drawSprites();
    }

    end(){
        console.log("gameOver"+"your rank is"+player.rank);
        form.restart();
    }
}