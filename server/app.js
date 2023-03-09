const cors = require("cors")
const mysql = require("mysql")
const express = require("express")
const port = 3001
const app = express()
app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lista"
})
con.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log("Połączono")
})
app.get("/get", function(req,res){
    const sql = `SELECT * FROM zadanie`
    con.query(sql, function(err, result, fields){
        if(err){
            console.log(err)
            res.send("nieudało się dodać")
        }
        else{
            res.send(result)
        }
        
    })
})

app.get("/add/:nazwa/:termin", function(req, res){
    const nazwa = req.params.nazwa
    const termin = req.params.termin

    const sql = `INSERT INTO zadanie (Nazwa,czy_wykonane,Termin) VALUES ('${nazwa}', '0', '${termin}')`
    con.query(sql, function(err, result, fields){
        if(err){
            console.log(err)
            res.send("nieudało się dodać")
        }
        else{
            res.send(fields)
        }
        
    })
})
app.get("/del/:ID", function(req,res){
    const id = req.params.ID
    const sql = `DELETE FROM zadanie WHERE ID = ${id}'`
    con.query(sql, function(err, result, fields){
        if(err){
            console.log(err)
        }
        res.send("del")
    })
}) 
app.get("/zaz/:ID/:czywyk", function(req,res){
    const idd = req.params.ID
    const czywyk = req.params.czywyk
    if(czywyk == 0){
        const sqll = `UPDATE zadanie SET czy_wykonane = "1" WHERE ID = '${idd}'`
        con.query(sqll,function(err,result,fields){
           if(err){ 
            console.log(err)}
            res.send("zmieniono")
        })
    }
    else if(czywyk == 1){
        const sqql = `UPDATE zadanie SET czy_wykonane = "0" WHERE ID = '${idd}'`
        con.query(sqql,function(err,result,fields){
            if(err){ 
                console.log(err)}
                res.send("ok")
        })
    }
})





app.listen(port)