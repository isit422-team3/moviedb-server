const Movie = require('./models/movie.model');
const User = require('./models/user.model');
const Review = require('./models/review.model');

require('./mongo').connect();


//MOVIE METHODS
function getMovies(req, res) {
    const docquery = Movie.find({});
    docquery
      .exec()
      .then(movies => {
          res.status(200).json(movies);
      })
      .catch(error => {
          res.status(500).send(error);
          return;
      });
}

function getMovie(req, res) {
    const docquery = Movie.find({movie_id: req.body.movie_id});
    docquery
      .exec()
      .then(movie => {
          res.status(200).json(movie);
      })
      .catch(error => {
          res.status(500).send(error);
          return;
      });
}

function postMovie(req, res) {
    const inMov = {
        movie_id: req.body.movie_id,
        title: req.body.title,
        rating: req.body.rating,
        rating_count: req.body.rating_count,
        reviews: req.body.reviews,
        review_count: req.body.review_count,
        api_link: req.body.api_link
    };
    const movie = new Movie(inMov);
    movie.save(error => {
        if (checkServerError(res, error)) return;
        res.status(201).json(movie);
        console.log('movie created successfully!');
    });
}

function PutMovie(req, res) {
    const inMov = {
        movie_id:parseInt(req.params.movie_id, 10),
        title: req.body.title,
        rating: req.body.rating,
        rating_count: req.body.rating_count,
        reviews: req.body.reviews,
        review_count: req.body.review_count,
        api_link: req.body.api_link
    };
    Movie.findOne({ movie_id: inMov.movie_id}, (error, movie) => {
        if (checkServerError(res, error)) return;
        if (!checkMovie(res, movie)) return;

        movie.title = inMov.title;
        movie.rating = inMov.rating;
        movie.rating_count = inMov.rating_count;
        movie.reviews = inMov.reviews;
        movie.review_count = inMov.review_count;
        movie.api_link = inMov.api_link;

        movie.save(error => {
            if (checkServerError(res, error)) return;
            res.status(200).json(movie);
            console.log('Movie updated successfully!');
        });
    });
}

function deleteMovie(req, res) {
    const movie_id = parseInt(req.params.movie_id, 10);
    Movie.findOneAndRemove({movie_id:movie_id})
      .then(movie => {
          if (!checkMovie(res, movie)) return;
          res.status(200).json(movie);
          console.log('Movie deleted successfully!');
      });
}

////////////////////////////////////////////////////////////////////////////

//USER METHODS
function getUser(req, res) {
    const docquery = User.find({user_id: req.body.user_id});
    docquery
      .exec()
      .then(user => {
          res.status(200).json(user);
      })
      .catch(error => {
          res.status(500).send(error);
          return;
      });
}

function postUser(req, res) {
    const inUser = {
        user_id: req.body.user_id,
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        phone_number: req.body.phone_number,
        movie_favorites: req.body.movie_favorites,
        location: req.body.location,
        profile_picture: req.body.profile_picture,
        biography: req.body.biography,
        ratings: req.body.biography,
        rating_count: req.body.biography,
        reviews: req.body.biography,
        review_count: req.body.biography,
        status: req.body.biography,
        settings: req.body.biography
    };
    const user = new User(inUser);
    user.save(error => {
        if (checkServerError(res, error)) return;
        res.status(201).json(user);
        console.log('user created successfully!');
    });
}

function PutUser(req, res) {
    const inUser = {
        user_id: req.body.user_id,
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        phone_number: req.body.phone_number,
        movie_favorites: req.body.movie_favorites,
        location: req.body.location,
        profile_picture: req.body.profile_picture,
        biography: req.body.biography,
        ratings: req.body.biography,
        rating_count: req.body.biography,
        reviews: req.body.biography,
        review_count: req.body.biography,
        status: req.body.biography,
        settings: req.body.biography
    };
    User.findOne({ user_id: inUser.user_id}, (error, user) => {
        if (checkServerError(res, error)) return;
        if (!checkUser(res, user)) return;

        user.name = inUser.title;
        user.username = inUser.username;
        user.password = inUser.password;
        user.phone_number = inUser.phone_number;
        user.movie_favorites = inUser.movie_favorites;
        user.location = inUser.location;
        user.profile_picture = inUser.profile_picture;
        user.biography = inUser.biography;
        user.ratings = inUser.biography;
        user.rating_count = inUser.biography;
        user.reviews = inUser.biography;
        user.review_count = inUser.biography;
        user.status = inUser.biography;
        user.settings = inUser.biography;

        user.save(error => {
            if (checkServerError(res, error)) return;
            res.status(200).json(user);
            console.log('User updated successfully!');
        });
    });
}

function deleteUser(req, res) {
    const user_id = req.params.user_id;
    User.findOneAndRemove({user_id:user_id})
      .then(user => {
          if (!checkUser(res, user)) return;
          res.status(200).json(user);
          console.log('User deleted successfully!');
      });
}
////////////////////////////////////////////////////////////////////////////

//REVIEW METHODS: Note - You don't need to get reviews, just get a movie or user and list their reviews

function postReview(req, res) {
    const newReview = {
        review_id: req.body.review_id,
        author_id: req.body.author_id,
        movie_id: req.body.movie_id,
        title: req.body.title,
        rating_up: req.body.rating_up,
        rating_down: req.body.rating_down,
        review_score: req.body.review_score
    };
    const review = new Review(newReview);
    review.save(error => {
        if (checkServerError(res, error)) return;
        res.status(201).json(review);
        console.log('Review created successfully!');
    });
}

// export class Review {
//     review_id: number;
//     author_id: number;
//     movie_id: number;
//     title: string;
//     rating_up: number;
//     rating_down: number;
//     review_score: number;
// }
function PutReview(req, res) {
    const updatedReview = {
        review_id: req.body.review_id,
        author_id: req.body.author_id,
        movie_id: req.body.movie_id,
        title: req.body.title,
        rating_up: req.body.rating_up,
        rating_down: req.body.rating_down,
        review_score: req.body.review_score
    };
    Review.findOne({ author_id: author_id, movie_id: movie_id}, (error, review) => {
        if (checkServerError(res, error)) return;

        review.review_id = updatedReview.review_id,
        review.author_id = updatedReview.author_id,
        review.movie_id = updatedReview.movie_id,
        review.title = updatedReview.title,
        review.rating_up = updatedReview.rating_up,
        review.rating_down = updatedReview.rating_down,
        review.review_score = updatedReview.review_score

        review.save(error => {
            if (checkServerError(res, error)) return;
            res.status(200).json(review);
            console.log('Review updated successfully!');
        });
    });
}

function deleteReview(req, res) {
    const author_id = req.params.author_id;
    const movie_id = req.params.movie_id;
    Review.findOneAndRemove({movie_id:movie_id, author_id:author_id})
      .then(review => {
          res.status(200).json(review);
          console.log('Review deleted successfully!');
      });
}
////////////////////////////////////////////////////////////////////////////

//HELPER METHODS

function checkServerError(res, error) {
    if (error) {
        res.stats(500).send(error);
        return error;
    } 
}
function checkMovie(res, movie) {
    if(!movie) {
        res.status(404).send('Movie Not Found!');
        return;
    }
    return movie;
}

function checkUser(res, user) {
    if(!user) {
        res.status(404).send('User Not Found!');
        return;
    }
    return movie;
}

module.exports = {
    getMovies,
    postMovie,
    deleteReview,
    PutReview,
    postReview,
    deleteUser,
    PutUser,
    postUser,
    getUser,
    PutMovie,
    deleteMovie,
    getMovie
}
////////////////////////////////////////////////////////////////////////////

