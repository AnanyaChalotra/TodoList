const express = require('express');
const port = 8000;
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('index', { title : 'My First express view'});
})

app.listen(port,function(err){
    if(err)
    {
        console.log("Error in returning the server",err);
    }
    console.log('Server Running on port:',port);
});


var contactList = [
    {
        name : "Arpan",
        number : 1010101010
    },
    {
        name : "Tio",
        number : 909090909
    },
    {
        name : "mama",
        number : 2020202020
    }
]


app.get('/contacts',(req,res) => {
    return res.render('index',{ title : 'contacts' , contact_list : contactList})
})

app.post('/create-contact',(req,res)=>{
    console.log(req);
    // return res.render('index');
})