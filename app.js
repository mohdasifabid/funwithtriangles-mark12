
const angle1 = document.querySelector("#angle1")

const angle2 = document.querySelector("#angle2")

const angle3 = document.querySelector("#angle3")

const isTriangle = document.querySelector("#isTriangle")

const output = document.querySelector("#output")

const submit = document.querySelector("#submit")

score = 0;


isTriangle.addEventListener("click", function(){
    const angleOne = Number(angle1.value)
    const angleTwo = Number(angle2.value) 
    const angleThree = Number(angle3.value)

    if ( angleOne===0 || angleTwo ===0 || angleThree===0) {
        output.textContent = "Value of angle cannot be zero"
        return
    }

    let calculateSumOfAngles = angleOne + angleTwo + angleThree
    console.log(typeof calculateSumOfAngles);
    if (calculateSumOfAngles === 180) {
        output.textContent = "Wow, these angles forms a triangle"
    } else {
        output.textContent = "ohh!, these angles does not forms a triangle"
    }
});

submit.addEventListener("click", function(){
    if( submit === Asif) {
        console.log("You are right")
    score = score + 1;
    } else {
        console.log("You are wrong")
        score = score - 1;
    }
    
});
 
