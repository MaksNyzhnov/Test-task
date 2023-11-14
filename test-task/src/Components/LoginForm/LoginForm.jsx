import { useState } from "react";
import {useDispatch} from "react-redux"
import { nanoid } from "nanoid";
import css from "./LoginForm.module.css";
import {toggleLogin, setUserId} from '../../Redux/feedSlice'

const nameInputId = nanoid(5);
const passwordInputId = nanoid(5);
const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch()

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(toggleLogin())
    dispatch(setUserId(1))
    setName("");
    setPassword("");

    
  };

  return (
    <form className={css.login_form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        id={nameInputId}
        name="username"
        value={name}
        onChange={handleNameChange}
        required
      />
      <label htmlFor={passwordInputId}>Password</label>
      <input
        type="password"
        id={passwordInputId}
        name="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
