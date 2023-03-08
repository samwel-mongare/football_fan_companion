import '@testing-library/jest-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from '../components/Homepage';
import store from '../redux/configureStore';

const MockHomepage = (() => (
  <main className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage />
    }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </main>
));

describe('The homepage ', () => {
  it('should change the value of the search button', () => {
    render(
      <MockHomepage />,
    );
    const searchElementValue = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchElementValue, { target: { value: 'English Prem' } });
    expect(searchElementValue.value).toBe('English Prem');
  });
});
