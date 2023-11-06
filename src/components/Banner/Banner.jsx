import bannerImg from '/images/banner.svg';

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between">
      <div className="w-1/3">
        <div>
          <h2
            className="text-6xl font-bold text-[#05386B] pb-5 leading-tight
        "
          >
            Finding <span className="text-green-400">Jobs,</span>{' '}
            <span className="text-green-400">Hiring</span> Talents, Effortlessly
          </h2>
        </div>
        <div className="space-y-4 text-xl">
          <p className="leading-9">
            JobQuest makes job hunting and talent acquisition effortless. Hire
            or find new jobs with the ultimate online marketplace.
          </p>
        </div>
        <div className="flex gap-4 mt-5">
          <button className="btn bg-[#05386B] text-white hover:text-[#05386B] hover:bg-green-400 hover:outline hover:outline-2">
            Hire Now
          </button>
          <button className="btn text-[#05386B] bg-white border-[#05386B] border-2 hover:bg-green-400 hover:border-2 hover:border-[#05386B]">
            Find Job
          </button>
        </div>
      </div>
      <div className="w-2/3">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
