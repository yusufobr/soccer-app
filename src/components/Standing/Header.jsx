import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRecentLeague, setseson } from "../../redux/api/standingSlice";
import { selectLeagues } from "../../redux/api/leagueSlice";
import getFirstWord from "../../helpers/extractFirstWord";

function Header() {
  const [theSeason, setTheSeason] = useState('2023')
  const recentLeague = useSelector(selectRecentLeague)
  const recentLeagueLogo = useSelector(selectLeagues)
  const [theLogo, setTheLogo] = useState("https://a.espncdn.com/i/leaguelogos/soccer/500/23.png")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setseson(theSeason))
    setTimeout(() => {
      findRecentLogo()

    }, 500)
  }, [theSeason, recentLeague])

  const findRecentLogo = () => {
    const theObj = recentLeagueLogo.find(obj => obj.name === recentLeague)
    setTheLogo(theObj.logos.light)
  }

  return (
    <div className="px-3 py-6 rounded-xl text-white flex gap-4 drop-shadow-2xl my-bg">
      <div className="p-2 bg-white rounded-md">
        <img
          width={80}
          src={theLogo}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">{recentLeague}</h2>
        <div className="flex gap-2">
          {/* <img
            className="rounded-lg"
            width={40}
            src="https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg"
          /> */}
          <span className="font-semibold capitalize">{getFirstWord(recentLeague)}</span>
        </div>
        <select onChange={(e) => setTheSeason(e.target.value) } className="w-20 p-1 font-semibold rounded-md bg-[#00000040] " data-te-select-init>
            <option value="2023">23/24</option>
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
