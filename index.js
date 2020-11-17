$(document).ready(function(){

    // create event listener button using class name
    $(".saveBtn").on("click", function(){
    var hour = $(this).parent().attr("id");
    var userInput = $(this).prev().val();

    localStorage.setItem(hour, userInput);

    })

    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    // create event for which button fired 
    // retrieve the input field value
    // save to the local storage for hour name and for value
    


})