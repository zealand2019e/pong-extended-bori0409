import {Vector} from './vector';
import { GameObject } from './gameObject';

/*
    this class makes a fps counter to show how often the game refreshes
*/
export class Framerate implements GameObject
{
    height: number;
    width: number;
    onColliosion(other: GameObject): void {
    }
   
    constructor(position: Vector)
    {
        this.position = position;
    }

    public position:Vector;
    private time: number;
    update(time: number): void {
        this.time = time;
    }


    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#ffffff";
        ctx.fillText(""+Math.round(1000/this.time) + "fps", this.position.x, this.position.y);

    }

}