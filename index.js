var navLangs = document.getElementsByClassName("lang-div");
function ClickLiFunction(index) {
  for (var i = 0; i < navLangs.length; i++) {
    if (index === i) {
      navLangs[i].classList.add("active-li");
      if (index === 0) {
        navLangs[i + 1].classList.remove("active-li");
      } else {
        navLangs[i - 1].classList.remove("active-li");
      }
    }
  }
}

var elements = document.getElementsByClassName("nav-elements");
function clivkNav(index2) {
  for (var k = 0; k < elements.length; k++) {
    if (index2 === k) {
      for (var z = 0; z < elements.length; z++) {
        if (elements[z].classList.contains("active-li") || z !== index2 ) {
          elements[z].classList.remove("active-li");
          elements[k].classList.add("active-li")
        }
      }
    }
  }
}

var audio1 = new Audio(
  "https://www.wordreference.com/audio/es/Castellano/es188549.mp3"
);
function playAudio1() {
  audio1.play();
}

var audio2 = new Audio(
  "https://www.wordreference.com/audio/es/Castellano/es186017.mp3"
);
function playAudio2() {
  audio2.play();
}

fetch("https://api.3sual.az/api/task")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var words = data;
    console.log(words);
  });

function getInput(){
  
}