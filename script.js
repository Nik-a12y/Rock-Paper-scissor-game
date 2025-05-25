let userScore=0;
let compScore=0;

 const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg"); 

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


 const genCompChoice=()=>{
   const options = ["rock","paper","scissors"];
   const randIdx=Math.floor(Math.random() * 3);
   return options[randIdx];
 };
 const drawGame=()=>{
   console.log("game was draw.");
   msg.innerText="Game was Draw,try again";
   msg.style.backgroundColor="#081b31";
 };

const showwinner=(userwin)=>{
   if(userwin){
      userScore++;
      userScorePara.innerText=userScore;

      console.log("You win");
      msg.innerText="You win!";
      msg.style.backgroundColor="green";
   }else{
      compScore++;
      compScorePara.innerText=compScore;
      console.log("You Lose");
      msg.innerText="You Lose"
      msg.style.backgroundColor="red";
   }
}; 

const playGame=(userChoice)=>{
   console.log("user choice =",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("computer choice =",compChoice);

    if(userChoice===compChoice){
      drawGame();
    }else{
      let userwin=true;
      if(userChoice==="rock"){
         //scissors,rock
         userwin=compChoice==="paper"? false:true;
      }else if(userChoice==="paper"){
         //rock,scissors
         userwin=compChoice==="scissors"? false:true;
      }else{
         //rock,paper
         userwin = compChoice==="rock"? false:true;
      }
      showwinner(userwin);
   }
};
 


 choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
 });
 // dark mode toggle
let button=document.querySelector("#btn");
let curreMode="light";
button.addEventListener("click",()=>{
    if(curreMode==="light"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
       button.innerText="light mode";
       button.style.backgroundColor="white";
       button.style.color="black";
        curreMode="dark";
        console.log("dark mode");
    }else {
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    button.innerText="dark mode";
    button.style.backgroundColor="black";
    button.style.color="white";
    curreMode="light";
    console.log("light mode");
}
}); 