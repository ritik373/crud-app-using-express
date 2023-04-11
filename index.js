const express=require('express');
const app=express();
const mysql=require('mysql')
const bodyparser=require('body-parser');
const path=require('path');
const hbs = require('hbs')
const controller=require('./controller/routes')

const conn=require('./config/database');

app.set('views', path.join(__dirname));
app.set('view engine', 'hbs')



app.use(bodyparser.urlencoded({extended:false}));

app.get('/',controller.showDataAndForm);

app.get('/delete/:id',controller.DeleteItem);
app.get('/update/:id',controller.showeditform);
app.post('/update/:idx',(req,res,next)=>{

    console.log(req.params.idx)
    console.log(req.body);
   
    const sql=`update userdetail set  name="${req.body.name}" , email="${req.body.email}", password="${req.body.password}" where sno="${req.params.idx}"`;

    conn.query(sql,(err,result)=>{
        if(err)throw err;
        console.log("your item updates");

    })
    res.redirect('/');
}
    
    );

app.post('/datasubmit',(req,res)=>{
    // console.log(req.body);
    const sql=`INSERT INTO userdetail(sno, name, email, password) VALUES ('','${req.body.name}','${req.body.email}','${req.body.password}')`;
    conn.query(sql,(err,result)=>{
        if(err)throw err;

        console.log("data inserted");
    })

    res.redirect('/');
})



app.listen(3000,(req,res)=>{
  
    console.log("listen port 3000.....")
})

