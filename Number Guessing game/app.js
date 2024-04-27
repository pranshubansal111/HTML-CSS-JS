let random = Math.floor(Math.random()*100)+1;

let guess = prompt("Guess the number between 1 and 100 and press 0 anytime to quit");
guess = Number.parseInt(guess);

let count = 1;
if(random===guess){
    alert("Hurray! You entered correct number in first go");
}

if(guess===0){
    alert(`QUITTING and Correct Number is ${random}`);
}

else{
while(guess!== random){   
    if(guess===0){
        alert(`QUITTING and Correct Number is ${random}`);
        break;
    }
    if(guess<random){
        alert("you have entered less number");
    }
    else{
        alert("you have entered larger number");
    }
    guess = prompt("Guess the number between 1 and 100");
    guess = Number.parseInt(guess);
    count++;
}
}
if(random===guess){
    alert(`You entered correct number ${random} and you took ${count} counts`);
}


