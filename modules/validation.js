
export const checkUser = (user) => {
    const regexUser = /^[a-zA-Z]{3,}$/;
    return regexUser.test(user);
  };
  
  export const checkEmail = (email) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
  };
  
  export const checkPwd = (pwd) => {
    const regexPwd = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/;
    return regexPwd.test(pwd);
  };
  
  export function checkPwd2(pwd, confirmPwd) {
    return pwd === confirmPwd;
  }
  