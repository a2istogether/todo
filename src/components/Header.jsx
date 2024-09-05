import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import { dark, menu, search, grid, searching } from "../features/constantSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { IoListSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText,setSearchText] = useState('');
  const { isDarkMode, isMenuOpen, isGridMode, isSearching } = useSelector(
    (state) => state.constant
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  let searchID = null;

  const handleMenu = () => {
    dispatch(menu(!isMenuOpen));
  };
  const handleGrid = () => {
    dispatch(grid(!isGridMode));
  };
  const handleSearch = () => {
    dispatch(search(!isSearching));
  };
  const handletheme = () => {
    dispatch(dark(!isDarkMode));
  };
  const handleSearching = () => {
    dispatch(searching(searchText));
  };

  useEffect(()=>{
    clearTimeout(searchID)
   searchID = setTimeout(handleSearching,500);
  },[searchText])

  return (
    <nav className=" sticky top-0 z-[1000] bg-green-200 dark:bg-green-300 p-5 flex items-center justify-between ">
      <div className="flex items-center gap-5">
        {isAuthenticated && <div>
        {isMenuOpen  ? (
          <IoMdClose onClick={handleMenu} className="text-2xl cursor-pointer" />
        ) : (
          <IoMenu onClick={handleMenu} className="text-2xl cursor-pointer" />
        )}
        </div>}
        <h2 className=" text-2xl font-bold text-green-700">Tasks</h2>
      </div>
      <div>
        {isSearching && <div className=" absolute md:static z-10 top-5 left-5 shadow-lg flex gap-1 md:gap-2 items-center bg-white p-1 hover:shadow-xl  outline-none  outline-green-400 group  rounded-md">
        <IoIosSearch className="text-xl text-gray-500 cursor-pointer" />
          <input
            type="text"
            className="flex-1 focus:outline-none md:w-screen max-w-[450px] "
            placeholder="Search.."
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
          />
          <IoMdClose onClick={handleSearch} className="text-xl text-red-600 cursor-pointer" />
        </div>}
      </div>
      <div className="flex items-center gap-5">
        {isAuthenticated && <div className="flex items-center gap-5">
          {!isSearching &&<IoIosSearch className="text-2xl cursor-pointer" onClick={handleSearch} />}
        {isGridMode ? (
          <IoGridOutline
            className="text-2xl cursor-pointer"
            onClick={handleGrid}
          />
        ) : (
          <IoListSharp
            className="text-2xl cursor-pointer"
            onClick={handleGrid}
          />
        )}
          </div>}
        {!isDarkMode ? (
          <LuMoonStar
            className="text-2xl cursor-pointer"
            onClick={handletheme}
          />
        ) : (
          <IoMdSunny
            className="text-2xl cursor-pointer"
            onClick={handletheme}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
