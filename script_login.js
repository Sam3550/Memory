// Récupère le formulaire de connexion et le message d'information
const connectForm = document.getElementById("formConnect");
const connectMessage = document.getElementById("messageConnect");

// Écoute l'envoi du formulaire
connectForm.addEventListener("submit", (connect) => {
  connect.preventDefault(); // Empêche le rechargement de la page

  // Récupère les valeurs saisies par l'utilisateur
  const connectMail = document.getElementById("loginConnect").value;
  const connectPwd = document.getElementById("passwordConnect").value;
  let connectName = null

  let userExists = false; // Indique si un utilisateur correspondant est trouvé

  // Parcours toutes les entrées du localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); // Récupère la clé
    if (key.startsWith("user")) { // Ne prend en compte que les clés qui commencent par "user"
      const userData = JSON.parse(localStorage.getItem(key)); // Récupère les données utilisateur
      connectName = userData.name;
      // Vérifie si l'email et le mot de passe correspondent
      if (userData.email === connectMail && userData.password === connectPwd) {
        userExists = true;
        break; // Arrête la boucle si un utilisateur est trouvé
      }
    }
  }

  // Vérifier que l'user existe et mettre les informations dans la session storage
  if (userExists) {
    sessionStorage.setItem("emailConnected",connectMail);
    sessionStorage.setItem("passwordConnect",connectPwd);
    sessionStorage.setItem("nameConnected",connectName);

    connectMessage.textContent = "Connexion réussie ✅";
    connectMessage.style.color = "green";
    window.location.href = "/profil.html"; // Redirige vers la page de profil
  } else {
    connectMessage.textContent = "Login ou mot de passe incorrect ❌";
    connectMessage.style.color = "red";
  }
});