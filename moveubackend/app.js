// app.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const postRoute = require('./routes/api/posts')
const userRoute = require('./routes/api/users')
const enquiryRoute = require('./routes/api/enquiries')

const app = express();

//Connect DB
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
// parse requests of content-type - application/json
app.use(express.json({ extended: false }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//Cross origin request handling
app.use(cors())


//api
app.use('/posts',postRoute)
app.use('/users',userRoute)
app.use('/enquires',enquiryRoute)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));