const mongoose = require('mongoose')

const TrackSchema = new mongoose.Schema({
    title: {
        type: String
    },
    album: {
        type: String
    },
    artist: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Track', TrackSchema);