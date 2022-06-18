require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const card = require('./routes/card.js')
const reviews = require('./routes/reviews.js')
// CORS
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json());
// Card middleware
app.use('/api/v1/cards', card);
// Review middleware
app.use('/api/v1/reviews', reviews);

app.listen(process.env.PORT || 4000, console.log('we are running on port 4000'))