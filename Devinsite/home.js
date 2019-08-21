
$(document).ready(function(){
    $(".frontContact").hide();
  });

$(".ctcClose").click(function(){
    $(".frontContact").hide(500);
  });
  
$("#contactid").click(function(){
    $(".frontContact").show(500);
  });

$("#contactid").mouseenter(function(){
    $("#contactid").css({
      "border": "3px inset whitesmoke"
    });
  });

$("#contactid").mouseleave(function(){
    $("#contactid").css({
      "border": "3px outset whitesmoke"
    });
  });

// $(document).ready(function(){
//     $("#contactid").css({
//           "transition" : 'background-color 2s ease-in-out',
//           "background-color": "green",
          
//       });
// });

// $(document).ready(function(){
//   $("#contactid").css({
//         "transition" : 'background-color 2s ease-in-out',
//         "background-color": "green"
//       })
// });

// $(document).ready(function(){
// setTimeout(
//   function() {
//     $("#contactid").css({
//     "transition" : 'background-color 2s ease-in-out',
//     "background-color": "blue"}, 5000)
//   });
// });






// $("#frontCtc").click(function() {
//     $(".frontContact").slideToggle();
// });
// $(".ctcClose").click(function() {
//     $(".frontContact").slideToggle();
// });
// $(".contactme").click(function() {
//     $(".frontContact").hide();
// });


// send user input to firebase
// $(".sendBtn").on("click", function(event){
    
    // event.preventDefault();
    // grab user input
    // var custName = $("#custName").val().trim();
    // var custEmail = $("#custEmail").val().trim();
    // var custMsg = $("#box3").val().trim();
    // alert message sent
    // var notSent = "All fields are required"
    // var sent = "Message Sent!"
    //MUST fill in all fields
    // if (custName === "" || custEmail === "" || custMsg === "")
    // {
    //     $(".sent").text(notSent)
    //     $(".sent").fadeIn()
    //     setTimeout($(".sent").fadeOut(), 10000);
    //     clearInterval();
        
    //     // showhideSend();
    //     console.log("invalid")
    // }
    // else{
    //     $(".sent").text(sent)
    //     console.log("name" + custName);
    //     console.log("email" + custEmail);
    //     console.log("msg" + custMsg);
    
    //     $(".sent").fadeIn()
    //     setTimeout($(".sent").fadeOut(), 10000);
    //     clearInterval();
    //     // showhideSend();
    //     // create object that will hold train data
    //     var newLead = {
    //         customerName: custName,
    //         customerEmail: custEmail,
    //         customerMsg: custMsg,
    //     };
    //     // upload new object to firebase database
    //     database.ref().push(newLead);
    
    //     // clear text boxes after submitting
    //     $("#custName").val("");
    //     $("#custEmail").val("");
    //     $("#box3").val("");    
    // }