const express = require('express');
const example = require('./routes/example');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// the __dirname is the current directory from where the script is running
const homePage = path.join(__dirname, '../../public/index.html');

/// Serve the homePage
app.get('/', function(req, res) {
  res.sendFile(homePage);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// public route
app.use('/api/example', example);

// Allows the use of files.
app.use(express.static(__dirname + './../../'));

// Use compression
app.use(compression());

// launch our backend into a port
app.listen(port, () => {
  console.log(`App is running on port ${port} 🚀`); // eslint-disable-line no-console
});
