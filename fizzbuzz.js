$(document).ready(function(){

    $('#btn1').click(function(){
        var number = $('.list-input').val();
        solvefizzbuzz(number);
    });

function solvefizzbuzz(num){
    var i = 0;
    while(i < num){
        if(i%3 === 0){
            $("ul").append("<li>fizz</li>");
        }
        else if(i%5 === 0){
            $("ul").append("<li>buzz</li>");
        }
        else if((i%3 === 0)&&(i%5 === 0)){
            $("ul").append("<li>fizzbuzz</li>");
        }
        else{
            $("ul").append("<li>" + i + "</li>");
        }
    i += 1;
    }
}

});