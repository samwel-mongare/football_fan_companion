import axios from 'axios';
import { displayingLeagues } from '../redux/Homepage/League';

const getLeagues = () => async (dispatch) => {
  axios.get('https://api-football-standings.azharimm.site/leagues')
    .then((response) => {
      const footballLeagues = response.data.data;
      const mappedLeagues = Object.entries(footballLeagues).map(([id, league]) => {
        const { name, abbr, logos } = league;
        return {
          id, name, abbr, logos,
        };
      });
      dispatch(displayingLeagues(mappedLeagues));
    });
};

export default getLeagues;
