import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext";
import { PostProvider } from "./contexts/PostContext";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import { FetchProvider } from "./contexts/FetchContext";
import PinpointLayout from "./PinpointLayout";
import Home from "./pages/Home";
import Hacks from "./pages/Hacks";
import Channel from "./pages/Channel";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ProfileImage from "./pages/ProfileImage";
import PageNotFound from "./pages/PageNotFound";

const AuthenticatedRoute = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() =>
        authContext.isAuthenticated() ? (
          <PinpointLayout>{children}</PinpointLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <Route path="/accounts/signup">
      <SignUp />
    </Route>
    <AuthenticatedRoute path="/account/profile">
      <Profile />
    </AuthenticatedRoute>
    <AuthenticatedRoute path="/account/profile-image">
      <ProfileImage />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path="/feed">
      <Home />
    </AuthenticatedRoute>
    <AuthenticatedRoute path="/hacks">
      <Hacks />
    </AuthenticatedRoute>
    <AuthenticatedRoute path="/channel">
      <Channel />
    </AuthenticatedRoute>
    <Route path="*">
      <PageNotFound />
    </Route>
  </Switch>
);
function App() {
  return (
    <Router>
      <AuthProvider>
        <FetchProvider>
          <ModalProvider>
            <PostProvider>
              <div className="App">
                <AppRoutes />
              </div>
            </PostProvider>
          </ModalProvider>
        </FetchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
