import {Landing , Login} from './views/index';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

function App() {
  return (
    
  <Router>
   
   <Switch>
     <Route exact path="/" component={Landing} />
      
      <Route path="/Login" component={Login}/>
      

   </Switch>

  </Router>
     
  );
}

export default App;
