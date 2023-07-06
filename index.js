class Ship {
    constructor (shiphull, firepower, accuracy){
    this.shiphull = shiphull
    this.firepower = firepower
    this.accuracy = accuracy
}
fire(target){
    if(Math.random() < this.accuracy){
        target.shiphull -= this.firepower;
    }
}
}
const maverick = new Ship (22, 5, .7)
console.log(maverick);
// class Aliens extends Ship{
//     constructor(){
//         super(Math.floor(Math.random()*(7-3))+3, Math.floor(Math.random()*(5-2))+2, (Math.random()*(.8-.6))+6);
//         this.shiphull = 3 and 6
//     }
// }
class Aliens{
    constructor(){
        this.ships = []
    }
    addAliens(){
        this.shiphull = Math.round(Math.random()*(6+3)+3) //enemy hull is between 3 and 6
        this.firepower = Math.round(Math.random()*(4-3)+2) //enemy firepower is between 2 and 4
        this.accuracy = Math.round((Math.random()*(.81 -.5) +.6) * 10) / 10 //enemy accuracy is between .6 and .8
        this.ships.push (new Ship (this.shiphull, this.firepower, this.accuracy));
    }
}



let enemyAliens = new Aliens();
enemyAliens.addAliens();
console.log(enemyAliens);



enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();
enemyAliens.addAliens();

console.log(enemyAliens);

const messageToEarthlings= document.getElementById("messageToEarthlings");
const untouched = document.getElementById("untouched");
const destroyed = document.getElementById("destroyed");
const ship = document.getElementById("ship");

// Attack 
const attackAliens = () =>{
    let enemyFleet = enemyAliens.ships;
    for(let i=0; i<enemyAliens.ships.length; i++){
        // need to check if our ship is destroyed, if destroyed: game over, if not: keep fighting
        if (maverick.shiphull <=0){
             console.log("Game over, your ship has been destroyed!");
             messageToEarthlings.innerHTML= "Game over, your ship has been destroyed"
             break;
        }
    
        while (maverick.shiphull > 0 || enemyFleet[i].shiphull > 0 ){
            console.log(maverick.shiphull);
            console.log(enemyAliens.ships[i]);
            if (Math.random ()< maverick.accuracy){
                enemyAliens.ships[i].shiphull = enemyAliens.ships[i].shiphull - maverick.firepower
            } 
            // need to check if enemy Alien ships are destroyed, if yes then break and gotoo the next ship and restart teh next battle
            if (enemyAliens.ships[i].shiphull <= 0){
                console.log("Hooray enemy Aliens have been destroyed");
                messageToEarthlings.innerHTML="Hooray enemy Aliens had been destroyed"
                break;

            }
            if (Math.random() < enemyAliens.ships[i].accuracy) {
                maverick.shiphull = maverick.shiphull -enemyAliens.ships[i].firepower
                console.log(maverick.shiphull+"maverick has been attacked");
            }
            if (maverick.shiphull <= 0){
                console.log("Game Over, your ship has been destroyed");
                messageToEarthlings.innerHTML="Game Over, your ship has been destroyed"
                break;
            }

       
        }


    }
    if(maverick.shiphull >0){
        console.log("You saved the Universe");
        untouched.style.display=("none");
        destroyed.style.display=("block");
    }
    else{
        console.log("Earth has been destroyed!");
        ship.style.display=("none");
    }

    
}

console.log(maverick);
const startButton=document.getElementById("start-game");
startButton.addEventListener("click",(event)=>{
    let count = 0;
    console.log(event.target);
    attackAliens();
   
    
    
})

const restartGame=document.getElementById("restartGame");
restartGame.addEventListener("click",(event)=>{
    location.reload()

})










