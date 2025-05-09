// Récupération des données stockées dans sessionStorage
const nameUser = sessionStorage.getItem("nameConnected");
const emailUser = sessionStorage.getItem("emailConnected");
const pwdUser = sessionStorage.getItem("passwordConnect");

console.log(emailUser);
console.log(nameUser);

if (nameUser && pwdUser) {
  const container = document.getElementById("userConnected__info_container"); // Conteneur où afficher les champs

  const champName = document.createElement("input");
  champName.type = "text";
  champName.name = "nom_user";
  champName.value = nameUser;
  champName.placeholder = "Nom d'utilisateur";

  const champEmail = document.createElement("input");
  champEmail.type = "email";
  champEmail.name = "email_user";
  champEmail.value = emailUser;
  champEmail.placeholder = "Email";

  container.appendChild(champName);
  container.appendChild(document.createElement("br"));
  container.appendChild(champEmail);
} else {
  console.log(
    "Aucune information d'utilisateur trouvée dans le sessionStorage."
  );
}
