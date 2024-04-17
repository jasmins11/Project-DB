const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  genres:{
    type: [String],
    require: true,
    default:[]
  },
  rating: {
    type: Number, 
    required: true, 
  },
}, { timestamps: true });

const Anime = mongoose.model('animes', animeSchema);
module.exports=Anime;