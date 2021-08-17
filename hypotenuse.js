
const btnCalculateHyptenuse = document.querySelector("#calculate-hypotenuse")

const output = document.querySelector("#output")

const baseValue = document.querySelector("#base-value")

const heightValue = document.querySelector("#height-value")




btnCalculateHyptenuse.addEventListener("click", function(){

    var baseB = Number(baseValue.value) 
    var heightH = Number(heightValue.value)
    let sumOfBandH = baseB  + heightH

    var rootOfBase = Math.sqrt(baseB);
    var rootOfHeight = Math.sqrt(heightH);
    var hypoteneuse = rootOfHeight + rootOfBase

    output.textContent = "the hypoteneuse of the triangle with base " + baseB + " & height " + heightH + "  is " + hypoteneuse
})