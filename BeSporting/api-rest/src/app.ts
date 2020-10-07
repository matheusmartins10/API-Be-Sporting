import * as express from 'express'
import * as cors from 'cors'
import * as mongoose from 'mongoose'

import routes from './routes'

const app = express()

mongoose.connect('mongodb+srv://besporting:24563930@cluster0.msmqi.mongodb.net/besport?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}, (err) => {
    if(err){
        console.error(`Error with database ${err}`)
    }else {
        console.log('Connect with successly')
    }
})

app.use(express.json())

app.use(cors())

app.use(routes)

export default app