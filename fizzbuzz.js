$(document).ready(function(){

    $("#btn1").click(function(){
        for(var i = 1; i <=100; i+=1)
        {
            
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
    });
});