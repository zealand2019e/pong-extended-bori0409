export class Listener
{
    public aKey: boolean = false;

    constructor()
    {
        window.addEventListener('keydown', this.keyDown, false);
        window.addEventListener('keyup', this.keyUp, false);
    }

    private keyDown(event:KeyboardEvent): void
    {
        console.log("KeyDown");
        this.aKey = true;
    }

    private keyUp(event: KeyboardEvent): void
    {
        this.aKey = false;
    }
}