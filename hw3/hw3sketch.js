let interactionTime = 0; // 마지막 인터랙션이 발생한 시간 (밀리초)
let isBlinking = false;  // 눈 깜빡임 상태를 제어하는 변수

// 눈 깜빡임 관련 변수
let blinkStartTime = 0;   // 깜빡임 시작 시간
let blinkDuration = 10000; // 인터랙션이 없으면 10초 후 깜빡임 시작
let blinkInterval = 1000;  // 1초마다 깜빡임 (깜빡이는 주기)
let blinkSpeed = 200;      // 눈을 감았다 뜨는 속도 (작을수록 빠름)

// 별 관련 변수
let stars = [];
let starBlinkInterval = 500; // 별 깜빡이는 주기 (0.5초마다)
let lastStarBlinkTime = 0;   // 마지막 별 깜빡임 시간

// 얼굴 영역 경계 (별이 침범하지 않도록)
// 대략적인 얼굴 영역을 직사각형으로 정의합니다.
const faceBounds = {
  x: 240,
  y: 150,
  width: 120,
  height: 120
};

function setup() {
  createCanvas(600, 400);
  interactionTime = millis(); // 초기 인터랙션 시간 설정
  blinkStartTime = millis();  // 초기 깜빡임 시작 시간 설정

  // 별 초기화 (총 12개)
  for (let i = 0; i < 12; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(5, 10),
      alpha: 255,
      dir: 1,
      speedX: random(-0.8, 0.8),
      speedY: random(-0.8, 0.8)
    });
  }

  loop(); // draw 함수가 계속 실행되도록 합니다.
}

function draw() {
  // 배경 - 밝은 하늘색
  background(200, 230, 255);

  // 10초(10000ms) 동안 인터랙션이 없으면 눈을 깜빡입니다.
  if (millis() - interactionTime > blinkDuration) {
    let elapsed = millis() - blinkStartTime;
    // 깜빡임 주기에 따라 눈 깜빡임 상태를 결정
    if ((elapsed % blinkInterval) < blinkSpeed) {
      isBlinking = true; // 눈을 감는 시간
    } else {
      isBlinking = false; // 눈을 뜨는 시간
    }
  } else {
    isBlinking = false; // 인터랙션이 있으면 눈을 뜨고 유지
    blinkStartTime = millis(); // 인터랙션 발생 시 깜빡임 시작 시간 초기화
  }

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
  drawEyes(); // isBlinking 변수에 따라 눈을 그립니다.
  
  // 코 (요청한 각진 '>' 모양)
  drawNose();
  
  // 입
  drawMouth();
  
  // 앞머리 (눈썹을 가리는 일자 앞머리)
  drawBangs();

  // 별 업데이트 및 그리기
  updateStars();
  drawStars();
}

// 마우스 클릭 시 인터랙션 시간 업데이트
function mousePressed() {
  interactionTime = millis();
}

// 키보드 누름 시 인터랙션 시간 업데이트
function keyPressed() {
  // 기존 인터랙션 시간 업데이트 로직
  interactionTime = millis();

  // 'g' 또는 'G' 키를 누르면 GIF 저장
  if (key === 'g' || key === 'G') {
    // saveGif('파일명', 지속시간_초);
    saveGif('myAnimatedCharacter', 10); // 'myAnimatedCharacter.gif'로 10초 동안 저장
    print("GIF 저장을 시작합니다! 10초 동안 기다려주세요.");
  }
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
  if (isBlinking) {
    // 눈을 감은 상태
    stroke(45, 35, 30);
    strokeWeight(2.5);
    line(245, 210, 285, 210); // 왼쪽 눈 감은 선
    line(315, 210, 355, 210); // 오른쪽 눈 감은 선
    noStroke();
  } else {
    // 눈을 뜬 상태 (기존 코드 유지)
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

// 별 위치 업데이트 함수
function updateStars() {
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.x += star.speedX;
    star.y += star.speedY;

    // 캔버스 경계에 닿으면 방향 반전
    if (star.x < 0 || star.x > width) star.speedX *= -1;
    if (star.y < 0 || star.y > height) star.speedY *= -1;

    // 얼굴 영역 충돌 확인 및 방향 반전
    // 별의 중심과 얼굴 영역을 기준으로 충돌 판정
    // 별의 크기를 고려하여 충돌 판정 범위를 확장
    const starRadius = star.size / 2;
    if (star.x + starRadius > faceBounds.x && star.x - starRadius < faceBounds.x + faceBounds.width &&
        star.y + starRadius > faceBounds.y && star.y - starRadius < faceBounds.y + faceBounds.height) {
      
      // 충돌 시 방향을 반전시키고, 살짝 밖으로 밀어내어 갇히지 않게 합니다.
      let collided = false;
      if (star.x < faceBounds.x || star.x > faceBounds.x + faceBounds.width) { // 좌우 충돌
        star.speedX *= -1;
        collided = true;
      }
      if (star.y < faceBounds.y || star.y > faceBounds.y + faceBounds.height) { // 상하 충돌
        star.speedY *= -1;
        collided = true;
      }
      
      // 갇히는 것을 방지하기 위해 살짝 밀어냅니다.
      if (collided) {
        if (star.x < faceBounds.x) star.x = faceBounds.x - starRadius;
        else if (star.x > faceBounds.x + faceBounds.width) star.x = faceBounds.x + faceBounds.width + starRadius;
        
        if (star.y < faceBounds.y) star.y = faceBounds.y - starRadius;
        else if (star.y > faceBounds.y + faceBounds.height) star.y = faceBounds.y + faceBounds.height + starRadius;
      }
    }
  }

  // 별 깜빡임 효과 (모든 별에 동시에 적용)
  if (millis() - lastStarBlinkTime > starBlinkInterval) {
    for (let i = 0; i < stars.length; i++) {
      stars[i].dir *= -1; // 깜빡임 방향 전환
      stars[i].alpha = (stars[i].dir === 1) ? 255 : 0; // 보였다 안 보였다
    }
    lastStarBlinkTime = millis(); // 깜빡임 시간 업데이트
  }
}

// 별 그리기 함수
function drawStars() {
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    fill(255, 255, 0, star.alpha); // 노란색 별, 투명도 조절
    
    // 뾰족한 별 모양 그리기 (beginShape/endShape 사용)
    push(); // 현재 변환 상태 저장
    translate(star.x, star.y); // 별의 중심으로 이동
    rotate(frameCount * 0.01 + i * PI/4); // 별이 회전하도록
    beginShape();
    for (let j = 0; j < 5; j++) {
      let angle = TWO_PI / 5 * j;
      let xOuter = cos(angle) * star.size;
      let yOuter = sin(angle) * star.size;
      vertex(xOuter, yOuter);
      angle += TWO_PI / 10;
      let xInner = cos(angle) * star.size * 0.4; // 안쪽 점의 크기 조절
      let yInner = sin(angle) * star.size * 0.4;
      vertex(xInner, yInner);
    }
    endShape(CLOSE);
    pop(); // 이전 변환 상태 복원
  }
}
