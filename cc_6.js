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
//Implement an update method that handles the ball's movement. This should include logic to reverse the ball’s direction upon hitting the canvas sides (collision detection).
        update(canvas) {
             if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
    }
//Use setInterval to continuously update the ball's position and redraw it on the canvas, creating the animation effect. Choose a suitable interval for smooth animation.
    const canvas = document.getElementById('ballCanvas');
    const ctx = canvas.getContext('2d');
    
    const ball = new Ball(200, 160, 20, 2, 2, 'red');
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ball.draw(ctx);
        ball.update(canvas);
    }
    
    setInterval(animate, 10);
    