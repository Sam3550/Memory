// Import des fonctions de validation depuis le module externe
import {
  checkUser,
  checkEmail,
  checkPwd,
  checkPwd2,
} from "./modules/validation.js";

// Récupère les éléments HTML
const formRegister = document.getElementById("formRegister");
const btnValid = document.getElementById("btnValid");

// Écoute le clic sur le bouton de validation du formulaire d'inscription
btnValid.addEventListener("click", (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  const data = new FormData(formRegister); // Récupère les données du formulaire
  let formValid = true; // Flag pour vérifier si le formulaire est valide

  // Réinitialise les messages d'erreur
  const errorElements = document.querySelectorAll(".errorall");
  errorElements.forEach((errorElement) => {
    errorElement.innerHTML = "";
  });

  // Vérifie chaque champ avec les fonctions de validation
  if (!checkUser(data.get("username"))) {
    document.getElementById("errorUsername").innerHTML =
      "Veuillez rentrer un nom valide, 3 caractères minimum.";
    formValid = false;
  }

  if (!checkEmail(data.get("email"))) {
    document.getElementById("errorEmail").innerHTML =
      "L'e-mail doit être valide, au format nom@domaine.ext.";
    formValid = false;
  }

  if (!checkPwd(data.get("password"))) {
    document.getElementById("errorPassword").innerHTML =
      "Votre mot de passe doit contenir au moins 6 caractères. Il doit posséder un symbole, un chiffre et des lettres.";
    formValid = false;
  }

  if (!checkPwd2(data.get("password"), data.get("confirm-password"))) {
    document.getElementById("errorConfirm-password").innerHTML =
      "Votre mot de passe ne correspond pas au premier mot de passe.";
    formValid = false;
  }

  // Si le formulaire est valide, traitement de l'inscription
  if (formValid) {
    console.log("Formulaire valide !");

    // Vérifie si un utilisateur avec le même nom ou email existe déjà
    let userExists = false;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("user")) {
        const userData = JSON.parse(localStorage.getItem(key));

        if (
          userData.email === data.get("email") ||
          userData.name === data.get("username")
        ) {
          userExists = true;
          break;
        }
      }
    }

    if (userExists) {
      alert("Vous avez déjà un compte avec ces informations.");
    } else {
      // Crée un objet avec les données de l'utilisateur
      const userData = {
        name: data.get("username"),
        password: data.get("password"),
        email: data.get("email"),
      };

      // Enregistre l'utilisateur dans le localStorage
      const useNumber = localStorage.length;
      const key = "user" + (useNumber + 1); // Exemple : "user4"
      localStorage.setItem(key, JSON.stringify(userData));

      alert("Votre compte a été créé avec succès !");
      console.log(JSON.parse(localStorage.getItem(key)));
      window.location.href = "/login.html"; // Redirection vers la page de connexion
    }

    // Réinitialise le formulaire
    formRegister.reset();
  }
});

console.log(localStorage.length); // Affiche le nombre d'éléments dans le localStorage

// -------------------------------
// BARRE DE FORCE DU MOT DE PASSE
// -------------------------------

const forcePassword = document.getElementById("password");
const passwordStrengthBar = document.getElementById("passwordStrengthBar");

// À chaque modification du mot de passe, on calcule la "force"
forcePassword.addEventListener("input", () => {
  const password = forcePassword.value;
  let strength = 0;

  // Ajoute des points à la force du mot de passe selon les critères
  if (password.length >= 6) strength += 25;
  if (password.length >= 9) strength += 25;
  if (/[0-9]/.test(password)) strength += 25;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 25;

  passwordStrengthBar.value = strength; // Met à jour la barre de progression
  console.log(strength);

  // Change dynamiquement la couleur de la barre selon la force
  // ATTENTION : Ces <style> s'ajoutent à chaque frappe → risque de surcharge
  if (strength < 50) {
    const styleRed = document.createElement("style");
    styleRed.innerHTML =
      "progress::-webkit-progress-value {background-color: #e74c3c; border-radius: 5px;} progress::-moz-progress-bar {background-color: #e74c3c; border-radius: 5px;}";
    document.head.appendChild(styleRed);
    console.log("styleRed");
  } else if (strength < 75) {
    const styleOrange = document.createElement("style");
    styleOrange.innerHTML =
      "progress::-webkit-progress-value {background-color: #f39c12; border-radius: 5px;} progress::-moz-progress-bar {background-color: #f39c12; border-radius: 5px;}";
    document.head.appendChild(styleOrange);
    console.log("styleOrange");
  } else {
    const styleGreen = document.createElement("style");
    styleGreen.innerHTML =
      "progress::-webkit-progress-value {background-color: #2ecc71; border-radius: 5px;} progress::-moz-progress-bar {background-color: #2ecc71; border-radius: 5px;}";
    document.head.appendChild(styleGreen);
    console.log("styleGreen");
  }
});