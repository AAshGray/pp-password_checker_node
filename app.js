//Import express
import express from 'express';

//Instantiate an Express application
const app = express();

//Serve static files from the 'public' directory
app.use(express.static('public'));

//Define a port number where our server will listen
const PORT = 3000;

//Define a "Default" route for our home page
app.get('/',(req,res) => {
    //Send our home page as a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});


//Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});