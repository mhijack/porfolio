import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Nav/Navbar';
import Description from './components/Description/Description';
import Zen from './components/Zen/Zen';
import ZenTitle from './components/ZenTitle/ZenTitle';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            <div className="App">
              <Navbar />
              <Description />
              <ZenTitle />
              <Zen />
            </div>;
          }}
        />
        {/* <Route exact path="/example" component={ExampleComponent} />
        <Route
          exact
          path="/example/two-deep"
          component={ExampleTwoDeepComponent}
        />
        <Route
          exact
          path="/sitemap-link-generator"
          component={SitemapLinkGenerator}
        />
        <Route component={PageNotFound} /> */}
      </Switch>
    );
  }
}

export default App;
