function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("#9C27B0");
    fill("#03A9F4");
    
    console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 10, 20);
    }
  }
  