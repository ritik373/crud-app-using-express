  const mysql=require('mysql');


const conn=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'node'
})

conn.connect((err)=>{
   if(err)throw err;
   console.log("connection successfull");
})

module.exports=conn;
