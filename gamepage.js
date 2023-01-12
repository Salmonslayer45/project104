// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user   
var x = document.getElementById("guessField").Value;  

if(x == y)
{
    alert("CONGRATULATIONS!"+playername+"You Guessed it right in"+ guess + "Guess");
    guess= 1;
}

else if(x > y)
{
    guess++;
    alert("OOPS Sorry! Try a smaller number");
}
else
{
    guess++;
    alert("OOPS Sorry! Try a Greater number");
}

function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}