var ReactRouter = require("react-router"),
    Frame = require("./Frame"),
    Login = require("./Login/Login"),
    Logout = require("./Logout/Logout"),
    Main = require("./Main/Main"),
    Add = require("./Add/Add"),
    Dashboard = require("./Dashboard/Dashboard");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

module.exports = (
  <Router>
    <Route path="/" component={Frame}>
      <Route path="/login" component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/add" component={Add} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/logout" component={Logout} />
    </Route>
  </Router>
);