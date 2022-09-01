// let str =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit Non est deserunt cum neque enim magnam consequatur suscipit praesentium consectetur facere expedita ipsam laborum voluptas voluptatum tempora obcaecati perspiciatis soluta sunt";
let str = "sit sit sit sit";
let arr = str.split(" ");

// levels =======

const levels = {
  easy: 6,
  normal: 3,
  hard: 2,
};

let selectedLevel = "easy",
  levelTime = levels[selectedLevel];

lvl.innerHTML = selectedLevel;
sec.innerHTML = `${levelTime} sec`;
time.innerHTML = levelTime;
total.innerHTML = arr.length;

// Disable paste event
input.onpaste = () => false;

// Start game
start.onclick = function () {
  this.innerHTML = 3;
  input.focus();
  setInterval(() => {
    this.innerHTML--;
  }, 1000);
  setTimeout(() => {
    this.remove();
    randomWord();
  }, 3000);
};

function randomWord() {
  let randomW = arr[~~(Math.random() * arr.length)],
    wordIndex = arr.indexOf(randomW);

  arr.splice(wordIndex, 1);

  word.innerHTML = randomW;

  // Claer next word
  nextWord.innerHTML = "";

  // Upcoming word
  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div"),
      text = document.createTextNode(arr[i]);
    div.appendChild(text);
    nextWord.appendChild(div);
  }

  playTimer();
}

function playTimer() {
  time.innerHTML = levelTime;
  let start = setInterval(() => {
    time.innerHTML--;
    if (time.innerHTML === "0") {
      if (word.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        input.value = "";
        ++got.innerHTML;
        if (arr.length > 0) randomWord();
      } else if (word.innerHTML.toLowerCase() !== input.value.toLowerCase()) {
        input.value = "";
        if (arr.length > 0) randomWord();
      }
      if (arr.length === 0) {
        result = (got.innerHTML / total.innerHTML) * 100;
        finish.innerHTML = `Your scor: ${result}%`;
        finish.className = result > 50 ? "good" : "bad";
        nextWord.remove();
      }

      clearInterval(start);
    }
  }, 1000);
}
