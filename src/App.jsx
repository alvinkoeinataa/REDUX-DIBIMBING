import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux"; // ngambil data
import { useDispatch } from "react-redux"; // lempar + rubah data
import { onLogin, onLogout } from "./redux/actions/authAction";
import { onGetProduct } from "./redux/actions/productAction";

function App() {
  // useSelector = mengambil data
  const { isAuth, username } = useSelector((state) => state.authReducer);
  const { listData, isLoading, isError } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(onLogin(true));
  };

  const handleLogOut = () => {
    dispatch(onLogout(false));
  };

  const getProduct = () => {
    dispatch(onGetProduct());
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(listData, isError, isLoading);

  return (
    <>
      <h1>{isAuth ? "Anda login" : "anda belum login"}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Logout</button>
      {isError !== null && <h1>{isError}</h1>}

      {isLoading && !listData.length ? (
        <h1>loading</h1>
      ) : (
        listData?.map((item) => (
          <div key={item.email}>
            <h1>{item.first_name}</h1>
            <h1>{item.email}</h1>
          </div>
        ))
      )}
    </>
  );
}

export default App;
