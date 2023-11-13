
import { Suspense, lazy} from "react"
import { Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
const Home = lazy(() => import('../Pages/Home/Home'));
const Feed = lazy(() => import('../Pages/Feed/Feed'));
const Login = lazy(() => import('../Pages/Login/Login'));

const  App = () => {
  

 
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route element={<PublicRoute restricted />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />}/>

          </Route>
          
          <Route element={<PrivateRoute redirectTo={'/login'} />}>
            <Route path="home" element={<Home />} />
            <Route path="feed" element={<Feed />}/>
            
          </Route>
          

          <Route path="*" element={<Login />} />

        </Route>

      </Routes>
   </Suspense>
  )
    
      
  
}

export default App
