const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller'); //Require the messages controller.
const baseUrl = "/api/messages"; //set the base url.

const app = express();

//Configure the app to parse JSON from the body.
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

//Create a post, get, put, and delete endpoint that use the corressponding method on the messages controller. These requests are sent to http://localhost:3001/api/messages.
app.post(baseUrl, mc.create); // creates a new message. pushes into the array. responds with messages array.
app.get(baseUrl, mc.read); // reads the messages array. responds with messages array. 
app.put(`${baseUrl}/:id`, mc.update); // id needed for update. updates by id, then responds with altered messages array.
app.delete(`${baseUrl}/:id`, mc.delete); // id needed for delete. deletes by id, then responds with altered messages array.
//For the put and delete endpoints, we need to add on a url parameter of id. A url paramter can be defined by adding :variableName when making the URL for an endpoint.

//setup server port
const port = 3001;
app.listen(port, () => {
    console.log(`Server on port ${port}`);
})