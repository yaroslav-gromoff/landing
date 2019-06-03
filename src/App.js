import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';

const App = () => (
  <Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={MainPage} />
      </Switch>
    </main>
    <footer>
      footer
    </footer>
  </Fragment>
);

export default App;
