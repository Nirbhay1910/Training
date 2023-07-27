/// this $(document).ready will ensure our jquery code is run when all the body is rendered
//shortcut is $(function(){})
$(document).ready(function () {
  // $("p").click(function () {
  //   console.log("you click on p", this);
  //   // $('p').hide();//will hide all the p tag
  //   // $(this).hide(); //can use this as a selector
  // });

  //$('#id')
  //$('.class')
  //$('element')

  // $('*').click(); //clicks on every elem
  // $("p.odd").click(); //clicks p with odd class

  //// events in jquery ////

  // Mouse events = click, dblclick, mouseenter, mouseleave
  // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
  // form events = submit, change, focus, blur
  // document/window events = load, resize, scroll, unload

  $("*").dblclick(function (e) {
    console.log(e);
  });

  ////// on method //////

  //can be used to have multiple events
  $("p").on({
    click: function () {
      console.log("Thanks for clicking", this);
    },
    mouseleave: function () {
      console.log("mouse has leaved");
    },
  });

  // $('#wiki').hide(1000,function(){
  //   console.log("hidden");
  // })//time takes for hidding and callback fn
  // $('#wiki').show(1000,function(){
  //   console.log("hidden");
  // })

  ///// Normal Animations /////

  $("#but").click(function () {
    // $("#wiki").toggle(1000); // toggles between hide and show
    // $("#wiki").fadeOut(1000);
    // $("#wiki").fadeIn(1000);
    // $("#wiki").fadeToggle(1000);
    // $("#wiki").fadeTo(1000, 0.3); // in 1s opacity becomes 0.3

    // $("#wiki").slideUp(1000);
    // $("#wiki").slideDown(1000);
    // $("#wiki").slideToggle(1000);
    //these all functions can have callback fns

    // $("#wiki").animate(
    //   {
    //     opacity: 0.3,
    //     height: "150px",
    //     width: "500px",
    //   },
    //   2000
    // ); // can animate multiple properties at same time

    // in this manner it animates in queues
    $("#wiki").animate({ opacity: 0.3 }, 3000);
    $("#wiki").animate({ height: "300px" }, 3000);

    /// to stop the animation in between use $('wiki).stop();
  });

  // $("#wiki").text("yo"); // same as textContent
  // $("#wiki").html("<h2>yyayy</h2>"); // same as innerHTML

  ////////  Forms /////////
  $("#ta").val(); //gives text area value
  $("#ta").val("Hello from Nirbhay"); // will change text area value
  $("#ta").html("honolulu"); // will not work as for forms we have to use val only

  // $("#wiki").empty();//can be used to empty a tag
  // $("#wiki").remove();//will remove whole div

  ///// adding removing classes /////
  $("#wiki").addClass("myclass");
  $("#wiki").addClass("myclass2");
  $("#wiki").removeClass("myclass2");
  $("#wiki").toggleClass("myclass2");

  //// changing style //////
  $("#wiki").css({
    "background-color": "red",
    color: "white",
  });

  //////// AJAX ////////
  $.get("https://code.jquery.com/jquery-3.7.0.min.js", function (data, status) {
    // alert(status);
  });
  // $.post(
  //   "https://code.jquery.com/jquery-3.7.0.min.js",
  //   {
  //     name: "nirbhay",
  //     channel: "code with nirbhay",
  //   },
  //   function (data, status) {
  //     alert(status);
  //   }
  // );
});
console.log(
  "I am going to be run earlier than the code in document.ready block"
);
