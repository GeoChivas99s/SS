"useStrict";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Landing,
  Login,
  CreateAccount,
  SignatureView,
  DoneSignature,
  EndSignatureView,
  MarketView,
<<<<<<< HEAD
  UserView
=======
  UserHome
>>>>>>> e33be4ee9f4d2651db10d9a5a06e4f91d0155d94
} from "./views/index";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/Login" component={Login} />
      <Route path="/CriarConta" component={CreateAccount} />
      <Route path="/Assinatura" component={SignatureView} />
      <Route path="/CompletarAssinatura" component={DoneSignature} />
      <Route path="/TerminarAssinatura" component={EndSignatureView} />
      <Route path="/Mercado" component={MarketView} />
<<<<<<< HEAD
      <Route path="/UserView" component={UserView} />
=======
      <Route path="/User" component={UserHome} />
>>>>>>> e33be4ee9f4d2651db10d9a5a06e4f91d0155d94
    </Switch>
  </Router>
);

export default App;
