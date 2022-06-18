import GlobalStyle from './styles/global'
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
function App() {
  return (
    
  <>
  <GlobalStyle/>
    <Switch>
      <Route>
        
        <Home/>
        
      </Route>
    </Switch>

  </>
    
    
   
  );
}

export default App;
