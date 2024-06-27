const express = require('express')

const port = 5000

// on créer l'application
const app = express()

// on définit la route principale (c'est la page : bcm/api/)
app.get('/api', (req, res) => {
    res.json({message : "page d'acceuil de l'api de BetterCLanMate"})
})

const playerWithNoClan = require('./get.routes/playerWithNoClan')
app.use("/get/playerWithNoClan", playerWithNoClan)

app.listen(port, () => {console.log("le serveur est en ligne !")}) // on demare le serveur sur le port et on envoie un message dans les log