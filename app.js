const calculate = document.querySelector("button")
calculate.addEventListener("click",()=>{

    let height = document.getElementById("Height").value;
    let weight = document.getElementById("weight").value;

    if(!height||!weight){
        alert("Please enter both weight and height!")
        return;
    }

    height = height/100
    let BMI = (weight/height**2).toFixed(1);

    let status = ""
    if(BMI < 18.5) status = "Underweight 🥀";
    else if(BMI <= 24.9) status = "Normal & Healthy 😄✌️";
    else if(BMI <= 29.9) status = "Overweight 😿";
    else status = "Obese 😭💔"

    document.getElementById("bmi-value").innerText = "BMI: "+BMI
    document.getElementById("bmi-status").innerText = status
})