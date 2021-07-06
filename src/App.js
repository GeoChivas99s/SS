import {Landing , Login ,CreateAccount} from './views/index';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

function App() {
  return (
    
  <Router>
   
   <Switch>
     <Route exact path="/" component={Landing} />
      <Route path="/Login" component={Login}/>
      <Route path ='/CriarConta' component={CreateAccount}/>

   </Switch>

  </Router>
     
  );
}

export default App;
