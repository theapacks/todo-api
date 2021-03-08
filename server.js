let express = require('express');
let path = require('path');
let fs = require('fs');
let MongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const mongoUrlLocal = "mongodb://admin:password@localhost:27017";
const mongoUrlDocker = "mongodb://admin:password@mongodb";
const mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
const databaseName = "to-do-db";

app.get('/', function (req, res) {
    let response = {};
    MongoClient.connect(mongoUrlDocker, mongoClientOptions, function(err, client) {
      if(err) throw err;

      const db = client.db(databaseName);
      const collection =  db.collection("tasks");

      collection.find({}).toArray(function(err, result) {
        if(err) throw err;

        response = result;   
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET'); 
        res.send(response);  
        //Access-Control-Allow-Origin: *
        client.close();
      })
      
    });
    
});

app.post('/add',function(req, res) {
  let response = {};
  MongoClient.connect(mongoUrlLocal, mongoClientOptions, function(err, client) {
    if(err) throw err;

    const db = client.db(databaseName);
    const collection =  db.collection("tasks");
    console.log(req.body.TaskName);

    const newTask = {
      TaskName: req.body.TaskName,
      Status: req.body.Status
    };
    collection.insertOne(newTask,function(err, result) {
      if(err) throw err;
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'POST'); 
      res.send("{_id: "+ result.insertedId +"}"); 
      client.close();
    });
  });  
})

MongoClient.connect(mongoUrlDocker, mongoClientOptions, function(err, client) {
  if(err) throw err;
  console.log("Connected to MongoDB");

  client.close();
});


app.listen(3001, function () {
  console.log("app listening on port 3001!");
});
