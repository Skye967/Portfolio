const express = require( 'express' );
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded( {
    extended: true
} ) );

require( './routes/exam.routes' )( app );

app.listen( port, () => {
    console.log( "Listening at Port 8000" );
} );