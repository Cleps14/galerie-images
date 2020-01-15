'use strict' ;

const express = require ( 'express' ) ;
const app = express () ;
const mongoose = require ( 'mongoose' ) ;
const bodyParser = require ( 'body-parser' ) ;


app.listen ( 2020 , function () {
    console.log ( 'You can open your favorite navigator and search the url http://localhost:2020/' ) ;
})

app.use ( express.json () ) ;

app.set ( 'view engine' , 'pug' ) ;

app.get ( '/' , function ( req , res ) {
    res.render ( 'login' ) ;
}) ;

app.get ( '/listephoto' , function ( req , res ) {
    res.render ( 'listephoto' ) ;
}) ;

app.get ( '/upload' , function ( req , res ) {
    res.render ( 'upload' ) ;
}) ;

app.get ( '/visionneuse' , function ( req , res ) {
    res.render ( 'visionneuse' ) ;
}) ;

app.get ( '/album' , function ( req , res ) {
    res.render ( 'album' ) ;
}) ;

app.get ( '/register' , function ( req , res ) {
    res.render ( 'register' ) ;
}) ;


mongoose.connect('mongodb://localhost/27017' , {useNewUrlParser : true}) ;

let db = mongoose.connection ;

db.once ( 'open' , function () {
    console.log ( 'Connected to MongoDB' ) ;
}) ;

db.on ( 'error' , function ( err ) {
    console.log ( err ) ;
}) ;

let User = require ( './schemas' ) ;
let Image = require ( './schemas' ) ;
let Album = require ( './schemas' ) ;

app.use ( bodyParser.urlencoded ( { extended : true } ) ) ;
app.use ( bodyParser.json () ) ;