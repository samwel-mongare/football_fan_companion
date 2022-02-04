import reducer, { displayingLeagues } from '../redux/Homepage/League';

describe('League reducer test', () => {
  const initialState = [];
  it('Returns an empty array with the initial state', () => {
    const state = reducer(initialState, displayingLeagues([]));
    expect(state).toEqual([]);
  });

  it('return a new state with array from API', () => {
    const state = reducer(initialState, displayingLeagues([
      {
        id: 'arg.1',
        name: 'Argentine Liga Profesional de Fútbol',
        slug: 'argentine-liga-profesional-de-futbol',
        abbr: 'Prim A',
        logos: {
          light: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1.png',
          dark: 'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1.png',
        },
      },
    ]));
    expect(state).toEqual([
      {
        id: 'arg.1',
        name: 'Argentine Liga Profesional de Fútbol',
        slug: 'argentine-liga-profesional-de-futbol',
        abbr: 'Prim A',
        logos: {
          light: 'https://a.espncdn.com/i/leaguelogos/soccer/500/1.png',
          dark: 'https://a.espncdn.com/i/leaguelogos/soccer/500-dark/1.png',
        },
      },
    ]);
  });

//   it('Returns an empty array with the initial state', () => {
//     const state = reducer(initialState, displayingLeagues([
//       {
//         name: 'english premier league',
//         logos: {
//           light: 'mockLogo',
//         },
//         id: 2,
//         abbr: 'prem',
//       },
//       {
//         name: 'italian serie a',
//         logos: {
//           light: 'mockLogo1',
//         },
//         id: 1,
//         abbr: 'serie a',
//       },
//     ]));
//     expect(state).toEqual([
//       {
//         leagueName: 'english premier league',
//         leagueLogo: 'mockLogo',
//         id: 2,
//         leagueAbbr: 'prem',
//         selected: false,
//       },
//       {
//         leagueName: 'italian serie a',
//         leagueLogo: 'mockLogo1',
//         id: 1,
//         leagueAbbr: 'serie a',
//         selected: false,
//       },
//     ]);
//   });
});
