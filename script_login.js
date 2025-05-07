import {
  checkUser,
  checkEmail,
  checkPwd,
  checkPwd2,
} from "./modules/validation.js";

// faire un for pour comparer les données de l'utilisateur qui essaye de se connecter et les données dans le local storage

const connectForm = document.getElementById("formConnect");
const connectMessage = document.getElementById("messageConnect");

connectForm.addEventListener("submit", (connect) => {
  connect.preventDefault();
  const connectMail = document.getElementById("loginConnect").value;
  const connectPwd = document.getElementById("passwordConnect").value;

  const localUser = JSON.parse(localStorage.getItem(""));

  let userExists = false;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("user")) {
      const userData = JSON.parse(localStorage.getItem(key));

      if (userData.email === connectMail && userData.password === connectPwd) {
        userExists = true;
        break;
      }
    }
  }

  if(userExists){
    connectMessage.textContent = "Connexion réussie ✅";
    connectMessage.style.color = "green";
    window.location.href="/profil.html"
  } else {
    connectMessage.textContent = "Login ou mot de passe incorrect ❌";
    connectMessage.style.color = "red";
  }

});
