import { useEffect, useState } from 'react';
import GraphicsDesignCard from './GraphicsDesignCard';

const GraphicsDesign = () => {
  const [jobs, setJobs] = useState([]);
  const [theJob, setTheJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const category_tab = 'graphics design';

  useEffect(() => {
    fetch('https://jobquest-server.vercel.app/jobs')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data); // Check if data is fetched correctly
        setJobs(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const findCategory = jobs.filter(
      (theJob) => theJob.category === category_tab
    );
    console.log('Filtered products:', findCategory); // Check the filtered products
    setTheJob(findCategory);
  }, [jobs, category_tab]);

  // const { job_title, deadline, min_price, max_price, description } =
  //   job || {};

  if (isLoading) {
    return (
      <div className="flex items-center justify-center m-14 lg:m-[150px]">
        <span className="loading loading-spinner loading-lg text-[#05386B]"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:p-5 lg:p-10">
        {theJob.map((job) => (
          <GraphicsDesignCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default GraphicsDesign;
