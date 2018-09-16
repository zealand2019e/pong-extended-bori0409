import { Vector } from "./vector";
import { GameObject } from "./gameObject";
import { GameEngine } from "./index";
import { Collidable } from "./collidable";

export class Ball implements GameObject, Collidable
{
    public height: number;
    public width: number;
    private gameEngine:GameEngine;
    public position:Vector;
    private direction:Vector;
    private speed:number = 60;
    private size:number= 10;

    constructor (position:Vector, gameEngine:GameEngine)
    {
        this.position = position;
        this.direction = new Vector(0.7, 1);
        this.gameEngine = gameEngine;
        this.height = this.size;
        this.width = this.size;
    }

    // ALLE SKAL HAVE EN BOUNDING BOX TIL COLLISION TEST?
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
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
    
    onColliosion(other: GameObject): void {
        if (other == this.gameEngine.player1)
        {
            this.direction.x *= -1;
        }
    }

}