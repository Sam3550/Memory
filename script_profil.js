import {
    userConnected
  } from "./script_register.js";

 // Récupération des données du localStorage
 const nomUser = userConnected.getItem("nameConnected");
 console.log(nomUser);
 const emailUser = userConnected.getItem("emailConnected");

 // Vérifie que les données existent
 if (nomUser && emailUser) {
   const container = document.getElementById("user-info-container");

   const champNom = document.createElement("input");
   champNom.type = "text";
   champNom.name = "nom_user";
   champNom.value = nomUser;
   champNom.placeholder = "Nom d'utilisateur";

   const champEmail = document.createElement("input");
   champEmail.type = "email";
   champEmail.name = "email_user";
   champEmail.value = emailUser;
   champEmail.placeholder = "Email";

   container.appendChild(champNom);
   container.appendChild(document.createElement("br"));
   container.appendChild(champEmail);
 } else {
   console.log("Aucune information d'utilisateur trouvée dans le localStorage.");
 }

