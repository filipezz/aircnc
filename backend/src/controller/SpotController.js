// index, show, store, update, destroy

const Spot = require('../models/Spot')

module.exports = {

    async index(req,res){
        const { tech } = req.query

        const spots = await Spot.find({ techs:tech })
        return res.json(spots)
    },

    async store(req,res){
       const { filename } = req.file
       const { company, techs, price } = req.body
       const { user_id } = req.headers

        let spot = await Spot.findOne({ company })

        if(!spot){
            spot = await Spot.create({
                user: user_id,
                thumbnail: filename.trim(),
                company,
                techs: techs.split(',').map(tech => tech.trim().toUpperCase()), //transforma string em array. Trim tira os espaços
                price
            })
        }
        return res.json(spot)
    },

  
}