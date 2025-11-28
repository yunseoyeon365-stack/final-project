let initialColors = {}; // 초기 색상을 저장할 객체

function setup() {
  createCanvas(600, 400);
  noStroke();
  background(230, 230, 250); // 배경색 설정 (옅은 보라색)

  // 각 도형의 초기 색상을 저장 (색상 변화를 위해 필요)
  initialColors.largeSalmon = color(255, 192, 178);
  initialColors.largeWhite = color(255);
  initialColors.lightGreen = color(190, 230, 190);
  initialColors.lightBlue = color(173, 216, 230);
  initialColors.blue1 = color(100, 149, 237);
  initialColors.blue2 = color(100, 149, 237);
  initialColors.pink1 = color(255, 192, 203);
  initialColors.pink2 = color(255, 192, 203);
  initialColors.pink3 = color(255, 192, 203);
  initialColors.yellow1 = color(255, 255, 153);
  initialColors.yellow2 = color(255, 255, 153);
  initialColors.greyRect1 = color(192, 192, 192);
  initialColors.greyRect2 = color(192, 192, 192);
  initialColors.eyeWhite = color(255);
  initialColors.eyeLightGrey = color(220);
  initialColors.eyeDarkGrey = color(105, 105, 105);
  initialColors.orangeRingOuter = color(255, 165, 0);
  initialColors.orangeRingInner = color(255, 200, 0);
  initialColors.smallRedDot = color(255, 0, 0);
  initialColors.smallPurpleCircle = color(150, 0, 200);
  initialColors.smallRedCircle = color(255, 0, 0);
}

