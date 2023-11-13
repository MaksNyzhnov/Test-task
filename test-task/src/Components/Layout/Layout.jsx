import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux"
import {toggleLogin} from '../../Redux/feedSlice'
import css from "./Layout.module.css";
import Container from "../Container/Container";




const Layout = () => {

  const token = useSelector(state => state.isLoggedIn)
  const dispatch = useDispatch()

  const onLogOut = () => {
 dispatch(toggleLogin())
}
  return (
    <Container>
      <header className={css.header}><h1>Feed Reader</h1>
        {token && <button type="button" className={css.logout_btn} onClick={onLogOut}>Log out</button>}
        
      </header>

      <Suspense>
        <main><Outlet /></main>
        
      </Suspense>
    </Container>
  );
};

export default Layout;
