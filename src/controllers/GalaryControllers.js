const multer = require('multer');
const connection = require('../database/connection');
const uploadConfig = require('../database/uploadConfig');


const storage = multer.diskStorage(uploadConfig.galary);
const upload = multer({storage:storage}).single('galeria');

module.exports = {
	async create(req,res){
		upload(req,res, function(err){})
		return res.send({situacao:"Upload Feito"});
	},
	async index(req, res){
		const imagens = await connection('galary').select('*')
		return res.json(imagens);
	},
	async delete(req,res){
		const { id } = req.params;
		let database = connection('galary');
		await database.where({id}).delete();
		
		return res.json({situacao:"Deletado com sucesso"});
	},
	async comment(req,res) {
		const { id, nome, comentario: comment } = req.body
		const comentariosAll = await connection('galary').where({ id }).select('comentario');
		
		//Check Array Vazio
		var array_comentarios = '';
		if(comentariosAll[0].comentario != null){
			array_comentarios = JSON.parse(comentariosAll[0].comentario)
			array_comentarios.unshift({nome, comentario:comment})
		}else{
			array_comentarios = [{nome,comentario:comment}]
		}
		
		const publicao = await connection('galary').where({ id }).update({ comentario: JSON.stringify(array_comentarios) });
		return res.json({situacao: "Comentario enviado"});
	}
}