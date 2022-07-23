class Question{
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;

    }

    /**
     * 
     * @param {String} choice 
     * @returns {Boolean}
     */
    correctAnswer(choice){
      return choice === this.answer;
    }


}



