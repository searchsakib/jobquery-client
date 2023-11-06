const Career = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-5 2xl:px-0">
      <section className="text-slate-800 bg-[#DFF7E5] pt-14 pb-20">
        <div className="container p-4 mx-auto my-6 space-y-1 text-center">
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">
            Find your Career
          </h2>
          <p className="text-gray-600">
            Get a jumpstart in job hunting with JobQuest! Navigate thousands of
            Job Offers and find whats suitable for you. Bid and get notified for
            your next job instantly. The Ultimate Online Marketplace experience
            awaits you
          </p>
        </div>
        <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col px-8 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-slate-800">
              Browse Jobs
            </h2>
            <p className="flex-1 mb-4 text-base leadi text-black">
              Explore available job opportunities, find your perfect match, and
              launch your dream career.
            </p>
          </div>
          <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-slate-800">
              Place your Bid
            </h2>
            <p className="flex-1 mb-4 text-base leadi text-black">
              Embrace the opportunity to showcase your talents and capabilities.
              Place your bid on a diverse range of projects and opportunities.
            </p>
          </div>
          <div className="flex flex-col px-8 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-slate-800">
              Find your Bids
            </h2>
            <p className="flex-1 mb-4 text-base leadi text-black">
              Locate and efficiently manage all your placed bids and maximize
              your chances of success with our user-friendly interface.
            </p>
          </div>
          <div className="flex flex-col px-8 py-6">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-slate-800">
              Secured Payment
            </h2>
            <p className="flex-1 mb-4 text-base leadi text-black">
              Our robust secured payment system, safeguarding your transactions
              and payments at every step.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
