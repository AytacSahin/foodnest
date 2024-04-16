import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import SiteNavigation from './navigation/SiteNavigation';

function App() {
  return (
    <div className="Food Nest">
      <BrowserRouter>
        <SiteNavigation />
      </BrowserRouter >
    </div>
  );
}

export default App;
