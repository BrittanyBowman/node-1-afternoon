const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');

const app = express();

const mBaseUrl = "/api/messages";

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );
app.post( mBaseUrl, mc.create );
app.get(mBaseUrl, mc.read);
app.put(`${mBaseUrl}/:id`, mc.update);
app.delete(`${mBaseUrl}:/id`, mc.delete);


const port = 3001;
app.listen( port, () => {
    console.log(`Server listening on port ${port}.`);
});