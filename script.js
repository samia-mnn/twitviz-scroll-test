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
           
            counter.style.setProperty("--num", 100000);

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
  
  window.addEventListener("scroll", reveal);

  