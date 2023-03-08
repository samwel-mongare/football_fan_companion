import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLeagues } from '../services/FootballAPI';
import League from './League';

const Homepage = (() => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.league);

  useEffect(async () => {
    if (Object.values(state).length > 0) {
      return state;
    }
    dispatch(getLeagues());
    return state;
  }, [dispatch]);

  const [filter, setFilter] = useState('');

  const searchText = ((e) => {
    setFilter(e.target.value);
  });
  const dataSearch = state.filter((item) => Object.keys(item).some((key) => item[key].toString()
    .toLowerCase().includes(filter.toString().toLowerCase())));

  return (
    <>
      <div className="max-w-10 flex items-center justify-center mt-5 sticky top-20 z-50">
        <input type="text" className="px-2 py-2 max-w-10 h-7 border" placeholder="Search..." onChange={searchText} value={filter} />
      </div>
      <ul className="grid gap-3.5 m-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
        {dataSearch.map((data) => (
          <League
            key={data.id}
            name={data.name}
            abbr={data.abbr}
            idx={data.id}
            logo={data.logos.dark}
            logo2={data.logos.light}
          />
        ))}
      </ul>
    </>
  );
});

export default Homepage;
