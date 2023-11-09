import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../../components/providers/AuthProvider';

const UpdateJob = () => {
  const myJobs = useLoaderData();

  const {
    _id,
    employer_email,
    job_title,
    description,
    category,
    deadline,
    min_price,
    max_price,
  } = myJobs || {};

  const { user } = useContext(AuthContext);
  const employerEmail = user?.email;

  // from that page start
  const handleUpdateJob = async (e) => {
    e.preventDefault();

    const form = e.target;

    const employer_email = form.employer_email.value;
    const job_title = form.job_title.value;
    const description = form.description.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const min_price = form.min_price.value;
    const max_price = form.max_price.value;

    const updateJob = {
      employer_email,
      job_title,
      description,
      category,
      deadline,
      min_price,
      max_price,
    };
    console.log(updateJob);

    // send data

    const res = await axios.put(
      `https://jobquest-server.vercel.app/my-posted-jobs/${_id}`,
      updateJob
    );
    console.log(res.data);
    if (res.data.modifiedCount) {
      Swal.fire({
        title: 'Success!',
        text: 'Job Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    }
    form.reset();
  };
  // from that page end

  return (
    <div className="max-w-screen-xl mx-auto my-20 px-3 md:px-6 2xl:px-0">
      <Helmet>
        <title>Job Quest | Update Job</title>
      </Helmet>
      {/*update job form start */}
      <div className="mx-auto max-w-xl my-20 bg-green-200 p-5 md:p-10 shadow-xl">
        <h2 className="text-center text-3xl pb-8 uppercase">Update Job</h2>

        <form onSubmit={handleUpdateJob} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6">
            <div className="col-span-1 md:col-span-12 lg:col-span-12">
              <label
                htmlFor="example7"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Employer Email
              </label>
              <input
                type="email"
                className="block w-full p-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 cursor-not-allowed"
                defaultValue={employerEmail}
                readOnly
                name="employer_email"
              />
            </div>
            <div className="col-span-1 md:col-span-12 lg:col-span-12">
              <label
                htmlFor="example7"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Job Title
              </label>
              <input
                type="text"
                className="block w-full p-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                defaultValue={job_title}
                placeholder="job title"
                required
                name="job_title"
              />
            </div>
            <div className="col-span-1 md:col-span-12 lg:col-span-12">
              <label
                htmlFor="example7"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                className="block w-full p-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                defaultValue={description}
                placeholder="description"
                name="description"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-6 lg:col-span-6">
              <label
                htmlFor="example8"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                defaultValue={category}
                className="p-2 w-full"
                name="category"
              >
                <option value="web development">Web Development</option>
                <option value="digital marketing">Digital Marketing</option>
                <option value="graphics design">Graphics Design</option>
              </select>
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
                name="deadline"
                defaultValue={deadline}
                required
              />
            </div>

            <div className="col-span-1 md:col-span-6 lg:col-span-6">
              <label
                htmlFor="example7"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Minimum price
              </label>
              <input
                type="number"
                className="block w-full p-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                min="1"
                name="min_price"
                placeholder="$$$"
                defaultValue={min_price}
                required
              />
            </div>
            <div className="col-span-1 md:col-span-6 lg:col-span-6">
              <label
                htmlFor="example7"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Maximum price
              </label>
              <input
                type="number"
                className="block w-full p-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                name="max_price"
                placeholder="$$$"
                min="1"
                defaultValue={max_price}
                required
              />
            </div>

            <div className="col-span-1 md:col-span-12 lg:col-span-12">
              <input
                type="submit"
                className="btn btn-block  hover:bg-blue-50 border-none hover:text-[#05386B]  bg-[#05386B] text-white rounded-none"
                value="Update Job"
              />
            </div>
          </div>
        </form>
      </div>
      {/* update job form end */}
    </div>
  );
};

export default UpdateJob;
<h2>This is update job</h2>;
