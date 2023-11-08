import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../components/providers/AuthProvider';

const MyBids = () => {
  const { user } = useContext(AuthContext);
  // const myBids = useLoaderData();
  // console.log(myBids);
  const allBids = useLoaderData();
  const [myBids, setMyBids] = useState([]);
  const { _id, price, deadline, bidder, buyer, job_title } = myBids || {};

  useEffect(() => {
    if (user) {
      const filteredBids = allBids.filter((bid) => bid.bidder === user.email);
      setMyBids(filteredBids);
    }
  }, [allBids, user]);

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <Helmet>
        <title>Job Quest | My Bids</title>
      </Helmet>

      <h2 className="text-center text-3xl font-medium pb-14">My Bids</h2>
      <div className="overflow-x-auto">
        <table className="divide-y-2 divide-gray-200 bg-white text-sm mx-auto w-8/12 min-w-fit ">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                Job Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                Email
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
                  pending
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="uppercase inline-block rounded bg-[#2161a2] px-4 py-2 text-sm font-medium text-white hover:bg-[#1b4978]"
                  >
                    Complete
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyBids;
