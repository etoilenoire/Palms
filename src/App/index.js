import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogIn from '../pages/LoginPage';
import Signup from '../pages/SignUpPage';
import Menu from '../components/Menu';
import ResearchPage from '../pages/ResearchPage';
import StreamPage from '../pages/StreamPage';
import LibraryPage from '../pages/LibraryPage';




function App() {
  return (
    <div>
      <BrowserRouter>

        <Switch>
          <Route path="/HomePage"   component={HomePage} />
          <Route path="/StreamPage" component={StreamPage} />
          <Route path="/ResearchPage" component={ResearchPage} />
          <Route path="/LibraryPage" component={LibraryPage} />
          <Route path="/SignUpPage" component={Signup} />
          <Route path="/LoginPage" component={LogIn} />       

*/
        </Switch>
        
      
      <Menu />

      
      </BrowserRouter>
    </div>
  );
}

export default App 