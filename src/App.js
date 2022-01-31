import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App w-full h-screen bg-yellow-700">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage />
    }
          />
          <Route
            path="/details"
            element={
              <Details />
    }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
