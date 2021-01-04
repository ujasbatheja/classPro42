class Form{
    constructor(){
         this.input = createInput("name");
         this.button = createButton("play");
         this.greeting = createElement("h3");
         this.resetButton = createButton("reset");
    }
    hide(){
      this.greeting.hide();
      this.button.hide(); 
      this.input.hide();  
    }
    restart(){

    }
    display(){
        var title = createElement('h2');
        title.html("car racing game");
        title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40, displayHeight/2-80);
        this.button.position(displayWidth/2+30, displayHeight/2);
        this.button.mousePressed(()=>
            {
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount
            player.updatePlayerInfo();
            player.updatePlayerCount(playerCount);
            this.input.hide();
            this.button.hide();
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2-70, displayHeight/4);
        })
        this.resetButton.position(displayWidth-100, 20);
        this.resetButton.mousePressed(()=>
            {
                Player.deletePlayerInfo();
                player.updatePlayerCount(0);
                game.setGameState(0);
                game.setCarAtEnd(0);
                //database.ref("carAtEnd").remove()
            }) 
      }
}