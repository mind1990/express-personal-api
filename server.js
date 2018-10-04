// require express and other modules
const express = require('express');
const app = express();

// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));


// app.get('/api/profile' (req, res) => {
//   if (err) throw err;
//   res.endpoitns[1].profile;
// })
/*
 * HTML Endpoints
 */

app.get('/', homepage(req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    MyEndPoints: true,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express-personal-api/README.md",
    baseUrl: "https://salty-headland-89775.herokuapp.com/",
    endpoints: [
    {
      method: "GET",
      path: "/api",
      description: "Describes all available endpoints"
    },
    {
      method: "GET",
      path: "/api/profile",
      description: "Data about me",
      profile: {
        name: 'Tirapat Numsinvichietchai',
        githubUsername: 'mind1990',
        githubLink: 'https://github.com/mind1990',
        age: 28,
        height: "5'6",
        weight: 135,
        email: 'mind1990@gmail.com',
        pets: [
          {
            name: 'Pearl',
            type: 'Cat',
            color: 'Black'
          }
        ],
        hoppies: [
          {
            kind: 'Badminton',
            category: 'sport',
            maxPlayers: 4
          },
          {
            kind: 'Singing',
            category: 'art'
          }
        ]
      }
    },
    {
      method: "POST",
      path: "/api/campsites",
      description: "E.g. Create a new campsite"
    }
  ]
  })
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
