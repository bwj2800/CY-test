const express=require('express');
const bodyParser=require('body-parser');
const req = require('express/lib/request');
const app=express();
const mysql = require("mysql");
const port=process.env.PORT || 5000;

const fs = require('fs');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res) => {
    connection.query(
        "select * from company;",
        (err,rows,fields)=>{
            res.send(rows);
        }
    );
});

app.get('/api/company',(req, res)=>{
    res.send([
        {'name':'(주)브리에잇',
        'website':'--',
        'contact' :'010-0000-0000',
        'owner':'박진평'},
        {'name':'(주)브리에잇',
        'website':'--',
        'contact' :'010-0000-0000',
        'owner':'박진평'},
        {'name':'(주)브리에잇',
        'website':'--',
        'contact' :'010-0000-0000',
        'owner':'박진평'},
      ]);
});

app.listen(port, ()=> console.log(`listening on port ${port}`));