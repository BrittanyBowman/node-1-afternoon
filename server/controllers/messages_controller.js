// create a controller that will handle the logic to create, read, update, and delete messages. 

//create an array that will keep track of all the messages. 
let messages = [];
// create an id variable that is equal to 0.
let id = 0;

//use module.exports to export an object. Use methods on this object. Start by creating methods for create, read, update, and delete.
module.exports = {
    create: (req, res) => {
        const { text, time } = req.body; //object using "text" and "time" from the request body. 
        messages.push({ id, text, time }); //pushes the new message into the "messages" array.
        id++; // id increments by 1 for each message pushed onto the array.
        res.status(200).send(messages); // returns the updated messages array with a successful status.
    },
    read: (req, res) => {
        res.status(200).send(messages); // returns the entire messages array with a successful status.
    },
    update: (req, res) => {
        const { text } = req.body; //updates the body text of the message.
        const updateID = req.params.id; //determines which message to update based on the value of "id."
        const messageIndex = messages.findIndex(message => message.id == updateID); //finds the index in the array where the id's match and, if they are equal(ish), it updates the object and retains the id.
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time 
        };
        res.status(200).send(messages); // then returns the updated messages array with the new information.
    },
    delete: (req, res) => {
        const deleteID = req.params.id; // determines which message to delete based on the value of "id."
        messageIndex = messages.findIndex(message => message.id == deleteID); //see below
        messages.splice(messageIndex, 1);// removes the message at the index from findIndex().
        res.status(200).send(messages); //same as "update", but deletes instead.
    }
}