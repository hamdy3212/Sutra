import Home from "./components/Home";
import Additem from "./components/AddProduct";
import Navbar from "./components/Navbar";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { auth, fs } from "./Config/Config";
import React, { useState, useEffect } from "react";

function App() {
  // getting current user uid
  function GetUserUid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  }
  /* eslint-disable no-unused-vars */
  const uid = GetUserUid();
  /* eslint-disable no-unused-vars */

  // getting current user function
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().FullName);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }

  const user = GetCurrentUser();
  return (
    <FirebaseDatabaseProvider>
      <div id="page-container">
        <Router>
          {}
          <Navbar user={user} />
          <Switch>
            <Route exact path="/" component={() => <Home user={user} />} />
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
