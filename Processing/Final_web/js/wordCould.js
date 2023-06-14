let university_table;
let buttonSize = 30;
let yearPages = 0;
let upButton, downButton;
let normalizedData = [];

function preload() {
    university_table = loadTable('/static/data/university_final_result.csv', 'csv', 'noheader');
}

function setup() {
    let uni_data = []; // 데이터를 저장할 새로운 배열

    for (let j = 1; j < university_table.getColumnCount(); j++) {
        for (let i = 0; i < university_table.getRowCount(); i++) {
            let value = university_table.getNum(i, j); // 2번째 열의 값 가져오기
            uni_data.push(value); // 새로운 배열에 추가
        }

        // 예시 데이터
        let minValue = Math.min(...uni_data); // 데이터의 최솟값
        let maxValue = Math.max(...uni_data); // 데이터의 최댓값

        // 데이터 정규화
        for (let i = 0; i < uni_data.length; i++) {
            let normalizedValue = map(uni_data[i], minValue, maxValue, 0, 750);
            normalizedData.push(normalizedValue);
        }

        uni_data = [];
    }

    let wordCloud = createCanvas(1400, 1000);
    wordCloud.parent('canvas_wordCloud');
    background(220);

    upButton = createButton('^');
    upButton.position(1600, 5500);
    upButton.size(buttonSize);
    upButton.class('button');
    upButton.mousePressed(increaseYearPages);

    downButton = createButton('v');
    downButton.position(1600, 5550);
    downButton.size(buttonSize);
    downButton.class('button');
    downButton.mousePressed(decreaseYearPages);

    textSize(30);
    fill(0);
}

function draw() {
    background(255);

    fill(0);
    for (let i = 0; i < 7; i++) {
        let value = university_table.getString(i, 0);
        text(value, 150 * i + 170, 100);
    }

    for (let i = yearPages * 7; i < yearPages * 14; i++) {
        let value = normalizedData[i];
        rect(150 * ((i - yearPages * 7) % 7) + 225, 150, 5, value);
    }
}

function increaseYearPages() {
    if(yearPages <14){
        yearPages++;
    }
}

function decreaseYearPages() {
    if(yearPages >0){
        yearPages--;
    }
}
