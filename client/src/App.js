import {Route, Switch,Redirect } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
  );
}

export default App;
