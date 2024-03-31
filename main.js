import './style.css'
import p5 from 'p5';


new p5((p) => {
  p.setup = () => {
    
    p.createCanvas(400, 400, 0, 0);
  };

  p.draw = () => {
    p.background(200);
    let mX = p.mouseX;
    let mY = p.mouseY
    // p.draw();
    let circle = p.ellipse(Math.min(mX, 400), Math.min(mY, 400), 10, 10);
  
    // circle.background('red')
    // circle.background('red');
  

    // Your drawing code goes here
  };
});
