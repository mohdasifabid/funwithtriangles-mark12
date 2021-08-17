const btnCalculateArea = document.querySelector("#calculate-area")

const output = document.querySelector("#output")

const sideOne = document.querySelector("#side-one")

const sideTwo = document.querySelector("#side-two")

const sideThree = document.querySelector("#side-three")




btnCalculateArea.addEventListener("click", function(){

    var x = Number(sideOne.value);
    var y = Number(sideTwo.value);
    var z = Number(sideThree.value);
    let xyz = (x + y + z)/2;

    const area = Math.sqrt(xyz*((xyz-x)*(xyz-y)*(xyz-z)));

    // console.log(area)

    


    output.textContent = "the area of the triangle with base " +  "is " + area
})