const axios = require('axios')

const getClima = async ( lat,lng ) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0a560d294584f280f622fecd2de96637&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}   