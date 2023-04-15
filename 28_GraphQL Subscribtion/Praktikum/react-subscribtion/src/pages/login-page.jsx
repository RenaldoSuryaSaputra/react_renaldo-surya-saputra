import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthCookie } from '../utils/cookies'
import useAuth from "../components/hooks/useAuth";

function LoginPage() {
   const navigate = useNavigate();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const { login, logout } = useAuth()

   const handleLogin = async (event) => {
      event.preventDefault();

      // const dummyUser = { username: "username1", password: "password1" };
      // const user = JSON.parse(localStorage.getItem("user"));
      // if (user && user.username === username && user.password === password) {
      //    localStorage.setItem("isLoggedIn", true);
      //    navigate("/product");
      // } else if (username === dummyUser.username && password === dummyUser.password) {
      //    localStorage.setItem("user", JSON.stringify(dummyUser));
      //    localStorage.setItem("isLoggedIn", true);
      //    navigate("/product");
      // } else {
      //    alert("invalid")
      // }

      const loginResponse = await login({ username, password })
      if (!loginResponse) {
         alert('error')
         return
      }

      setAuthCookie(loginResponse.token)
      navigate('/')
   };

   return (
      <div>
         <div className="m-5">
            <p>username : <b>username1</b></p>
            <p>password : <b>password1</b></p>
            <form onSubmit={handleLogin}>
               <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                     Username
                  </label>
                  <input
                     type="text"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     value={username}
                     onChange={(event) => setUsername(event.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                     We'll never share your email with anyone else.
                  </div>
               </div>
               <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                     Password
                  </label>
                  <input
                     type="password"
                     className="form-control"
                     id="exampleInputPassword1"
                     value={password}
                     onChange={(event) => setPassword(event.target.value)}
                  />
               </div>
               <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                     Check me out
                  </label>
               </div>
               <button type="submit" className="btn btn-primary">
                  Submit
               </button>
            </form>
         </div>

      </div>
   );
}

export default LoginPage;