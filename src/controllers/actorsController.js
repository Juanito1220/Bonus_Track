const db = require('../database/models');

const actorsController = {
    list: function (req, res) {
        db.Actor.findAll()
            .then(actors => {
                res.render("actors", {actors: actors})
            })
    },

    detail: function (req, res) {
        
       
        db.Actor.findByPk(req.params.id)
        .then(actor => {
            res.render('actorDetail', {actor});
        });
    }
}

    
module.exports = actorsController;