const express = require('express');
const router = express.Router();

const dbService = require('./moviedb.service');


//routes for movies
router.get('/movies', (req, res) => {
    dbService.getMovies(req, res);
});

router.get('/movie/:movie_id', (req, res) => {
    dbService.getMovie(req, res);
});

router.post('/movie', (req, res) => {
    dbService.postMovie(req, res);
});

router.put('/movie/:movie_id', (req, res) => {
    dbService.PutMovie(req, res);
});

router.delete('/movie/:movie_id', (req, res) => {
    dbService.deleteMovie(req, res);
});
/////////////////////////////////////////////////////////////////

//routes for users
router.get('/user/:user_id', (req, res) => {
    dbService.getUser(req, res);
});

router.post('/user', (req, res) => {
    dbService.postMovie(req, res);
});

router.put('/user/:user_id', (req, res) => {
    dbService.PutMovie(req, res);
});

router.delete('/user/:user_id', (req, res) => {
    dbService.deleteMovie(req, res);
});
/////////////////////////////////////////////////////////////////

//Review Routes

router.post('/review', (req, res) => {
    dbService.postMovie(req, res);
});

router.put('/review/:author_id/:movie_id', (req, res) => {
    dbService.PutMovie(req, res);
});

router.delete('/review/:author_id/:movie_id', (req, res) => {
    dbService.deleteMovie(req, res);
});
/////////////////////////////////////////////////////////////////


module.exports = router;
