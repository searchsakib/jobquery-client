import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../components/providers/AuthProvider';

const BidRequests = () => {
  const { user } = useContext(AuthContext);
  const allBidReqs = useLoaderData();
  const [bidReqs, setBidReqs] = useState([]);
  console.log(bidReqs);
  // const { _id, price, deadline, bidder, buyer, job_title } = bidReqs || {};

  useEffect(() => {
    if (user) {
      const filteredBidReqs = allBidReqs?.filter(
        (bidReq) => bidReq.buyer === user.email
      );
      setBidReqs(filteredBidReqs);
    }
  }, [allBidReqs, user]);
  console.log(allBidReqs);

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <Helmet>
        <title>Job Quest | Bid Requests</title>
      </Helmet>

      <h2 className="text-center text-3xl font-medium pb-14">Bid Requests</h2>
      <div className="overflow-x-auto">
        <table className="divide-y-2 divide-gray-200 bg-white text-sm mx-auto w-8/12 min-w-fit ">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                Job Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                Bidder Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                Deadline
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                Price
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-lg">
                Status
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          {bidReqs?.map((bidReq) => (
            <tbody key={bidReq._id} className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-base">
                  {bidReq.job_title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-base">
                  {bidReq.bidder}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-base">
                  {bidReq.deadline}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-base">
                  {bidReq.price}$
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-base">
                  pending
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="uppercase inline-block rounded bg-[#2161a2] px-4 py-2 text-sm font-medium text-white hover:bg-[#1b4978]"
                  >
                    Accept
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="uppercase inline-block rounded bg-[#d33] px-4 py-2 text-sm font-medium text-white hover:bg-[#ac2828]"
                  >
                    Reject
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

export default BidRequests;
