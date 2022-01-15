import HomePage from 'pages/home.page';
import { MemoryRouter as Router, Switch } from 'react-router-dom';
// import HomePage from 'pages/home';
// // import './bootstrap.min.css';
// import './App.css';
// import Navigation from '../../src/components/navigation';

function App () {
  return (
    <Router>
      <Switch>
        <>
        <HomePage />
          {/* <Navigation />
          <Route path="/" component={HomePage} />
          {/* <Route exact path="/" component={HomePage} />
          <Route path="/objects" component={ObjectsRouter} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/help" component={HelpPage} /> */}
        </>
      </Switch>
    </Router>
  );
}

export default App;
