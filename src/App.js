import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PageLayout from './pageLayout'; 
import Unknown from './unknown';
import CityWeather from './cityWeather';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageLayout />} >
            <Route path="/cityweather" element={<CityWeather />} />
            <Route path="*" element={<Unknown />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
