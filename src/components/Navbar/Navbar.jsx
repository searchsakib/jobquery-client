import { Link, NavLink } from 'react-router-dom';
import userPic from '/images/user.png';
import logo from '/images/logo.svg';
import { AuthContext } from '../providers/AuthProvider';
import { useContext, useEffect, useState } from 'react';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (user) {
        setName(user.displayName);
        setPhoto(user.photoURL);
      }
    }, 1100);

    return () => clearTimeout(delay);
  }, [user]);

  const handleSignOut = () => {
    setName(null);
    setPhoto(null);

    logOut().then().catch();
  };

  const links = (
    <>
      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-400 underline font-bold'
              : ''
          }
        >
          Home
        </NavLink>
      </li>

      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/add-job"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-400 underline font-bold'
              : ''
          }
        >
          Add Job
        </NavLink>
      </li>

      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/my-posted-jobs"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-400 underline font-bold'
              : ''
          }
        >
          My Posted Jobs
        </NavLink>
      </li>
      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/bid-requests"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-400 underline font-bold'
              : ''
          }
        >
          Bid Requests
        </NavLink>
      </li>

      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/my-bids"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-400 underline font-bold'
              : ''
          }
        >
          My Bids
        </NavLink>
      </li>

      <li className="pb-8 md:pb-0 lg:pb-0">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-green-400 underline font-bold'
              : ''
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-row-reverse xl:flex-row px-3 md:px-5 2xl:px-0 items-center justify-between max-w-screen-xl mx-auto py-10">
      <div>
        <Link>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <img className="max-w-[70px] " src={logo} alt="" />{' '}
            </div>
            <div className="font-bold  text-2xl p-2 text-white rounded-sm flex items-center">
              JobQuest
            </div>
          </div>
        </Link>
      </div>

      {/* Dropdown Start */}
      <div className="dropdown bg-white rounded-lg">
        <label tabIndex={0} className="btn btn-ghost xl:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 50 50"
            stroke="currentColor"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white bg-[#437cb5]"
        >
          {links}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {photo ? <img src={photo} /> : <img src={userPic} />}
              </div>
            </label>
            {name && <p className="text-white"> {name} </p>}

            {user ? (
              <button
                onClick={handleSignOut}
                className="btn bg-gray-100 hover:bg-sky-200 text-black outline-none border-none"
              >
                Log Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn bg-gray-100 hover:bg-sky-200 text-black outline-none border-none">
                  Login
                </button>
              </Link>
            )}
          </div>
        </ul>
      </div>
      {/* Dropdown end */}

      <div className="hidden xl:flex">
        <div className="text-center mt-9 md:mt-0 lg:mt-0 ">
          <ul className=" md:flex lg:flex text-lg text-white">{links}</ul>
        </div>
      </div>
      <div className="hidden xl:flex xl:flex-row items-center justify-center gap-3">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {photo ? <img src={photo} /> : <img src={userPic} />}
          </div>
        </label>
        {name && <p className="text-white"> {name} </p>}

        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-gray-100 hover:bg-sky-200 text-black outline-none border-none"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-gray-100 hover:bg-sky-200 text-black outline-none border-none">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
