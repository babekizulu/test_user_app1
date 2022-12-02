//libs
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import app from './server.js';
//configure dotenv
dotenv.config();
//env variables
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;
//connect to MongoClient

MongoClient.connect(uri, {
  wtimeoutMS: 2500,
})
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    //listen on port
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  });
