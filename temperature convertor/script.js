let celsiusInput = document.querySelector('#Celcius > input') 
let fahrenheitInput = document.querySelector('#Fahrenheit > input') 
let kelvinInput = document.querySelector('#Kelvin > input') 
let rankineInput = document.querySelector('#Rankine > input') 

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}


celsiusInput.addEventListener('input',function() {
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp =(cTemp*(9/5))+32
    let kTemp = cTemp +273.15
    let rTemp =cTemp +273.15 *(9/5)

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rTemp)

})

fahrenheitInput.addEventListener('input',function() {
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp =(fTemp - 32)* (5/9)
    let kTemp = (fTemp - 32)*(5/9)+273.15
    let rTemp = fTemp + 459.67

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rTemp)

})

kelvinInput.addEventListener('input',function() {
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp =kTemp -273.15
    let fTemp = (kTemp -273.15 )* (9/5) + 32 
    let rTemp = kTemp* (9/5)

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    rankineInput.value = roundNumber(rTemp)

})

rankineInput.addEventListener('input',function() {
    let rTemp = parseFloat(rankineInput.value)
    let cTemp =rTemp * (5/9) - 273.15
    let fTemp = rTemp - 459.67
    let kTemp = rTemp* (5/9)

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)

})
btn.addEventListener('click',()=>{
    celsiusInput.value = " "
    fahrenheitInput.value = " "
    kelvinInput.value = " "
    rankineInput.value = " "
})


