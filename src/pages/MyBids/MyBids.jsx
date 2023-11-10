import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../components/providers/AuthProvider';

const MyBids = () => {
  const { user } = useContext(AuthContext);
  // const myBids = useLoaderData();
  // console.log(myBids);
  const allBids = useLoaderData();
  const [myBids, setMyBids] = useState([]);
  const { _id, price, deadline, bidder, buyer, job_title } = myBids || {};

  const [completed, setCompleted] = useState('pending');
  const [displayBtn, setDisplayBtn] = useState('inline-block');

  const handleComplete = (id) => {
    setDisplayBtn('hidden');
    setCompleted('completed');
  };

  useEffect(() => {
    if (user) {
      const filteredBids = allBids?.filter((bid) => bid.bidder === user.email);
      setMyBids(filteredBids);
    }
  }, [allBids, user]);
  // console.log(allBids);

  return (
    <div className="max-w-screen-xl mx-auto my-20 min-h-[34vh]">
      <Helmet>
        <title>Job Quest | My Bids</title>
      </Helmet>

      {myBids?.length > 0 ? (
        <div className="overflow-x-auto">
          <h2 className="text-center text-3xl font-medium pb-14">My Bids</h2>
          <table className="divide-y-2 divide-gray-200 bg-white text-sm mx-auto w-8/12 min-w-fit ">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                  Job Title
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                  Buyer Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                  Deadline
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                  Status
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            {myBids.map((myBid) => (
              <tbody key={myBid._id} className="divide-y divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-base">
                    {myBid.job_title}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-base">
                    {myBid.buyer}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-base">
                    {myBid.deadline}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-base">
                    {completed}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link
                      onClick={() => handleComplete()}
                      className={`uppercase ${displayBtn} rounded bg-[#2161a2] px-4 py-2 text-sm font-medium text-white hover:bg-[#1b4978]`}
                    >
                      Complete
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 px-10 pt-20 pb-10">
          <h2 className="text-3xl text-center font-medium">No bid Yet...</h2>
          <Link
            to="/"
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 font-semibold rounded bg-[#05386B] text-white hover:outline  hover:bg-white hover:text-[#05386B] text-center mx-auto"
          >
            Back to homepage
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyBids;
