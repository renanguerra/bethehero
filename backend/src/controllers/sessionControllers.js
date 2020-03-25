const conection = require('../database/conection')

module.exports = {
    async create (request, response) {
        const { id } = request.body;

       const ong = await conection('ongs')
        .where('id',id)
        .select('nome')
        .first()

        if (!ong){
            return response.status(400).json({Error: "Não encontrado"})
        }

        return response.json(ong)
    }
}