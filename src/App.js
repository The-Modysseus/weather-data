import './App.css';
import fetchWeatherData from './fetchWeatherData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to the Weather App!
          </h1>
        <p>
          The current weather is <fetchWeatherData />
        </p>
      </header>
    </div>
  );
}

export default App;
