const puplis = document.querySelectorAll(".pupil");
let pupilArr = Array.from(puplis);
// console.log(pupilArr);
// pupils movements
let pupilStartPoint = -100;
let pupilRange = 200;
//mouse X position
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;
// mouse Y postion
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
// mouse X end position - mouse X start position
let mouseXRange = mouseXEndPoint - mouseXStartPoint;
const mouseRange = (event) => {
  currentXPosition = event.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;
  // console.log("X =" + fracXValue);
  currentYPosition = event.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;
  // console.log("Y =" + fracYValue);
  let pupilXCurrentPosition = pupilStartPoint + fracXValue * pupilRange;
  let pupilYCurrentPosition = pupilStartPoint + fracYValue * pupilRange;
  pupilArr.forEach((curPupil) => {
    curPupil.style.transform = `translate(${pupilXCurrentPosition}px,${pupilYCurrentPosition}px)`;
    console.log(curPupil);
  });
};
const windowResize = (event) => {
  mouseXEndPoint = window.innerWidth;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
  mouseYEndPoint = window.innerHeight;
};
window.addEventListener("mousemove", mouseRange);
window.addEventListener("resize", windowResize);
// mimi face ^

const texts = document.querySelector(".texts");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
// recognition.continuous=true
// const recognition = new window.SpeechRecognition();
// recognition.interimResults= true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  const textArray = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = textArray;
  p.classList.add("outPutText");
  texts.appendChild(p);

  if (e.results[0].isFinal) {
    if (textArray.includes("hello")) {
      inputTextp = document.createElement("p");
      inputTextp.classList.add("input");
      inputTextp.innerText = "Hi how are you?";
      texts.appendChild(inputTextp);
    } else if (textArray.includes("I am fine and you","how are you")) {
      inputTextp = document.createElement("p");
      inputTextp.classList.add("input");
      inputTextp.innerText = "I am also fine";
      texts.appendChild(inputTextp);
    } else if (textArray.includes("what is your name")) {
      inputTextp = document.createElement("p");
      inputTextp.classList.add("input");
      inputTextp.innerText = "my name is alo";
      texts.appendChild(inputTextp);
    } else if (textArray.includes("where are you from")) {
      inputTextp = document.createElement("p");
      inputTextp.classList.add("input");
      inputTextp.innerText = "I am form bangladesh";
      texts.appendChild(inputTextp);
    } else if (textArray.includes("how old are you")) {
      inputTextp = document.createElement("p");
      inputTextp.classList.add("input");
      inputTextp.innerText = "I am 20 year old";
      texts.appendChild(inputTextp);
    } else if (textArray.includes("what is your version Alo")) {
      inputTextp = document.createElement("p");
      inputTextp.classList.add("input");
      inputTextp.innerText = "my version is 2.5.20it";
      texts.appendChild(inputTextp);
    }  else {
      inputTextp = document.createElement("p");
      inputTextp.classList.add("input");
      inputTextp.innerText = "i dont undasten";
      texts.appendChild(inputTextp);
    }
    p = document.createElement("p");
  }

  function scroll() {
    var scrollMsg = document.querySelector(".chat-container");
    scrollMsg.scrollTop = scrollMsg.scrollHeight;
  }
  scroll();
  console.log(textArray);
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
