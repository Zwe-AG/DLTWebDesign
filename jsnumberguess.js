// UI

const minnum = document.querySelector(".minnumber");
maxnum = document.querySelector(".maxnumber");
getinput = document.querySelector("#guessnumber");
getbtn = document.querySelector("#btn");
message1 = document.querySelector(".message1");
message2 = document.querySelector(".message2");
getgame = document.querySelector("#game");

let min = 1,
  max = 10,
  gameleft = 3,
  winningnum = radomnum(min, max);
console.log(winningnum);

minnum.textContent = min;
maxnum.textContent = max;

getbtn.addEventListener("click", function () {
  //   console.log("I am working");
  //   console.log(getinput.value);
  //   console.log(typeof getinput.value); // String so you will change number

  let guess = parseInt(getinput.value);
  //   console.log(guess);
  //   console.log(typeof guess);

  if (guess < min || guess > max || isNaN(guess)) {
    // console.log(`Please enter a number between ${min} and ${max}`);
    // message2.textContent = `Please enter a number between ${min} and ${max}`;
    setmessage2(`Please enter a number between ${min} and ${max}`, "red");
  }

  if (guess === winningnum) {
    //   win
    //getinput disable
    // getinput.disabled = true;
    // getinput border green
    // getinput.style.borderColor = "green";
    //message 1
    // message1.textContent = `${winningnum} is correct. You win`;
    // message1.style.color = "green";
    // or
    // setmessage1(`${winningnum} is correct. You win`, "green");
    //play again
    // btn.value = "Play again";
    gameover(true, `${winningnum} is correct. You win`);
  } else {
    //wrong number
    gameleft--; // gameleft -= 1;
    // console.log(gameleft);
    //gameover
    if (gameleft === 0) {
      //   Gameover lose
      //   console.log("Game Over");
      //getinput disable
      //   getinput.disabled = true;
      // getinput border green
      //   getinput.style.borderColor = "red";
      //message 2
      //   message2.textContent = `Game Over . You lose , The correct number is ${winningnum}`;
      //   message2.style.color = "red";
      //   setmessage1(
      // `Game Over . You lose , The correct number is ${winningnum}`,
      // "red"
      //   );
      //play again
      //   getbtn.value = "Play again";
      gameover(
        false,
        `Game Over . You lose , The correct number is ${winningnum}`
      );
    } else {
      // continue game

      //getinput color
      getinput.style.borderColor = "red";

      //clear getinput value
      getinput.value = "";

      //message1
      //   message1.innerText = `${guess} is not correct , ${gameleft} is left`;
      //   message1.style.color = "green";
      setmessage1(`${guess} is not correct , ${gameleft} is left`, "blue");
    }
  }
});

// message1

function setmessage1(msg, color) {
  message1.textContent = msg;
  message1.style.color = color;
}

function setmessage2(msg, color) {
  message2.textContent = msg;
  message2.style.color = color;
  setTimeout(function () {
    message2.textContent = "";
  }, 2000);
}

// GameOver

function gameover(win, msg) {
  let color;

  win === true ? (color = "green") : (color = "red");

  // disable getinput
  getinput.disabled = true;

  // color getinput
  getinput.style.borderColor = color;

  // message1
  setmessage1(msg, color);

  // play again
  getbtn.value = "Play again";

  //   getbtn.className = "btn playagain";
  getbtn.classList.add("playagain");
}

getgame.addEventListener("mouseup", (e) => {
  //   console.log(e.target);
  if (e.target.className === "btn playagain") {
    //   console.log("I am playing again");
    window.location.reload();
  }
});

// Winning Number
function radomnum(minnum, maxnum) {
  let getrdm = Math.floor(Math.random() * (maxnum - minnum) + 1);
  return getrdm;
}

// 23GS
