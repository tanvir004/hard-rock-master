let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let name = document.querySelector('.name')
let temp = document.querySelector('.temp')
let lead = document.querySelector('.lead')
let icon = document.querySelector('.ico')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=f2adf456f891e7a9617f32903727cf9f')
.then(response => response.json())
.then(data => {
    let nameValue = data['name'];
    let disIcon = data['weather'][0]['icon'];
    let tempValue = data['main']['temp'];
    let celsius = tempValue-273.15;
    let celsiusRound = Math.round(celsius);
    let leadValue = data['weather'][0]['description'];
    document.querySelector('.name').innerHTML = nameValue;
    temp.innerHTML = celsiusRound;
    lead.innerHTML = leadValue;
    icon.innerHTML = "http://openweathermap.org/img/wn/"+disIcon+"@2x.png";
    
    console.log(data)
})
})
