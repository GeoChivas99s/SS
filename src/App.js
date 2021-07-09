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
  UserHome
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
      <Route path="/User" component={UserHome} />
    </Switch>
  </Router>
);

export default App;
