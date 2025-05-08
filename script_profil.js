// ⚠️ Correction : `userConnected` n'est pas un objet ayant getItem() → il faut utiliser localStorage ou sessionStorage
// Supposons ici que les données sont stockées dans le sessionStorage (meilleur pour une session utilisateur)

// Récupération des données stockées dans sessionStorage
const nomUser = sessionStorage.getItem("nameConnected");
// const emailUser = sessionStorage.getItem("emailConnected"); // Décommenté pour être utilisé

console.log(nomUser); // Affiche le nom de l'utilisateur

// Vérifie que les deux informations existent avant de les afficher dans le formulaire
if (nomUser && emailUser) {
  const container = document.getElementById("user-info-container"); // Conteneur où afficher les champs

  // Création du champ de nom utilisateur
  const champNom = document.createElement("input");
  champNom.type = "text";
  champNom.name = "nom_user";
  champNom.value = nomUser;
  champNom.placeholder = "Nom d'utilisateur";

  // Création du champ e-mail
  const champEmail = document.createElement("input");
  champEmail.type = "email";
  champEmail.name = "email_user";
  champEmail.value = emailUser;
  champEmail.placeholder = "Email";

  // Ajout des champs au conteneur
  container.appendChild(champNom);
  container.appendChild(document.createElement("br"));
  container.appendChild(champEmail);
} else {
  console.log("Aucune information d'utilisateur trouvée dans le sessionStorage.");
}