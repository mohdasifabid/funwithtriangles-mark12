
const quizForm = document.querySelector(".quiz-form")

const btnSubmit = document.querySelector("#submit-btn")

const rightAnswer = ["90", "right angled"];

const output = document.querySelector("#output")


quizForm.addEventListener("submit",function(e){
    e.preventDefault()
    let score = 0;
    const question1 = document.getElementsByName("question1")
    const question2 = document.getElementsByName("question2")
    for(let i=0; i<question1.length; i++){
        if(question1[i].checked){
            if(question1[i].value ===rightAnswer[0]){
                score = score +1; 
                
            }
              } 
              
    }
    // question1.forEach(item => {
    //     if(item.checked){
    //         if(item.value ===rightAnswer[0]){
    //             score++
    //         }
    //     }
    // })
    // question2.forEach(item => {
    //     if(item.checked){
    //         if(item.value ===rightAnswer[1]){
    //             score++
    //         }
    //     }
    // })
    // console.log("your score is: ",score)
    
    for(let i=0; i<question2.length; i++) {
        if(question2[i].checked) {
            if(question2[i].vlaue===rightAnswer[0]){
                score = score +1;
                
            }

        }

    }

    output.textContent = "You did great! and your score is " + score;
});


