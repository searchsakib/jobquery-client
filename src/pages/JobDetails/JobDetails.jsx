import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const bidderEmail = user?.email;

  const job = useLoaderData();
  const {
    _id,
    job_title,
    deadline,
    min_price,
    max_price,
    description,
    employer_email,
  } = job || {};

  const isOwner = bidderEmail === employer_email;

  const navigate = useNavigate();

  // from that page start
  const handleBidOntheProject = async (e) => {
    e.preventDefault();

    const form = e.target;

    const price = form.price.value;
    const deadline = form.date.value;
    const bidder = form.bidderEmail.value;
    const buyer = form.buyerEmail.value;

    const newBid = {
      job_title,
      price,
      deadline,
      bidder,
      buyer,
    };
    console.log(newBid);

    // send data

    const res = await axios.post(
      'https://jobquest-server.vercel.app/my-bids',
      newBid
    );
    const resTwo = await axios.post(
      'https://jobquest-server.vercel.app/bid-reqs',
      newBid
    );
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        title: 'Success!',
        text: 'Bid Added Successfully',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
      navigate('/my-bids');
    }
    form.reset();
  };
  // from that page end

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (job) {
      setIsLoading(false);
    }
  }, [job]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center m-14 lg:m-[150px]">
        <span className="loading loading-spinner loading-lg text-[#05386B]"></span>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto my-20 px-3 md:px-6 2xl:px-0">
      <Helmet>
        <title>Job Quest | Job Details</title>
      </Helmet>
      <div className=" bg-white p-4 ring ring-[#a1cdf9] sm:p-6 lg:p-8 shadow-xl ">
        <div className="flex items-start sm:gap-8">
          <div>
            <h3 className="mt-4 text-lg font-medium sm:text-xl pb-2">
              <span className="text-2xl font-semibold"> {job_title} </span>
            </h3>

            <p className="mt-1 text-lg">{description}</p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>

                <p className="text-black text-base">
                  {' '}
                  <span className="font-semibold text-gray-500">
                    Deadline:
                  </span>{' '}
                  {deadline}{' '}
                </p>
              </div>

              <span className="hidden sm:block" aria-hidden="true">
                &middot;
              </span>

              <p className="mt-2 text-base text-black sm:mt-0">
                <span className="font-semibold text-gray-500">
                  Price Range:
                </span>{' '}
                ${min_price} - ${max_price}
              </p>
            </div>
          </div>
        </div>

        {/* form start */}
        <div className="mx-auto max-w-xl my-20 bg-green-200 p-5 md:p-10 shadow-xl">
          <h2 className="text-center text-3xl pb-8">Place Your Bid</h2>

          <form onSubmit={handleBidOntheProject} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6">
              <div className="col-span-1 md:col-span-6 lg:col-span-6">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="number"
                  className="block w-full p-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                  placeholder="Your Bidding Amount"
                  name="price"
                  required
                />
              </div>

              <div className="col-span-1 md:col-span-6 lg:col-span-6">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  className="block w-full p-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                  name="date"
                  required
                />
              </div>

              <div className="col-span-1 md:col-span-12 lg:col-span-12">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Bidder Email
                </label>
                <input
                  type="email"
                  className="block w-full p-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 cursor-not-allowed"
                  defaultValue={bidderEmail}
                  readOnly
                  name="bidderEmail"
                />
              </div>
              <div className="col-span-1 md:col-span-12 lg:col-span-12">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Buyer Email
                </label>
                <input
                  type="email"
                  className="block w-full p-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 cursor-not-allowed"
                  defaultValue={employer_email}
                  readOnly
                  name="buyerEmail"
                />
              </div>

              <div className="col-span-1 md:col-span-12 lg:col-span-12">
                <input
                  type="submit"
                  className="btn btn-block  hover:bg-blue-50 border-none hover:text-[#05386B]  bg-[#05386B] text-white rounded-none"
                  value="Bid on the project"
                  disabled={isOwner}
                />
              </div>
            </div>
          </form>
        </div>
        {/* form end */}
      </div>
    </div>
  );
};

export default JobDetails;
