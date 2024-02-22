const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');

const { eventsRouter } = require('./routes');


let corsOptions = {
  credentials: true,
  origin: process.env.WEB_CLIENT_URL,
};

const app = express();

app.options('*', cors(corsOptions));

app.use(cors(corsOptions));
app.use(express.json());
// app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/events', eventsRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Hackr_harvest api listening on port ${port}`);
});
