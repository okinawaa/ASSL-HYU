import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import MemberPage from "./pages/membersPage/MemberPage";
import ResearchPage from "./pages/researchPage/ResearchPage";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ScrollToTop from "./utils/ScrollToTop";
import NewsPage from "./pages/newsPage/NewsPage";
import NewsDetailPage from "./pages/newsDetailPage/NewsDetailPage";
import OngoingResearchPage from "./pages/researchPage/OngoingResearchPage";
import PublicationPage from "./pages/publicationPage/PublicationPage";

function App() {
    return (
        <div>
            <ScrollToTop/>
            <Route
                render={({location}) => {
                    return (
                        <TransitionGroup>
                            <CSSTransition timeout={700} classNames="slide" key={location.pathname} unmountOnExit={true}>
                                <Switch>
                                    <Route exact path="/" component={HomePage}/>
                                    <Route exact path="/members" component={MemberPage}/>
                                    <Route exact path="/research" component={ResearchPage}/>
                                    <Route exact path="/news" component={NewsPage}/>
                                    <Route exact path="/publication" component={PublicationPage}/>
                                    <Route exact path="/ongoingResearch" component={OngoingResearchPage}/>
                                    <Route exact path="/news/:title" component={NewsDetailPage}/>
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
