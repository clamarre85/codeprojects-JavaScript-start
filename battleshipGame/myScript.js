//Here are the 3 location variables. They will hold the location of each cell of the ship. We have set up the ship's location at 3, 4, and 5 for now. 

var location1 = 3;

var location2 = 4;

var location3 = 5;

//The variable guess won't have a value until the user makes a guess. Until then it will have the value undefined. 

var guess;

// Assign the initial values of 0 to both the hits and guesses. 

var hits = 0;

var guesses = 0;

// The isSunk variable gets a value of false, and will be set to true when the user has sunk the Battleship. 

var isSunk = false;

// Here is the start of the LOOP - While the ship is not sunk, the game is still active, so keep looping. 

// While uses a conditional test to determine whether to keep looping. Here, let's test to make sure that isSunk is still false and will be set to true as soon as the Battleship is sunk. 

// Each time the user goes through the 'while loop' we are going to prompt the user for a guess by using the prompt built-in function. 

// Prompt causes a dialog to be displayed with a string that we can customize, and provides a place for the user to type in their response. That response in a form of a string is returned as a result of calling the function. *** if the user cancels the dialog or does not enter anything it will result in a null return instead.

// The result of the prompt function is assigned to the guess variable. 
// Providing the prompt with a string will be used as instructions to the user in the dialog box (pending device use). 

//Variable declarations down below:

while (isSunk == false) {

    guess = prompt ("Ready, Aim, Fire! (enter a number from 0-6) :") ;

    if (guess < 0 || guess > 6) {  
                             // Check validity making sure guesses are between 0 - 6.
        alert ("Please enter a valid cell number!");    // If guessess are not valid, tell user with an alert.

    } else {
        
        guesses = guesses + 1;  // Guessess ARE valid - add 1 to guessess to keep track of # of times the user guessed. 
        
        if (guess == location1 || guess == location2 || guess == location3) {  

            alert("HIT!");

            hits = hits + 1;    // If guesses match one of the ship's locations - increment hits counter. 

            if (hits == 3) {    // First check to see if there are 3 hits to the ship's location.

                isSunk = true;  // If hits are true - the user has sunk your battleship. LOOP has stopped.

                alert("You Sank My Battleship!");   // Let the user know, they sunk your battleship!
            }

        } else {

            alert("MISS!");

        }
    }
}

// If guess is at location1 - user hits the ship - so increment the hits variable by one.
// Otherwise if guess is at location2 - do the same thing.
// If the guess is location3 - again increment the hits variable by one.
// If none of these statements are true - then the hits variable will NEVER be incremented.   

var stats = "You took " + guesses + " guessess to sink the Battleship, " + "which means your shooting accuracy was " + (3/guesses);

alert (stats);

// Above we can tell the user some stats on how they did by creating a string that contains a message to the user including the # of guessess they took, along with the accuracy of their shots. 

// Take note of how you split up the strings into pieces (to insert variable guesses & fit the string in multiple lines): using the concatenation operator '+'. 

