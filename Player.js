class Player{
    constructor(){
        this.name = null;
        this.index = 0;
        this.distance = 0;
        this.rank = 0;
    }

    getPlayerCount(){
        database.ref('playerCount').on("value", function (data){
            playerCount = data.val();
            console.log(playerCount);
        });
    }

    updatePlayerCount(count){
        database.ref('/').update({playerCount: count});
    }

    updatePlayerInfo(){
        console.log("update");
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({name: this.name, distance: this.distance, index: this.index, rank: this.rank})
    }

    static getPlayerInfo(){
        database.ref('players').on("value", function (data){
            allPlayers = data.val();
            console.log(allPlayers);
        });
    }

    getCarsAtEnd(){
        database.ref('carsAtEnd').on("value", (data)=>{
            this.rank = data.val();
            console.log(this.rank);
        });
    }

    updateCarsAtEnd(rank){
        database.ref('/').update({carsAtEnd : rank});
    }
}