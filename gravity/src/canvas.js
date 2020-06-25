// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})
// Resize
addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Object(obj) {
    this.x = obj.x
    this.y = obj.y
    this.dx = obj.dx
    this.dy = obj.dy
    this.radius = obj.radius
    this.color = obj.color
    this.friction = obj.friction;
    this.gravity = obj.gravity;
}

Object.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill();
    c.closePath();
}

Object.prototype.update = function() {
    // console.log(this.dy);
       if (this.y + this.radius + this.dy> canvas.height) {
        // UP
            this.dy = -this.dy;

// 
            this.dy = this.dy * friction;
            this.dx = this.dx * friction;
        } else {
            this.dy = this.dy + gravity;
        }

        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
            this.dx = -this.dx * friction;
        }

        this.y += this.dy;


        this.x += this.dx;
        this.draw();
}

// Implementation
let objects
var gravity = 2;
var friction = 0.98;


function init() {
    objects = []



    for (let i = 0; i < 10000; i++) {
        var radius = randomIntFromRange(8, 20);
        var x = randomIntFromRange(radius, canvas.width - radius);
        var y = randomIntFromRange(0, canvas.height - radius);
        var dx = randomIntFromRange(-3, 3);
        var dy = randomIntFromRange(-2, 2);

        var color = randomColor(colors);
        console.log(x);
        var newObj = new Object({x : x, y : y, dx : dx , dy : dy , radius : radius, color : color, gravity : gravity,friction: friction})
        objects.push(newObj);
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    // newObj.update();
    objects.forEach(object => {
     object.update();
    });
}

init()
animate()



/*Function*/


// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
} 
