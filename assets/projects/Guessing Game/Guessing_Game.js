let start = document.getElementById("start"); //The start button
let secret; //Variable that stores the secret number
var guess; //Variable that stores user's guess

function guess_game()
{
     while(guess != secret)
    {
        // Getting input from the user 
        //I have removed the conversion to interger because null cannot be an integer, it is an object
        //That makes it dificult to break the loop when user clicks 'cancel'
        guess = prompt("Please guess the secret number (1-20)");
        if(guess == null)
        {
            //If the user clicks cancel, the loop breaks
            alert("Sorry to see you go.");
            break;
        }
        else if(guess < 1 || guess > 20)
        {
            //Checks if the entered guess is between 1 and 20
            alert("Out of bounds! Please try again\n Please enter a number between 1 and 20.");
        }
        else
        {
            if(guess == secret)
            {
                //If the guess is correct
                alert("Correct Guess!");
            }
            else if(guess > secret)
            {
                //If the guess is too high
                alert("Sorry, incorrect Guess!\n Too high");
            }
            else if(guess < secret)
            {
                //If the guess is too low
                alert("Sorry, incorrect Guess!\n Too low");
            }
        }
    }
}

//Function to return a random number
function getRandNum(min, max) 
{
    //Return a random number with the range (1-20)
    return Math.floor(Math.random()*(max - min)) + min;
}

//When the user clicks on the button, the game starts
start.onclick = function()
{
    secret = getRandNum(1, 20);
    guess_game();
}