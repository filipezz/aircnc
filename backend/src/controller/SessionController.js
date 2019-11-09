// index, show, store, update, destroy
const User = require('../models/User')

module.exports = {

  async  store(req,res){
        const { email } = req.body // ou  const email = req.body.email
        let user = await User.findOne({ email }) // ou { email:email }

        if (!user){
         user = await User.create({ email }) // cria um usuario com a informação "email"
            
        }

        return res.json(user)
    }
}