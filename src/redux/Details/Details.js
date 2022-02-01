const LEAGUES_DETAILS_FETCHED = 'football_fan_companion/Details/LEAGUES_DETAILS_FETCHED';

const initialState = {
  leagueName: '',
  season: '',
  leagueStanding: [],
};

const fetchStats = (list) => {
  const myStat = list.map((stats) => (
    {
      name: stats.name,
      value: stats.value,
    }
  ));
  return myStat;
};

export const leagueDetails = (payload) => ({
  type: LEAGUES_DETAILS_FETCHED,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAGUES_DETAILS_FETCHED:
      return {
        ...state,
        leagueName: action.payload.name,
        season: action.payload.season,
        leagueStanding: action.payload.standings.map((standing) => (
          {
            id: standing.team.id,
            clubName: standing.team.displayName,
            stats: fetchStats(standing.stats.slice(0, 10)),
          }
        )),
      };

    default:
      return state;
  }
};

export default reducer;
