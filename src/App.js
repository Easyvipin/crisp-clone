import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./sass/main.scss";

import Footer from "./component/Footer";
import Home from "./component/Home";
import Contactpage from "./component/Contact/Contactpage";
import auth from "./component/Auth/auth";
import Navigation from "./component/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/contact" exact component={Contactpage} />
          <Route path="/auth" exact component={auth} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
