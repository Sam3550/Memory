import {
  checkUser,
  checkEmail,
  checkPwd,
  checkPwd2,
} from "./modules/validation.js";

const formRegister = document.getElementById("formRegister");
const btnValid = document.getElementById("btnValid");

// Validation des evenements dans le formulaire
btnValid.addEventListener("click", (event) => {
  event.preventDefault();

  const data = new FormData(formRegister);

  let formValid = true;

  const errorElements = document.querySelectorAll(".errorall");
  errorElements.forEach((errorElement) => {
    errorElement.innerHTML = "";
  });

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
// le formulaire est valide
  if (formValid) {
    console.log("Formulaire valide !");

// Je verifie si le nouvel utilisateur existe deja 
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Loops_and_iteration#linstruction_for
    let userExists = false;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("user")) {
        const userData = JSON.parse(localStorage.getItem(key));

        if (userData.email === data.get("email") || userData.name === data.get("username")) {
          userExists = true;
          break;
        }
      }
    }

    if (userExists) {
      alert("Vous avez déjà un compte avec ces informations.");
    } else {
      // Enregistrement des informations de l'utilisateur dans le localStorage
      const userData = {
        name: data.get("username"),
        password: data.get("password"),
        email: data.get("email"),
      };
      const useNumber = localStorage.length;
      const key = "user" + (useNumber + 1);
      localStorage.setItem(key, JSON.stringify(userData));
      alert("Votre compte a été créé avec succès !");
      console.log(JSON.parse(localStorage.getItem(key)));
      window.location.href="/login.html"
    }

    formRegister.reset();
  }
});

console.log(localStorage.length);

//------------------------------------------

//------------------------------------------

const forcePassword = document.getElementById("password");
const passwordStrengthBar = document.getElementById("passwordStrengthBar");

forcePassword.addEventListener("input", () => {
  const password = forcePassword.value;
  let strength = 0;

  // Vérification de la longueur du mot de passe
  if (password.length >= 6) {
    strength += 25;
  }
  if (password.length >= 9) {
    strength += 25;
  }
  if (/[0-9]/.test(password)) {
    strength += 25;
  }
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    strength += 25;
  }

  // Mettez à jour la valeur de la barre de progression
  passwordStrengthBar.value = strength;

  // Changer la couleur en fonction de la force du mot de passe
  //Création d'une balise style en dessous du head qui ajoute les propriete css pour le changement de couleur de la bar
  console.log(strength);
  if (strength < 50) {
    const styleRed = document.createElement("style");
    styleRed.innerHTML =
      "progress::-webkit-progress-value {background-color: #e74c3c; border-radius: 5px;},progress::-moz-progress-bar {background-color: #e74c3c;border-radius: 5px;}";
    document.head.insertAdjacentElement("beforeend", styleRed);
    console.log("styleRed");
  } else if (strength < 75) {
    const styleOrange = document.createElement("style");
    styleOrange.innerHTML =
      "progress::-webkit-progress-value {background-color: #f39c12; border-radius: 5px;}progress::-moz-progress-bar {background-color: #f39c12;border-radius: 5px;}";
    document.head.insertAdjacentElement("beforeend", styleOrange);
    console.log("styleOrange");
  } else {
    const styleGreen = document.createElement("style");
    styleGreen.innerHTML =
      "progress::-webkit-progress-value {background-color: #2ecc71; border-radius: 5px;},progress::-moz-progress-bar {background-color: #2ecc71;border-radius: 5px;}";
    document.head.insertAdjacentElement("beforeend", styleGreen);
    console.log("styleGreen");
  }
});
