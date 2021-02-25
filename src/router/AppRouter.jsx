import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header/index.jsx";
import Home from "../containers/home/index.jsx";
import Login from "../containers/login/index.jsx";

class AppRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* 公用头 */}
        <Header />
        {/* 公用登录模态框 */}
        <Login />
        {/* 路由配置 */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AppRouter;