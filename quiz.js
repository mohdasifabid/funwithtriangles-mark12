
const quizForm = document.querySelector(".quiz-form")

const btnSubmit = document.querySelector("#submit-btn")

const rightAnswer = ["90", "right angled"];

const output = document.querySelector("#output")




quizForm.addEventListener("submit", function(e){
    e.preventDefault()
    

    const question1 = document.getElementsByName("question1")
    const question2 = document.getElementsByName("question2")

    var score = 0;

    for(let i=0; i<question1.length; i++){
                if(question1[i].checked){
                    if(question1[i].value === rightAnswer[0]){
                        score = score +1; 
                        
                    }
                      } 
                      
            }

            for(let i=0; i<question2.length; i++){
                if(question2[i].checked){
                    if(question2[i].value === rightAnswer[1]){
                        score = score +1; 
                        
                    }
                      } 
                      
            }
            console.log(score)
    output.textContent = `Your score is:  ${score}`

})


