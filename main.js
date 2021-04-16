function playTheGame() {
        
        var letsplay = confirm("Let's play a game?");

        if (letsplay == false) {
            alert("No problem, Goodbye")
            console.log("No problem, Goodbye")
    
        } else if (letsplay == true) {
            
            userNumber = prompt("Please enter a number between 0 and 10");
    
            while (isNaN(userNumber) == true || userNumber > 10 || userNumber < 0) {
                userNumber = prompt("Please enter a valid number between 0 and 10");
                } 
                
            computerNumber = Math.round(Math.random() * 10);
            console.log("computer number is " + computerNumber)
    
            }

            test(userNumber,computerNumber);
}

function test(userNumber,computerNumber) {
    debugger;

    let count = 0;

    while (count < 3) {  

        count++;

        while (isNaN(userNumber) == true || userNumber > 10 || userNumber < 0) {
            userNumber = prompt("Please enter a number between 0 and 10");
        }

        if (userNumber == computerNumber) {
            return alert("WINNER!");

        } else if (userNumber > computerNumber) {

            alert("Your number is bigger then the computer’s, guess again");
            userNumber = undefined;

        } else if (userNumber < computerNumber) {

            alert("Your number is smaller then the computer’s, guess again");
            userNumber = undefined;

        }

        
    }
    if (count == 3) {
        alert("You're out of chances. Try again next time.")
    }
}