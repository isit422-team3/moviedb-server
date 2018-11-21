const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    user_id: { type: Number, required: true, unique: true}, 
    name: { type: String, required: true},
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    phone_number: { type: String,
        validate: {
          validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
      },
    movie_favorites: {type: [Number]},
    location: {type: String},
    profile_picture: { type: String},
    biography: {type: String, maxlength: 250},
    ratings: {type: [Number], min: 1, max:10},
    rating_count: {type: Number, min: 0},
    reviews: { type: [Number]},
    review_count: {type: Number, min: 0},
    status: {type: String, maxlength: 25},
    settings: {any: Object}
});
const User = mongoose.model('User', userModel);
module.exports = User;