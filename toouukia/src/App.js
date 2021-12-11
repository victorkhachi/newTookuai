// import Sidenav from "./components/Sidenav";
import Dashboard from "./components/Dashboard";
import Admin from "./components/route-pages/Admin";
import Drivers from "./components/route-pages/Drivers";
import Analytics from "./components/route-pages/Analytics";
import carModel from "./components/route-pages/CarModel";
import RentalPackage from "./components/route-pages/RentalPackage";
import Login from "./components/route-pages/Login"
import Signup from "./components/route-pages/Sign"
import { Route, BrowserRouter , Switch,  Redirect  } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/Dash" exact component={Dashboard} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/admin" component={Admin} />
          <Route path="/drivers" component={Drivers} />
          <Route path="/cModel" component={carModel} />
          <Route path="/rp" component={RentalPackage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
