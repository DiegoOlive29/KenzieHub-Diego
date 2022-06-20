import GlobalStyle from './styles/global'
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
function App() {
  return (
    
  <>
  <GlobalStyle/> 

    <Switch>
      <Route exact path={"/"}>
          
        <Login/>
        
      </Route>


      <Route  path={"/register"}>
          
          <Register/>
          
      </Route>

      <Route  path={"/Home"}>
          
          <Home/>
          
      </Route>
    </Switch>

  </>
    
    
   
  );
}

export default App;
