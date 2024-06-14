import { Link, NavLink, Outlet } from "react-router-dom";
import Avatar from "./Avatar";
import { useState } from "react";
import { DarkThemeToggle} from "flowbite-react"
import isMobile from "../hooks/isMobile";
import MSidebar from "./MSidebar";
import useDarkMode from "../hooks/useDarkMode";

export default function NavBar() {
  const checkMobile = isMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
  }
  const [inputText, setInputText] = useState("");
  return (
    <>
      <nav
        className={`bg-slate-800 h-16 flex justify-between align-middle ${
          checkMobile ? "px-3" : "px-20"
        } w-screen pt-3 sticky text-gray-50 top-0`}
      >
        {checkMobile ? 
                <>
                    <button className="mx-3" onClick={() => {setIsSidebarOpen(!isSidebarOpen)}}>
                        <img src="./burger-menu.svg" width="20"/>
                    </button>
                </>
         : ""}
        <Link className="flex align-middle gap-3" to="/">
          <img src="/vite.svg" width="30" />
          {checkMobile ? (
            ""
          ) : (
            <div className="my-auto">
              <p className=" font-bold">ESRO</p>
            </div>
          )}
        </Link>
        <div className="search-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="search text-slate-950"
              name="search"
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="avatar flex align-center justify-center">
            <DarkModeSwitch />
            <Avatar />
        </div>
      </nav>
      {checkMobile ? <MSidebar isVisible={isSidebarOpen} /> : <DSecondNav />}
      <Outlet />
    </>
  );
}
function DarkModeSwitch(){
    const [isDark,setIsDark] = useState(useDarkMode()); 
    return(
        <>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isDark} onChange={() => {useDarkMode(); setIsDark(!isDark)}} className="sr-only peer outline-none"/>
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-900"></div>
            </label>
        </>
    )
}

function DSecondNav() {
  return (
    <div className="SecondNav sticky mb-72 text-gray-50">
      <ul className="flex gap-8 font-bold pt-2">
        <li className="group/meal relative hover:border-b-4 hover:border-b-slate-50 hover:cursor-pointer">
          MEAL
          <ul className="group/meal invisible font-normal py-2 group-hover/meal:visible dropdown">
            <li>
              <p>Beakfast</p>
            </li>
            <li>
              <p>Lunch</p>
            </li>
            <li>
              <p>Dinner</p>
            </li>
            <li>
              <p>Dessert</p>
            </li>
            {/* Goto /search:type=meal */}
            <div className="flex w-30 hover:underline underline-offset-2">
              <p className="w-fit">View All</p>
              <img
                src="/arrow_right.svg"
                className="text-slate-950 translate-x-[-0.5rem] "
                width="20"
              />
            </div>
          </ul>
        </li>
        <li className="group/meal relative hover:border-b-4 hover:border-b-slate-50 hover:cursor-pointer">
          INGREDIENT
          <ul className="group/meal invisible font-normal py-2 group-hover/meal:visible dropdown">
            <li>
              <p>Chicken</p>
            </li>
            <li>
              <p>Beef</p>
            </li>
            <li>
              <p>Pork</p>
            </li>
            <li>
              <p>Seafood</p>
            </li>
            <li>
              <p>Pasta</p>
            </li>
            <li>
              <p>Vegetable</p>
            </li>
            {/* Goto /search:type=ingredient */}
            <p className="hover:underline underline-offset-2">View All</p>
          </ul>
        </li>
        <li className="group/meal relative hover:border-b-4 hover:border-b-slate-50 hover:cursor-pointer">
          CUISINES
          <ul className="group/meal invisible font-normal py-2 group-hover/meal:visible dropdown">
            <li>
              <p>Vietnamese</p>
            </li>
            <li>
              <p>Mexican</p>
            </li>
            <li>
              <p>Thais</p>
            </li>
            <li>
              <p>French</p>
            </li>
            <li>
              <p>Chinese</p>
            </li>
            {/* Goto /search:type=cuisine */}
            <p className="hover:underline underline-offset-2">View All</p>
          </ul>
        </li>
      </ul>
      <div>
        <ul>
          <li className="font-bold">About us</li>
        </ul>
      </div>
    </div>
  );
}
