function rndm_colour(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
  }
  
  function change_heading() {
    color = rndm_colour();
    document.getElementById("heading").style.color = color;
  }