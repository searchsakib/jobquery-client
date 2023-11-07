import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();
  const { _id, job_title, deadline, min_price, max_price, short_description } =
    job || {};

  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>Job Quest | Job Details</title>
      </Helmet>
      <h2 className="text-2xl">{job_title}</h2>
      <h2>{deadline}</h2>
      <h2>{min_price}</h2>
      <h2>{max_price}</h2>
      <h2>{short_description}</h2>
    </div>
  );
};

export default JobDetails;
