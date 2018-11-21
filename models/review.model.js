const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewModel = new Schema({
    review_id: { type: Number, required: true, unique: true}, 
    author_id: { type: Number, required: true, unique: true},
    movie_id: { type: Number, required: true, unique: true},
    title: { type: String, required: true, maxlength: 35, minlength: 1},
    rating_up: { type: Number, min: 0},
    rating_down: { type: Number, min: 0},
    review_score: { type: Number }
});
const Review = mongoose.model('Review', reviewModel);
module.exports = Review;
