import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setseson } from "../../redux/api/standingSlice";

function Header() {
  const [theSeason, setTheSeason] = useState('2022')
  console.log('theseason', theSeason)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setseson(theSeason))
  }, [theSeason])

  return (
    <div className="px-3 py-6 rounded-xl text-white flex gap-4 drop-shadow-2xl my-bg">
      <div className="p-2 bg-white rounded-md">
        <img
          width={80}
          src="https://a.espncdn.com/i/teamlogos/soccer/500/382.png"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Premier League</h2>
        <div className="flex gap-2">
          <img
            className="rounded-lg"
            width={40}
            src="https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg"
          />
          <span className="font-semibold">England</span>
        </div>
        <select onChange={(e) => setTheSeason(e.target.value) } className="w-20 p-1 font-semibold rounded-md bg-[#00000040] " data-te-select-init>
            <option value="2022">22/23</option>
            <option value="2021">21/22</option>
            <option value="2020">20/21</option>
            <option value="2019">19/20</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
