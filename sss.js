//Math.random() : generates any random number between 0-1;
//Math.floor(Math.random()*3): basically removes all the decimal places Math.floor() 


let userscore =0;
let compscore =0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userscorecount = document.querySelector("#user-score");
let compscorecount = document.querySelector("#comp-score");

const gencompchoice =()=>{
    const options =["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame =()=>{
    msg.innerText = `GAME'S DRAWN!!!`;
    msg.style.backgroundColor="#081b31";
};
const showinner =(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorecount.innerText=userscore;
        msg.innerText= `you win!!! YOUR ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorecount.innerText=compscore;
        msg.innerText= `COMPUTER WINS !!! ${compchoice} beats YOUR ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}

const playgame =(userchoice)=>{
    console.log("user choice is",userchoice);
    const compchoice = gencompchoice();
    console.log("Computer choice is",compchoice);
    if(compchoice === userchoice){
        drawgame();
    }else {
        let userwin= true;
        if(userchoice === "rock"){
            //scissor,paper
            userwin= compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //scissor,rock
            userwin= compchoice === "scissors" ? false : true;
        }else{
            userwin= compchoice === "rock" ? false : true;

        }
        showinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        
        playgame(userchoice);
    });
});
