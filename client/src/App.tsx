import { MemoryRouter as Router, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <Switch>
        <>
          <CssBaseline />
          <Navigation />
          <Typography>test</Typography>
        </>
      </Switch>
    </Router>
  );
}

export default App;
