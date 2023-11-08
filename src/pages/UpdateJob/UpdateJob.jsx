import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateJob = () => {
  const updateJob = useLoaderData();
  // console.log(updateJob);
  return (
    <div>
      <h2>This is update job {updateJob.job_title}</h2>
    </div>
  );
};

export default UpdateJob;
<h2>This is update job</h2>;
