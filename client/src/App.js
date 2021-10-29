import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import MemberPage from "./pages/membersPage/MemberPage";
import ResearchPage from "./pages/researchPage/ResearchPage";
import PublicationPage from "./pages/publicationPage/PublicationPage";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PublicationDetailPage from "./pages/publicationDetailPage/PublicationDetailPage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
    return (
        <div>
            <ScrollToTop/>

            <Route
                render={({location}) => {
                    return (
                        <TransitionGroup>
                            <CSSTransition timeout={700} classNames="slide" key={location.key} unmountOnExit={true}>
                                <Switch>
                                    <Route exact path="/" component={HomePage}/>
                                    <Route exact path="/members" component={MemberPage}/>
                                    <Route exact path="/research" component={ResearchPage}/>
                                    <Route exact path="/publication" component={PublicationPage}/>
                                    <Route exact path="/:title" component={PublicationDetailPage}/>
                                    <Redirect from="*" to="/"/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )
                }}
            >
            </Route>
        </div>
    );
}

export default App;
