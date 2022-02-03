import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Teamstats from './Teamstats';

const Details = (() => {
  const stats = useSelector((state) => state.details);
  const navigate = useNavigate();

  const goBack = (() => {
    navigate('/');
  });

  console.log(stats);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex justify-between ml-10 mr-10">
              <button type="button" onClick={goBack}>
                <FaArrowLeft className="text-lg leading-lg text-black opacity-75" />
              </button>
              <h2>
                League: &nbsp;
                <b>{stats.leagueName}</b>
              </h2>
              <span>
                Season:&nbsp;
                <b>{stats.season}</b>
              </span>
            </div>
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Team Name
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Wins
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Losses
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Draws
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Games Plyd
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Points For
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Points Agst
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Points
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Rank
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Point Diff
                  </th>
                </tr>
              </thead>
              <tbody>
                {stats.leagueStanding.map((data) => (
                  <Teamstats
                    key={data.id}
                    stats={data.stats}
                    teamName={data.clubName}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Details;
