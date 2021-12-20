const moongose =require('mongoose')
const url = 'mongodb://127.0.0.1:27017/game-of-thrones'

moongose.connect(url, {useNewUrlParser : true})

const db = moongose.connection

db.once('open', _ =>{
    console.log(`Database connected : ${url}`)

})

db.on('error',err =>{

    console.log(`Connection error: ${err}`)

})