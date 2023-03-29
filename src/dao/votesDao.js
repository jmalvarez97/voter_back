const Votes = require('../models/Votes');

var votesDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    findWinsByName: findWinsByName,
    findRateByName:findRateByName,
    findRates: findRates,
    getCount: getCount
}

function findAll() {
    return Votes.findAll();
}

function findById(id) {
    return Votes.findByPk(id);
}

function create(vote) {
    var newVote = new Votes(vote);
    return newVote.save();
}

function findWinsByName(name){
    return Votes.findAndCountAll({
        where: { winner: name }
    })
}

async function findRateByName(name){
    const wins = await Votes.count({where : {winner: name}})
    const firstTeam = await Votes.count({where : {firstTeam: name}})
    const lastTeam = await Votes.count({where : {lastTeam: name}})

    return {"rate" : (wins / (firstTeam + lastTeam)).toString()}
}

async function findRates(){
  let suma={}, rate={}
  let ft   = await (await Votes.count({ attributes: ['firstTeam'], group: 'firstTeam'}))
                                  .map((o) => suma[o.firstTeam] = o.count)
  let lt   = await (await Votes.count({attributes: ['lastTeam'], group: 'lastTeam'}))
                                  .map((o) => {
                                      if (suma[o.lastTeam])
                                        suma[o.lastTeam] += o.count
                                      else
                                        suma[o.lastTeam] = o.count
                                      })
  let wins = await (await Votes.count({attributes: ['winner'], group: 'winner'}))
                                  .map((o) => {
                                    rate[o.winner] = o.count / suma[o.winner]
                                  })
  
  return rate

}

function getCount(){
  return Votes.count("*");
}

module.exports = votesDao;