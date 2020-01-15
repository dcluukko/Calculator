
// math functions 
var add = function (num1, num2) {

    return num1 + num2;
}
var subtract = function (num1, num2) {
    return num1 - num2;
}
var multiply = function (num1, num2) {
    return num1 * num2;
}
var divide = function (num1, num2) {
    return num1 / num2;
}


$(document).ready(function () {

    // $("form#add").submit(function(event) {
    //     event.preventDefault();
    //     var number1 = parseInt($("#add1").val());
    //     var number2 = parseInt($("#add2").val());
    //     var result = add(number1, number2);
    //     $("#output").text(result);
    //   });

    $("form").on("click","button", function(event) {
        event.preventDefault()
        var thisBox = this.value;
        var box1ID = "#"+thisBox+'1';
        var box2ID = "#"+thisBox+'2';
        var answer;

        var box1 = parseInt($(box1ID).val());     
        var box2 =  parseInt($(box2ID).val());  

        if(box1 && box2) {
            doMath();
        } else {
            alert('Please Enter a number');

        }


    //     if(!box1 && !box2) {
    //         alert('Please Enter a number');
    //     } else if(box1 && !box2){
    //         alert('You Fail');
            
    //     } else if(!box1 && box2){
    //         alert('You Fail');
    //     } else {
    //         doMath();
    //   }

      function doMath() {
        if(thisBox === 'divide'){
            answer = divide(box1, box2);
            } else if(thisBox === 'add') {
                answer = add(box1, box2);
            } else if(thisBox === 'subtract') {
                answer = subtract(box1, box2);
            } else if(thisBox === 'multiply') {
                answer = multiply(box1, box2);
            } else {console.log("error")}
      }

        $("#"+thisBox+"-output").text(answer);
    
        console.log('This Box is : ' + thisBox + ' | And the answer should be ='  + answer)
    })
});
