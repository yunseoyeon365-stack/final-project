function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  // 배경 - 밝은 하늘색
  background(200, 230, 255);
  
  // 뒷머리 전체
  drawHairBack();
  
  // 목
  drawNeck();
  
  // 야구점퍼 (몸통)
  drawJacket();
  
  // 얼굴
  drawFace();
  
  // 귀
  drawEars();
  
  // 눈썹
  drawEyebrows();
  
  // 눈
  drawEyes();
  
  // 코 (요청한 각진 '>' 모양)
  drawNose();
  
  // 입
  drawMouth();
  
  // 앞머리 (눈썹을 가리는 일자 앞머리)
  drawBangs();
}

function drawHairBack() {
  fill(45, 35, 30);
  noStroke();
  beginShape();
  vertex(300, 100);
  bezierVertex(350, 100, 390, 130, 400, 200);
  bezierVertex(405, 240, 400, 290, 390, 330);
  bezierVertex(385, 350, 380, 360, 370, 360);
  bezierVertex(360, 345, 350, 325, 340, 315);
  vertex(320, 360);
  vertex(300, 365);
  vertex(280, 360);
  vertex(260, 315);
  bezierVertex(250, 325, 240, 345, 230, 360);
  bezierVertex(220, 360, 215, 350, 210, 330);
  bezierVertex(200, 290, 195, 240, 200, 200);
  bezierVertex(210, 140, 250, 100, 300, 100);
  endShape(CLOSE);
  fill(75, 65, 60, 160);
  ellipse(270, 130, 50, 40);
  ellipse(330, 125, 45, 35);
  ellipse(300, 300, 60, 30);
}

function drawNeck() {
  fill(255, 218, 185);
  noStroke();
  beginShape();
  vertex(275, 270);
  vertex(275, 330);
  bezierVertex(275, 336, 290, 338, 300, 338);
  bezierVertex(310, 338, 325, 336, 325, 330);
  vertex(325, 270);
  endShape(CLOSE);
}

function drawJacket() {
  fill(40, 50, 100);
  noStroke();
  beginShape();
  vertex(220, 320);
  vertex(260, 305);
  vertex(280, 310);
  vertex(280, 400);
  vertex(200, 400);
  vertex(200, 340);
  endShape(CLOSE);
  fill(25, 35, 70);
  beginShape();
  vertex(220, 320);
  vertex(230, 340);
  vertex(230, 400);
  vertex(200, 400);
  vertex(200, 340);
  endShape(CLOSE);
  fill(40, 50, 100);
  beginShape();
  vertex(380, 320);
  vertex(340, 305);
  vertex(320, 310);
  vertex(320, 400);
  vertex(400, 400);
  vertex(400, 340);
  endShape(CLOSE);
  fill(25, 35, 70);
  beginShape();
  vertex(380, 320);
  vertex(370, 340);
  vertex(370, 400);
  vertex(400, 400);
  vertex(400, 340);
  endShape(CLOSE);
  fill(45, 60, 110);
  noStroke();
  rect(280, 310, 40, 90);
  fill(30, 40, 80);
  rect(280, 310, 12, 90);
  fill(60, 80, 140);
  rect(295, 320, 8, 70);
  rect(312, 320, 6, 70);
  fill(35, 45, 90);
  triangle(285, 310, 300, 295, 295, 320);
  triangle(315, 310, 300, 295, 305, 320);
  stroke(60, 75, 130);
  strokeWeight(2);
  line(285, 310, 300, 295);
  line(315, 310, 300, 295);
  noStroke();
  fill(180, 180, 200);
  rect(298, 310, 4, 90);
  fill(150, 150, 170);
  for (let i = 0; i < 6; i++) {
    rect(296, 320 + i * 13, 8, 3);
  }
}

function drawFace() {
  fill(255, 218, 185);
  noStroke();
  beginShape();
  vertex(300, 150);
  bezierVertex(330, 150, 355, 170, 360, 200);
  bezierVertex(363, 230, 355, 250, 340, 260);
  bezierVertex(325, 268, 310, 270, 300, 270);
  bezierVertex(290, 270, 275, 268, 260, 260);
  bezierVertex(245, 250, 237, 230, 240, 200);
  bezierVertex(245, 170, 270, 150, 300, 150);
  endShape(CLOSE);
  // 이마 하이라이트 제거: 아무것도 추가하지 않음
  // 턱 그림자/입 주변 음영 제거: 아무것도 추가하지 않음
  // 블러셔는 유지(원치 않으면 주석)
  fill(255, 180, 180, 120);
  ellipse(260, 225, 28, 20);
  ellipse(340, 225, 28, 20);
}

