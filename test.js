
  document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Empêcher le rechargement de la page après la soumission

    // Récupérer les données du formulaire
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    // Créer un objet avec les informations de l'utilisateur
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email
    };

    // Stocker l'objet dans le localStorage (convertir en chaîne JSON)
    localStorage.setItem("user", JSON.stringify(userData));

    // Afficher un message pour confirmer la sauvegarde
    alert("Informations utilisateur enregistrées !");
  });


// 



  // Vérifier si les données de l'utilisateur existent dans le localStorage
  const storedUser = localStorage.getItem("user");

  if (storedUser) {
    // Convertir les données JSON en objet JavaScript
    const user = JSON.parse(storedUser);

    // Afficher les informations de l'utilisateur
    console.log("Nom:", user.firstName);
    console.log("Prénom:", user.lastName);
    console.log("Email:", user.email);
  } else {
    console.log("Aucun utilisateur enregistré.");
  }

