import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLeagues } from "../redux/api/leagueSlice";
import { fetchLeagues } from "../redux/api/leagueSlice";
import { fetchStanding } from "../redux/api/standingSlice";

function Sidebar() {
  const leagues = useSelector(selectLeagues);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeagues());
  }, []);

  return (
    <div className="px-3 py-4 pb-12 rounded-xl bg-white drop-shadow-xl">
      <div className="font-semibold mb-3">Leagues</div>
      <hr />
      <ul className="flex flex-col h-full justify-around">
        {leagues.map((league) => (
          <li onClick={() => dispatch(fetchStanding({ league : league.id, season : "2022" }))} className="rounded-sm hover:bg-gray-200" key={league.id}>
            <div className="flex gap-2 items-center">
              <img title={league.abbr} width={35} src={league.logos.light} />
              <span className="text-sm font-semibold">{league.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
