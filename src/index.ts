import fs from 'fs-extra'

// se process.argv include help visualizziamo che é vero tramite console.log
// in questo caso visualizziamo 'je vais vous aider'.

const help = process.argv.includes ("--help") 
if(help){
    console.log('je vais vous aider')
}

// assegno alla variabile un indexOf del valore
// Se Index é differente del valore prima, visualizziamo la stringa di caratteri e il valore del Index+1 qui quello che indichiamo dopo --name

const prenomIndex = process.argv.indexOf("--name");
if(prenomIndex !== -1){
    console.log("Bonjour", process.argv[prenomIndex + 1])
}

interface iPersonne { 
    nom : string, 
    prenom : string, 
    age : number, 
    sexe : string
  };

const p:iPersonne = {
    nom : "Curcio", 
    prenom : "Mariangela", 
    age : 30, 
    sexe : "F"
  }

  console.log(p)

p.nom = "Laforge";
p.prenom = "Thomas";

console.log(p)

const p2= {...p};

console.log(p2)

p2.nom = "Amish";
p2.prenom = "Fatir";

console.log(p2)

import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//  /toto => affiche dans la console : "toto" et renvoie "toto"

app.get('/toto', (req, res) => {
  res.send('Toto')
  console.log('Toto')
})

// /date  => renvoie la date actuelle

app.get('/date', (req, res) => {
res.send(Date)
console.log(Date())
})

// /thomas => renvoie un objet javascript { nom: "Laforge", prenom: "Thomas" }

app.get('/thomas', (req, res) => {
  res.send(p)
  console.log(p)
  })

// /files => crée un fichier toto.txt sur le serveur

  app.get('/file', (req, res) => {
    fs.writeJsonSync('toto.txt', {})
    res.send('ajouté')
  })

// /random => renvoie un nombre aléatoire
  
  app.get ('/random', (req,res) => {
    res.send(Math.random().toString())
    console.log(Math.random().toString())
  })

  // /randomBetween => renvoie un nombre compris entre deux nombre fourni dans request

  app.get('/between/:min/:max', function (req, res) {
    const max = parseInt(req.params.max)
    const min = parseInt(req.params.min)
    res.send(Math.floor(min + Math.random()*(max - min + 1)).toString());
    console.log("Min: ", req.params.min);
    console.log("Max: ", req.params.max);
})

// /simplon/logo => renvoie le logo de simplon

app.use('/mon-premier-programme-nodejs/static/images/simplon.jpg', express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})