# Lesson 7: Introduction to JavaScript

## WHAT is JavaScript?
----------------------
JavaScript is a language that allows web browsers to change a page's HTML. By
changing the HTML, we can make web pages that do things when you interact with them,
like clicking a button or moving your mouse.

## WHY do we use it?
--------------------
We use JavaScript to do many things.

## LEARN how to use it.
-----------------------

## Goal 1: Set up the game.
```js
/*
    Set the number we have to guess between 1 and 100.
    Math.random() will give us a number between 0 and 1, then if we
    multiply it by 100, we get a number between 0 and 100.
*/
var number = Math.random() * 100;

/*
    The last line gave us a number between 0 and 100, but it has a
    decimal point attached (like 59.203). We can use Math.floor to
    remove the decimal point. (59.203 becomes 59).
*/
number = Math.floor(number);

/*
    We will create a new variable to hold our players' guess.
    The prompt function will show them a pop-up box with a text input,
    so they can enter their guess.
*/
var guess = prompt("Guess a number.");
```

## Goal 2: Use a while loop so the player can guess many times.

```js
/*
    The while keyword will repeat the code inside the curly braces ({ and })
    until the condition is met. In this case, we will repeat the code
    until guess is equal to the number. That means the player guessed the right number.

    This kind of keyword is called a "loop."
*/
while (guess != number) {
    /*
        The if keyword will check a single condition, once. It does
        mostly the same thing as while, but it won't repeat.
    */
    if (guess > number) {
        /*
            If the guess was higher than the number, we'll ask the player
            to guess again. This time, we'll tell them to guess lower.
        */
        guess = prompt("Lower.");
    } else {
        /*
            If the condition isn't true (meaning guess is not greater than number),
            the computer will skip it and go to any else statement after the if.
            You don't have to have an else statement.

            If the guess was lower than the number, we'll ask the player
            to guess again. This time, we'll tell them to guess higher.
        */
        guess = prompt("Higher.");
    }
}
```

## Goal 3: Tell the player when they guessed the answer correctly.

```js
/*
    If the player guessed correctly, the while loop will stop looping through
    the code. All that's left to do is tell the player they guessed
    correctly. The alert function will show a pop-up with whatever text
    we give it.
*/
alert("You got it!");
```


## APPLY your new knowledge.
----------------------------
This section contains optional challenges for students to complete on their own.
They are designed to show students how to go "above and beyond" on this project.

## Challenge 1: Use a function to check if what the player put in was not a number.

Use the `isNaN(input)` function to check if it is "not a number."

## Challenge 2: Count how many guesses it took to get it right.

Make a new variable called "counter", then add 1 to it every time the player got it wrong.

```js
  var counter = 0;

  // After the closing curly brace } at the end of the else:
  counter += 1;

  // Then, in the alert:
  alert("You got it! It took ", counter, " tries.");
```

## Challenge 3: Give the use a hint if they are close or too far away.

You can use the `Math.abs` function to check how close something is.

First, we will make a new variable called `how_far_away`, then set it to `guess` minus `number`.

Then, we can use `Math.abs` to remove the negative sign. `how_far_away` would be a negative number
if `guess` is smaller than `number`. We want to make `how_far_away` a positive number because
you can't be a negative distance away from something. How far away is the front of the classroom?
How far away is negative 4 feet?

```js
var how_far_away = guess - number;
how_far_away = Math.abs(how_far_away);

if (Math.abs(how_far_away) < 10) {
   alert("Hot.");    
}
if (Math.abs(how_far_away) > 30) {
    alert("Cold.");
}
```
