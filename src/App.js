

import Landing from './views/Landing';
import Login from './views/Login';
import AboutUs from './views/AboutUs';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

function App() {
  return (
    
  <Router>
   
   <Switch>
     <Route exact path="/" component={Landing} />
      
      <Route path="/Login" component={Login}/>
      
      <Route path="/AboutUS" component={AboutUs}/>

   </Switch>

  </Router>
     
  );
}

export default App;
