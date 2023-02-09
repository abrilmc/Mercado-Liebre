const express = require('express')
const app = express()
const port = process.env.PORT 
const path = require('path')
app.listen(port, () => console.log("Servidor corriendo en el puerto {port}"))
app.use(express.static(path.resolve(__dirname,"public")))
app.get("/", (req, res) => { res.sendFile(path.join(__dirname,'/views/home.html')) })
app.get("/registro",(req, res) => { res.sendFile(path.join(__dirname,'/views/register.html')) })
app.get("/login",(req, res) => { res.sendFile(path.join(__dirname,'/views/login.html')) })
