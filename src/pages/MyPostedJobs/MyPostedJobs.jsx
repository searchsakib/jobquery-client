import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const MyPostedJobs = () => {
  const myPostedJobs = useLoaderData();
  // const {
  //   _id,
  //   employer_email,
  //   job_title,
  //   description,
  //   category,
  //   deadline,
  //   min_price,
  //   max_price,
  // } = myPostedJobs || {};

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <Helmet>
        <title>Job Quest | My Posted Jobs</title>
      </Helmet>
      {/* card start  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:p-5 lg:p-10">
        {myPostedJobs.map((myPost) => (
          <div className="card shadow-xl mx-3 md:mx-6 2xl:mx-0 bg-green-200">
            <div className="card-body">
              <h2 className="card-title text-2xl">{myPost.job_title}</h2>
              <p>{myPost.description}</p>
              <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <p>
                  {' '}
                  <span className="font-medium text-black">Email:</span>{' '}
                  {myPost.employer_email}
                </p>
                <p>
                  <span className="font-medium text-black">Category:</span>{' '}
                  {myPost.category}
                </p>

                <div className="flex items-center gap-1 text-gray-500">
                  <p className="text-black">
                    {' '}
                    <span className="font-semibold">Deadline:</span>{' '}
                    {myPost.deadline}{' '}
                  </p>
                </div>

                <p className="mt-2 text-black sm:mt-0">
                  <span className="font-semibold">Price Range:</span> $
                  {myPost.min_price} - ${myPost.max_price}
                </p>
              </div>
              <div className="card-actions justify-evenly">
                <button className="btn bg-[#2161a2] hover:bg-[#1b4978] text-white">
                  Update
                </button>
                <button className="btn bg-[#2161a2] hover:bg-[#1b4978] text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* card ends  */}
    </div>
  );
};

export default MyPostedJobs;
