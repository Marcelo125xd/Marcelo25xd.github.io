class Quiz{

    questionIndex = 0
    score = 0


    constructor(question){
        this.question = question
        


    }

    getQuestionIndex(){
        
        return this.question[this.questionIndex]
    }

    isEnded(){

      return this.question.length === this.questionIndex;
    }

    guess(answer){

        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }

        this.questionIndex++
    }

}


