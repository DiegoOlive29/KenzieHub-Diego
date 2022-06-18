import GlobalStyle from './styles/global'
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
function App() {
  return (
    
  <>
  <GlobalStyle/>
    <Switch>
      <Route>
        
        <Register/>
        
      </Route>
    </Switch>

  </>
    
    
   
  );
}

export default App;
