const express = require("express")
const mongoose = require('mongoose');
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())
const port = 5000





const Cadastro = mongoose.model('Cadastro', {
      username: String,
     email: String,
     password: String,
     confirmPassword: String
    });



app.get("/", async(req, res) => {
    const cadastros = await Cadastro.find()
   return res.send(cadastros)
})

app.delete("/:id", async(req, res) => {
    const cadastro = await Cadastro.findByIdAndDelete(req.params.id)
   return res.send(cadastro)
} )

app.put("/:id", async(req, res) => {
    const cadastro = await Cadastro.findByIdAndUpdate(req.params.id, {
        username:req.body.String,
     email: req.body.String,
     password: req.body.String,
     confirmPassword: req.body.String
    }, {
        new: true
    })
    return res.send(cadastro)
})

app.post("/", async(req, res) => {
    
    const { username, email, password, confirmPassword } = req.body;
     
    const cadastro = new Cadastro({
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    })

    await cadastro.save();
     return res.send(cadastro);
})

app.listen(port, () =>{
    mongoose.connect('mongodb+srv://marcio:ySJ1OTb7uv73aWuT@cluster0.7wqdlhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    })
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Conectado ao MongoDB');
})
