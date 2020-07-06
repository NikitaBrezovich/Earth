function validateText() {
    var name = document.forms.Quiz.name.value;
    if (name === "") {
      alert("Name must be filled out");
      return false;
    }else {
      return true;
    }
  }
  function validateRadio() {
    var x = document.forms.Quiz.elements.answer1.value;
    var y = document.forms.Quiz.elements.answer2.value;
    var z = document.forms.Quiz.elements.answer3.value;
    if (x === "" && y ==="" && z === "" ) {
      alert("One radio button must be selected");
      return false;
    }else{
      return true;
    }
  }
  function validateNumber() {
    //var x, text;
    var x = document.getElementById("numb").value;
    if (isNaN(x) || x < 1 || x > 10) {
      alert("Number entry invalid");
      return false;
    } else {
      return true;
    }
  }
  function validateQuestions() {
        if (validateText() && validateNumber() && validateRadio()){
          return true;
        }else{
          return false;
        }
      }
  function Checkresults() {
      var quiz=document.forms.Quiz;
       var score=0; //id="total"; 
       console.log('0:' + score);
       if (validateQuestions()){
         answer1 = quiz.answer1.value;
           if (answer1 == "Answer11"){
               score = score + 6;
             //showFeedback(score);
            }
           if (answer1 == "Answer13"){
               score = score + 3;
            // showFeedback(score);
            }
          if (answer1 == "Answer12"){
              score = score + 0;
           //  showFeedback(score);
            }
        }
        console.log('1 bloc: ' + score);
       if (validateQuestions()){
         answer2 = quiz.answer2.value;
          if (answer2 == "Answer21"){
              score = score + 6;
          //   showFeedback(score);
            }
          if (answer2 == "Answer23"){
              score = score + 3;
       //      showFeedback(score);
            }
          if (answer2 == "Answer22"){
              score = score + 0;
        //     showFeedback(score);
            }
        }
        console.log('2 bloc: ' + score);
       if (validateQuestions()){
         answer3 = quiz.answer3.value;
          if (answer3 == "Answer31"){
              score = score + 6;
          //   showFeedback(score);
            } 
          if (answer3 == "Answer32"){
              score = score + 3;
            // showFeedback(score)();
            }
          if (answer3 == "Answer33"){
              score = score + 0;
             //showFeedback(score);
            }
        }
        console.log('3 bloc: '+ score);
        showFeedback(score);
       // console.log(showFeedback(score));
    }
         
     function showFeedback(score){
      document.forms.Quiz.style.display = "none";
      console.log(score);
       //  var body = document.getElementsByTagName("body");
        // console.log(body);
         document.body.innerHTML = "<h1>Well done, your score was...  " + score + " </h1>";
        //  body.innerHTML = '<div><img src="fireworks.jpg"/></div>';   
        if (score === 0){
            document.body.innerHTML = "<h1>Do better next time, your score was..."  + score + " </h1>";
            console.log('1 bloc: '+ score);
     }
        else if (score < 6){
            document.body.innerHTML = "<h1>You almost got full marks! Great, your score was... " + score + " </h1>";
            console.log('2 bloc: '+ score);
     } 
        else if (score > 12) {
            document.body.innerHTML = "<h1>Excellent, full marks to you! Your score was... " + score + " </h1>";
            console.log('3 bloc: '+ score);
     }
   }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      