$(document).ready(function(){
    
    $('#btn1').click()
        var num = prompt("give me a number")
        
        console.log(solvefizzbuzz(num));
    
});


function solvefizzbuzz(num){
    for(var i = 0; i<= num;i++){
        if((i%3 == 0)&&(i%5 != 0)){
            $("body").append("<li>fizz</li>");
        }
        else if((i%3 != 0)&&(i%5 == 0)){
            $("body").append("<li>buzz</li>");
        }
        else if((i%3 == 0)&&(i%5 == 0)){
            $("body").append("<li>fizzbuzz</li>")
        }
        else{
            $("body").append("<li>" + i + "</li>")
        }
    }
}