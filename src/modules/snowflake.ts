import { Color } from "p5";

export class Flake {
    /** x-position of the flake's center */
    public x: number;
    /** y-position of the flake's center */
    public y: number;
    /** flake's diameter in pixels */
    public size: number;
    /** color of the flake. Can be any acceptable color string. */
    public col: p5.Color; // default value
    /** speed in x direction of the flake. */
    public speedX: number;
    /** speed in y direction of the flake. positive is DOWN. */
    public speedY: number;

    constructor(
        x: number,
        y: number,
        size: number,
        col: p5.Color = color("red"),
        speedX: number = Math.random() * 10 - 5,
        speedY: number = Math.random() * 10 - 5,
        borderColor: p5.Color = color("black"),
    ) {
        // We want to set the properties of the SPECIFIC OBJECT we are building. This is a common pattern.
        // the standalone `x` on the right side returns to the x from this function - the one called in.
        // `this.x` refers to the value of x we declared above - the PROPERTY - of this particular ball.
        this.x = x;
        this.y = y;
        this.size = size;
        this.col = col;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    public draw() {
        const r: number = this.size / 2;
        line(this.x, this.y - r, this.x, this.y + r);
        line(this.x - r, this.y, this.x + r, this.y);
        line(this.x - (r / 1.5), this.y - (r / 1.5), this.x + (r / 1.5), this.y + (r / 1.5));
        line(this.x + (r / 1.5), this.y - (r / 1.5), this.x - (r / 1.5), this.y + (r / 1.5));
    }
    public move(): void {
        {
            this.y = this.y + 1;
            this.x = this.x + random(1, 3);

            if (this.y > height + this.size / 2) {
                this.y = -this.size / 2;
            }
            if (this.x > width + this.size / 2) {
                this.x = -this.size / 2;
            }
        }
        function randomColor(): p5.Color {
            return color(random(255), random(255), random(255));
        }
    }
}
