import bannerImg from '/images/banner.svg';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-5 2xl:px-0 flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 xl:w-1/3 text-center lg:text-left">
        <div>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#05386B] pt-5 pb-5 lg:pb-5 lg:pt-0 leading-tight md:leading-tight
        "
          >
            Finding <span className="text-green-400">Jobs,</span>{' '}
            <span className="text-green-400">Hiring</span> Talents, Effortlessly
          </h2>
        </div>
        <div className="space-y-4 md:text-xl">
          <p className="leading-9">
            JobQuest makes job hunting and talent acquisition effortless. Hire
            or find new jobs with the ultimate online marketplace.
          </p>
        </div>
        <div className="flex gap-5 mt-5 justify-center lg:justify-normal">
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn rounded bg-emerald-600 text-white transition hover:bg-emerald-800"
          >
            Hire Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="btn rounded text-emerald-600 bg-white border-emerald-600 border-2 hover:bg-emerald-700 hover:border-2 hover:border-emerald-700 hover:text-white"
          >
            Find Job
          </motion.button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-2/3">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
