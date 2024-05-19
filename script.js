let cityname = document.getElementById('cityname')
let stemp = document.getElementById('stemp')
let sfeelstemp = document.getElementById('sfeelstemp')
let smintemp = document.getElementById('smintemp')
let smaxtemp = document.getElementById('smaxtemp')
let shum = document.getElementById('shum')
let swind = document.getElementById('swind')
let slogo = document.getElementById('slogo')
let maincon = document.getElementById('maincon')
let apikey = '3fa2d21e94bf0ec452d957df0c0a57ee'
let errormsg = document.getElementById('errormsg')
let clearText = document.getElementById('clearText')
let buttonClicked = document.getElementById('buttonClicked')
buttonClicked.addEventListener('click', async function search(e) {

    try {
        let cityName = document.getElementById('cityName').value
        let cleart = document.getElementById('cityName')
        e.preventDefault()
        console.log(cityName)
        const tempData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`)
            .then(response => response.json())
            .then((value) => {
                maincon.style.display = 'flex'
                errormsg.style.display = 'none'
                cityname.textContent = value.name
                console.log(cleart.value)
                cleart.value = ''
                stemp.textContent = (value.main.temp - 273.15).toFixed(2)
                sfeelstemp.textContent = (value.main.feels_like - 273.15).toFixed(2)
                smintemp.textContent = (value.main.temp_min - 273.15).toFixed(2)
                smaxtemp.textContent = (value.main.temp_max - 273.15).toFixed(2)
                shum.textContent = (value.main.humidity)
                swind.textContent
                    = value.wind.speed
                if (value.weather[0].id >= 200 && value.weather[0].id < 300) {
                    slogo.textContent = '⛈'
                } else if (value.weather[0].id >= 300 && value.weather[0].id < 400) {
                    slogo.textContent = '🎐'
                }
                else if (value.weather[0].id >= 500 && value.weather[0].id < 600) {
                    slogo.textContent = '⛈'
                } else if (value.weather[0].id >= 600 && value.weather[0].id < 700) {
                    slogo.textContent = '❄'
                } else if (value.weather[0].id >= 700 && value.weather[0].id < 800) {
                    slogo.textContent = '⚛'
                } else if (value.weather[0].id == 800) {
                    slogo.textContent = '☀'
                } else if (value.weather[0].id >= 801 && value.weather[0].id < 850) {
                    slogo.textContent = '☁'
                }
                console.log(value.weather[0].id)

            })
    }
    catch (error) {
        maincon.style.display = 'none'
        errormsg.style.display = 'block'
        console.log(error)
    }

}
)

