/* calculateHandler함수 만들기 */
function calculateHandler() {
    /* 계산값을 받아와보자 (단, 이때의 값들은 문자이므로 숫자로 변환해주는 작업 필요)*/
    var loan = $("#loan").val();
    /* 대출금리 값을 가져와서 변수에 저장하자 */
    var interest = $("#interest").val();
    /* 대출기간 값을 가져와서 변수에 저장하자 */
    var period = $("#period").val();

    /* 문자 -> 숫자로 변환하기 */
    loan = parseFloat(loan);    // loan값을 숫자로 저장해서 다시 loan에 저장해라
    interest = parseFloat(interest);
    period = parseFloat(period);

    /* 연 금리를 월 금리로 변환(%) */
    var interestMonth = interest / 12 / 100;

    /* 월상환액 = 원금 * 월금리 * (1 + 월금리) 기간 거듭제곱 (분자) */
    var div1 = loan * interestMonth * (1 + interestMonth) ** period;

    /* 월상환액 = (1 + 월금리) 기간 거듭제곱 (분모) */
    var div2 = (1 + interestMonth) ** period - 1;

    /* 월상환액 결과 계산하기(반올림도 해주자) */

    // 반올림 방법 1
    /* var result = Math.round(div1 / div2); */

    // 반올림 방법 2
    var result = div1 / div2;

    result = Math.round(result).toLocaleString();   // 사용자 편의를 위해 천 단위마다 , 를 표시해줌

    /* UI를 신경써보자(문자 표시) */
    var resultText = `고객님의 ${period}개월 동안 월 상환액은 <mark>${result}원</mark> 입니다!`;

    /* 사용자에게 결과를 보여주자 */
    $("#result").html(resultText);
}

/* + 백만 버튼 구현하기 */
function loan100Handler() {
    /* 현재 입력되어 있는 대출금 값을 가져오기 */
    var loan = $("#loan").val();

    if (loan == "") {   // 만약에 loan이 빈칸이라면
        loan = 0;       // loan을 0으로 만들어줘라(숫자로 인식해야 Nan 에러 해결됨)
    }

    /* 문자 -> 숫자로 변환 */
    loan = parseFloat(loan);

    loan = loan + 1000000;

    /* 입력되어 있는 값이 있다면 값을 넣어주는 작업 */
    $("#loan").val(loan);
}

/* + 천만 버튼 구현하기 */
function loan1000Handler() {
    /* 현재 입력되어 있는 대출금 값을 가져오기 */
    var loan = $('#loan').val();

    if (loan == "") {
        loan = 0;
    }

    loan = parseFloat(loan);

    loan = loan + 10000000;

    $('#loan').val(loan);
}

/* + 일억 버튼 구현하기 */
function loan10000Handler() {
    /* 현재 입력되어 있는 대출금 값을 가져오기 */
    var loan = $('#loan').val();

    if (loan == "") {
        loan = 0;
    }

    loan = parseFloat(loan);

    loan = loan + 100000000;

    $('#loan').val(loan);
}

/* 이자 3% 버튼 구현하기 */
function interest3Handler() {
    $("#interest").val(3);
}

/* 이자 4% 버튼 구현하기 */
function interest4Handler() {
    $("#interest").val(4);
}

/* 이자 5% 버튼 구현하기 */
function interest5Handler() {
    $("#interest").val(5);
}

/* 대출 기간 1년 버튼 구현하기 */
function period1Handler() {
    $("#period").val(12);   // 여기에서는 개월 단위로 설정했으니 1년이면 12개월!
}

/* 대출 기간 3년 버튼 구현하기 */
function period3Handler() {
    $("#period").val(36);   // 여기에서는 개월 단위로 설정했으니 3년이면 36개월!
}

/* 대출 기간 5년 버튼 구현하기 */
function period5Handler() {
    $("#period").val(60);   // 여기에서는 개월 단위로 설정했으니 5년이면 60개월!
}

$(document).ready(function() {
    /* id가 calculate인 요소를 받아와서 클릭을 하게 되면 calculateHander라는 함수를 만들어서 실행해라 */
    $("#calculate").click(calculateHandler);

    /* + 백만 버튼 구현하기 */
    $("#loan-100").click(loan100Handler);

    /* + 천만 버튼 구현하기 */
    $("#loan-1000").click(loan1000Handler);
    
    /* + 일억 버튼 구현하기 */
    $("#loan-10000").click(loan10000Handler);

    /* 3% 버튼 구현하기 */
    $("#interest-3").click(interest3Handler);

    /* 4% 버튼 구현하기 */
    $("#interest-4").click(interest4Handler);
    
    /* 5% 버튼 구현하기 */
    $("#interest-5").click(interest5Handler);

    /* 1년 버튼 구현하기 */
    $("#period-1").click(period1Handler);

    /* 3년 버튼 구현하기 */
    $("#period-3").click(period3Handler);
        
    /* 5년 버튼 구현하기 */
    $("#period-5").click(period5Handler);
});