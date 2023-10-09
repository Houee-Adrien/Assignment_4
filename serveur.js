const { error } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;
const knexConfig = require('./Knexfile')[process.env.NODE_ENV || 'development'];

// Initialize Knex with the database configuration
const knex = require('knex')(knexConfig);

const dirname = __dirname;

app.use(express.static(path.join(dirname, 'view')));
app.use(express.static(path.join(dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.get('/api/delete/:number', (req, res) => {
  const number = req.params.number;
  knex("customers")
  .where({id:number})
  .del()
  .then(()=>{
    res.json({success:true});
  })
  .catch((error)=>{
  console.log(error);
  res.json({succes:false});
})
});

app.get('/api/update/:name/:number', (req, res) => {
  const number = req.params.number;
  const name = req.params.name;
  knex("customers")
  .where({id:number})
  .update({username:name})
  .then(()=>{
    res.json({success:true});
  })
  .catch((error)=>{
  console.log(error);
  res.json({succes:false});
})
});

app.get('/api/select/:name', (req, res) => {
  const name = req.params.name;
  knex("customers")
  .select()
  .where({username:name})
  .then((result)=>{
    console.log(result)
    res.json(result);
  })
  .catch((error)=>{
  console.log(error);
  res.json({succes:false});
})
});

app.get('/api/create/:name/:mail', (req, res) => {
  const email = req.params.mail;
  const username = req.params.name;
  knex("customers")
  .insert({username:username,email:email})
  .then(()=>{
    res.json({success:true});
  })
  .catch((error)=>{
  console.log(error);
  res.json({succes:false});
})
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


