import GlobalStyle from './styles/global'
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

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
    </Switch>

  </>
    
    
   
  );
}

export default App;
