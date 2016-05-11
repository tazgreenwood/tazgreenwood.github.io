function game() {

  document.getElementById("button").style.display = "none";
  document.getElementById("title").style.display = "none";
  document.getElementById("count").style.display = "none";

  var number = Math.random() * 100;
  number = Math.floor(number);

  var guess = prompt("Guess a number between 0 and 100");

  var counter = 1;

  while (guess != number) {
    if (isNaN(guess)) {
      guess = prompt("Try entering a number");
    }
    else if (guess > number) {
      guess = prompt("Lower");
      counter += 1;
    }
    else {
      guess = prompt("Higher");
      counter += 1;
    }
  }
  document.getElementById("button").style.display = "block";
  document.getElementById("title").style.display = "block";
  document.getElementById("count").style.display = "block";
  document.getElementById("title").innerHTML = "Congratulations!!!!";
  document.getElementById("count").innerHTML = "You Got It! It took you "+ counter + " tries.";
}
