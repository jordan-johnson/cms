import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home/home';
import './App.css';
import './bootstrap.min.css';
import NavigationComponent from './components/common/navigation-component';
import ObjectsRouter from './components/pages/objects/objects-router';
import HelpPage from './components/pages/help/help';
import SettingsPage from './components/settings/settings';

export default function App() {
  return (
    <Router>
      <Switch>
        <>
          <NavigationComponent />
          <Route exact path="/" component={HomePage} />
          <Route path="/objects" component={ObjectsRouter} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/help" component={HelpPage} />
        </>
      </Switch>
    </Router>
  );
}
