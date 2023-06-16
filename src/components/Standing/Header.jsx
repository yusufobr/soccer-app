import React from "react";

function Header() {
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
        <select className="w-20 p-1 font-semibold rounded-md bg-[#00000040] " data-te-select-init>
            <option value="1">22/23</option>
            <option value="2">21/22</option>
            <option value="3">20/21</option>
            <option value="4">19/20</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
