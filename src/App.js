import GlobalStyle from './styles/global'
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import { useState } from 'react';
function App() {

  const [dados,setDados] = useState([])
  
  return (

  <>
  <GlobalStyle/> 

    <Switch>
      <Route exact path={"/"}>
          
        <Login dados={dados} setDados={setDados}/>
        
      </Route>


      <Route  path={"/register"}>
          
          <Register/>
          
      </Route>

      <Route  path={"/Home"}>
          
          <Home dados={dados}/>
          
      </Route>
    </Switch>

  </>
    
    
   
  );
}

export default App;
