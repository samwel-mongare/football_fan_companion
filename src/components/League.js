import { useDispatch } from 'react-redux';
import { getLeagueDetails } from '../services/FootballAPI';

const League = ((props) => {
  const data = props;
  const dispatch = useDispatch();
  const moreDetails = ((e) => {
    const leagueId = e.target.parentElement.id;
    dispatch(getLeagueDetails(leagueId));
  });

  return (
    <li className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-300 dark:border-gray-700">
      <div className="p-5 flex flex-col" id={data.idx}>
        <button type="button" onClick={moreDetails} id={data.idx} className="ml-2 -mr-1 w-20 h-10 self-end flex  flex-col">
          <svg className="ml-2 -mr-1 w-6 h-6  self-end" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-white">{data.abbr}</p>
      </div>
      <div className="max-w-20">
        <img className="object-cover max-w-10" src={data.logo2} alt="imaging" />
      </div>
    </li>
  );
});

export default League;
