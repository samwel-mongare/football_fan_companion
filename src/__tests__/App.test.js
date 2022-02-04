import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import App from '../App';

let appContainer = null;
beforeEach(() => {
  appContainer = document.createElement('div');
  document.body.appendChild(appContainer);
});

afterEach(() => {
  unmountComponentAtNode(appContainer);
  appContainer.remove();
  appContainer = null;
});

describe('testing the app', () => {
  it('homepage integration', () => {
    act(() => {
      render(
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>, appContainer,
      );
    });

    expect(pretty(appContainer.innerHTML)).toMatchSnapshot();
  });
});
