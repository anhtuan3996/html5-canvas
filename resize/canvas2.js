console.log('hello');

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create canvas cotnet
var c = canvas.getContext('2d');


var mouse = {
	x : undefined,
	y : undefined
};

// Event mouse move
window.addEventListener('mousemove', (event) => {
	mouse.x = event.x;
	mouse.y = event.y;
})


// Event resize
window.addEventListener('resize', ()=> {
	canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
	init();
})


function Circel (obj) {
	this.x = obj.x;
	this.y = obj.y;
	this.dx = obj.dx;
	this.dy = obj.dy;
	this.color = obj.color;
	this.radius = obj.radius;
	this.minRadius = obj.minRadius;
	this.maxRadius = obj.maxRadius;

	this.draw = function() {
		
		
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = this.color;
		c.stroke();
		// full
		c.fillStyle = this.color;
		c.fill();
	},
	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = - this.dx;

		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = - this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw();

		// interactivity
		if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
			
			if(this.radius < this.maxRadius) {
				this.radius +=1;
			}
		}else if(this.radius > this.minRadius) {
			this.radius -=1;
		}
	
	}
}


var arrCircel = [];

// Generate circel
function init() {
	arrCircel = [];
	for (var i = 0; i < 1000; i++) {
		var radius = Math.random() * 3 + 1;
		var x = (Math.random() * innerWidth) + (radius  * 2) - radius;
		var y = (Math.random() * innerHeight) + (radius  * 2) - radius;
		var dx = Math.random() - 0.5;
		var dy = Math.random() - 0.5;
		var color = '#' + Math.random().toString().slice(2, 8);
		arrCircel.push(new Circel({x: x, dx : dx, y: y, dy: dx, radius: radius, color : color, minRadius : 2, maxRadius : 50}));
	}
}
init();

// Animation
function animate() {
	// Chuyển động loop(callback)
	requestAnimationFrame(animate);
	// clear rect
		// xóa các điểm ảnh cụ thể trong một hình chữ nhật cho trước.
		// context.clearRect(x,y,width,height);
		c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 1; i < arrCircel.length; i++) {
		arrCircel[i].update();
	}
	
}
animate();