function draw() {
  background(230, 230, 250); // 매 프레임마다 배경을 다시 그려서 잔상 제거

  let time = millis() / 1000; // 시간을 초 단위로 변환
  let animSpeed = 0.5; // 애니메이션 속도 조절
  let colorChangeSpeed = 0.05; // 색상 변화 속도 조절

  // 1. 큰 연어색 원
  let salmonColor = lerpColor(initialColors.largeSalmon, color(255, 100, 100), sin(time * colorChangeSpeed * 0.5) * 0.5 + 0.5);
  fill(salmonColor);
  let salmonX = 420 + sin(time * animSpeed * 0.3) * 20;
  let salmonY = 250 + cos(time * animSpeed * 0.4) * 15;
  let salmonSize = 350 + sin(time * animSpeed * 0.2) * 20;
  ellipse(salmonX, salmonY, salmonSize, salmonSize);

  // 2. 큰 흰색 구름 모양 (여러 원으로 구성)
  let whiteCloudColor = lerpColor(initialColors.largeWhite, color(200, 200, 255), sin(time * colorChangeSpeed * 0.4) * 0.5 + 0.5);
  fill(whiteCloudColor);
  let cloudOffsetX = sin(time * animSpeed * 0.5) * 10;
  let cloudOffsetY = cos(time * animSpeed * 0.6) * 8;
  let cloudScale = 1 + sin(time * animSpeed * 0.7) * 0.05;
  ellipse(250 + cloudOffsetX, 200 + cloudOffsetY, 200 * cloudScale, 200 * cloudScale);
  ellipse(200 + cloudOffsetX, 160 + cloudOffsetY, 100 * cloudScale, 100 * cloudScale);
  ellipse(300 + cloudOffsetX, 160 + cloudOffsetY, 100 * cloudScale, 100 * cloudScale);
  ellipse(250 + cloudOffsetX, 130 + cloudOffsetY, 80 * cloudScale, 80 * cloudScale);

  // 3. 연한 초록색 원
  let lightGreenColor = lerpColor(initialColors.lightGreen, color(100, 255, 100), sin(time * colorChangeSpeed * 0.6) * 0.5 + 0.5);
  fill(lightGreenColor);
  let greenX = 420 + cos(time * animSpeed * 0.7) * 10;
  let greenY = 100 + sin(time * animSpeed * 0.8) * 10;
  let greenSize = 200 + sin(time * animSpeed * 0.9) * 10;
  ellipse(greenX, greenY, greenSize, greenSize);

  // 4. 연한 파란색 원
  let lightBlueColor = lerpColor(initialColors.lightBlue, color(150, 200, 255), sin(time * colorChangeSpeed * 0.7) * 0.5 + 0.5);
  fill(lightBlueColor);
  let lightBlueX = 150 + sin(time * animSpeed * 0.9) * 5;
  let lightBlueY = 200 + cos(time * animSpeed * 1.0) * 5;
  let lightBlueSize = 150 + cos(time * animSpeed * 1.1) * 10;
  ellipse(lightBlueX, lightBlueY, lightBlueSize, lightBlueSize);

  // 5. 파란색 원 1
  let blue1Color = lerpColor(initialColors.blue1, color(50, 100, 200), sin(time * colorChangeSpeed * 0.8) * 0.5 + 0.5);
  fill(blue1Color);
  let blue1X = 150 + sin(time * animSpeed * 1.1) * 15;
  let blue1Y = 300 + cos(time * animSpeed * 1.2) * 10;
  let blue1Size = 80 + sin(time * animSpeed * 1.3) * 5;
  ellipse(blue1X, blue1Y, blue1Size, blue1Size);

  // 6. 파란색 원 2
  let blue2Color = lerpColor(initialColors.blue2, color(50, 100, 200), cos(time * colorChangeSpeed * 0.9) * 0.5 + 0.5);
  fill(blue2Color);
  let blue2X = 350 + cos(time * animSpeed * 1.4) * 10;
  let blue2Y = 350 + sin(time * animSpeed * 1.5) * 15;
  let blue2Size = 80 + cos(time * animSpeed * 1.6) * 5;
  ellipse(blue2X, blue2Y, blue2Size, blue2Size);

  // 7. 분홍색 원 1
  let pink1Color = lerpColor(initialColors.pink1, color(255, 150, 200), sin(time * colorChangeSpeed * 1.0) * 0.5 + 0.5);
  fill(pink1Color);
  let pink1X = 250 + sin(time * animSpeed * 1.7) * 5;
  let pink1Y = 250 + cos(time * animSpeed * 1.8) * 5;
  let pink1Size = 60 + sin(time * animSpeed * 1.9) * 3;
  ellipse(pink1X, pink1Y, pink1Size, pink1Size);

  // 8. 분홍색 원 2
  let pink2Color = lerpColor(initialColors.pink2, color(255, 150, 200), cos(time * colorChangeSpeed * 1.1) * 0.5 + 0.5);
  fill(pink2Color);
  let pink2X = 300 + cos(time * animSpeed * 2.0) * 8;
  let pink2Y = 200 + sin(time * animSpeed * 2.1) * 8;
  let pink2Size = 60 + cos(time * animSpeed * 2.2) * 4;
  ellipse(pink2X, pink2Y, pink2Size, pink2Size);

  // 9. 분홍색 원 3
  let pink3Color = lerpColor(initialColors.pink3, color(255, 150, 200), sin(time * colorChangeSpeed * 1.2) * 0.5 + 0.5);
  fill(pink3Color);
  let pink3X = 500 + sin(time * animSpeed * 2.3) * 7;
  let pink3Y = 200 + cos(time * animSpeed * 2.4) * 7;
  let pink3Size = 60 + sin(time * animSpeed * 2.5) * 3;
  ellipse(pink3X, pink3Y, pink3Size, pink3Size);

  // 10. 노란색 원 1
  let yellow1Color = lerpColor(initialColors.yellow1, color(255, 200, 0), cos(time * colorChangeSpeed * 1.3) * 0.5 + 0.5);
  fill(yellow1Color);
  let yellow1X = 170 + cos(time * animSpeed * 2.6) * 10;
  let yellow1Y = 370 + sin(time * animSpeed * 2.7) * 10;
  let yellow1Size = 50 + sin(time * animSpeed * 2.8) * 5;
  ellipse(yellow1X, yellow1Y, yellow1Size, yellow1Size);

  // 11. 노란색 원 2 (위쪽)
  let yellow2Color = lerpColor(initialColors.yellow2, color(255, 200, 0), sin(time * colorChangeSpeed * 1.4) * 0.5 + 0.5);
  fill(yellow2Color);
  let yellow2X = 500 + sin(time * animSpeed * 2.9) * 10;
  let yellow2Y = 50 + cos(time * animSpeed * 3.0) * 10;
  let yellow2Size = 50 + cos(time * animSpeed * 3.1) * 5;
  ellipse(yellow2X, yellow2Y, yellow2Size, yellow2Size);

  // 12. 회색 사각형 1 (왼쪽 위)
  let greyRect1Color = lerpColor(initialColors.greyRect1, color(150, 150, 150), sin(time * colorChangeSpeed * 1.5) * 0.5 + 0.5);
  fill(greyRect1Color);
  let rect1X = 100 + sin(time * animSpeed * 3.2) * 5;
  let rect1Y = 80 + cos(time * animSpeed * 3.3) * 5;
  let rect1Height = 150 + sin(time * animSpeed * 3.4) * 10;
  rect(rect1X, rect1Y, 40, rect1Height);

  // 13. 회색 사각형 2 (오른쪽 아래)
  let greyRect2Color = lerpColor(initialColors.greyRect2, color(150, 150, 150), cos(time * colorChangeSpeed * 1.6) * 0.5 + 0.5);
  fill(greyRect2Color);
  let rect2X = 450 + cos(time * animSpeed * 3.5) * 5;
  let rect2Y = 300 + sin(time * animSpeed * 3.6) * 5;
  let rect2Height = 100 + cos(time * animSpeed * 3.7) * 8;
  rect(rect2X, rect2Y, 40, rect2Height);

  // 14. 눈 모양 (가운데 큰 원)
  let eyeOffsetX = sin(time * animSpeed * 3.8) * 3;
  let eyeOffsetY = cos(time * animSpeed * 3.9) * 3;
  let eyeScale = 1 + sin(time * animSpeed * 4.0) * 0.02;

  fill(initialColors.eyeWhite); // 흰색 테두리
  ellipse(380 + eyeOffsetX, 220 + eyeOffsetY, 100 * eyeScale, 100 * eyeScale);
  fill(initialColors.eyeLightGrey); // 연회색
  ellipse(380 + eyeOffsetX, 220 + eyeOffsetY, 80 * eyeScale, 80 * eyeScale);
  fill(initialColors.eyeDarkGrey); // 진회색
  ellipse(380 + eyeOffsetX, 220 + eyeOffsetY, 50 * eyeScale, 50 * eyeScale);

  // 15. 주황색 고리 모양 (오른쪽 위)
  push();
  translate(470 + sin(time * animSpeed * 4.1) * 10, 80 + cos(time * animSpeed * 4.2) * 10);
  rotate(time * animSpeed * 0.5); // 회전 애니메이션
  let orangeOuterColor = lerpColor(initialColors.orangeRingOuter, color(255, 100, 0), sin(time * colorChangeSpeed * 1.7) * 0.5 + 0.5);
  let orangeInnerColor = lerpColor(initialColors.orangeRingInner, color(255, 150, 0), cos(time * colorChangeSpeed * 1.8) * 0.5 + 0.5);
  let ringScale = 1 + sin(time * animSpeed * 4.3) * 0.05;

  fill(orangeOuterColor); // 주황색
  ellipse(0, 0, 100 * ringScale, 100 * ringScale);
  fill(orangeInnerColor); // 밝은 주황색
  ellipse(0, 0, 70 * ringScale, 70 * ringScale);
  fill(255); // 흰색
  ellipse(0, 0, 40 * ringScale, 40 * ringScale);
  pop();

  // 16. 작은 빨간색 점
  let redDotColor = lerpColor(initialColors.smallRedDot, color(255, 100, 100), sin(time * colorChangeSpeed * 1.9) * 0.5 + 0.5);
  fill(redDotColor);
  let redDotX = 370 + sin(time * animSpeed * 4.4) * 2;
  let redDotY = 260 + cos(time * animSpeed * 4.5) * 2;
  let redDotSize = 5 + sin(time * animSpeed * 4.6) * 1;
  ellipse(redDotX, redDotY, redDotSize, redDotSize);

  // 17. 작은 보라색/빨간색 원
  let purpleCircleColor = lerpColor(initialColors.smallPurpleCircle, color(100, 0, 150), sin(time * colorChangeSpeed * 2.0) * 0.5 + 0.5);
  let smallRedCircleColor = lerpColor(initialColors.smallRedCircle, color(200, 50, 50), cos(time * colorChangeSpeed * 2.1) * 0.5 + 0.5);
  fill(purpleCircleColor); // 보라색
  let smallCircleX = 350 + sin(time * animSpeed * 4.7) * 5;
  let smallCircleY = 180 + cos(time * animSpeed * 4.8) * 5;
  let smallCircleScale = 1 + sin(time * animSpeed * 4.9) * 0.1;
  ellipse(smallCircleX, smallCircleY, 20 * smallCircleScale, 20 * smallCircleScale);
  fill(smallRedCircleColor); // 빨간색
  ellipse(smallCircleX, smallCircleY, 10 * smallCircleScale, 10 * smallCircleScale);
}
