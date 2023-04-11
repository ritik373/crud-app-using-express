const conn=require('../config/database');
const hbs=require('hbs');



exports.showDataAndForm=(req,res,next)=>{

    const sql="select * from userdetail";
    conn.query(sql,(err,result)=>{
        // console.log(result);
        res.render('views/showdata', {array:result});
    })

    

}
exports.DeleteItem=(req,res,next)=>{
    const sql=`DELETE FROM userdetail WHERE sno=${req.params.id}`;
    conn.query(sql,(err,result)=>{
        if(err)throw err;
        console.log("your item deleted");
    })
    res.redirect('/');
}

exports.showeditform=(req,res)=>{
    console.log(req.params.id)
    res.send(`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Form Table</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
      </head>
      <body>
  

    <form action="/update/${req.params.id}"method="post">
            <div class="mb-3">
         
            <label for="exampleInputEmail1" class="form-label">Name </label>
              <input type="text" class="form-control" id="name"  name="name" aria-describedby="emailHelp">
            
            </div>
    
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp">
               
              </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" name="password" id="exampleInputPassword1">
            </div>
    
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
      </body>
    </html>`)
}
// exports.EditItem=(req,res,next)=>{
   
//     const sql=`UPDATE userdetail SET sno='',name=${req.body.name},email=${req.body.email},password=${req.body.password} 
//     WHERE sno=${req.params.id}`

//     conn.query(sql,(err,result)=>{
//         if(err)throw err;
//         console.log("your item updates");

//     })
//     res.redirect('/');
// }



