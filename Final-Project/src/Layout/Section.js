import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Pages/Home/home";
import MovieDetail from "../Pages/Movies/MovieDetail";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ChangePassword from "../Pages/Auth/ChangePass";
import Movies from "../Pages/Movies/Movies";
import EditMovies from "../Pages/Movies/EditMovies";
import CreateMovie from "../Pages/Movies/CreateMovie";

import { UserContext } from "../Context/UserContext";
import GameDetail from "../Pages/Games/GameDetail";
import Games from "../Pages/Games/Games";
import EditGames from "../Pages/Games/EditGames";
import CreateGame from "../Pages/Games/CreateGame";

const Section = () => {
  const [user] = useContext(UserContext);

  const PrivateRoute = ({ user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({ user, ...props }) =>
    user ? <Redirect to="/" /> : <Route {...props} />;

  return (
    <section>
      <Switch>
        <Route exact path="/" user={user} component={Home} />
        <Route
          exact
          path="/detail-movie/:id"
          user={user}
          component={MovieDetail}
        />
        <Route
          exact
          path="/detail-game/:id"
          user={user}
          component={GameDetail}
        />
        <LoginRoute exact path="/login" user={user} component={Login} />
        <LoginRoute exact path="/register" user={user} component={Register} />
        <PrivateRoute
          exact
          path="/change-password"
          user={user}
          component={ChangePassword}
        />
        <PrivateRoute exact path="/movies" user={user} component={Movies} />
        <PrivateRoute
          exact
          path="/movies/edit/:id"
          user={user}
          component={EditMovies}
        />
        <PrivateRoute
          exact
          path="/movies/create"
          user={user}
          component={CreateMovie}
        />
        <PrivateRoute exact path="/games" user={user} component={Games} />
        <PrivateRoute exact path="/games/edit/:id" user={user} component={EditGames} />
        <PrivateRoute exact path="/games/create" user={user} component={CreateGame} />
      </Switch>
    </section>
  );
};

export default Section;
