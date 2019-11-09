// index, show, store, update, destroy

const Spot = require('../models/Spot')

module.exports = {
  async show(req,res){
        const { user_id } = req.headers

        const spots = await Spot.find({
            user:user_id

        })
        return res.json(spots)
    },

    async update(req,res){
        const { techs, price } = req.body
        const { company } = req.query
        
        
        const spots = await Spot.findOneAndUpdate({ company },{
            techs,
            price
        },{"new": true}
            )
        return res.json(spots)
    }
}