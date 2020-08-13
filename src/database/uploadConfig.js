const multer  = require('multer');
const connection = require('../database/connection');

module.exports = {
	music:{
		destination: function(req, file, cb){
			cb(null, "src/upload/music");
		},
		filename: async function(req, file, cb) {
			//cb(null, req.body.nome+".mp3");
			cb(null, "musicday.mp3");
			const musica = await connection('music').select('*').limit(1)
		
		await connection('music')
			.where({ nome:musica[0].nome })
			.update({ nome: req.body.nome });
		}
	},
	galary:{
		destination: function(req, file, cb){
			cb(null, "src/upload/galary");
		},
		filename: async function(req, file, cb) {
			console.log(file)
			const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
			const nameFile = uniqueSuffix + '-' + file.originalname;
			
			const { nome, legenda } = req.body;
			await connection('galary').insert({
				nome, 
				foto:nameFile, 
				legenda,
				data: Date.now(),
			});
			
			cb(null, nameFile);
			}
	}
}