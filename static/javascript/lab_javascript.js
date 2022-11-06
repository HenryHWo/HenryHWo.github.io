/* The comments apply to the original, intial state of the code. Changes have been made as per the lab 10 instructions */

/*Array to be iterated through once the if statement below is True. The elements are what are used in lvl.textContent*/
const difficulties = [
  "Level: Easy",
  "Level: Medium",
  "Level: Hard",
  "Level: Fact",
  "Level: Extra Hard",
  "Congratulations! You reached the bonus level!",
];
/*Array to be iterated through once the if statement below is True. The elements are what are used in goal.textContent*/
const goalString = [
  "CS 3308",
  "This is not a test.",
  "42 is the answer to the Ultimate Question of Life, the Universe, and Everything.",
  "The Javascript Lab is kinda fun!",
  "How vexingly quick daft zebras jump! Glib jocks quiz nymph to vex dwarf. Sphinx of black quartz, judge my vow.",
  "乁( ⁰͡ Ĺ̯ ⁰͡ ) ㄏ      (ノಠ益ಠ)ノ彡┻━┻        ლಠ益ಠ)ლ       (• ε •) ",
];

/* Counter variable */
var i = 0;

var timerEnd =0;
var timerStart = Date.now()

/* addEventListener() attaches an event handler to this document so that a function is executed once an event occurs.
In this case, the event is "keydown" which is an event thaat is fired when a key that produces a character is pressed
down. When the event occurs, the event object is passed to the function as a parameter. */
window.addEventListener("input", function (event) { //applies to entire window, if input changes
  /* The html element with id=userinput (which is just an empty html element) is assigned to the textbox variable*/
  //const textbox = document.getElementById("userinput");
  /* The key property returns the identifier of the key that was pressed when a key event occurs. Thus, they keys
  that are entered by the user are returned, and assigned to textbox.textContent. The textContent property of textbox
  represents the literal text content of the variable textbox. */
  const output = document.getElementById("output"); //output = html element with id=output
  const input = document.getElementById("input"); //input = html element with id=input
  output.innerHTML = input.value;
  

  if (input.value.length === 0) {
    output.innerHTML = "The text you enter in the box above will appear here.";
  }

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      input.value = "";
      output.innerHTML =
        "Cleared! The text you enter in the box above will appear here.";
    }
  });

  /* If the user input in textbox.textContent matches that of the ith element in array goalString, execute the function
  below */
  if (output.innerHTML == goalString[i]) {
    const result = document.getElementById("result");
    result.textContent = "You Win!";
    /* catImage = document.getElementById("cat")
    catImage.src ="cat1.jpeg" */
    const next = document.createElement("button");
    next.innerHTML = "Next challenge!";
    next.id = "nextButton";
    document.body.appendChild(next);
    next.addEventListener("click", nextChallenge);

    input.disabled = true;
    
    timerEnd = Date.now()
    diff = (window.timerEnd - window.timerStart)/1000
    timing = document.createElement('p')
    timing.id= "timing"
    timing.setAttribute(
      'style',
      'background-color: salmon; color: white;',
    )
    if (diff <=60) {
      timing.textContent = "Your time was " + diff + " seconds!"
    }
    else {
      var minutes = Math.floor(diff / 60);
      var seconds = diff % 60;
      timing.textContent = "Your time was " + minutes + " minutes and "+ seconds + " seconds!";
    }
    document.body.appendChild(timing)

    /* The html element with id=result is assigned to variable result */
    /* The string "You Win" is assigned to variable result's textContent property, which replaces "Type the Following text:*/
    /* Variable textbox's textContent property is replaced by an empty string, resetting it for the next round */
  }

  function nextChallenge() {
    input.disabled = false;
    output.innerHTML = "The text you enter in the box above will appear here.";
    result.textContent = "Type the Following text:";
    input.value = "";
    /* Increment counter variable i */
    i = i + 1;
    /* The html element with id=level is assigned to the lvl variable */
    lvl = document.getElementById("level");
    /* The ith element in the difficulties array (the next element since the counter is incremented) is now the textContent 
    property of the lvl variable */
    lvl.textContent = difficulties[i];
    /* The html element with id=goal is assigned to the goal variable */
    goal = document.getElementById("goal");
    /* The ith element in the goalString array (the next element since the counter is incremented) is now the textContent 
    property of the goal variable */
    goal.textContent = goalString[i];
    document
      .getElementById("nextButton")
      .parentNode.removeChild(document.getElementById("nextButton")); //removes next challenge button so no there are no duplicate buttons
    document
      .getElementById("timing")
      .parentNode.removeChild(document.getElementById("timing")); //removes timestamp 
    timerStart = Date.now()
  
  }
});
