const connection = require('../database/connection');
const uploadConfig = require('../database/uploadConfig');
const multer  = require('multer');

//Configuração para salvar musica 
const storage = multer.diskStorage(uploadConfig.music);
		
const upload = multer({storage:storage}).single('musica');

module.exports = {
	async create(req,res){
		//Criar musica do dia(caso seja a primeira vez)
		
		const { nome } = req.params;
		console.log('Nome - ', req.body);
		console.log('Nome - ', req.query);
		console.log('Nome - ', req.params);
		await connection('music').insert({
            nome
        });
	return res.send({situacao:"Criado"});
	},
	async index(req,res){
		//Listar musica do dia 
		
		const musica = await connection('music').select('*').limit(1)
		
		return res.send(musica);
	},
	async edit(req,res){
		//Editar musica do dia
		upload(req, res, function(err){})
		
			
		return res.send({situacao:"Update feito"});
	}
	
}