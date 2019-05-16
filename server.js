const compression = require('compression');
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(compression());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


//------------------Determine Connection------------------//

if (port === 5000) {
    var keys = require("./keys.js");
} else {
    var keys = process.env
};

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        user: keys.user,
        clientId: keys.clientID,
        clientSecret: keys.clientSecret,
        refreshToken: keys.refreshToken,
    }
});

app.post('/api/sendemail', function(req, res) {
    var email = req.body.email;
    var name = req.body.name;
    var message = req.body.message;
    var mailOptions = {
        to: "rkpalmore@gmail.com",
        subject: "Hey! Saw Your Website",
        text: message,
        html: "<b>Sender: </b>" + name + "<br> <b>Email: </b>" + email + "<p>" + "<hr />" + message + "</p>"
    }
    console.log("Message: " + message);
    transporter.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log("ERROR: ", error);
            res.end("error");
        } else {
            console.log("Message successfully sent from: ", email);
            res.send("banana");
        }
    });
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port);
console.log(`Portfolio listening on ${port}`);
console.log('NODE_ENV: '+ process.env.NODE_ENV);
