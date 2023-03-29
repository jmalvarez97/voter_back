const votesDao = require('../dao/votesDao');

var votesController = {
    addVote: addVote,
    findAllVotes: findAllVote,
    findVoteById: findVoteById,
    findWinsByName: findWinsByName,
    findRateByName:findRateByName,
    findRates: findRates,
    getCount: getCount
}

function addVote(req, res) {
    let vote = req.body;
    votesDao.create(vote).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findVoteById(req, res) {
    votesDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


function findAllVote(req, res) {
    votesDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findWinsByName(req, res) {
    votesDao.findWinsByName(req.params.name)
        .then((data) => res.send(data))
        .catch((error) => console.log(error))
}

function findRateByName(req, res) {
    votesDao.findRateByName(req.params.name)
        .then((data) => res.send(data))
        .catch((error) => console.log(error))
}

function findRates(req, res) {
    votesDao.findRates()
        .then((data) => res.send(data))
        .catch((error) => console.log(error))
}

function getCount(req, res) {
    votesDao.getCount()
        .then((data) => res.send(data.toString()))
        .catch((error) => console.log(error))
}

module.exports = votesController;