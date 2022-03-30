import NavContainer from "./commons/NavContainer";
import FooterContainer from "./commons/FooterContainer";
import About from "./commons/About";
import Work from "./commons/Work";
import Section from "./commons/Section";
import { Switch, Route } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import "./assets/general.css";


function App() {
  return (
    <div >
      <NavContainer></NavContainer>
        <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Section />
        </Route>

        <Route path="/work">
          <Work />
          
        </Route>

        <Route path="/about">
          
          <About />
        </Route>
      </Switch>

      <FooterContainer></FooterContainer>
    </div>
  );
}

export default App;
