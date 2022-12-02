//libs
import express from 'express';
import cors from 'cors';
import router from './api/users.route.js';
//initialize express
const app = express();
//setup middleware
app.use(cors()); //cross origin resource sharing
app.use(express.json()); //allows us to parse json
//setup routes
app.use('/api/v1/users', router);

export default app;
