import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WebDevCard = ({ job }) => {
  const { job_title, deadline, min_price, max_price, short_description } =
    job || {};

  return (
    <div>
      <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-3 lg:p-5 flex flex-col justify-between h-full">
        <div className="">
          <div className="p-4">
            <div className="text-3xl text-gray-800 font-bold pb-3">
              {job_title}
            </div>
            <p className="text-gray-600 text-lg mt-2">{short_description}</p>
            <div className="flex flex-col xl:flex-row justify-between mt-4">
              <p className="text-slate-700 text-lg font-medium pb-2">
                <span className="font-semibold">Deadline:</span> {deadline}
              </p>
              <p className="text-slate-700 text-lg font-medium">
                <span className="font-semibold">Price Range:</span> ${min_price}{' '}
                - ${max_price}
              </p>
            </div>
            <div className="pt-5">
              <Link>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="rounded-lg btn bg-emerald-600 text-white transition hover:bg-emerald-800 w-40 text-base"
                >
                  Bid Now
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevCard;
