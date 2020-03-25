const crypto = require('crypto')
const conection = require('../database/conection')

module.exports = {
    async index (request,response) {
        const ongs = await conection('ongs').select('*');
    
        return response.json({ongs})
    },

    async create (request, response) {
        const {nome, email, whatssap, city, uf } = request.body;
        const [id] = crypto.randomBytes(4).toString('HEX')
    
        console.log({id,nome,email,whatssap,city,uf})
    
        await conection('ongs').insert({
            id,
            nome,
            email,
            whatssap,
            city,
            uf
        })
        return response.json({id});
    }
}