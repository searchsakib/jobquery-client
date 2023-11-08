import { Helmet } from 'react-helmet-async';

const AddJob = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-20 px-3 md:px-6 2xl:px-0">
      <Helmet>
        <title>Job Quest | Add Job</title>
      </Helmet>

      {/* form start */}
      <div className="mx-auto max-w-xl my-20 bg-green-200 p-5 md:p-10 shadow-xl">
        <h2 className="text-center text-3xl pb-8 uppercase">Add Job</h2>

        {/* onSubmit={handleBidOntheProject}  */}
        <form className="space-y-5">
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
                className="block w-full p-2 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                // defaultValue={job_owner_email}
                readOnly
                name="job_owner_email"
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
                // defaultValue={job_owner_email}
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
                placeholder="description"
                name="short_description"
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
              <select className="p-2 w-full" name="brand">
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
                required
              />
            </div>

            <div className="col-span-1 md:col-span-12 lg:col-span-12">
              <input
                type="submit"
                className="btn btn-block  hover:bg-blue-50 border-none hover:text-[#05386B]  bg-[#05386B] text-white rounded-none"
                value="Add Job"
                // disabled={isOwner}
              />
            </div>
          </div>
        </form>
      </div>
      {/* form end */}
    </div>
  );
};

export default AddJob;
