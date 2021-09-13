
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MaryamPage from './pages/maryam/maryam.component';
import AmirPage from './pages/amir/amir.component';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/enabiz.gov.tr/Account-PcrTestSonucuDogrula-barcode-8be88bb2-7f4e-4afc-a603-9fe6b0adccba' component={MaryamPage} />
        <Route path='/enabiz.gov.tr/Account-PcrTestSonucuDogrula-barcode-8be88bb2-7f4e-4afc-a603-9fe6b0adccbb' component={AmirPage} />
      </Switch>
    </div>

  );
}

export default App;
