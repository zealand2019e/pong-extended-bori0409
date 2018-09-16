export class Vector
{
    constructor(x: number, y:number)
    {
        this.x = x;
        this.y = y;
    }

    public x:number;
    public y:number

    flipDirection()
    {
        this.x = this.x*-1;
        this.y = this.y*-1;
    }
}