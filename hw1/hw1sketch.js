function setup() {
  createCanvas(600, 400); // 캔버스 크기 설정
  noLoop(); // 정지된 이미지이므로 한 번만 그리기
}

function draw() {
  background(240, 240, 250); // 연한 보라빛 배경색
  noStroke(); // 도형의 테두리 없애기

  // 색상 팔레트 정의 (이미지에서 추출한 색상들)
  let colors = {
    mint: color(180, 255, 200),
    orange: color(255, 165, 0),
    yellow: color(255, 255, 150),
    pink: color(255, 182, 193),
    hotPink: color(255, 105, 180),
    blue: color(100, 149, 237),
    skyBlue: color(135, 206, 235),
    peach: color(255, 200, 180),
    grey: color(200),
    darkGrey: color(100),
    white: color(255)
  };

  // --- 배경에 깔린 큰 도형들 ---

  // 1. 오른쪽 아래 큰 살구색 원
  fill(colors.peach);
  ellipse(450, 280, 250, 250);

  // 2. 위쪽 민트색 원
  fill(colors.mint);
  ellipse(350, 120, 200, 200);

  // 3. 왼쪽 흰색 구름 모양 (원 3개를 합쳐서 표현)
  fill(colors.white);
  ellipse(250, 150, 150, 150); // 위쪽
  ellipse(200, 250, 150, 150); // 왼쪽 아래
  ellipse(300, 250, 180, 180); // 오른쪽 아래

  // 4. 왼쪽 배경의 하늘색 원
  fill(colors.skyBlue);
  ellipse(150, 200, 180, 180);

  // --- 중간 레이어 도형들 ---

  // 5. 왼쪽 아래 파란 원
  fill(colors.blue);
  ellipse(150, 300, 120, 120);
  
  // 6. 중앙 아래 또 다른 파란 원
  fill(colors.blue);
  ellipse(380, 350, 130, 130);

  // 7. 흰색 구름 위 핑크색 원
  fill(colors.pink);
  ellipse(250, 200, 80, 80);

  // 8. 아래쪽 핑크색 원
  fill(colors.hotPink);
  ellipse(320, 300, 80, 80);

  // 9. 오른쪽 위 핑크색 원
  fill(colors.hotPink);
  ellipse(500, 200, 80, 80);

  // --- 포인트 및 장식 요소들 ---

  // 10. 오른쪽 위 주황색 동심원 (레코드 판 모양)
  fill(colors.orange);
  ellipse(480, 100, 130, 130); // 가장 큰 원
  stroke(255, 200, 0); // 노란 테두리
  strokeWeight(2);
  noFill();
  ellipse(480, 100, 100, 100); // 중간 선
  ellipse(480, 100, 70, 70);   // 안쪽 선
  noStroke();
  fill(colors.white);
  ellipse(480, 100, 40, 40);   // 가운데 흰 원

  // 11. 주황색 원 옆의 노란색 작은 원
  fill(colors.yellow);
  ellipse(420, 60, 50, 50);

  // 12. 중앙 작은 눈 모양 (회색 동심원)
  fill(colors.white);
  ellipse(400, 220, 100, 100); // 흰자
  fill(colors.grey);
  ellipse(400, 220, 60, 60);   // 회색
  fill(colors.darkGrey);
  ellipse(400, 220, 30, 30);   // 진한 회색 (동공)

  // 13. 눈 옆의 빨간 점과 보라색 고리
  fill(150, 150, 255, 150); // 반투명 보라
  ellipse(350, 200, 40, 40);
  fill(255, 50, 50); // 빨간 점
  ellipse(350, 200, 15, 15);

  // 14. 왼쪽 아래 노란색 작은 원
  fill(colors.yellow);
  ellipse(200, 380, 60, 60);

  // --- 직사각형 요소들 ---

  // 15. 왼쪽 회색 직사각형
  fill(200); // 회색
  rect(130, 50, 60, 180); 

  // 16. 오른쪽 아래 회색 직사각형
  rect(520, 320, 50, 120);
}
