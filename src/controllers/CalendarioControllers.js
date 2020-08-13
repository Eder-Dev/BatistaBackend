const connection = require('../database/connection');

module.exports = {
	async index(req,res){
		const database = await connection('calendario').select('*');
		return res.send(database)
	},
	async create(req,res){
		
		const { data, local, descricao } = req.body;
		
		let database = connection('calendario');
		await database.insert({
			data,
			local,
			descricao
		});
		
		return res.send({situacao:"Cadastrado com sucesso"});
	},
	async delete(req,res){
		const { id } = req.params;
		let database = connection('calendario');
		await database.where({id}).delete();
		
		return res.send({situacao:"Deletado com sucesso"});
	},
}