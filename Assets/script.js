
    //function to update time every second
let update = function () {
  // move all the variables inside the function instead of outside. when you leave it inside it gets the var every second but if you get it from outside it is just gettings its inital value and refreshing it each second and stays stagnant.
  // var today is method moment()
  var today = moment();
  // var day is to show day
  var day = today.format("dddd");
  // var day is to show month day of month and year
  var date = today.format("MMM Do, YYYY");
  // var time is to show the current time
  var time = today.format("h:mm:ss a");
  $("#day").text(day);
  $("#date").text(date);
  $("#time").text(time);
};
update();
setInterval(update, 1000);

// funtion adds a past, present, and future class
function PPFClassAdder() {
  var currentTime = moment().hour();
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
    if (timeBlock < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (timeBlock === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else if (timeBlock > currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
PPFClassAdder();
// add attribute based on classes past present and future
// red for past cause past is past leave it behind
// blue is present because its neutral kinda ig idk
// future is green because green = win and aim to win
$(".past").css("background-color", "#FF345C");
$(".present").css("background-color", "skyblue");
$(".future").css("background-color", "#25F31F");

// saveBtn event listener using on with click and function to save text in texterra with class description and getting the value
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
// returning the attr of "id" Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
})
//get item by refering to a specefic time block and getting value get item and refering to the key
$("#hour9 .description").val(localStorage.getItem("hour9"));
// console.log(localStorage);
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));