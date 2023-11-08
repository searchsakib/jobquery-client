import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();
  const { _id, job_title, deadline, min_price, max_price, short_description } =
    job || {};

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
      <div className="rounded-xl bg-white p-4 ring ring-[#a1cdf9] sm:p-6 lg:p-8 shadow-xl ">
        <div className="flex items-start sm:gap-8">
          {/* <div
            className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
            </div>
          </div> */}

          <div>
            {/* <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
              Episode #101
            </strong> */}

            <h3 className="mt-4 text-lg font-medium sm:text-xl pb-2">
              <span className="hover:underline cursor-pointer text-2xl font-semibold">
                {' '}
                {job_title}{' '}
              </span>
            </h3>

            <p className="mt-1 text-lg">{short_description}</p>

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
      </div>
    </div>
  );
};

export default JobDetails;
