// export const onLogin = () => {
//   return {
//     type: "LOGIN",
//     payload: true,
//   };
// };

export const onLogin = (param) => {
  return {
    type: "LOGIN",
    payload: param,
  };
};

export const onLogout = (param) => {
  return {
    type: "LOGOUT",
    payload: param,
  };
};
