import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../components/providers/AuthProvider';

const BidRequests = () => {
  const { user } = useContext(AuthContext);
  const allBidReqs = useLoaderData();
  const [bidReqs, setBidReqs] = useState([]);
  console.log(bidReqs);
  // const { _id, price, deadline, bidder, buyer, job_title } = bidReqs || {};

  const [rejected, setRejected] = useState('pending');
  const [accepted, setAccepted] = useState('pending');
  const [displayBtn, setDisplayBtn] = useState('inline-block');

  const handleReject = (id) => {
    setDisplayBtn('hidden');
    setRejected('rejected');
  };
  const handleAccept = (id) => {
    setDisplayBtn('hidden');
    setAccepted('accepted');
  };

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
    <div className="max-w-screen-xl mx-auto my-20 min-h-[34vh]">
      <Helmet>
        <title>Job Quest | Bid Requests</title>
      </Helmet>

      {bidReqs?.length > 0 ? (
        <div className="overflow-x-auto">
          <h2 className="text-center text-3xl font-medium pt-8 pb-14">
            Bid Requests
          </h2>
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
                    {rejected}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link
                      onClick={() => handleAccept(bidReq._id)}
                      className={`uppercase ${displayBtn} inline-block rounded bg-[#2161a2] px-4 py-2 text-sm font-medium text-white hover:bg-[#1b4978]`}
                    >
                      Accept
                    </Link>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <Link
                      onClick={() => handleReject(bidReq._id)}
                      className={`uppercase ${displayBtn} rounded bg-[#d33] px-4 py-2 text-sm font-medium text-white hover:bg-[#ac2828]`}
                    >
                      Reject
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 px-10 pt-20 pb-10">
          <h2 className="text-3xl text-center font-medium">
            No bid requests available Yet...
          </h2>
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

export default BidRequests;
