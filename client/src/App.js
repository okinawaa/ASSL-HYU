import {Route, Switch,Redirect } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import MemberPage from "./pages/membersPage/MemberPage";
import ResearchPage from "./pages/researchPage/ResearchPage";
import PublicationPage from "./pages/publicationPage/PublicationPage";

function App() {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/members" component={MemberPage} />
          <Route exact path="/research" component={ResearchPage} />
          <Route exact path="/publication" component={PublicationPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
  );
}

export default App;
