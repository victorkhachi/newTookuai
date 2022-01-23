
import { Route, BrowserRouter as Router , Switch } from "react-router-dom"
import Registration from "./pages/registration/Registration";
import MainDashboard from './components/Dashboard'
import Cars from "./pages/cars/cars";
import OverView from "./pages/Overview";
import Drivers from "./pages/Drivers";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
               <Registration />
            </Route>
          <Route path='/dashboard' >
              <MainDashboard />
          </Route>
          <Route path='/cars' >
              <Cars />
          </Route>
          <Route path='/Overview' >
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
