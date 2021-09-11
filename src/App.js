import Home from "./components/Home";
import Additem from "./components/AddProduct";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { auth, fs } from "./Config/Config";

function App() {
  const deleteTodo = (id) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Products").doc(id).delete();
      } else {
        console.log("user is not signed in to delete todos");
      }
    });
  };
  return (
    <FirebaseDatabaseProvider>
      <div id="page-container">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home deleteTodo={deleteTodo} />}
            />
            <Route exact path="/additem" component={Additem} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    </FirebaseDatabaseProvider>
  );
}

export default App;
