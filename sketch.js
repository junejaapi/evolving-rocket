var population;
var lifeSpan = 400;
var lifeP;
var count = 0;
var target;
var maxforce = 0.3;

var ox = 100;
var oy = 150;
var ow = 200;
var oh = 10;


function setup() {
	createCanvas(500, 600);
	population = new Population();
	lifeP = createP();
	target = createVector(width / 2, 50);
}


function draw() {
	background(0);
	population.run();
	lifeP.html(count);
	count++

	rect(100, 150, 200, 10);
	ellipse(target.x, target.y, 16, 16);

	if (count == lifeSpan) {
		population.evaluate();
		population.selection();
		count = 0;
	}

}