// setup() is called once at page-load
function setup() {
    createCanvas(2000,2000); // make an HTML canvas element width x height pixels
    // stroke('#443a38');
    strokeWeight(1);
    noFill();
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
    // textSize(32);
    // fill(180);
    // text(hr, 10, 30);
    // fill(100);
    // text(min, 10, 60);
    // fill(0);
    // text(sec, 10, 90);

    noFill();
    // Draw the annual ring
    // for (let i = 0; i < sec; i++) {
    //     let radius = i * 10;
    //     ellipse(width / 2, height / 2, radius * 2, radius * 2);
    // }

    let scale = 40;
    let resolution = 0.007;
    let numPoints = 20000;

    let radius = sec * 10;
    stroke('#81abaa');
    for (r = 1; r < radius; r += radius / sec +tan(r)/3) {
        strokeWeight(random(1,2),random(255));
        beginShape();
        for (a = -TAU/numPoints; a < TAU+TAU/numPoints; a += TAU / numPoints) {
          var x = width*2/3 + r * cos(a);
          var y = height*2/3 + r * sin(a);
    
          var n = noise(x * resolution, y * resolution);
          var n2 = noise(x*resolution*5, y*resolution*5);
          var noi = map(n, 0, 1, -scale, scale);
          var noi2 = map(n2, 0, 1, -scale/12, scale/12);
          var noi = noi+noi2
    
          curveVertex(x + noi, y + noi);
    
          if(random()>0.4-0.25*sin(noi/10+a+r/10)+0.2*sin(r/5)){
            endShape();
            beginShape();
          }
        }
        endShape();
      }


    let radiusHr = hr * 20;
    stroke('#ef594b');
    for (r = 18; r < radiusHr; r += radiusHr / hr + tan(r)/3) {
        strokeWeight(random(1.5,2.5),random(255));
        beginShape();
        for (a = -TAU/numPoints; a < TAU+TAU/numPoints; a += TAU / numPoints) {
          var x = width/2 + r * cos(a);
          var y = height/4 + r * sin(a);
    
          var n = noise(x * resolution, y * resolution);
          var n2 = noise(x*resolution*5, y*resolution*5);
          var noi = map(n, 0, 1, -scale, scale);
          var noi2 = map(n2, 0, 1, -scale/12, scale/12);
          var noi = noi+noi2
    
          curveVertex(x + noi, y + noi);
    
          if(random()>0.4-0.25*sin(noi/10+a+r/10)+0.2*sin(r/5)){
            endShape();
            beginShape();
          }
        }
        endShape();
      }


      let radiusMin = min * 10;
      stroke('#443a38');
      for (r = 5; r < radiusMin; r += radiusMin / min +tan(r)/3) {
          strokeWeight(random(1,2),random(255));
          beginShape();
          for (a = -TAU/numPoints; a < TAU+TAU/numPoints; a += TAU / numPoints) {
            var x = width/3 + r * cos(a);
            var y = height*2/3 + r * sin(a);
      
            var n = noise(x * resolution, y * resolution);
            var n2 = noise(x*resolution*5, y*resolution*5);
            var noi = map(n, 0, 1, -scale, scale);
            var noi2 = map(n2, 0, 1, -scale/12, scale/12);
            var noi = noi+noi2
      
            curveVertex(x + noi, y + noi);
      
            if(random()>0.4-0.25*sin(noi/10+a+r/10)+0.2*sin(r/5)){
              endShape();
              beginShape();
            }
          }
          endShape();
        }
        // noloop();
}