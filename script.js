function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var counters = document.querySelectorAll(".counter");
    var counter = counters[0];
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementClassList = reveals[i].classList;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        if(elementClassList.contains("with-count"))
        {
            $(".heart").addClass("is-active");
            counter.style.setProperty("--num", 100000);

        }
        if(elementClassList.contains("before-bar-graph"))
        {
          $(".pre-bar").remove();

        }
      } else {
        reveals[i].classList.remove("active");
      }
      if (elementTop <= 0 && elementClassList.contains("tweet-wrap"))
      {
        reveals[i].classList.add("intro-stage-1");
      }
      
      
      //else {
        //reveals[i].classList.remove("intro-stage-1");
      //}
    }
  }
  //let's do one where it checks all the ones where it's active'
  //active1 original tweet
  //move to the side
  function randomPosition() {
    console.log("hi");
    const hearts = document.querySelectorAll(".heart2");
    console.log(hearts);
    for (var i = 0; i < hearts.length; i++) {
    const randomX = Math.floor(Math.random() * window.innerWidth/3);
    const randomY = Math.floor(Math.random() * window.innerHeight/2);
    hearts[i].style.left = randomX + "px";
    hearts[i].style.top = randomY + "px";
    console.log(hearts[i]);
    }
  };

 

 $( document ).ready(function() {
  randomPosition();
  $(".lets-go").click(function() {
    expandToAccountSize();
  });
 
});
  
function expandToAccountSize() {
  $(".top").css({'padding-bottom':'10%'});
  $(".mid-top").css({'padding-bottom':'20%'});
  $(".mid-bot").css({'padding-bottom':'0'});
  $(".bot").css({'padding-bottom':'0'});
  $(".bot").css({'padding-top':'0'});

  $("#top-info").text("78% of viral tweets were from accounts with more than 50,000 followers.")
  $("#bot-info").empty();
  $(".lets-go").html("<h1>Next</h1>");

  console.log("run");
}
  window.addEventListener("scroll", reveal);

  
