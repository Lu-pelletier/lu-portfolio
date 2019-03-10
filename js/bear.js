function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  var mouseXD = mouseX - (width/2);
  var mouseYD = mouseY - (height/2);

  background(0);

  egg(width/2, height/2,PI,1,color(138, 59, 142),100, 2, mouseXD, mouseYD); // head //Violet
  egg(width/2, height/2+10,0,0.4,255,100, 4, mouseXD, mouseYD); //nose

  //eyes
  egg(width/2-50, height/2-35,PI/3,0.08,color(255),100, 2, mouseXD, mouseYD);
  egg(width/2+50, height/2-35,-PI/3,0.08,color(255),100, 2, mouseXD, mouseYD);

  //ears
  egg(width/2-95, height/2-65,-PI/4,0.2,color(138, 59, 142),100, -1, mouseXD, mouseYD); //Violet
  egg(width/2+95, height/2-65, PI/4,0.2,color(138, 59, 142),100, -1, mouseXD, mouseYD); //Violet

  fill(138, 59, 142);
  ellipse(width/2 + (mouseXD * 0.08), height/2-20 + (mouseYD *0.08),40,23);

  //nostrils // todo : these need clipping.
  fill(255);

  ellipse((width/2-15) + mouseXD * 0.08, (height/2-10) + mouseYD *0.08,20,20);
  ellipse((width/2+15) + mouseXD * 0.08, (height/2-10) + mouseYD *0.08,20,20);

  //Mouth
  fill(138, 59, 142); //Violet
  ellipse((width/2) + mouseXD *0.08,(height/2+24) + mouseYD *0.08,60,30);
}

//ref - https://cdn.dribbble.com/users/31664/screenshots/1525046/cub-studio-logos-retime-2.gif


function egg(posx,posy,ang,size,val,x, depth) {
  fill(val);
  noStroke(0);
  //egg
  push();
  translate(posx + (mouseX-(width/2)) * (depth/100), posy + (mouseY-(height/2)) * (depth/100));
  rotate(ang);
  scale(size);
  arc(0, 0, 2*x, 1.5*x, 0, PI);
  arc(-x, 0, 4*x, 4*x, 7*PI*.25, 2*PI);
  arc(x, 0, 4*x, 4*x, PI, 5*PI*.25);
  arc(0, -x, (((2*x *sin (radians (45)))-x)/ sin (radians (45)))*2, (((2*x *sin (radians (45)))-x)/ sin (radians (45)))*2, 5*PI*.25, 7*PI*.25 );
  pop();
}
