const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log("Welcome to the Quiz");
let userName = readlineSync.question("What's your name? ");
console.log("Hello ",userName," Let's play the Quiz");

console.log("\n");
console.log('1.',userName + ', There are 10 Questions on India and all are Compulsory.');
console.log('2. You will get 2 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
console.log('\n');

const questionList = [
  {
    question : "India's Largest city by population? ",
    answer : "Mumbai"
  },
   {
    question : 'National Song of India: ',
    answer : 'Vande Mataram',
  }, 
  {
    question : 'National Motto of India: ',
    answer : 'Satyameva Jayate',
  }, 
  {
    question : 'Golden Temple is situated in: ',
    answer : 'Amritsar',
  },
];

var mcqList = [
  {
    array:['Mumbai', 'Hyderabad', 'Guragon', 'Bangalore'],
    question:"Which city is known as Electronic city of India? ",
    answer: "Bangalore"
  },
  {
    array : ['Kerala', 'Madras', 'Bangalore', 'New Delhi'],
    question : 'The Indian Institute of Science is located at ',
    answer : 'Bangalore'
  },
  {
    array : ['Dugong', 'Blue whale', 'River Dolphin', 'Pygmy Killer Whale'],
    question : 'What is the name of India\'s National Aquactic Animal: ',
    answer : 'River Dolphin'
  },
  {
    array : ['New Delhi', 'Hyderabad', 'Amritsar', 'Mumbai'],
    question : 'The Centre for Cellular and Molecular Biology in India is situated at: ',
    answer : 'Hyderabad'
  },
  {
    array : ['Delhi', 'Dehradun', 'Lucknow', 'Gandhinagar'],
    question : 'National Institute of Aeronautical Engineering is located at ',
    answer : 'Delhi'
  },
  {
    array : ['T.N.Kaul', 'J.R.D. Tata', 'Nani Palkhivala', 'Khushwant Singh'],
    question : 'Who wrote the famous book - "We the people"? ',
    answer : 'Nani Palkhivala'
  }
];
let score = 0;
function quiz(question,answer){
  let userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()){
    score=score+2;
    console.log(chalk.green("You're correct"));
  }
  else{
    score=score-1;
    console.log(chalk.red("You're Wrong!"));
    console.log(chalk.green("The correct answer is : ", answer));
  }
  if(score<0){
    score=0;
  }
  console.log(chalk.cyan("Score is : ",score));
}

function mcqQuiz(listAnswers,question,answer){
  var userAnswer = readlineSync.keyInSelect(listAnswers,question);
  console.log('\n');
  if(listAnswers[userAnswer]==answer){
    console.log(chalk.green('You are Right'));
    score+=2;
  }
  else{
    console.log(chalk.red("You are Wrong!"));
    console.log(chalk.green("The correct answer is: ",answer));
    score-=1;
  }
  if(score<0){
    score=0;
  }
  console.log(chalk.cyan("Score is : ", score));
}

for(var i =0;i<questionList.length;++i){
  console.log('\n');
  quiz(questionList[i].question,questionList[i].answer);
  console.log('**************************');
  console.log('\n');
}
console.log('MCQ type Questions');

for(var i =0; i<mcqList.length;++i){
  console.log('\n');
  mcqQuiz(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log('*******************************');
}
console.log('\n');
console.log(chalk.green.bold('Congratulations, ',userName, 'your Total Score is: ',score));