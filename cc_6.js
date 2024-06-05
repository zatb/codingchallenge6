//U36432650

//Implement a JavaScript constructor class named Ball. Initialize properties such as x, y, radius, dx (change in x-coordinate), dy (change in y-coordinate), and color.
    class Ball {
        constructor(x, y, radius, dx, dy, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.dx = dx;
            this.dy = dy;
            this.color = color;
        }
//Implement a method within the Ball constructor to draw the ball on the canvas using its current properties.
        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }
