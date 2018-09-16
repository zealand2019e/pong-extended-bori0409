import { Vector } from "./vector";

export interface GameObject 
{
    position:Vector;
    height: number;
    width:number;

    onColliosion(other:GameObject):void;

    update(time: number) : void;
    draw(ctx:CanvasRenderingContext2D) : void;
}