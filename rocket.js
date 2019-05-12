function Rocket(dna) {
  this.pos = createVector(width / 2, height);
  this.vel = createVector();
  this.acc = createVector();
  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }
  this.fitness;
  this.matingPool = [];
  this.crashed = false;



  this.applyFroce = function (force) {
    this.acc.add(force);
  }

  this.update = function () {

    if (this.pos.x > ox && this.pos.x < ox + ow && this.pos.y > oy && this.pos.y < oy + oh) {
      this.crashed = true;
    }
    if (this.pos.x > width || this.pos.x < 0) {
      this.crashed = true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.crashed = true;
    }
    this.applyFroce(this.dna.genes[count]);
    if (!this.crashed) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit(4);
    }

  }

  this.show = function () {
    push();
    noStroke();
    fill(255, 150);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 50, 10);
    pop();

  }

  this.calcFitness = function () {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    this.fitness = map(d, 0, width, width, 0);

    if (this.crashed) {
      this.fitness /= 10;
    }

  }
}