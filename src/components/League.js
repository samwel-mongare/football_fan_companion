import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { getLeagueDetails } from '../services/FootballAPI';

const League = ((props) => {
  const data = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moreDetails = ((e) => {
    const leagueId = e.target.parentElement.id;
    dispatch(getLeagueDetails(leagueId));
    navigate('/details');
  });

  return (
    <li className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-300 dark:border-gray-700">
      <div className="p-5 flex flex-col" id={data.idx}>
        <button type="button" onClick={moreDetails} id={data.idx} className="ml-2 -mr-1 self-end flex  flex-col">
          <FaArrowRight className="text-lg leading-lg text-black opacity-75" />
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
