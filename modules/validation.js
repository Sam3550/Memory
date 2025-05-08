// Vérifie si le nom d'utilisateur est valide : uniquement des lettres, au moins 3 caractères
export const checkUser = (user) => {
  const regexUser = /^[a-zA-Z]{3,}$/;
  return regexUser.test(user);
};

// Vérifie si l'adresse e-mail est valide : format standard "exemple@domaine.com"
export const checkEmail = (email) => {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexEmail.test(email);
};

// Vérifie si le mot de passe est valide : 
// au moins 6 caractères, 
// au moins une lettre, un chiffre et un caractère spécial
export const checkPwd = (pwd) => {
  const regexPwd = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/;
  return regexPwd.test(pwd);
};

// Vérifie si les deux mots de passe (saisie et confirmation) sont identiques
export function checkPwd2(pwd, confirmPwd) {
  return pwd === confirmPwd;
}