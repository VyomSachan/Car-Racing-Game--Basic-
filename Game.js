class Game{
    constructor(){

    }

    getGameState(){
        database.ref('gameState').on("value", function (data){
            gameState = data.val();
            console.log(gameState);

            if(gameState == 0){
                player = new Player();
                player.getPlayerCount();

                form = new Form();
                form.display();
            }
        })

        car1 = createSprite(380, 400);
        car1.addImage(car1_img);

        car2 = createSprite(580, 400);
        car2.addImage(car2_img);

        car3 = createSprite(780, 400);
        car3.addImage(car3_img);

        car4 = createSprite(980, 400);
        car4.addImage(car4_img);

        cars = [car1, car2, car3, car4];
    }

    updateGameState(state){
        database.ref('/').update({gameState : state});
    }

    play(){
        imageMode (CENTER);
        image (track_img, width/2, height/2, width, height*50);

        form.hide();
        Player.getPlayerInfo();
        player.getCarsAtEnd();

        var y_ = 250;
        var index = 0;
        var x = 380;
        var y = 0;

        for(var plr in allPlayers){
            cars[index].x = x;
            y = height - allPlayers[plr].distance;
            cars[index].y = y;
            index += 1;

            if(index == player.index){
                camera.position.y = cars[index - 1].y;
                camera.position.x = width/2;
                //cars[index - 1].shapeColor = "red";

                fill ("red");
                circle(x, y, 60);
            }

            x += 200;
            
            text(allPlayers[plr].name + "  " + allPlayers[plr].distance, 250, y_);
            y_ += 50;
        }

        if(keyIsDown(UP_ARROW)){
            player.distance += 50;
            player.updatePlayerInfo();
        }

        if(player.distance >= 15000){
            gameState = 2;

            player.rank ++;

            player.updatePlayerInfo();
            player.updateCarsAtEnd(player.rank);
        }
    }

    end(){
        console.log("GAME OVER !!!");

        textSize(30);
        textAlign (CENTER);
        text("GAME OVER !!!", width/2, height - player.distance - 20);

        text("Your rank is:"  + player.rank ,width/2, height - player.distance - 60);
    }
}