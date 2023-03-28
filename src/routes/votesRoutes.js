const express = require('express');
const router = express.Router();
const votesController = require('../controller/VotesController');

router.post('/votes', votesController.addVote);
router.get('/votes', votesController.findAllVotes);
router.get('/votes/:id', votesController.findVoteById);
router.get('/wins/:name', votesController.findWinsByName);
router.get('/rate/:name', votesController.findRateByName);
router.get('/rate', votesController.findRates)

module.exports = router;