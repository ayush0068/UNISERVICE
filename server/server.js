import express from 'express'
import 'dotenv/config';
import cors from 'cors';
import { connect } from 'http2';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js';

connectDB()

const app = express()
app.use(cors()) //Enable CORS for all routes


// Middleware
app.use(express.json()) // Parse JSON bodies
app.use(clerkMiddleware())

//API to listen to Clerk webhooks
app.use("/api/clerk", clerkWebhooks);

app.get('/', (req, res) => res.send("API is working"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});