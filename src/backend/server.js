require('dotenv').config();
// Libs
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const app = express();
const server = require('http').createServer(app);

const port = process.env.PORT || 3001;

// Express config
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, './../../')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const example = require('./api/routes/public');

// Apply routes
app.use('/api/public', example);

// Serve React app
// Wildcard match will handle returning index when page is refreshed
// Routing would otherwise return and error i.e. 'cannot get /someRoute'
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/index.html')),
);

// Start listening on server port
server.listen(port, (serverError) => {
  if (serverError) throw serverError;
  console.info(`App is running on ${port}`);
});
