import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';

const MyPostedJobs = () => {
  const myPostedJobs = useLoaderData();
  const [myJobs, setMyJobs] = useState(myPostedJobs);

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

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Deleting for Sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `https://jobquest-server.vercel.app/my-posted-jobs/${_id}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          const remainingJob = myJobs.filter((job) => job._id !== _id);
          setMyJobs(remainingJob);
          Swal.fire({
            title: 'Success!',
            text: 'Product Deleted',
            icon: 'success',
            confirmButtonText: 'Okay',
          });
        }
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-20">
      <Helmet>
        <title>Job Quest | My Posted Jobs</title>
      </Helmet>
      {/* card start  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:p-5 lg:p-10">
        {myJobs.map((myPost) => (
          <div
            key={myPost._id}
            className="card shadow-xl mx-3 md:mx-6 2xl:mx-0 bg-green-200"
          >
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
                <Link to={`/update-job/${myPost._id}`}>
                  <button className="btn bg-[#2161a2] hover:bg-[#1b4978] text-white">
                    Update
                  </button>
                </Link>
                {/* to={`/delete-job/${myPost._id}`} */}
                <Link>
                  <button
                    onClick={() => handleDelete(myPost._id)}
                    className="btn bg-[#2161a2] hover:bg-[#1b4978] text-white"
                  >
                    Delete
                  </button>
                </Link>
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
