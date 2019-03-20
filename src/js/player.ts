import { Vector } from "./vector";
import { GameObject } from "./gameObject";
import { GameEngine } from "./index";
import { Ball } from "./ball";

export class Player implements GameObject
{   
    public score:number = 0;
    public position:Vector 
    private gameEngine:GameEngine;

    private speed:number = 40;
    public height:number = 30;
    public width:number =10;
    public HighScore:number = 0;

    constructor(position:Vector, gameEngine:GameEngine)
    {
        this.position = position;
        this.gameEngine = gameEngine;
    }

    update(time: number): void {
        if (this.gameEngine.aKey)
        {
            //move down
            this.position.y += time/1000 * this.speed 
        }
        if (this.gameEngine.qKey)
        {
            //move up
            this.position.y -= time/1000 * this.speed
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    onCollision(other: GameObject): void {
        let ball:Ball = <Ball> other;

        this.score += ball.point;
    console.log(`score: ${this.score}`)
        this.HighScore++;
        // not doing anything at the moment...
    }
}