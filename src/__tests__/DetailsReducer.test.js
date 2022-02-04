import reducer, { leagueDetails } from '../redux/Details/Details';

describe('Details reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        leagueName: '',
        season: '',
        leagueStanding: [],
      },
    );
  });

  it('should handle a todo being added to an empty list', () => {
    const previousState = [];
    expect(reducer(previousState, leagueDetails({
      abbreviation: 'A Lge',
      name: 'Australian A-League Men',
      season: 2021,
      seasonDisplay: 'Regular Season',
      standings: [{
        stats: [
          {
            abbreviation: 'W',
            description: 'Wins',
            displayName: 'Wins',
            displayValue: '5',
            name: 'wins',
            shortDisplayName: 'W',
            type: 'wins',
            value: 5,
          },
          {
            abbreviation: 'W',
            description: 'Wins',
            displayName: 'Wins',
            displayValue: '5',
            name: 'wins',
            shortDisplayName: 'W',
            type: 'wins',
            value: 5,
          },
          {
            abbreviation: 'W',
            description: 'Wins',
            displayName: 'Wins',
            displayValue: '5',
            name: 'wins',
            shortDisplayName: 'W',
            type: 'wins',
            value: 5,
          },
          {
            abbreviation: 'W',
            description: 'Wins',
            displayName: 'Wins',
            displayValue: '5',
            name: 'wins',
            shortDisplayName: 'W',
            type: 'wins',
            value: 5,
          },
          {
            abbreviation: 'W',
            description: 'Wins',
            displayName: 'Wins',
            displayValue: '5',
            name: 'wins',
            shortDisplayName: 'W',
            type: 'wins',
            value: 5,
          },
          {
            abbreviation: 'W',
            description: 'Wins',
            displayName: 'Wins',
            displayValue: '5',
            name: 'wins',
            shortDisplayName: 'W',
            type: 'wins',
            value: 5,
          },
          {
            abbreviation: 'W',
            description: 'Wins',
            displayName: 'Wins',
            displayValue: '5',
            name: 'wins',
            shortDisplayName: 'W',
            type: 'wins',
            value: 5,
          },
          {
            abbreviation: 'W',
            description: 'Wins',
            displayName: 'Wins',
            displayValue: '5',
            name: 'wins',
            shortDisplayName: 'W',
            type: 'wins',
            value: 5,
          },
          {
            abbreviation: 'W',
            description: 'Wins',
            displayName: 'Wins',
            displayValue: '5',
            name: 'wins',
            shortDisplayName: 'W',
            type: 'wins',
            value: 5,
          },
          {
            abbreviation: 'W',
            description: 'Wins',
            displayName: 'Wins',
            displayValue: '5',
            name: 'wins',
            shortDisplayName: 'W',
            type: 'wins',
            value: 5,
          },
        ],
        team: {
          abbreviation: 'WES',
          displayName: 'Western United',
          id: '20086',
          isActive: true,
          location: 'Western United',
        },
      },
      ],

    }))).toEqual(
      {
        leagueName: 'Australian A-League Men',
        leagueStanding: [{
          clubName: 'Western United',
          id: '20086',
          stats: [{ name: 'wins', value: 5 },
            { name: 'wins', value: 5 },
            { name: 'wins', value: 5 },
            { name: 'wins', value: 5 },
            { name: 'wins', value: 5 },
            { name: 'wins', value: 5 },
            { name: 'wins', value: 5 },
            { name: 'wins', value: 5 },
            { name: 'wins', value: 5 },
            { name: 'wins', value: 5 }],
        }],
        season: 2021,
      },
    );
  });
});
