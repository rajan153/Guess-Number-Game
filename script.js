// For getting random Values

const randomNum = parseInt(Math.random() * 100 + 1);

// Get the elements

const result = document.getElementById("result");
const inputNumber = document.getElementById("num");
const btn = document.getElementById("btn");
const prevNum = document.getElementById("prevNum");
const remainingNum = document.getElementById("remainingNum");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const startBtn = document.getElementById("startBtn");
const closeGameBtn = document.getElementById("closeGameBtn");

// Some variable or arrays.
let tempArray = [];
let life = 10;
remainingNum.innerHTML = `Life:- ${life}`;

// Adding Event
inputNumber.setAttribute("disabled", "");
btn.setAttribute("disabled", "");
startBtn.addEventListener("click", () => {
  inputNumber.disabled = false;
  btn.disabled = false;
  modal.style.display = "none";
});

//Close Button after Winner

closeGameBtn.addEventListener("click", () => window.close());

// Submit Button

btn.addEventListener("click", (e) => {
  // Removing Default Function from submit btn.

  e.preventDefault();

  // Checking Number Function.

  const valueNum = parseInt(inputNumber.value);

  // Checking Value Function Call.

  checkingValues(valueNum);
});

// Checking Value Function.

function checkingValues(valueNum) {
  if (valueNum === "" || isNaN(valueNum) || valueNum < 1 || valueNum > 100) {
    result.innerHTML = `${valueNum} Not a Valid Number...`;
  } else {
    tempArray.push(valueNum);
    prevNum.innerHTML = `Previous Number:- ${tempArray}`;
    remainingNum.innerHTML = `Life:- ${life - tempArray.length}`;
    inputNumber.value = "";
    // Guessing Messages

    if (tempArray.length === 10) {
      result.innerHTML = `Answer:- ${randomNum}`;
      remainingNum.innerHTML = `No More Lifes...`;
      inputNumber.disabled = true;
      btn.disabled = true;
      modalText.innerHTML = `<p>Game Over, Try Again...</p>`;
      modal.style.display = "block";

      // Game Over Function

      gameOver();
    } else if (valueNum === randomNum) {
      // Message after Winner
      result.innerHTML = `You're Guess the Right Number...`;
      // Disable Buttons after Winning
      inputNumber.disabled = true;
      btn.disabled = true;
      // Modal After Winning
      modalText.innerHTML = `<p>Congratulations, You're Winner...</p>`;
      modal.style.display = "block";

      // Game Over After Winning Function Call

      gameOver();
    } else if (valueNum > randomNum) {
      result.innerHTML = `${valueNum} is too Big...`;
    } else {
      result.innerHTML = `${valueNum} is too Short...`;
    }
  }
}

// Game Over Function
function gameOver() {
  startBtn.addEventListener("click", () => {
    tempArray = [];
    life = 10;
    inputNumber.disabled = false;
    btn.disabled = false;
    // Everything changes like starting
    remainingNum.innerHTML = `Life:- ${life}`;
    prevNum.innerHTML = `Previous Number:- `;
    result.innerHTML = `Answer:- `;
    modal.style.display = "none";
  });
  //Close Button after Winner
  closeGameBtn.addEventListener("click", () => window.close());
}
