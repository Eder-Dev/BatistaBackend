const connection = require('../database/connection');

module.exports = {
	async index(req,res){
		const database = await connection('user').select('*');
		console.log(database)
		return res.send(database)
	},
	async create(req,res){
		console.log('Cadastrar')
		const { nome, sobrenome, email, senha, endereco, telefone } = req.body;
		let database = connection('user');
		const check = await database.where({nome,sobrenome}).select('*').first();
		if(check) return res.send({situacao:"Esse nome e sobrenome ja existe"});
		await database.insert({
			nome,
			sobrenome,
			email,
			senha,
			endereco,
			telefone
		});
		return res.send({situacao:"Cadastrado com sucesso"});
	},
	async delete(req,res){
		const {nome, sobrenome} = req.body;
		let database = connection('user');
		await database.where({nome,sobrenome}).delete();
		
		return res.send({situacao:"Deletado com sucesso"});
	},
	async login(req,res){
		const {email,senha} = req.params;
		console.log(email + " - " + senha)
		const database = await connection('user').where({email,senha}).select('*').first();
		console.log(database)
		if(database){
			console.log("Correto")
			console.log({...database, situacao:"Login correto"})
			return res.send({...database, situacao:"Login correto"})
		}
		console.log("Incorreto")
		return res.send({situacao:'Login incorreto'})

	}
}