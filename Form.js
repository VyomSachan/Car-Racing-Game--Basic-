class Form{
    constructor(){
        this.title = createElement('h1');
        this.input = createInput('Name');
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    }

    display(){
        this.title.html('Car Racing Game');
        this.title.position(250, 100);

        this.input.position(250, 170);

        this.button.position(250, 200);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            
            this.greeting.html('Hello '+ player.name);
            this.greeting.position(250, 170);

            playerCount ++;
            player.index = playerCount;
            player.updatePlayerCount(player.index);

            player.updatePlayerInfo();
        })
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
}