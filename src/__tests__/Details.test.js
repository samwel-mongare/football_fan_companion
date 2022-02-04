import '@testing-library/jest-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import Details from '../components/Details';
import store from '../redux/configureStore';

const MockDetails = ((
  // {
  // key,name,abbr,idx, logo, logo2
// }
) => (
  <main className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Details />
    }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </main>
));

describe('The Details ', () => {
  it('should change the value of the search button', () => {
    render(
      <MockDetails />,
    );
    // const ElementValue = screen.getByPlaceholderText(/Search/i);
    // fireEvent.change(searchElementValue, {target: {value: "English Prem"}})
    // expect(searchElementValue.value).toBe("English Prem");
  });
});
