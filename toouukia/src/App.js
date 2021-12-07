import Sidenav from "./components/Sidenav";
import Dashboard from "./components/Dashboard";
import Admin from "./components/route-pages/Admin";
import Drivers from "./components/route-pages/Drivers";
import Analytics from "./components/route-pages/Analytics";
import { Route, BrowserRouter , Switch,  Redirect  } from "react-router-dom"

function App() {
  return (
    <>
        <BrowserRouter>
          <div>
            <Sidenav />
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/analytics" component={Analytics} />
              <Route path="/admin" component={Admin} />
              <Route path="/drivers" component={Drivers} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;

{/* <BrowserRouter>
        <div>
          <Sidenav />
          <Routes>
            <Route path="/" exact component={Dashboard} />
            <Route path="/analytics" component={Analytics} />
            <Navigate to="/" />
          </Routes>
        </div> */}