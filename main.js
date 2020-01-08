const express = require ( 'express' ) ;
const app = express () ;

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