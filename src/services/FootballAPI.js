import axios from 'axios';
import { displayingLeagues } from '../redux/Homepage/League';
import { leagueDetails } from '../redux/Details/Details';

export const getLeagues = () => async (dispatch) => {
  axios.get('https://api-football-standings.azharimm.site/leagues')
    .then((response) => {
      const footballLeagues = response.data.data;
      const mappedLeagues = Object.entries(footballLeagues).map(([id2, league]) => {
        const {
          name, abbr, logos, id,
        } = league;
        return {
          id2, name, abbr, logos, id,
        };
      });
      dispatch(displayingLeagues(mappedLeagues));
    });
};

const BASE_URL = 'https://api-football-standings.azharimm.site/leagues';

export const getLeagueDetails = (id) => async (dispatch) => {
  axios.get(`${BASE_URL}/${id}/standings?season=2021&sort=asc`)
    .then((response) => {
      const leagueDetailss = response.data.data;
      // const mappedLeagueDetails = Object.entries(leagueDetailss.standings).map(([id, standing]) => {
      //   const { team, stats } = standing;
      //   return {
      //     id, team, stats,
      //   };
      // });
      dispatch(leagueDetails(leagueDetailss));
    });
};
