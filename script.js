let panier = [];
let pageCategorie = false;

function afficherProduits(liste, titre = "Tous les produits") {
  const container = document.getElementById("produits");
  container.innerHTML = `<h2>${titre}</h2>`;
  if (liste.length === 0) {
    container.innerHTML += "<p>Aucun produit trouvé.</p>";
    return;
  }
  liste.forEach(p => {
    container.innerHTML += `
      <div class="produit">
        <img src="${p.image}" alt="${p.nom}">
        <h3>${p.nom}</h3>
        <p>${p.prix} €</p>
        <button onclick="ajouterAuPanier('${p.nom}', ${p.prix})">Ajouter au panier</button>
      </div>
    `;
  });
}

function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  document.getElementById("panierBtn").innerText = `Panier (${panier.length})`;
  alert(`${nom} ajouté au panier !`);
}

function filtrerCategorie() {
  const cat = document.getElementById("categories").value;
  if (cat === "all") {
    pageCategorie = false;
    afficherProduits(produits);
  } else {
    pageCategorie = true;
    const catProduits = produits.filter(p => p.categorie === cat);
    afficherProduits(catProduits, "Catégorie : " + cat);
    const container = document.getElementById("produits");
    container.innerHTML = `<button class="retour" onclick="retourAccueil()">⬅ Retour</button>` + container.innerHTML;
  }
}

function chercherProduit() {
  const mot = document.getElementById("recherche").value.toLowerCase();

  const resultats = produits.filter(p =>
    p.nom.toLowerCase().includes(mot)
  );

  afficherProduits(resultats, "Résultats de recherche");
}
  
  

function afficherPubs() {
  const pubs = [
    "https://m.media-amazon.com/images/I/81nCzv9ML1L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71yZmFsvuEL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61d8P97zqXL._SX3000_.jpg"
  ];
  const zone = document.getElementById("pubs");
  pubs.forEach(p => {
    const img = document.createElement("img");
    img.src = p;
    zone.appendChild(img);
  });
}

function retourAccueil() {
  document.getElementById("categories").value = "all";
  pageCategorie = false;
  afficherProduits(produits);
}

window.onload = () => {
  afficherProduits(produits);
  afficherPubs();
};

function envoyerMessage(){

const input=document.getElementById("chatinput");
const box=document.getElementById("chatbox");

let question=input.value.toLowerCase();

let reponse="Je ne comprends pas la question.";

if(question.includes("livraison")){
reponse="La livraison prend 3 à 5 jours.";
}

if(question.includes("prix")){
reponse="Les prix sont affichés sur chaque produit.";
}

if(question.includes("bonjour")){
reponse="Bonjour ! Comment puis-je vous aider ?";
}

box.innerHTML+=`<p><b>Vous :</b> ${input.value}</p>`;
box.innerHTML+=`<p><b>Bot :</b> ${reponse}</p>`;

input.value="";
}

function envoyerMessage(){

const input=document.getElementById("chatinput");
const messages=document.getElementById("chatmessages");

let question=input.value.toLowerCase();
let reponse="Je ne comprends pas.";

if(question.includes("bonjour") || question.includes("salut")){
reponse="Bonjour ! Comment puis-je vous aider ?";
}

else if(question.includes("livraison")){
reponse="La livraison prend environ 3 à 5 jours.";
}

else if(question.includes("prix")){
reponse="Les prix sont affichés sous chaque produit.";
}

else if(question.includes("produit")){
reponse="Vous pouvez chercher un produit avec la barre de recherche.";
}

messages.innerHTML+=`<p><b>Vous :</b> ${input.value}</p>`;
messages.innerHTML+=`<p><b>Bot :</b> ${reponse}</p>`;

input.value="";
}

