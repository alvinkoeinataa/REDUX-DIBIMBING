// Reducer = gudang => mengelola action

// state awal
const initState = {
  isAuth: false,
  username: "",
};

// cara connect dispatch dan action

// state yang akan berubah
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        // ambil semua data ( tidak berubah), kecuali isAuth
        ...state,
        isAuth: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
