import {Landing , Login ,CreateAccount ,SignatureView } from './views/index';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

function App() {
  return (
    
  <Router>
   
   <Switch>
     <Route exact path="/" component={Landing} />
      <Route path="/Login" component={Login}/>
      <Route path ='/CriarConta' component={CreateAccount}/>
      <Route path ='/Assinatura' component={SignatureView}/>
      

   </Switch>

  </Router>
     
  );
}

export default App;
