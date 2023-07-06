/* 더하기 구현하기 */
function plusHandler() {
    /* 텍스트 값 받아오기 */
    var firstNumber = $("#first-number").val();  // id가 first-number인 값을 찾아라
    var secondNumber = $("#second-number").val();

    /* 문자 -> 숫자로 변환 */
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    var result = firstNumber + secondNumber;

    $("#result").text(result);
}

/* 빼기 구현하기 */
function minusHandler() {
    /* 텍스트 값 받아오기 */
    var firstNumber = $("#first-number").val();  // id가 first-number인 값을 찾아라
    var secondNumber = $("#second-number").val();

    /* 문자 -> 숫자로 변환 */
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    /* 빼기 구현하기 */
    var result = firstNumber - secondNumber;

    $("#result").text(result);
}

/* 곱하기 구현하기 */
function multiplyHandler() {
    /* 텍스트 값 받아오기 */
    var firstNumber = $("#first-number").val();  // id가 first-number인 값을 찾아라
    var secondNumber = $("#second-number").val();

    /* 문자 -> 숫자로 변환 */
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    /* 곱하기 구현하기 */
    var result = firstNumber * secondNumber;

    $("#result").text(result);
}

/* 나누기 구현하기 */
function divideHandler() {
    /* 텍스트 값 받아오기 */
    var firstNumber = $("#first-number").val();  // id가 first-number인 값을 찾아라
    var secondNumber = $("#second-number").val();

    /* 문자 -> 숫자로 변환 */
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    /* 나누기 구현하기 */
    var result = firstNumber / secondNumber;

    $("#result").text(result);
}


$(document).ready(function() {
    // 여기다가 코드 작성

    /* 클릭 인식하기 - HTML의 plus 버튼 id를 입력 */
    $("#plus").click(plusHandler);
    $("#minus").click(minusHandler);
    $("#multiply").click(multiplyHandler);
    $("#divide").click(divideHandler);
});