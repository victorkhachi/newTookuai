
import { Route, BrowserRouter as Router , Switch } from "react-router-dom"
import Registration from "./pages/registration/Registration";
import MainDashboard from './components/Dashboard'
import Cars from "./pages/cars/cars";
import OverView from "./pages/Overview";
import Drivers from "./pages/Drivers";
import { useTranslation } from "react-i18next";

function App() {
   const {t}=useTranslation()
  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
               <Registration />
            </Route>
          <Route path='/dashboard' >
              <OverView />
              
          </Route>
          <Route path='/cars' >
              <Cars />
          </Route>
          <Route path='/overview' >
              <OverView />
          </Route>
          <Route path='/drivers' >
              <Drivers />
          </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
