const db = require("../models");

module.exports = {

//viewing collection
    viewEntireCollection: function (req, res) {
        db.Collection.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    sortCollection: function (req, res) {
        db.Collection.find(req.params)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    //database collection manipulation
    addTrain: function (req, res) {
        db.Collection.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    deleteTrain: function (req, res) {
        db.Collection.findOneAndDelete(req.params)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    //collection changes
    updateTrainQuantity: function (req, res) {
        db.Collection.findByIdAndUpdate(req.params)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },







};