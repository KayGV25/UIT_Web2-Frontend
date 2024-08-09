import { Link, NavLink, Outlet } from "react-router-dom";
import Avatar from "./Avatar";
import { useState } from "react";
import isMobile from "../hooks/isMobile";
import MSidebar from "./MSidebar";
import useDarkMode from "../hooks/useDarkMode";
export default function NavBar() {
  const checkMobile = isMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = "/search?name=" + inputText;
  }
  return (
    <>
      <div className="flex flex-col sticky z-10">
      <nav
        className={`bg-slate-800 h-16 flex justify-between align-middle ${
          checkMobile ? "px-3" : "px-20"
        } w-screen pt-3 sticky text-gray-50 top-0`}
      >
        {checkMobile ? (
          <>
            <button
              className="mx-3"
              aria-label="Mobile menu button"
              onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </button>
          </>
        ) : (
          ""
        )}
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
              className="search text-slate-950 mr-10"
              name="search"
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="avatar flex align-center justify-center">
          {/* <DarkModeSwitch /> */}
          <Avatar />
        </div>
      </nav>
      {checkMobile ? "" : <DSecondNav />}
      </div>
      {checkMobile ? <MSidebar isVisible={isSidebarOpen} /> : ""}
      <Outlet />
    </>
  );
}
function DarkModeSwitch() {
  const [isDark, setIsDark] = useState(useDarkMode());
  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => {
            useDarkMode();
            setIsDark(!isDark);
          }}
          className="sr-only peer outline-none"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-900"></div>
      </label>
    </>
  );
}

function DSecondNav() {
  function handleSearch(data,type){
    window.location.href = `/search?${type}=${data}`;
  }

  return (
    <div className="SecondNav -z-10 text-gray-50">
      <ul className="flex gap-8 font-bold pt-2">
        <li className="group/meal relative hover:border-b-4 hover:border-b-slate-50 hover:cursor-pointer">
          MEAL
          <ul className="group/meal invisible font-normal py-2 group-hover/meal:visible dropdown">
            <li onClick={() => handleSearch("Breakfast", "tag")}>
              <p>Beakfast</p>
            </li>
            <li onClick={() => handleSearch("Lunch", "tag")}>
              <p>Lunch</p>
            </li>
            <li onClick={() => handleSearch("Dinner", "tag")}>
              <p>Dinner</p>
            </li>
            <li onClick={() => handleSearch("Dessert", "tag")}>
              <p>Dessert</p>
            </li>
          </ul>
        </li>
        <li className="group/meal relative hover:border-b-4 hover:border-b-slate-50 hover:cursor-pointer">
          INGREDIENT
          <ul className="group/meal invisible font-normal py-2 group-hover/meal:visible dropdown">
            <li onClick={() => handleSearch("Chicken", "ingredients")}>
              <p>Chicken</p>
            </li>
            <li onClick={() => handleSearch("Beef", "ingredients")}>
              <p>Beef</p>
            </li>
            <li onClick={() => handleSearch("Pork", "ingredients")}>
              <p>Pork</p>
            </li>
            <li onClick={() => handleSearch("Seafood", "ingredients")}>
              <p>Seafood</p>
            </li>
            <li onClick={() => handleSearch("Pasta", "ingredients")}>
              <p>Pasta</p>
            </li>
            <li onClick={() => handleSearch("Vegetable", "ingredients")}>
              <p>Vegetable</p>
            </li>
            {/* Goto /search:type=ingredient */}
          </ul>
        </li>
      </ul>
      <div className="flex ">
          <a className="font-bold inline-block pt-2">About us</a>
      </div>
    </div>
  );
}
