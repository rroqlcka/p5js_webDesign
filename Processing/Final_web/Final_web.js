let x, y; // 공의 현재 위치
let diameter = 70; // 공의 지름
let speedX = 12; // 공의 x축 이동 속도
let speedY = 8; // 공의 y축 이동 속도
let startColor; // 시작 색상
let endColor; // 종료 색상
let percent = 0; // 보간의 진행 상태
let hitCheck = false;
let direction = 1;
let endToStart = 0;
let startToEnd = 255;

function setup() {

  createCanvas(1920, 1090);
  x = width / 2;
  y = 1090 / 2;
  startColor = color(255);
  endColor = color(0);
}

function draw() {

  noStroke();
  fill(endToStart);
  rect(0, 0, width, 1090);

  // 공 이동
  x += speedX;
  y += speedY;

  // 공 벽과 충돌 검사
  if (x + diameter / 2 >= width || x - diameter / 2 <= 0) {
    speedX *= -1;
    hitCheck = true;
  }
  if (y + diameter / 2 >= 1080 || y - diameter / 2 <= 0) {
    speedY *= -1;
  }

  // 보간된 색상 계산
  startToEnd = lerpColor(startColor, endColor, percent);
  endToStart = lerpColor(endColor, startColor, percent);
  // 공 그리기

  noStroke();
  fill(startToEnd);
  ellipse(x, y, diameter, diameter);

  fill(endToStart);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  text("p5.js",x,y);

  fill(startToEnd)
  textAlign(LEFT);
  textSize(170);
  text("인기 학과와 \n" + "사회적 기대:", 122, 650);
  textSize(30);
  textStyle(NORMAL);
  text("대학교 합격 성적 및 지원자 수를 통한 사회 트렌드 분석", 1094, 830);
  textSize(20);
  textStyle(BOLD);
  text("제작",122,43);
  text("문의",122,97);
  text("위치",122,151);
  textStyle(NORMAL);
  text("한양대 에리카 소프트웨어융합대학 ICT 융합학부 컬처테크놀로지 전공 김윤식 ",196,43);
  text("+82) 10-4338-0887",196,97);
  text("한양대학로 55",196,151);



  // 보간 상태 업데이트
  if(hitCheck){
      percent += 0.05 * direction;
    if (percent >= 1) {
      percent = 1;
      direction = -1;
      hitCheck = false;
    } else if (percent <= 0) {
      percent = 0;
      direction = 1;
      hitCheck = false;
    }
  }

}

