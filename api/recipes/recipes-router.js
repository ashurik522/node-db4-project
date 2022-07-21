const express = require('express')
const {} = require('./recipes-middleware')
const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Recipes.find()
        .then(r => {
            res.json(r)
        })
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Recipes.getRecipeById(req.params.id)
        .then(r => {
            res.json(r)
        })
        .catch(next)
})

router.use((err, req, res, next) =>{
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;