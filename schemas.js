let mongoose = require ( 'mongoose' ) ;

let schemaImage = mongoose.Schema({
    image : {
        type : Array ,
        required : true
    },

    imageInAlbum : {
        type : String ,
        required : false
    }
}) ;

let schemaAlbum = mongoose.Schema({
    album : {
        type : Array ,
        required : true
    },

    nameAlbum : {
        type : String ,
        required : true
    }
})

let schemaUser = mongoose.Schema({
    userName : {
        type : String ,
        required : true
    },

    password : {
        type : String ,
        required : true
    },

    mail : {
        type : String ,
        required : true
    }
})

let Image = module.exports = mongoose.model('Image',schemaImage);
let Album = module.exports = mongoose.model('Album',schemaAlbum);
let User = module.exports = mongoose.model('User',schemaUser);