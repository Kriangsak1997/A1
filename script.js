var ifEmail = function(){
    var input = document.getElementById('email').value;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(input);

}
var ifFocused = function(){
    var area = document.getElementById('email');
    area.addEventListener( 'focus', function() {
         if( area.focus ) {
            return true;
            }
         },false);
}
var toSubscribe = function(){
    if(!ifEmail() & !ifFocused()){
        document.getElementById("trap").innerHTML = "A valid email is required";
        document.getElementById("email").style.outlineColor="red"
        document.getElementById("email").style.borderColor="red"
    }else{
    successfullySubscribed();}
}

var successfullySubscribed = function(){
    document.getElementsByClassName("success-card")[0].style.display = "block";
    document.getElementById("success-thank").innerHTML = "Thank you";
    document.getElementById("success-t2").innerHTML = "Your subscription was a success !"
    document.getElementsByClassName("subscribe-card")[0].style.display = "none";

}