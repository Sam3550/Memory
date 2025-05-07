 // Récupération des données du localStorage
 const nomUtilisateur = localStorage.getItem("nomUtilisateur");
 const email = localStorage.getItem("email");

 // Vérifie que les données existent
 if (nomUtilisateur && email) {
   const container = document.getElementById("user-info-container");

   const champNom = document.createElement("input");
   champNom.type = "text";
   champNom.name = "nom_utilisateur";
   champNom.value = nomUtilisateur;
   champNom.placeholder = "Nom d'utilisateur";

   const champEmail = document.createElement("input");
   champEmail.type = "email";
   champEmail.name = "email";
   champEmail.value = email;
   champEmail.placeholder = "Email";

   container.appendChild(champNom);
   container.appendChild(document.createElement("br"));
   container.appendChild(champEmail);
 } else {
   console.log("Aucune information d'utilisateur trouvée dans le localStorage.");
 }