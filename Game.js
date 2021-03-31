class Game{
     constructor(){

     }

getState(){
   var gameStateref = database.ref('gameState');
   gameStateref.on("value", function(data){
       gameState = data.val();

   })
}

update(state){
    database.ref('/').update({
        gameState:state
    })
}

async start(){
    if(gameState===0){
        player = new Player();
        var playerCountref = await database.ref('playerCount').once("value");
        if (playerCountref.exists()){
            playerCount = playerCountref.val();
            player.getCount();
        }
        
        form = new Form();
        form.display();
        
    }
}

play(){
    form.hide();
    text("Game starts...3 2 1",120,100);
    Player.getplayerinfo();

   
    if (allplayers !== undefined){
        var displayposition = 130;

        for(var plr in allplayers){
            if(plr === "player" + player.index)
            fill("red");
            else
            fill("black");

            displayposition = displayposition+30;
        text(allplayers[plr].name+": " + allplayers[plr].distance, 120,displayposition);   
        }       
    }

    if (keyIsDown("up") && player.index !== null){

        player.distance = player.distance+50;
        player.update();

    }
}
    }