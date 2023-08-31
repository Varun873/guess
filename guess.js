var randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById("guessbtn").addEventListener('click', function(){
var guess=parseInt(document.getElementById("guessInput").value)
attempts++;
if(guess===randomNumber){
displaymsg("Congratulations! You guessed the Number in " + attempts + "attempt")
document.getElementById("guessbtn").disabled=true;
}
else if(guess <randomNumber){
displaymsg("Too low!try a higher number-")
}
else{ 
displaymsg("Too high!try a lower number.")
}
});
function displaymsg(k){
document.getElementById("msg").textContent=k;
}