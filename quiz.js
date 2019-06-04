
const quiz = [
    ['Best state to live in?','qc'],
    ['Capital of Canada?','ottawa'],
    ['Best beach city in Brazil?','leblon']
]

    let score = 0;

    for (let i = 0; i<quiz.length; i++) {
        let answer = prompt(quiz[i][0]);
        let answerCorrect = answer.toLowerCase().trim();

        if(answerCorrect===quiz[i][1]){
            score++;
        }
        else{
            alert(`Wrong answer. The correct answer is
             ${quiz[i][1]}`)
        }
    }
    let correctPercent = (score/quiz.length)*100;
    alert(`You answered ${score} questions correctly and 
    your correct percent is ${correctPercent.toFixed(2)}%`)

























