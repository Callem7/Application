let mongoose = require('mongoose'); //Conecta o a base de dados ao ficheiro app.js
let Schema = mongoose.Schema;

let postSchema = new Schema({
    id: String,
    titulo: String,
    data: Date,
    descrição: String,
    texto: String,
    pais: String,
    imagemURL: String
});

//Cria Documentos
let Post = mongoose.model('Post', postSchema);

module.exports = { Post }