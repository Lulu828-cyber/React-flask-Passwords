import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Register = () => {
  console.log(email, password);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { actions } = useContext(Context);

  useEffect(() => {
    actions.getCrearUsuario();
    
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>register</h1>
      <p> You need to register to access the content</p>

      <form>
        <div className="container">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </div>
      </form>
      <Link to="">
        <button onClick={() => {
    
     
          alert("Usuario creado, ya puedes iniciar sesión en la página home");
          actions.getCrearUsuario(email, password)}}>
          REGISTRARSE
        </button>
      </Link>
    </div>
  );
};

export default Register;