import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComponent from './components/pages/home-component';
import './App.css';
import './bootstrap.min.css';
import NavigationComponent from './components/common/navigation-component';
import ObjectsPage from './components/pages/objects/objects';
import HelpPage from './components/pages/help/help';

export default function App() {
  return (
    <Router>
      <Switch>
        <div>
          <NavigationComponent />
          <Route exact path="/" component={HomeComponent} />
          <Route path="/objects" component={ObjectsPage} />
          <Route path="/help" component={HelpPage} />
        </div>
      </Switch>
    </Router>
  );
}
