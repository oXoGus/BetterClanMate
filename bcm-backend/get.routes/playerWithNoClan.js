const express = require("express")
const dotenv = require("dotenv")
const mysql = require("mysql2")

const router = express.Router() // on cherche l'url sur laquelle on est pour traitée les data



router.get("/", (req, res) => {


    res.json({message : "page d'acceuil de l'api de pppp"})

})

module.exports = router; // on renvoie l'url