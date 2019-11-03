/*
    이 파일은 KH 352 강의장 실습용 JavaScript 파일입니다.
    무단으로 도용할시 맴매 할꺼야.

    - 작성일 : 2019.10.29
    - 작성자 : 김동현
*/

function changeQuery(){
    // 함수의 실행 내용(로직)을 작성해 주세요.
    var result1 = document.getElementById('result1'); 
    // result1 변수에 id를 이용하여 input으로 입력된 값을 저장한다.
    var p = document.getElementById('silsub1');
    // p 변수에 id를 이용하여 p태그 공간을 지정해준다.

    p.innerHTML = result1.value;
    //p변수에 innerHTML result1의 값을 담는다.
}

function checkOddEven() {
    //함수의 로직을 작성하세요.
    var pro = window.prompt(); // prompt 불러와서 변수 result에 담는다.
    var p2 = document.getElementById('silsub2'); // p2 변수에 영역 정해주기
    var result = ""; // 결과 값을 담을 변수
   
    // if 조건문 긔긔
    if(isNaN(pro) == true){ // isNaN으로 숫자 아닌경우 판단 return 값은 true나 false로 나온다
        result = "숫자가 아닙니다.";
    }
    else if(pro % 2 == 0){ // 짝수 판단
        result = "짝수 입니다.";
    }else result = "홀수 입니다."; // 나머지 홀수

    p2.innerHTML = result; // p2 변수에 innerHTML 을 이용하여 result 결과 담기
}

function changeImage(){
   // 함수의 로직을 작성하세요.
   // hint : setAttribute('속성명', '속성값');
    var p3 = document.getElementById('image1'); // image1 을 p3 변수에 지정
    // setAttribute("바꿔줄 속성값" , "바꿀 속성의 내용 " );
    p3.setAttribute('src', '../resources/images/Android.gif');
}

function changeCSS(){
    //함수의 로직을 작성하세요.
    var p4 = document.getElementById('silsub3');
    // setAttribute("바꿔줄 속성값" , "바꿀 속성의 내용 " );
    p4.setAttribute('style','color:navy;');
    // p4.style.color = 'navy'; 가능

    // 이미지 변경과 내용 같음.
    /*
    oncontextmenu="return false" : 우클릭 방지
    ondragstart="return false" : 드래그 방지
    onselectstart="return false" : 선택 방지
    */
}

function calculator(op){
    //함수의 로직을 작성하세요.
    
    // Input 값 변수에 넣어주기 .value 로 입력된 숫자값만 가져온다.
    var n1 = document.getElementById('num1').value;
    var n2 = document.getElementById('num2').value;
    // 결과를 담기위한 result 변수
    var result = 0;
    // 결과를 담을 span 태그 
    var span = document.getElementById('calc');

    // 누른 버튼에 따라서 입력된 매개변수 op( + , - , * ....) 에 따른 switch 문 작성
    // Number()로 형변환을 해 주어야 문자로 인식하지 않는다
    // ex> 형변환이 없다면 3 + 1 = 31로 계산됨
    switch(op){
        case '+' : result = Number(n1) + Number(n2);
            break;
        case '-' : result = Number(n1) - Number(n2);
            break;
        case 'x' : result = Number(n1) * Number(n2);
            break;
        case '/' : result = Number(n1) / Number(n2) ;
            break;
        case '%' : result = Number(n1) % Number(n2);
            break;
    }
    // 결과 값 result 를 변수에 담는다. 
    span.innerHTML = result;
    
}