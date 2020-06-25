console.log('hello');

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Create canvas cotnet
var c = canvas.getContext('2d');

// X,Y TỌA ĐỘ
// c.fillRect(x, y, width, height); x-ngang, y dọc

// Hình chữ nhật (rectangle)
c.fillStyle = 'red';
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 300, 100, 100);
c.fillRect(500, 100, 100, 100);
console.log(canvas);


// Line
c.beginPath();

// Tọa độ
// c.moveTo(x,y);
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400,300);
c.strokeStyle = "#fa34a3";
c.stroke();

// Arce/ circle
/*
Phương thức arc () tạo đường cong / đường cong
 (được sử dụng để tạo vòng tròn, hoặc các phần của hình tròn).
*/

/*
context.arc(x,y,r,sAngle,eAngle,counterclockwise);
- X : The x-coordinate of the center of the circle
- Y : The y-coordinate of the center of the circle
- r : The radius of the circle
- sAngle : The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
- eAngle : The ending angle, in radians
- counterclockwise : Optional. Specifies whether the drawing should be counterclockwise or clockwise.
 False is default, and indicates clockwise, while true indicates counter-clockwise.
*/

c.beginPath();
c.arc(300, 400, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
for (var i = 1; i < 1000; i++) {
	var x = Math.random()* innerWidth;
	var y = Math.random()* innerHeight;
	var color = Math.random().toString().slice(2,8);
	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI * 2, false);
	c.strokeStyle = '#'+color;
	c.stroke();
}




