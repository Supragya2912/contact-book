import mongoose from 'mongoose'


const ContactSchema = new mongoose.Schema({
        firstName :{
            type: String,
            required: true
        },
        lastName :{
            type: String,
            required: true
        },
        email :{
            type: String,
            required: true
        },
        phone :{
            type: number,
            required: true
        },

        
},{timestamp: true})

export default mongoose.model('Contact', ContactSchema);