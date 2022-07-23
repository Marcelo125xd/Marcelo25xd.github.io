class UI{
    constructor(){

    }

    

    showQuestions(text){
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text;
    }


    showChoices(choices, callback){
        const choicesContent = document.getElementById('choices');
        choicesContent.innerHTML = " "
        for(let i = 0; i < choices.length; i++){
           const button = document.createElement('button')
           button.innerText = choices[i]
           button.className = 'btn'
           
           button.addEventListener('click', ()=> callback(choices[i]))
           choicesContent.append(button)
        }


    }


    showScore(score){
        const quizEndHTML = `<h1>Result</h1> <h2>${score} </h2>`
        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML
    
    
    }


    showProgress(x, y){
        const progress = document.getElementById('progress');
        progress.innerHTML = `Question ${x} of ${y}`
    }


}