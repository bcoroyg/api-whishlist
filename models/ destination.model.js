import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DestinationSchema = Schema({
    title: {
        type: String,
        required: [true, 'El titulo es obligatorio'],
    },
    subtitle: {
        type: String,
        required: [true, 'El subtitulo es obligatorio'],
    },
    imgUrl:{
        type: String,
    },
    selected: {
        type: Boolean,
        default: false,
    },
    services: [{
        type: String
    }],
    votes:{
        type: Number,
        default:0
    }
})

const Destination = mongoose.model('Destination', DestinationSchema);

export default Destination;