import * as mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: String
})

export default mongoose.model('users', UserSchema)