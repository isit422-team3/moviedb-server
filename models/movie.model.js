const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieModel = new Schema({
    movie_id: { type: Number, required: true, unique: true}, 
    title: { type: String, required: true},
    rating: {type: Number},
    rating_count: {type: Number, min: 0},
    reviews: { type: [Number]},
    review_count: {type: Number, min: 0},
    api_link: {type: String, required: true}
});
const Movie = mongoose.model('Movie', movieModel);
module.exports = Movie;
