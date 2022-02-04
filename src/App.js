import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Homepage from './components/Homepage';
import store from './redux/configureStore';

function App() {
  return (
    <main className="App">
      <Provider store={store}>
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
      </Provider>
    </main>
  );
}

export default App;
