import axios from "axios";

export const onGetProduct = () => (dispatch) => {
  dispatch({
    type: "GET_PRODUCT_LOAD",
    loadStat: true,
  });

  axios
    .get(`https://reqres.in/api/users?page=1`)
    .then((res) => {
      const data = res.data.data;
      // loading false
      dispatch({
        type: "GET_PRODUCT_SUCCEED",
        payload: data,
        loadStat: false,
      });
    })
    .catch((err) =>
      // loading false
      dispatch({
        type: "GET_PRODUCT_FAILED",
        loadStat: false,
        payload: err.message,
      })
    );
};
