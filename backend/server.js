import express from 'express';
import mongodb from 'mongodb';

const app = express()
const dbUrl = 'mongodb://127.0.0.1:27017/pessoas';


mongodb.MongoClient.connect(dbUrl, (err, db) => {
  
  if (err) return console.log(err);
  var dbo = db.db("pessoas");

  app.get('/api/pessoas', (req, res) => {
    dbo.collection('pessoas').find({}).toArray((err, pessoas) => {
      res.json({pessoas});
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Something went wrong"
      }
    });
  });

  app.listen(8080,  () => console.log('Server is running on localhost:8080'));

})