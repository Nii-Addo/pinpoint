import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext";
import { PostProvider } from "./contexts/PostContext";
import { AuthProvider } from "./contexts/AuthContext";
import PinpointLayout from "./PinpointLayout";
import Home from "./pages/Home";
import Hacks from "./pages/Hacks";
import Channel from "./pages/Channel";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <Route path="/accounts/signup">
      <SignUp />
    </Route>
    <PinpointLayout>
      <Route exact path="/feed">
        <Home />
      </Route>
      <Route path="/hacks">
        <Hacks />
      </Route>
      <Route path="/channel">
        <Channel />
      </Route>
    </PinpointLayout>
  </Switch>
);
function App() {
  return (
    <Router>
      <AuthProvider>
        <ModalProvider>
          <PostProvider>
            <div className="App">
              <AppRoutes />
            </div>
          </PostProvider>
        </ModalProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