function drawEars() {
  fill(255, 218, 185);
  noStroke();
  ellipse(242, 210, 16, 25);
  ellipse(358, 210, 16, 25);
}

function drawEyebrows() {
  fill(45, 35, 30);
  noStroke();
  ellipse(265, 188, 35, 5);
  ellipse(335, 188, 35, 5);
}

function drawEyes() {
  // 왼쪽
  noFill();
  stroke(235, 205, 180);
  strokeWeight(1.5);
  arc(265, 203, 42, 18, PI + 0.1, TWO_PI - 0.1);
  stroke(45, 35, 30);
  strokeWeight(2.5);
  noFill();
  arc(265, 210, 40, 30, PI + 0.2, TWO_PI - 0.2);
  arc(265, 210, 40, 25, 0.2, PI - 0.2);
  fill(255);
  noStroke();
  ellipse(265, 210, 36, 26);
  fill(85, 65, 45);
  ellipse(265, 212, 16, 20);
  fill(25, 20, 15);
  ellipse(265, 213, 12, 16);
  fill(255);
  ellipse(269, 208, 6, 8);
  ellipse(263, 215, 3, 4);
  // 위 속눈썹 유지
  
  noStroke();
  // 오른쪽
  noFill();
  stroke(235, 205, 180);
  strokeWeight(1.5);
  arc(335, 203, 42, 18, PI + 0.1, TWO_PI - 0.1);
  stroke(45, 35, 30);
  strokeWeight(2.5);
  noFill();
  arc(335, 210, 40, 30, PI + 0.2, TWO_PI - 0.2);
  arc(335, 210, 40, 25, 0.2, PI - 0.2);
  fill(255);
  noStroke();
  ellipse(335, 210, 36, 26);
  fill(85, 65, 45);
  ellipse(335, 212, 16, 20);
  fill(25, 20, 15);
  ellipse(335, 213, 12, 16);
  fill(255);
  ellipse(339, 208, 6, 8);
  ellipse(333, 215, 3, 4);
  
  noStroke();
}

function drawNose() {
  // 요청하신 '>' 같은 각진 코 모양을 선과 삼각형으로 표현
  // 위치는 얼굴 중앙 기준(약간 아래)
  
  // 코를 어두운 색 선으로 그림 (각진 '>' 형태)
  stroke(120, 90, 70);
  strokeWeight(2);
  noFill();
  // 왼쪽 대각선 (콧대)
  line(300, 205, 295, 220);
  // 오른쪽 아래로 이어지는 라인 (코끝/콧구멍 방향)
  line(295, 220, 305, 225);
  
  // 코끝 작은 삼각형(채움)로 강조
  noStroke();
  fill(255, 218, 185);
  beginShape();
  vertex(295, 220);
  vertex(299, 222);
  vertex(305, 225);
  vertex(299, 223);
  endShape(CLOSE);
  
  // 코 윤곽 약간 더해 깔끔하게 표시
  stroke(140, 105, 85);
  strokeWeight(1.2);
  line(300, 205, 299, 217); // 콧대 보정선
  noStroke();
}

function drawMouth() {
  // 입 - 주변 음영/하이라이트 제거
  noFill();
  stroke(45, 35, 30);
  strokeWeight(2);
  arc(300, 250, 35, 18, 0, PI);
  
  fill(255, 150, 170);
  noStroke();
  arc(300, 250, 33, 6, PI, TWO_PI);
  
  fill(255, 170, 190);
  arc(300, 254, 30, 8, 0, PI);
  // 입 주변 하이라이트 제거(아무것도 추가하지 않음)
}

function drawBangs() {
  // 일자 앞머리로 눈썹을 가리도록 내림
  fill(45, 35, 30);
  noStroke();
  beginShape();
  vertex(245, 150);
  bezierVertex(265, 150, 285, 148, 300, 148);
  bezierVertex(315, 148, 335, 150, 355, 150);
  vertex(355, 150);
  vertex(355, 180);
  vertex(245, 180);
  endShape(CLOSE);
  
  // 아래 직선 컷 부분을 명확히 하기 위한 직사각형 가닥
  fill(40, 30, 28);
  for (let i = 0; i < 9; i++) {
    let x = 246 + i * 12;
    rect(x, 170, 8, 12);
  }
  
  // 중앙 약간의 음영 (미세)
  fill(30, 25, 22, 200);
  rect(290, 155, 20, 25);
}
