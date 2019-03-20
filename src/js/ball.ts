import { Vector } from "./vector";
import { GameObject } from "./gameObject";
import { GameEngine } from "./index";
import { Player } from "./player";

export class Ball implements GameObject
{
    public height: number;
    public width: number;
    private gameEngine:GameEngine;
    public position:Vector;
    private direction:Vector;
    private speed:number = 60;
    private size:number= 10;
    // private colorInc:number=1;
    private color:string = "#aaaaaa";

    //point som gives til spilleren når denne bold rammes
    public point:number =1;

    //antal hit som bolden har fået
    public hit:number = 0;


    //position giver positionen på canvas
    //direction giver hvilken vej bolden skal rulle
    //gameEngine
    //colorInc er tallet som bestemmer hvilken farve bolden sakl have
    constructor (position:Vector, direction:Vector, gameEngine:GameEngine,private colorInc:number)
    {
        this.position = position;
        this.direction = direction;//new Vector(xdir, 1);
        this.gameEngine = gameEngine;
        this.height = this.size;
        this.width = this.size;
        this.color = this.changeColor(); //ændre værdien af variablen color så bolden starter med forskellige farver
        
    }

    // Update method takes care of all logic
    update(time: number): void {
        //testing for collisions with walls -> change direction
        if (this.position.x <=0 ||this.position.x >= this.gameEngine.canvasWidth-this.size) this.direction.x *= -1;
        if (this.position.y <=0 ||this.position.y >= this.gameEngine.canvasHeight-this.size) this.direction.y *= -1;

        //testing for Collision with any gameobject
        this.gameEngine.objects.forEach(elegameobj => {
           
    
        });
               
        this.position.x += this.direction.x * this.speed * time/1000;
        this.position.y += this.direction.y * this.speed * time/1000;
    }
    

    //function som returnerer en farve ud fra 
    //værdien af variablen colorInc
    changeColor():string{
        if(this.colorInc == 1)
        {
            this.colorInc++;
            this.point = 5;
            return "green";
        }
           
        else if (this.colorInc == 2)
           {
            this.colorInc++;
            this.point = -2;
            return "blue";
           }   
           else
           {
            this.colorInc=1;
            this.point = 10;
            return "red";
           
           }

    }

    // draw ball on canvas
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color; //sætter farven ud fra værdien af variablen color
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
    
    // in case of any collision this method is called
    onCollision(other: GameObject): void {
        // reverse direction if player collides with ball
        if (other == this.gameEngine.player1 || other instanceof Ball)
        {
            this.direction.x *= -1;
            this.color = this.changeColor(); //ændre værdien af variablen color
        }
        if(other instanceof Player)
        {
            //optæller hit som bolden har haft når den rammer brugeren.
            this.hit++;
            console.log(`hit: ${this.hit}`)
            
        }
        
    }

}