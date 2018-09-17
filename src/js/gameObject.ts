import { Vector } from "./vector";

/*
    Any Item in the game must have this interface implemented
*/
export interface GameObject 
{
    position:Vector;
    height: number;
    width:number;

    // leave this method empty in your objects if nothing should happen on collision
    // both item in the collision will be notified through this method
    onColliosion(other:GameObject):void;

    update(time: number) : void;
    draw(ctx:CanvasRenderingContext2D) : void;
}