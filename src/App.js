import { useState } from "react";
import { GiSpotedFlower } from 'react-icons/gi';
import { IconContext } from "react-icons/lib";

function App() {
const [move, setMove] = useState(0)

const NavbarLinks = 'text-xl py-4 mx-4 cursor-pointer'
const SidePages = 'absolute w-screen min-h-full duration-500 ease-in delay-150 p-20 pt-32'

  return (
    <div className="absolute h-screen w-screen overflow-y-auto overflow-x-hidden bg-white-500 bg-indigo-500">
      <nav className="w-screen flex flex-row bg-white shadow-2xl shadow-indigo-500/50 z-50 fixed">
      <IconContext.Provider value={{ className: "block text-4xl mt-3 ml-7 text-emerald-600 cursor-pointer hover:text-emerald-500" }}>
          <div onClick={() => {setMove(0)}}><GiSpotedFlower /></div>
        </IconContext.Provider>
        <ul className="flex flex-row">
          <li className={`text-amber-600 ${NavbarLinks}`} onClick={() => {setMove(1)}}>Sunshine</li>
          <li className={`text-pink-500 ${NavbarLinks}`} onClick={() => {setMove(2)}}>Lollypops</li>
          <li className={`text-sky-500 ${NavbarLinks}`} onClick={() => {setMove(3)}}>Rainbows</li>
        </ul>
      </nav>
      <div className={`${SidePages} bg-emerald-500 transition-[right] ${ move === 0 ? 'right-0 z-30' : 'right-full z-0'}`}></div>
      <div className={`${SidePages} bg-yellow-500 transition-[right] ${ move === 1 ? 'right-0 z-30' : 'right-full z-0'}`}></div>
      <div className={`${SidePages} bg-pink-500 transition-[left] ${ move === 2 ? 'left-0 z-30' : 'left-full z-0'}`}></div>
      <div className={`${SidePages} bg-sky-500 transition-[left] ${ move === 3? 'left-0 z-30' : 'left-full z-0'}`}></div>
    </div>
  );
}

export default App;
