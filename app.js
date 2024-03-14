// MOMENT es una libreria de javascript y tu puedes pasar datos como fechas

const moment = require ('moment')
console.log('Hello, using github actions as a demo ')
const date = moment().format('MMM Do YYYY, h:mm:ss a')
console.log(date)