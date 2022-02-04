const LEAGUES_FETCHED = 'football_fan_companion/Homepage/LEAGUES_FETCHED';

const initialState = [];

export const displayingLeagues = (payload) => ({
  type: LEAGUES_FETCHED,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAGUES_FETCHED:
      return [...action.payload];

    default:
      return state;
  }
};

export default reducer;
