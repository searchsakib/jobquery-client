import { Link, NavLink } from 'react-router-dom';
import userPic from '/images/user.png';

const NavBar = () => {
  const links = (
    <>
      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-orange-600 underline font-bold'
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
              ? 'text-orange-600 underline font-bold'
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
              ? 'text-orange-600 underline font-bold'
              : ''
          }
        >
          My posted jobs
        </NavLink>
      </li>
      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/my-bids"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-orange-600 underline font-bold'
              : ''
          }
        >
          My Bids
        </NavLink>
      </li>
      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/bid-requests"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-orange-600 underline font-bold'
              : ''
          }
        >
          Bid Requests
        </NavLink>
      </li>

      <li className="pb-8 md:pb-0 lg:pb-0">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-orange-600 underline font-bold'
              : ''
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row lg:flex-row  md:px-10 lg:px-10 xl:px-0 items-center justify-between max-w-[1320px] mx-auto">
      <div>
        <Link>
          <h2 className="font-bold bg-orange-500 text-2xl font-serif p-[6px] text-white rounded-lg">
            Dunno
          </h2>
        </Link>
      </div>
      <div className="text-center mt-9 md:mt-0 lg:mt-0 ">
        <ul className=" md:flex lg:flex text-lg">{links}</ul>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={userPic} />
          </div>
        </label>
        {/* {name && <p> {name} </p>} */}

        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
