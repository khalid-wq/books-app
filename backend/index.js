const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")


const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'library',
  password:'',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use(express.json())
app.use(cors())

app.get('/books', function(req, res) {
    db.query('SELECT * FROM books', (err,data)=>{
      if (err) throw err;
  
      res.json(data);
    });
  });
  
app.post("/books", function(req,res){
    const q="INSERT INTO books (`title`,`descrip`,`price`,`cover`) values(?)";
    const values = [req.body.title,req.body.descrip,req.body.price,req.body.cover]
    db.query(q,[values],(err,data)=>{
        if(err)
        return res.json(err)
        return res.json("Books has been")
    })
})
app.delete("/books/:id", (req,res)=>{
    const bookId=req.params.id;
    const q=" DELETE FROM books WHERE id=?";
    
    db.query(q, [bookId], (err,data) =>{
      if (err)
       return res.json(err)
       return res.json("Books has been deleted successfuly");
    });
    });
    app.put("/books/:id", (req,res)=>{
      const bookId=req.params.id;
      const q= "UPDATE books set `title`=? ,`descrip`=?,`cover`=?,`price`=? WHERE id=?";
      const values=[
        req.body.title,
        req.body.descrip,
        req.body.cover,
        req.body.price
    
      ]
      
      db.query(q, [...values,bookId], (err,data) =>{
        if (err)
         return res.json(err)
         return res.json("Books has been updated");
      });
      });
    
      
    app.listen(8800, ()=>{
      console.log("Connected to Backend!1")
    })
    

app.get("/",(req,res)=>{
    res.json("backend is runinig");
})

app.listen("7070",()=>
{
    console.log("backend is running")
}
)