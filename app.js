



const renderPage = (quiz, ui)=>{
   if(quiz.isEnded()){
       ui.showScore(quiz.score)
   } else{
    ui.showQuestions(quiz.getQuestionIndex().text)
    ui.showChoices(quiz.getQuestionIndex().choices, (choicesClick) =>{
        quiz.guess(choicesClick)
        renderPage(quiz, ui)
    });
    ui.showProgress(quiz.questionIndex + 1,  quiz.question.length)
   }

     
}

function main(){
 const quiz = new Quiz(newQuestions)
 const ui = new UI()
 renderPage(quiz, ui)

}

main()

