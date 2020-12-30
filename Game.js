class Game{
constructor(){
}
getState(){
    var gameStateref = database.ref("gameState");
    gameStateref.on("value",function (data) {
    gameState=data.val()    
    })
}
    update(State){
    database.ref('/').update({
    gameState:state
    })
    }
    async start(){
     if (gameState===0){
         player=new Player()
         var playerCountRef=await database.ref('playerCount').once("value")
         if (playerCountRef.exists()){
            playerCount=playerCountRef.val()
         
         player.getCount()
         }
         form=new Form()
         form.display()
         
     }
     car1=createSprite(100,200)
     car2=createSprite(300,200)
     car3=createSprite(500,200)
     car4=createSprite(700,200)  
     car =[car1,car2,car3,car4]
     
    } 
    
    play(){
    form.hide()
    textSize(30)
    fill(0,0,0)
    text("gameStart",120,100)
    Player.getPlayerInfo()

    if(allPlayers!==undefined){
        var index=0
        var x=0
        var y
    //var displayPosition=130

    for(var plr in allPlayers){
       /* if(plr==="player"+player.index)
            fill("red")
        else
            fill("black")
    }
    displayPosition=displayPosition+20
    textSize(15)
    text(allPlayers[plr].name+":"+allPlayers[plr].distace,120,displayPosition)*/
    x=x+200
    y=displayHeight-allPlayers[plr].distace
    car [index].x=x
    car [index].y=y
    index++
    if (index===player.index){
        cars[index].shapeColor=red
    }
    }
    }
    if(keyIsDown=UP_ARROW&&player.index!==null){
        player.distace=player.distace+50
       player.update();

    }

}
}