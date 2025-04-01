function setup() {
    createCanvas(400, 400);
    background(220);
  
    for (let i = 0; i < 10; i++) {
      let x = random(width);
      let y = random(height);
      let d = random(10, 100); // 무작위 크기 설정
      
  
      ellipse(x, y, d, d);
    }
  }