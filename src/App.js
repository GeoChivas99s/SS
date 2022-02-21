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
  UserView,
  Developer
} from "./views";

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
      <Route path="/User" component={UserView} />
      <Route path="/Developer" component={Developer} />
    </Switch>
  </Router>
);

export default App;
