const path= require('path');
const express = require('express');
const app =express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// Store the values in local storage
// localStorage.setItem('username', username);
// localStorage.setItem('password', password);



// Get the values from the form
// const username = req.body.username;
// const password = req.body.password;



app.get('/',(req, res)=>{

    res.sendFile(path.join(__dirname,'/index.html'))

})

app.get('/success',(req, res)=>{
 
    res.sendFile(path.join(__dirname,'/succes.html'))

})
app.get('/fail',(req, res)=>{
    res.sendFile(path.join(__dirname,'/fail.html'))

})



app.post('/processing',(req, res)=>{
  

  
  // Check if input matches stored values
  if (req.body.username === "user" && req.body.password === "user@123") {
  res.redirect('/success');
  } else {
  res.redirect('/fail');
  }
  })

app.listen(4000);