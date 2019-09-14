const router = require('express').Router()

router.get('/test', (req, res) => {
    const data = {
        name: 'Jobir',
        age: 28,
    }
    console.log(req.originalUrl)
    res.json(data)
})

module.exports = router