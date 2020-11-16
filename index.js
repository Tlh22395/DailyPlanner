$(document).ready(function(){

    // create event listener button using class name
    $(".saveBtn").on("click", function(){
    var hour = $(this).parent().attr("id");
    var userInput = $(this).prev().val();

    localStorage.setItem(hour, userInput);

    })
    // create event for which button fired 
    // retrieve the input field value
    // save to the local storage for hour name and for value
    


})