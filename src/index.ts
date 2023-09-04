// se process.argv include help visualizziamo che é vero tramite console.log
// in questo caso visualizziamo 'je vais vous aider.

const help = process.argv.includes ("--help") 
console.log('has help', help)
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

let p:iPersonne = {
    nom : "Curcio", 
    prenom : "Mariangela", 
    age : 30, 
    sexe : "F"
  }

p.nom = "Laforge";
p.prenom = "Thomas";

let p2= {...p};

p2.nom = "Amish";
p2.prenom = "Fatir";

console.log(p);
console.log(p2);