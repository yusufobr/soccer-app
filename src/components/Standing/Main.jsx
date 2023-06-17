import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoading,
  selectSeason,
  selectLeague,
  selectStanding,
} from "../../redux/api/standingSlice";
import { fetchStanding } from "../../redux/api/standingSlice";

function Main() {
  // const [league, setLeague] = useState("eng.1");
  const league = useSelector(selectLeague);
  const season = useSelector(selectSeason);
  const standing = useSelector(selectStanding);
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStanding({ league, season }));
  }, [league, season]);

  return (
    <div className="px-3 py-4 pb-12 rounded-xl bg-white drop-shadow-xl">
      <div className="flex flex-col gap-2 items-center">
        <span className="font-semibold">
          Standing
          {loading ? (
            <span className="text-sm text-gray-600"> loading...</span>
          ) : (
            ""
          )}
        </span>
        <div className="w-full">
          <div className="flex gap-4 text-center py-1 text-gray-500">
            <div className="w-6 px-2">#</div>
            <div className="w-full text-left">Team</div>
            <div className="grid grid-cols-3 w-48">
              <div>P</div>
              <div>Goals</div>
              <div>PTS</div>
            </div>
          </div>
          <hr />
          {standing.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-center py-1 font-semibold cursor-pointer rounded-md hover:bg-gray-200"
            >
              <div
                title={item.note?.description}
                className={`w-10 h-[28px] px-1 flex flex-col justify-center items-center ${
                  item.note ? `bg-[${item.note.color}]` : ""
                } rounded-full`}
              >
                <div>{index + 1}</div>
              </div>
              <div>
                <img
                  alt={item.team.shortDisplayName}
                  title={item.team.shortDisplayName}
                  width={45}
                  src={item.team.logos[0].href}
                />
              </div>
              <div className="w-full text-left">{item.team.name}</div>
              <div className="grid grid-cols-3 w-52">
                <div>{item.stats[0].value}</div>
                <div className="flex">
                  {item.stats[5].value}:{item.stats[4].value}
                </div>
                <div>{item.stats[3].value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
