import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getLeagues from '../services/FootballAPI';
import League from './League';

const Homepage = (() => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.league);

  useEffect(() => {
    dispatch(getLeagues());
  }, [dispatch]);

  return (
    <ul className="grid gap-3.5 m-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
      {state.map((data) => (
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
  );
});

export default Homepage;
