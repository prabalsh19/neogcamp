var readLineSync = require("readline-sync");
const chalk = require('chalk');
var score=0

var username=readLineSync.question("What is your name? ").toUpperCase();

console.log("Welcome "+chalk.bold.redBright(username)+" To The Quiz");

function play(que,ans){
  var useranswer=readLineSync.question(que)
  if(useranswer==ans){
    console.log("You are Right");
    score++
  
  }else{
    console.log("You are Wrong,the right answer is "+ans)
  }
  console.log(chalk.bold("Your Score is "+ score))
}

play("Where Do I Live ","Bhopal");
play("My Fav Activity", "Sleeping");
play("My Fav Actor", "NoBody");