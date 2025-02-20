import { useContext } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const {user, logout}=useContext(AuthContext)
    const handleLogout =()=>{
        logout()
    }
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"><img width="50" height="50" src="https://img.icons8.com/badges/50/goal.png" alt="goal"/>Daily Task</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end mr-3">
        <ThemeSwitcher></ThemeSwitcher>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Navbar;